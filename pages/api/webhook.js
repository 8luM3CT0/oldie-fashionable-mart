//front-end
import {creds, store} from '../../backend_services/firebase'
import firebase from 'firebase'
//back-end
import {buffer} from 'micro'
import * as admin from 'firebase-admin'
import * as service from '../../backend_services/permissions.json'

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(service)
})
: admin.app()

const stripe = require('stripe')(process.env.stripe_signing_secret)

const endpointSecret = process.env.stripe_signing_secret

const fulfillOrder = async session => {
    console.log('Fulfill order', session)


   store.collection('userOrders')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
        amount: session.amount_total / 100,
        amountShipping: session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.image),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log(`Success! Your order ${session.id} has been added to the database`)
    })
}

export default async(req, res) => {
    if(req.method == 'POST'){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers['stripe-signature']

        let event

        try  {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch(err){
            console.log('ERROR: ', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        if(event.type === 'checkout.session.completed'){
            const session = event.data.object

            return fulfillOrder(session)
            .then(() => res.status(200))
            .catch(err => res.status(400).send(`Webhook error: ${err.message}`))
        }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}