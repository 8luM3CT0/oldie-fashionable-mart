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
  pe,
  category
}) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div onClick={e => setShowMore(true)} className='stockQuoteCSS'>
        <p
          className='
    absolute
    top-2
    right-2
    text-xs
    italic
    text-blue-300
    '
        >
          {category}
        </p>
        <h2 className='text-xl font-google-sans italic font-semibold'>
          {symbol}
        </h2>
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
          p-[60px] 
          flex 
          flex-col 
          place-items-center 
          font-google-sans 
          space-y-5'
          >
            <h1
              className='
            stockQuoteTitle'
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
            <h2
              className='
            text-xl 
            font-google-sans 
            font-normal 
            text-blue-500 
            mx-auto
            '
            >
              Changes
            </h2>
            <h3 className='text-lg font-semibold text-red-500'>
              Change: {change}
            </h3>
            <h3 className='text-lg font-semibold text-red-600'>
              Change percentage: {changePercentage}
            </h3>
            <h2
              className='
            text-xl 
            font-google-sans 
            font-normal 
            text-blue-500 
            mx-auto
            '
            >
              Day prices
            </h2>
            <h3 className='text-lg font-semibold text-blue-400'>
              Day low: {dayLow}
            </h3>
            <h3 className='text-lg font-semibold text-blue-600'>
              Day high: {dayHigh}
            </h3>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            size='regular'
            onClick={e => setShowMore(false)}
            ripple='light'
          >
            <p className='capitalize font-google-sans'>Close</p>
          </Button>
          <Button
            color='green'
            buttonType='link'
            size='regular'
            onClick={e => setShowMore(false)}
            ripple='light'
          >
            <p className='capitalize font-google-sans'>Buy</p>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default StockQuote
