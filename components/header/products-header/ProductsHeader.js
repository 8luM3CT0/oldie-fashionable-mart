//front-end
import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  GoogleIcon,
  GitHubIcon,
  FacebookIcon,
  TwitterIcon
} from '../..'
//back-end
import firebase from 'firebase'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { creds, store, provider } from '../../../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { selectItems } from '../../../backend_services/slices/basketSlice'
import { useSession } from 'next-auth/react'

function Header () {
  const router = useRouter()
  const [user] = useAuthState(creds)
  const [showApps, setShowApps] = useState(false)
  const products = useSelector(selectItems)
  const { data: session } = useSession()

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
        <div className='flex items-center space-x-3'>
          <Button
            onClick={e => setShowApps(true)}
            color='red'
            size='regular'
            buttonType='link'
            iconOnly={true}
            rounded={true}
            block={false}
            ripple='light'
            className='lg:hidden'
          >
            <Icon name='menu' />
          </Button>
          <div
            className='
          flex 
          items-center 
          space-x-3 
          cursor-pointer 
          hover:underline 
          hover:animate-pulse
          transform
          transition
          duration-300
          ease-in-out
          '
          >
            <Icon name='smart_toy' color='red' />
            <h2 className='appName'>RetroMart</h2>
          </div>
        </div>
        <div className='headerRouters'>
          <Button
            onClick={() => router.push('/')}
            color='blue'
            size='lg'
            buttonType='link'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='
          cursor-pointer 
          grid 
          place-items-center
          font-normal'
          >
            <Icon name='home' />
            <h2 className='text-lg capitalize'>Home</h2>
          </Button>
          <Button
            color='blue'
            size='lg'
            buttonType='link'
            rouded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='
          cursor-pointer 
          grid 
          place-items-center
          font-normal'
          >
            <Icon name='info' />
            <h2 className='text-lg capitalize'>About</h2>
          </Button>
          <Button
            onClick={() => router.push('/stocks')}
            color='blue'
            size='lg'
            buttonType='link'
            rouded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='
          cursor-pointer 
          grid 
          place-items-center
          font-normal'
          >
            <Icon name='price_change' />
            <h2 className='text-lg capitalize'>Stocks</h2>
          </Button>
        </div>
        <div className='flex items-center space-x-4'>
          <Button
            color='purple'
            buttonType='link'
            size='regular'
            iconOnly={false}
            rounded={false}
            block={false}
            ripple='light'
            className='flex items-center space-x-2 capitalize'
          >
            <img
              src={user?.photoURL || session?.user.image}
              alt=''
              className='h-10 w-10 rounded-3xl border-purple-400 border-2'
            />
          </Button>

          <Button
            disabled={!user}
            onClick={() => router.push('/orders')}
            color='purple'
            buttonType='link'
            size='regular'
            iconOnly={false}
            rounded={false}
            ripple='light'
            className='
              flex 
              py-3 
              relative 
              items-center 
              space-x-2 
              capitalize'
          >
            <span
              className='
            absolute 
            top-0 
            right-10 
            h-4
            w-4
            mr-2
            bg-purple-700
            text-center
            rounded-3xl
            text-purple-50
            font-semibold
            '
            >
              <h2 className='text-sm'>{products.length}</h2>
            </span>
            <Icon name='production_quantity_limits' />
            <h5 className='signInText'>Cart</h5>
          </Button>
        </div>
      </header>
      <Modal size='lg' active={showApps} toggler={() => setShowApps(false)}>
        <ModalHeader toggler={() => setShowApps(false)}>Apps</ModalHeader>
        <ModalBody>
          <div
            className='
          space-y-5
          p-8
          '
          >
            <Button
              onClick={() => router.push('/')}
              color='blue'
              size='lg'
              buttonType='link'
              rouded={false}
              iconOnly={false}
              block={false}
              ripple='light'
              className='
          cursor-pointer
          justify-evenly 
          flex
          items-center
          font-normal
          space-x-4
          '
            >
              <Icon name='home' />
              <h2 className='text-lg capitalize'>Home</h2>
            </Button>
            <Button
              color='blue'
              size='lg'
              buttonType='link'
              rouded={false}
              iconOnly={false}
              block={false}
              ripple='light'
              className='
                cursor-pointer
          justify-evenly 
          flex
          items-center
          font-normal
          space-x-4'
            >
              <Icon name='info' />
              <h2 className='text-lg capitalize'>About</h2>
            </Button>
            <Button
              onClick={() => router.push('/stocks')}
              color='blue'
              size='lg'
              buttonType='link'
              rouded={false}
              iconOnly={false}
              block={false}
              ripple='light'
              className='
                cursor-pointer
          justify-evenly 
          flex
          items-center
          font-normal
          space-x-4'
            >
              <Icon name='price_change' />
              <h2 className='text-lg capitalize'>Stocks</h2>
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowApps(false)}
            ripple='dark'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Header
