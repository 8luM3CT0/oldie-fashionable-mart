//front-end
import Head from 'next/head'
import { StockHeader, StocksFeed } from '../components/index'
//back-end
import { creds, store } from '../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { stocks } from '../backend_services/index'

function Stocks () {
  const [user] = useAuthState(creds)

  return (
    <div
      className='
    h-screen 
    overflow-hidden
    bg-gradient-to-t 
    from-gray-900 
    to-blue-500'
    >
      <StockHeader />
      <main className='homeMain'>
        <StocksFeed forex={stocks} />
      </main>
    </div>
  )
}

export default Stocks
