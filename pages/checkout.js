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
  Icon,
  MaterialInput,
  CheckoutItem
} from '../components/'
//back-end
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../backend_services/firebase'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectItems,
  selectTotal
} from '../backend_services/slices/basketSlice'
import { useRouter } from 'next/router'
import { top_items } from '../backend_services/'

function Checkout () {
  const [openTab, setOpenTab] = useState(2)
  const [user] = useAuthState(creds)
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState('')
  const [cardExp, setCardExp] = useState('')
  const [cardCode, setCardCode] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const imagesRef = useRef(null)

  const total = useSelector(selectTotal)
  const products = useSelector(selectItems)

  console.log(products)

  const payWithCard = e => {
    e.preventDefault()

    if (
      !cardNumber &&
      !cardExp &&
      !cardCode &&
      !cardHolder &&
      !email &&
      !amount
    )
      return

    store
      .collection('userOrders')
      .doc(user?.email)
      .collection('orders')
      .add({
        orderAmount: amount,
        orderCardNo: cardNumber,
        orderCardExp: cardExp,
        orderCardCode: cardCode,
        orderCardHolder: cardHolder,
        orderEmail: email,
        transactionDate: firebase.firestore.FieldValue.serverTimestamp()
      })
    setCardNumber('')
    setCardExp('')
    setCardCode('')
    setCardHolder('')
    setEmail('')
    setAmount('')
    router.push('/success')
  }

  const payWithCash = e => {
    e.preventDefault()

    if (!name && !email && !amount) return

    store
      .collection('userOrders')
      .doc(user?.email)
      .collection('orders')
      .add({
        orderAmount: amount,
        orderName: name,
        orderEmail: email,
        transactionDate: firebase.firestore.FieldValue.serverTimestamp()
      })
    setName('')
    setEmail('')
    setAmount('')
    router.push('/success')
  }

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
              <div
                className='
              h-screen
              grid
              space-y-4
              '
              >
                <Button
                  color='blue'
                  onClick={e => setOpenTab(2)}
                  buttonType='link'
                  iconOnly={true}
                  rounded={false}
                  block={false}
                  className='top-0 left-0 px-4'
                >
                  <Icon name='arrow_back_ios' />
                </Button>
                {/**top */}
                <div
                  className='
                grid
                space-y-4
                p-10'
                >
                  {products.length && (
                    <div
                      className='
                    text-xl
                    justify-self-center
                    lg:w-[420px]
                    w-[190px]
                    max-w-xl 
                  border
                  bg-gray-800
                  border-gray-200
                  rounded-lg
                  font-google-sans 
                  font-normal 
                  text-purple-300 
                  p-4
                  grid
                  space-y-3
                  '
                    >
                      <h1 className='font-light'>Total of</h1>
                      <h2 className='text-2xl text-blue-300 font-bold'>
                        {products.length} products
                      </h2>
                      <h1 className='font-light'>with a price of</h1>
                      <h2 className='text-2xl font-bold underline animate-pulse text-red-400'>
                        <Currency quantity={total} currency='USD' />
                      </h2>
                    </div>
                  )}
                </div>
                {/**middle */}
                <div
                  className='
                  max-h-[470px]
                  justify-self-center
                  lg:w-[520px]
                  w-[290px]
                  max-w-xl
                  space-x-10 
                  overflow-x-scroll 
                  scrollbar-hide 
                  flex
                  items-center
                  bg-gray-100 
                  justify-between'
                >
                  {products.map((item, i) => (
                    <CheckoutItem
                      key={i}
                      id={item.id}
                      item_jpg={item.item_jpg}
                      price={item.price}
                    />
                  ))}
                </div>
                {/**bottom*/}
                <div className='grid space-y-4 flex-[0.3] px-4'>
                  <MaterialInput
                    type='text'
                    color='indigo'
                    size='sm'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    outline={false}
                    placeholder='name...'
                    className='font-robot-slab font-normal'
                  />
                  <MaterialInput
                    type='text'
                    color='indigo'
                    size='sm'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    outline={false}
                    placeholder='email...'
                    className='font-robot-slab font-normal'
                  />
                  <MaterialInput
                    type='text'
                    color='indigo'
                    size='sm'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    outline={false}
                    placeholder='amount...'
                    className='font-robot-slab font-normal'
                  />
                  <Button
                    onClick={payWithCash}
                    color='purple'
                    buttonType='filled'
                    size='sm'
                    iconOnly={false}
                    rounded={false}
                    block={false}
                    ripple='light'
                    className='capitalize'
                  >
                    <Icon name='payment' />
                    <h2 className='font-google-sans font-normal'>Pay now</h2>
                  </Button>
                </div>
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
              <div
                className='
              h-screen
              grid
              space-y-4
              '
              >
                <Button
                  color='blue'
                  onClick={e => setOpenTab(2)}
                  buttonType='link'
                  iconOnly={true}
                  rounded={false}
                  block={false}
                  className='top-0 left-0 px-4'
                >
                  <Icon name='arrow_back_ios' />
                </Button>
                {/**top */}
                <div
                  className='
                grid
                space-y-4
                p-10'
                >
                  {products.length && (
                    <div
                      className='
                    text-xl
                    justify-self-center
                    lg:w-[420px]
                    w-[190px]
                    max-w-xl 
                  border
                  bg-gray-800
                  border-gray-200
                  rounded-lg
                  font-google-sans 
                  font-normal 
                  text-purple-300 
                  p-4
                  grid
                  space-y-3
                  '
                    >
                      <h1 className='font-light'>Total of</h1>
                      <h2 className='text-2xl text-blue-300 font-bold'>
                        {products.length} products
                      </h2>
                      <h1 className='font-light'>with a price of</h1>
                      <h2 className='text-2xl font-bold underline animate-pulse text-red-400'>
                        <Currency quantity={total} currency='USD' />
                      </h2>
                    </div>
                  )}
                </div>
                {/**middle */}
                <div
                  className='
                  max-h-[470px]
                  justify-self-center
                  lg:w-[520px]
                  w-[290px]
                  max-w-xl
                  space-x-10 
                  overflow-x-scroll 
                  scrollbar-hide 
                  flex
                  items-center
                  bg-gray-100 
                  justify-between'
                >
                  {products.map((item, i) => (
                    <CheckoutItem
                      key={i}
                      id={item.id}
                      item_jpg={item.item_jpg}
                      price={item.price}
                    />
                  ))}
                </div>
                {/**bottom*/}
                <div className='grid space-y-4 flex-[0.3] px-4'>
                  <MaterialInput
                    type='text'
                    color='indigo'
                    size='sm'
                    outline={false}
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    placeholder='card #: '
                    className='font-robot-slab font-normal'
                  />
                  <div className='flex items-center space-x-3'>
                    <MaterialInput
                      type='text'
                      color='indigo'
                      size='sm'
                      outline={false}
                      value={cardExp}
                      onChange={e => setCardExp(e.target.value)}
                      placeholder='Exp. date:'
                      className='font-robot-slab font-normal'
                    />
                    <MaterialInput
                      type='text'
                      color='indigo'
                      size='sm'
                      outline={false}
                      value={cardCode}
                      onChange={e => setCardCode(e.target.value)}
                      placeholder='CVC:'
                      className='font-robot-slab font-normal'
                    />
                  </div>
                  <MaterialInput
                    type='text'
                    color='indigo'
                    size='sm'
                    outline={false}
                    value={cardHolder}
                    onChange={e => setCardHolder(e.target.value)}
                    placeholder='name: '
                    className='font-robot-slab font-normal'
                  />
                  <MaterialInput
                    type='text'
                    color='indigo'
                    size='sm'
                    outline={false}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email: '
                    className='font-robot-slab font-normal'
                  />
                  <MaterialInput
                    type='text'
                    color='indigo'
                    size='sm'
                    outline={false}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder='amount: '
                    className='font-robot-slab font-normal'
                  />
                  <Button
                    onClick={payWithCard}
                    color='purple'
                    buttonType='filled'
                    size='sm'
                    iconOnly={false}
                    rounded={false}
                    block={false}
                    ripple='light'
                    className='capitalize'
                  >
                    <Icon name='payment' />
                    <h2 className='font-google-sans font-normal'>Pay now</h2>
                  </Button>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </Tab>
      </main>
    </div>
  )
}

export default Checkout
