//call by .../api/checkout-session
const stripe = require('stripe')(process.env.stripe_secret_key)

export default async(req, res) => {
    //pull variables from main page
    const {products, email} = req.body

    console.log(products)
    console.log('The email ====>', email)

    const transformedItem = products.map(item => ({
        //implicit return
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.name,
                images: [item.item_jpg]
            }
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: transformedItem,
        shipping_rates: ['shr_1KgKORG9oXPtBckMjSxRmbRY'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        mode: 'payment',
        success_url: `${process.env.test_host}/success`,
        cancel_url: `${process.env.test_host}/orders`,
        metadata: {
            email,
            images: JSON.stringify(products.map(item => item.item_jpg))
        }
    })
    
    res.status(200).json({id: session.id})
}
