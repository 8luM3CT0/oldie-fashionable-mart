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

function TopStocks ({ symbol, name, price }) {
  return (
    <>
      <span
        className='
    flex 
    items-center 
    text-center 
    space-x-5
    py-5
    px-4
    font-google-sans
    text-blue-500
    cursor-pointer
    '
      >
        <h2 className='text-lg font-semibold'>{symbol}</h2>
        <h1 className='text-base font-normal'>{name}</h1>
        <h3 className='text-xl font-bold text-blue-300'>{price}</h3>
      </span>
    </>
  )
}

export default TopStocks
