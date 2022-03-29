//front-end
import { FinalHeader, Button, Icon } from '../components'
//back-end
import { useRouter } from 'next/router'

function Success () {
  const router = useRouter()

  return (
    <div
      className=' h-screen 
    overflow-hidden       
    bg-gradient-to-t
      from-gray-900
      to-red-900'
    >
      <FinalHeader />
      <main className='homeMain'>
        <div
          className='
        flex 
        flex-col 
        p-10 
        bg-gray-600 
        text-gray-50 
        space-y-5'
        >
          <div className='flex items-center space-x-2 mb-5'>
            <Button
              color='green'
              buttonType='link'
              iconOnly={true}
              block={false}
              rounded={true}
              ripple='light'
            >
              <Icon name='verified' />
            </Button>
            <h1 className='text-3xl text-blue-400'>
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p className='font-google-sans font-normal text-lg'>
            Thank you for shopping with us. We'll send a confirmtion on your
            email if your item is ready, if you would like to check the history
            of your order(s), please press the link below.
          </p>
          <Button
            onClick={() => router.push('/order_list')}
            color='purple'
            buttonType='filled'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='light'
            className='capitalize'
          >
            <Icon name='shopping_cart' />
            Go to my orders
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Success
