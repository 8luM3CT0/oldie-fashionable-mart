/*
//call by .../api/checkout-session
const stripe = require('stripe')(process.env.stripe_secret_key)

export default async(req, res) => {
    //pull variables from main page
    const {items, email} = req.body

    console.log(items)
    console.log('The email ====>', email)

    const transformedItem = items.map(item => ({
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

    
}
*/

console.log('a dummy text')