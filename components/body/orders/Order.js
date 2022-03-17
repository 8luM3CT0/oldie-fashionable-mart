//front-end
import { Button, Icon, Currency } from '../../index'
//back-end
import { useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import {
  addToBasket,
  removeFromBasket
} from '../../../backend_services/slices/basketSlice'

const MAX_STAT = 5
const MIN_STAT = 1

function Order ({ id, item_jpg, name, price, category, description }) {
  const dispatch = useDispatch()
  const addItemToCart = () => {
    const product = { id, item_jpg, name, price, category, description }
    dispatch(addToBasket(product))
  }
  const removeItemFromCart = () => {
    dispatch(removeFromBasket({ id }))
  }
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_STAT - MIN_STAT + 1)) + MIN_STAT
  )

  return (
    <div
      className='
    bg-gray-600 
    hover:opacity-90 
    grid 
    grid-cols-5 
    transition 
    transform 
    duration-200 
    ease-in-out
    py-5
    px-7
    cursor-pointer
    rounded-lg
    '
    >
      {/**left */}
      <img
        src={item_jpg}
        className='
        h-[200px] 
        w-[200px] 
        rounded-xl 
        object-contain'
      />
      {/** mid*/}
      <div className='col-span-3 mx-5 space-y-4 py-3'>
        <h2
          className='
          text-xl 
          font-google-sans 
          font-semibold 
          underline 
          text-purple-300'
        >
          {name}
        </h2>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Icon name='thumb_up' color='purple' />
            ))}
        </div>
        <h2
          className='
        text-sm 
        text-purple-300 
        font-google-sans 
        font-light 
        line-clamp-3'
        >
          {description}
        </h2>
        <h1
          className='
        text-xl 
        text-purple-300 
        font-google-sans 
        font-semibold'
        >
          <Currency quantity={price} currency='USD' />
        </h1>
      </div>
      {/** right*/}
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <Button
          onClick={addItemToCart}
          color='blue'
          buttonType='filled'
          size='regular'
          iconOnly={false}
          block={false}
          rounded={false}
          ripple='light'
        >
          <Icon name='add' />
          <h2 className='text-xl font-google-sans font-normal capitalize'>
            Add
          </h2>
        </Button>
        <Button
          onClick={removeItemFromCart}
          color='blueGray'
          buttonType='filled'
          size='regular'
          iconOnly={false}
          block={false}
          rounded={false}
          ripple='light'
        >
          <Icon name='remove_shopping_cart' />
          <h2 className='text-xl font-google-sans font-normal capitalize'>
            Remove
          </h2>
        </Button>
      </div>
    </div>
  )
}

export default Order
