//front-end
import {
  Currency,
  OrderHeader,
  Order,
  Button,
  Icon,
  Tab,
  TabList,
  TabItem,
  TabContent,
  TabPane
} from '../components/'
//back-end
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store, provider } from '../backend_services/firebase'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectItems,
  selectTotal
} from '../backend_services/slices/basketSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key)

function Orders () {
  const [user] = useAuthState(creds)

  const products = useSelector(selectItems)
  const total = useSelector(selectTotal)

  console.log(products)

  const [openTab, setOpenTab] = useState(1)

  /*const createCheckoutSession = async () => {
    const stripe = await stripePromise

    // call back-end to create a checkout session...
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      products,
      email: user?.email
    })
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    })
    if (result.error) alert(result.error.message)
  }
*/
  return (
    <div
      className='
    h-screen
    overflow-hidden
    bg-gradient-to-t
    from-gray-900
    to-purple-500
    pb-48
    '
    >
      <OrderHeader />
      <main className='homeMain p-5'>
        <Tab>
          <TabList color='blue' className='justify-evenly max-w-full mx-auto'>
            <TabItem
              onClick={e => {
                e.preventDefault()
                setOpenTab(1)
              }}
              ripple='light'
              active={openTab === 1 ? true : false}
              href='tabItem'
            >
              <Icon name='shopping_cart' />
              Orders
            </TabItem>
            <TabItem
              onClick={e => {
                e.preventDefault()
                setOpenTab(2)
              }}
              ripple='light'
              active={openTab === 2 ? true : false}
              href='tabItem'
            >
              <Icon name='payment' />
              Payment
            </TabItem>
          </TabList>
          <TabContent>
            <TabPane active={openTab == 1 ? true : false}>
              {/**left */}
              <div className='flex-grow m-5 shadow-sm'>
                <div className='flex flex-col p-5 space-y-10 bg-gray-800'>
                  <h1
                    className='
                    text-2xl
                    border-b-2
                border-purple-100 
                    font-google-sans 
                    font-normal 
                text-purple-100 
                    top-0 
                    left-0
                    px-7
                    py-4
'
                  >
                    {products.length === 0
                      ? 'You have no orders. Might wanna change that.'
                      : 'Your orders: '}
                  </h1>
                  {products.map((item, i) => (
                    <Order
                      key={i}
                      id={item.id}
                      item_jpg={item.item_jpg}
                      name={item.name}
                      price={item.price}
                      category={item.category}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
              {/**right */}
              <div
                className='
flex 
flex-col 
bg-gray-800 
rounded-lg 
p-10 
space-y-4
shadow-xl'
              >
                {products.length > 0 && (
                  <>
                    <h2
                      className='
    text-xl 
    font-google-sans 
    font-normal
    text-purple-300'
                    >
                      Sub-total: ({products.length} products):
                    </h2>
                    <span className='font-semibold'>
                      <h2 className='text-2xl font-google-sans text-purple-200'>
                        <Currency quantity={total} currency='USD' />
                      </h2>
                    </span>
                    <Button
                      onClick={e => setOpenTab(2)}
                      disabled={!products}
                      role='link'
                      color='deepPurple'
                      size='regular'
                      buttonType='filled'
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple='light'
                      className='capitalize space-x-4'
                    >
                      <Icon name='payment' />
                      <h2 className='text-xl font-google-sans font-normal'>
                        Pay now
                      </h2>
                    </Button>
                  </>
                )}
              </div>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at. I think that’s a responsibility that I
                have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </TabPane>
          </TabContent>
        </Tab>
      </main>
    </div>
  )
}

export default Orders
