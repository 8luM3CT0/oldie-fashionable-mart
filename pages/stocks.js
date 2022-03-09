//front-end
import Head from 'next/head'
import {
  StockHeader,
  MainFeed,
  DisplayedStock,
  TopStock
} from '../components/index'
//back-end
import { creds, store } from '../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { stocks, displayed_stock } from '../backend_services/index'

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
        {' '}
        <img
          src='https://www.stgallenbusinessreview.com/wp-content/uploads/2019/05/chris-li-182361-unsplash.jpg'
          alt=''
          className='
        md:col-span-full 
        rounded-xl 
        mx-auto 
        p-8
        -mt-72
        opacity-80
        '
        />
        <div
          className='
        grid 
        grid-flow-row-dense 
        items-center
        lg:grid-cols-2
        mx-auto
        p-10
        '
        >
          <div className='h-[480px] grid place-items-center'>
            {displayed_stock.map(profile => (
              <DisplayedStock
                companyLogo={profile.image}
                symbol={profile.symbol}
                title={profile.companyName}
                currentPrice={profile.price}
                industry={profile.industry}
                website={profile.website}
                workAddress={profile.address}
                city={profile.city}
                state={profile.state}
                zip={profile.zip}
                compDesc={profile.description}
              />
            ))}
          </div>
          <div
            className='
          h-[380px]
          overflow-y-scroll
          rounded-xl
          scrollbar-hide 
          bg-[#374151] 
          grid 
          place-items-center'
          >
            {stocks.map(profile => (
              <TopStock
                symbol={profile.symbol}
                name={profile.name}
                price={profile.price}
              />
            ))}
          </div>
        </div>
        <h1
          className='
    text-2xl 
    font-google-sans 
    font-normal 
    text-purple-400
    top-0
    left-0
    px-7
    '
        >
          Stocks
        </h1>
        <MainFeed forex={stocks} />
      </main>
    </div>
  )
}

export default Stocks
