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
import { useDispatch } from 'react-redux'

function Product ({ id, item_jpg, name, price, category, rating }) {
  return (
    <>
      <div
        className='
    relative 
    flex 
    flex-col 
    m-5 
    bg-gray-600
    z-30 
    p-10
    rounded-lg
    hover:opacity-75
    transform
    transition
    duration-300
    ease-in-out
    cursor-pointer
    space-y-3
    '
      >
        <p
          className='
    absolute
    top-2
    right-2
    text-xs
    italic
    text-purple-300
    '
        >
          {category}
        </p>
        <img
          src={item_jpg}
          alt=''
          className='
    h-[200px] 
    w-[200px] 
    object-contain 
    rounded-lg'
        />
        <h4 className='my-3 text-purple-200'>{name}</h4>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Icon name='thumb_up' color='purple' />
            ))}
        </div>
        <h3 className='text-purple-300 font-google-sans text-base'>
          $ {price}
        </h3>
      </div>
    </>
  )
}

export default Product
