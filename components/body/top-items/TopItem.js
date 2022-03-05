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

function TopItem ({ id, item_jpg, name, price, category }) {
  const [showItem, setShowItem] = useState(false)
  return (
    <>
      <div
        onClick={e => setShowItem(true)}
        style={{
          backgroundImage: `url(${item_jpg})`
        }}
        className='topItemsDiv
        group
        '
      >
        <h5
          className='
        topItemsName
        '
        >
          {category}
        </h5>
      </div>
      <Modal active={showItem} size='lg'>
        <ModalHeader toggler={() => setShowItem(false)}>
          <h2
            className='
        text-xl 
        capitalize 
        font-google-sans 
        font-normal 
        text-blue-500'
          >
            Item details
          </h2>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          p-8
          grid 
          space-y-8 
          place-item-center'
          >
            <img
              src={item_jpg}
              alt=''
              className='
            rounded-xl
            border
            border-purple-500
            '
            />
            <h2 className='text-xl font-robot-condensed font-semibold text-blue-500'>
              {name}
            </h2>
            <h3 className='text-lg font-robot-condensed font-normal text-blue-500'>
              Category: {category}
            </h3>
            <p className='text-xl font-robot-condensed font-semibold text-blue-500 '>
              $ {price}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowItem(false)}
            color='red'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='light'
            className='capitalize'
          >
            Close
          </Button>
          <Button
            onClick={e => setShowItem(false)}
            color='blue'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
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

export default TopItem
