//front-end
//back-end
import { useState } from 'react'

function CheckoutProduct ({
  id,
  item_jpg,
  name,
  price,
  category,
  description
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${item_jpg})`
      }}
      className='
    grid 
    bg-cover 
    bg-no-repeat 
    bg-center 
    cursor-pointer
    p-[150px]
    h-[220px]
    max-h-[310px] 
    rounded-lg
    place-items-center
    hover:scale-105
    hover:opacity-90
    hover:shadow-xl
    transform
    transition
    duration-500
    ease-in-out
    group
    '
    >
      <h1
        className='
        text-xl 
        font-google-sans 
        font-semibold 
        group-hover:inline-flex 
        group-hover:opacity-100 
        hidden  
        text-blue-400'
      >
        {price}
      </h1>
    </div>
  )
}

export default CheckoutProduct
