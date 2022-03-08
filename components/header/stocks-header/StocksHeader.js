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

function StocksHeader () {
  const router = useRouter()
  const [user] = useAuthState(creds)
  const [showApps, setShowApps] = useState(false)

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
            <Icon name='price_change' color='red' />
            <h2 className='appName'>Stocks</h2>
          </div>
        </div>
        <div className='headerRouters'>
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
        grid 
        place-items-center
        font-normal'
          >
            <Icon name='home' />
            <h2 className='text-lg capitalize'>Home</h2>
          </Button>
          <Button
            onClick={() => router.push('/products')}
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
            <Icon name='category' />
            <h2 className='text-lg capitalize'>Products</h2>
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
        </div>
        <div className='flex items-center space-x-4'>
          {user ? (
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
                src={user?.photoURL}
                alt=''
                className='h-10 w-10 rounded-3xl border-purple-400 border-2'
              />
            </Button>
          ) : (
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
              <Icon name='person_add_alt' />
              <h5 className='signInText'>Sign in</h5>
            </Button>
          )}
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
        space-x-4'
            >
              <Icon name='home' />
              <h2 className='text-lg capitalize'>Home</h2>
            </Button>
            <Button
              onClick={() => router.push('/products')}
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
              <Icon name='category' />
              <h2 className='text-lg capitalize'>Products</h2>
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

export default StocksHeader
