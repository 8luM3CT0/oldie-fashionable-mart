//front-end
import { Button, Icon, Modal, ModalHeader, ModalBody, ModalFooter } from '../..'
//back-end
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Header () {
  const router = useRouter()
  const [showSignIn, setShowSignIn] = useState(false)
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
            <h2 className='text-lg capitalize'>Forex</h2>
          </Button>
        </div>
        <div className='flex items-center space-x-4'>
          <Button
            onClick={e => setShowSignIn(true)}
            color='purple'
            buttonType='link'
            size='lg'
            iconOnly={false}
            rounded={false}
            block={false}
            ripple='light'
            className='flex items-center space-x-2 capitalize'
          >
            <Icon name='person_add_alt' />
            <h5 className='signInText'>Sign in</h5>
          </Button>
        </div>
      </header>
      <Modal size='lg' active={showSignIn} toggler={() => setShowSignIn(false)}>
        <ModalHeader toggler={() => setShowSignIn(false)}>Sign In</ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowSignIn(false)}
            ripple='dark'
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal size='lg' active={showApps} toggler={() => setShowApps(false)}>
        <ModalHeader toggler={() => setShowApps(false)}>Apps</ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowApps(false)}
            ripple='dark'
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Header
