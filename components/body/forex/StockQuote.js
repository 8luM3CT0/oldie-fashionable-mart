//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../index'
//back-end
import { useState } from 'react'

function StockQuote ({
  symbol,
  name,
  price,
  change,
  changePercentage,
  dayLow,
  dayHigh,
  yearHigh,
  yearLow,
  marketCap,
  priceAvg50,
  priceAvg200,
  volume,
  avgVolume,
  open,
  previousClose,
  eps,
  pe
}) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowMore(true)}
        className='
    grid
    p-10
    text-blue-400
    bg-gray-600
    rounded-xl
    transform
    transition
    hover:scale-105
    mx-5
    my-3
    space-y-5
    ease-in-out
    duration-200
    cursor-pointer
    '
      >
        <h2 className='text-xl font-google-sans font-semibold'>{symbol}</h2>
        <h3 className='text-lg font-google-sans font-normal'>{name}</h3>
        <h1 className='text-2xl font-google-sans font-bold'>{price}</h1>
      </div>
      <Modal size='lg' active={showMore}>
        <ModalHeader toggler={() => setShowMore(false)}>
          <h2
            className='
          text-2xl
          px-5 
          font-google-sans 
          font-normal 
          capitalize 
          text-green-600'
          >
            Stock quote
          </h2>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          p-[90px] 
          flex 
          flex-col 
          place-items-center 
          font-google-sans 
          space-y-5'
          >
            <h1
              className='
            text-xl 
            space-x-4 
            flex
            items-center 
            text-blue-600 
            font-semibold'
            >
              {symbol} - {name}
            </h1>
            <h2
              className='
            text-2xl
            font-bold
            text-purple-600
            '
            >
              Current price: {price}
            </h2>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default StockQuote
