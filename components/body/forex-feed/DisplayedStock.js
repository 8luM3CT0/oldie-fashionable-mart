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

function DisplayedStock ({
  title,
  symbol,
  currentPrice,
  companyLogo,
  industry,
  website,
  workAddress,
  city,
  state,
  zip,
  companyDesciption
}) {
  const [showStock, setShowStock] = useState(false)
  return (
    <>
      <div
        onClick={e => setShowStock(true)}
        className='
    h-[380px]
    bg-[#374151]
    flex-grow
    grid
    p-10
    rounded-xl
    space-y-3
    transform
    transition
    duration-300
    hover:bg-gray-600
    cursor-pointer
    ease-in-out
    '
      >
        <img
          src={companyLogo}
          alt=''
          className='
    relative
    rounded-xl
    mx-auto
    align-middle
    '
        />
        <h2
          className='
        text-blue-500
        text-2xl
        font-google-sans
        font-normal
        '
        >
          {title} - {symbol}
        </h2>
        <h3
          className='
        text-blue-500
        text-xl
        font-google-sans
        font-normal
        '
        >
          Price: {currentPrice}
        </h3>
        <h4
          className='
        text-blue-500
        text-xl
        font-google-sans
        font-semibold
        '
        >
          Industry type: {industry}
        </h4>
        <a
          href={website}
          className='
        text-blue-300 
        text-base 
        font-google-sans 
        font-bold'
        >
          Website: {website}
        </a>
      </div>
      <Modal active={showStock} size='lg' toggler={() => setShowStock(false)}>
        <ModalHeader toggler={() => setShowStock(false)}>
          <h2
            className='
          text-blue-500 
          text-xl 
          font-google-sans 
          font-normal
          capitalize
          '
          >
            Stock details
          </h2>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          p-[90px]
          grid 
          font-google-sans 
          text-blue-500 
          place-items-center 
          space-y-10'
          >
            <img
              src={companyLogo}
              alt=''
              className='relative
    rounded-xl
    mx-auto
    align-middle '
            />
            <h2 className='text-xl font-normal'>Symbol: {symbol}</h2>
            <h2 className='text-xl font-normal'>Name: {title}</h2>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowStock(false)}
            color='red'
            buttonType='lg'
            ripple='light'
            className='capitalize'
          >
            Close
          </Button>
          <Button
            onClick={e => setShowStock(false)}
            color='blue'
            buttonType='lg'
            ripple='light'
            className='capitalize'
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DisplayedStock
