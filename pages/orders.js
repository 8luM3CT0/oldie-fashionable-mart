//front-end
import { OrderHeader } from '../components/index'
//back-end
function orders () {
  return (
    <div
      className='
    h-screen
    overflow-hidden
    bg-gradient-to-t
    from-gray-900
    to-purple-500
    '
    >
      <OrderHeader />
      <main
        className='
        homeMain
        '
      >
        <h1
          className='
        text-2xl 
        font-google-sans 
        font-normal 
        text-purple-100 
        top-0 
        left-0
        px-7
        py-4
        '
        >
          Your orders:
        </h1>
      </main>
    </div>
  )
}

export default orders
