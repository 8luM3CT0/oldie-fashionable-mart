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

    
}
