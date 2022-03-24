//front-end
import {
  Currency,
  CheckoutHeader,
  Tab,
  TabList,
  TabPane,
  TabContent,
  TabItem,
  Button,
  Icon
} from '../components/'
//back-end
import { creds, store } from '../backend_services/firebase'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectItems,
  selectTotal
} from '../backend_services/slices/basketSlice'
import { useRouter } from 'next/router'

function Checkout () {
  const [openTab, setOpenTab] = useState(2)
  const router = useRouter()

  const total = useSelector(selectTotal)
  const products = useSelector(selectItems)

  return (
    <div
      className='
    h-screen 
    overflow-hidden 
    bg-gradient-to-t 
    from-gray-900 
    to-lime-800'
    >
      <CheckoutHeader />
      <main className='checkoutMain'>
        <Tab>
          <TabList color='green'>
            <div
              className='
                    justify-center
                    mx-auto 
                    max-w-full 
                    flex
                    items-center'
            >
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                ripple='light'
                active={openTab === 1 ? true : false}
                href='tabItem'
              >
                <Icon name='attach_money' size='lg' />
                Cash
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
                <Icon name='local_hospital' size='lg' />
                Decision
              </TabItem>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                ripple='light'
                active={openTab === 3 ? true : false}
                href='tabItem'
              >
                <Icon name='credit_card' size='lg' />
                Card
              </TabItem>
            </div>
          </TabList>
          <TabContent>
            <TabPane active={openTab === 1 ? true : false}>
              <div className='h-full grid space-y-4'>
                <Button
                  color='blue'
                  onClick={e => setOpenTab(2)}
                  buttonType='link'
                  iconOnly={true}
                  rounded={false}
                  block={false}
                >
                  <Icon name='arrow_back_ios' />
                </Button>
                {products.length && (
                  <span
                    className='
                    text-xl 
                  border
                  bg-gray-800
                  border-gray-200
                  rounded-lg
                  font-google-sans 
                  font-normal 
                  text-purple-300 
                  p-4
                  grid
                  max-w-lg
                  '
                  >
                    Total of
                    <h2 className='text-2xl text-blue-300 font-bold'>
                      {products.length} products
                    </h2>
                    with a price of
                    <h2 className='text-2xl font-bold'>
                      <Currency quantity={total} currency='USD' />
                    </h2>
                  </span>
                )}
              </div>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <div className='grid place-items-center space-y-4'>
                <p
                  className='
              text-2xl 
              text-blue-300
              font-google-sans 
              font-semibold
              max-w-sm 
              mx-auto'
                >
                  Ok, here's the big decision. Here's where you make what could
                  either be the biggest mistake of your life, or the best
                  decision ever. So here goes: Cash or Credit ?
                </p>
                <div
                  className='
              flex 
              items-center 
              space-x-3 
              mx-auto 
              max-w-full
              justify-center
              '
                >
                  <Button
                    color='green'
                    onClick={e => setOpenTab(1)}
                    buttonType='filled'
                    iconOnly={true}
                    rounded={false}
                    block={false}
                  >
                    <Icon name='attach_money' />
                  </Button>
                  <Button
                    color='green'
                    onClick={e => setOpenTab(3)}
                    buttonType='filled'
                    iconOnly={true}
                    rounded={false}
                    block={false}
                  >
                    <Icon name='credit_card' />
                  </Button>
                </div>
              </div>
            </TabPane>
            <TabPane active={openTab === 3 ? true : false}>
              <div className='h-full grid space-y-4'>
                <Button
                  color='blue'
                  onClick={e => setOpenTab(2)}
                  buttonType='link'
                  iconOnly={true}
                  rounded={false}
                  block={false}
                >
                  <Icon name='arrow_back_ios' />
                </Button>
                {products.length && (
                  <span
                    className='
                    text-xl 
                  border
                  bg-gray-800
                  border-gray-200
                  rounded-lg
                  font-google-sans 
                  font-normal 
                  text-purple-300 
                  p-4
                  grid
                  max-w-lg'
                  >
                    Total of
                    <h2 className='text-2xl text-blue-300 font-bold'>
                      {products.length} products
                    </h2>
                    with a price of
                    <h2 className='text-2xl font-bold'>
                      <Currency quantity={total} currency='USD' />
                    </h2>
                  </span>
                )}
              </div>
            </TabPane>
          </TabContent>
        </Tab>
      </main>
    </div>
  )
}

export default Checkout
