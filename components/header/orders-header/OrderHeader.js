//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { useRouter } from 'next/router'
import firebase from 'firebase'
import { creds } from '../../../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function OrderHeader () {
  const [user] = useAuthState(creds)
  const router = useRouter()

  return (
    <header
      className='
    top-0 
    sticky
    z-50
    px-6
    justify-evenly 
    flex
    items-center
    h-14
    bg-stone-800
    '
    >
      <div
        className='
    flex 
    items-center 
    space-x-5 
    px-4'
      >
        <Button
          onClick={() => router.push('/')}
          color='red'
          buttonType='link'
          size='regular'
          iconOnly={true}
          rounded={false}
          block={false}
          ripple='light'
          className='px-3'
        >
          <Icon name='arrow_back_ios' />
        </Button>
        <Button
          color='red'
          buttonType='link'
          size='regular'
          iconOnly={false}
          rounded={false}
          block={false}
          ripple='light'
          className='rounded-lg space-x-3'
        >
          <Icon name='shopping_cart' />
          <h2
            className='
        font-google-sans 
        font-semibold 
        text-xl
        capitalize
        '
          >
            Orders
          </h2>
        </Button>
      </div>
      <Button
        color='blue'
        buttonType='link'
        size='sm'
        rounded={false}
        block={false}
        ripple='light'
      >
        <img
          src={user?.photoURL}
          alt=''
          className='
          h-10 
          w-10 
          rounded-3xl
          border 
          border-blue-400'
        />
      </Button>
    </header>
  )
}

export default OrderHeader
