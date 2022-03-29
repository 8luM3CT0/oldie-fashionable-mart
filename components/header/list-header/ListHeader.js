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
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds } from '../../../backend_services/firebase'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

function ListHeader () {
  const [user] = useAuthState(creds)
  const { data: session } = useSession
  const [showRoutes, setShowRoutes] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const router = useRouter()

  return (
    <>
      <header
        className='
    z-50 
    top-0 
    sticky 
    bg-stone-900 
    px-7 
    py-3
    flex
    items-center
    justify-evenly
    flex-grow
    '
      >
        <div className='flex items-center space-x-4'>
          <Button
            onClick={e => setShowRoutes(true)}
            color='red'
            buttonType='link'
            iconOnly={true}
            rounded={false}
            block={false}
            ripple='light'
            className='lg:hidden'
          >
            <Icon name='menu' />
          </Button>
          <Button
            color='red'
            buttonType='link'
            iconOnly={false}
            rounded={false}
            block={false}
            ripple='light'
            className='capitalize space-x-4'
          >
            <Icon name='shopping_basket' />
            <h2 className='appName'>Your orders</h2>
          </Button>
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
            onClick={e => setShowUser(true)}
            color='blue'
            buttonType='link'
            ripple='light'
            className='px-4 space-x-4'
          >
            <img
              src={user?.photoURL}
              alt=''
              className='h-10 w-10 rounded-3xl border-blue-400'
            />
          </Button>
        </div>
      </header>
      <Modal size='lg' active={showRoutes} toggler={() => setShowRoutes(false)}>
        <ModalHeader toggler={() => setShowRoutes(false)}>Apps</ModalHeader>
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
            onClick={e => setShowRoutes(false)}
            ripple='dark'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
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

export default ListHeader
