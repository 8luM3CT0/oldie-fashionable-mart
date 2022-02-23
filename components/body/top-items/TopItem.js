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
  const [item, showItem] = useState(false)
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${item_jpg})`
        }}
        className='
        lg:h-[320px]
        h-[150px] 
        p-[150px]
        w-full
        flex-grow
        rounded-lg 
        bg-cover
        bg-no-repeat 
        bg-center 
        grid 
        place-items-center 
        space-y-3
        cursor-pointer
        hover:opacity-95
        transform
        transition
        duration-300
        ease-in-out
        '
      >
        {/**
        name
        price
         */}
      </div>
    </>
  )
}

export default TopItem
