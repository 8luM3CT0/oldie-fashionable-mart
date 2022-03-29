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
import { useSession } from 'next-auth/react'
import { useState } from 'react'

function OrderHeader () {
  const [user] = useAuthState(creds)
  const { data: session } = useSession()
  const router = useRouter()
  const [showUser, setShowUser] = useState(false)

  return (
    <>
      <header
        className='
      top-0 
    z-50 
    sticky
    bg-stone-900
    flex
    items-center
    justify-evenly
    space-x-8
    flex-grow
    px-7
    py-3
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
            src={user?.photoURL || session?.user.image}
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
      <Modal
        active={showUser}
        size='regular'
        toggler={() => setShowUser(false)}
      >
        <ModalHeader toggler={() => setShowUser(false)}>
          User details
        </ModalHeader>
        <ModalBody>
          <div className='grid place-items-center space-y-4 p-[40px]'>
            <img
              src={user?.photoURL}
              alt=''
              className='
              h-20 
              w-20 
              rounded-full 
              border-2 
              border-purple-400'
            />
            <h2 className='text-xl font-google-sans font-semibold text-purple-500'>
              {user?.displayName}
            </h2>
            <h5 className='text-base font-google-sans font-light text-purple-500'>
              {user?.email}
            </h5>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default OrderHeader
