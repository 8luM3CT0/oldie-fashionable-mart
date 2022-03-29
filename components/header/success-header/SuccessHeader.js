//front-end
import { Button, Icon } from '../../'
//back-end
import { creds } from '../../../backend_services/firebase'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSession } from 'next-auth/react'

function SuccessHeader () {
  const [user] = useAuthState(creds)
  const { data: session } = useSession()
  const router = useRouter()

  return (
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
          color='green'
          buttonType='link'
          size='regular'
          iconOnly={false}
          rounded={false}
          block={false}
          ripple='light'
          className='space-x-3 rounded-lg'
        >
          <Icon name='done_outline' />
          <h3
            className='
                font-google-sans
                font-semibold
                text-base
                capitalize
                '
          >
            Success
          </h3>
        </Button>
      </div>
      <div className='flex items-center space-x-3'>
        <Button
          onClick={() => router.push('/')}
          color='blue'
          buttonType='link'
          iconOnly={true}
          rounded={false}
          block={false}
          className='px-3'
        >
          <Icon name='home' />
        </Button>
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
      </div>
    </header>
  )
}

export default SuccessHeader
