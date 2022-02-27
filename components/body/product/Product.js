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
import { creds, store } from '../../../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../../backend_services/slices/basketSlice'
import firebase from 'firebase'

const MAX_STAT = 5
const MIN_STAT = 1

function Product ({ id, item_jpg, name, price, category }) {
  const dispatch = useDispatch()
  const [user] = useAuthState(creds)
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_STAT - MIN_STAT + 1)) + MIN_STAT
  )
  const [moreInfo, setMoreInfo] = useState(false)

  const addToCart = () => {
    const product = {
      id,
      item_jpg,
      name,
      price,
      category
    }
    dispatch(addToBasket(product))

    store
      .collection('userCart')
      .doc(user.email)
      .collection('orders')
      .add(product, {
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log(
          `SUCCESS!!! Order ${creds.id} has been added to the database`
        )
      })
  }
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
    hover:opacity-95
    transform
    transition
    duration-300
    ease-in-out
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
        <div className='flex mx-auto items-center space-x-3'>
          <Button
            onClick={e => setMoreInfo(true)}
            color='purple'
            size='sm'
            buttonType='filled'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='light'
          >
            <h3 className='font-google-sans capitalize text-base'>More info</h3>
          </Button>
          <Button
            disabled={!user}
            onClick={addToCart}
            color='purple'
            size='sm'
            buttonType='filled'
            iconOnly={true}
            block={false}
            rounded={false}
            ripple='light'
          >
            <Icon name='add_shopping_cart' />
          </Button>
        </div>
      </div>
      <Modal
        size='regular'
        active={moreInfo}
        toggler={() => setMoreInfo(false)}
      >
        <ModalHeader toggler={() => setMoreInfo(false)}>
          Modal Title
        </ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setMoreInfo(false)}
            ripple='dark'
            className='capitalize'
          >
            Cancel
          </Button>

          <Button
            color='green'
            buttonType='link'
            onClick={e => setMoreInfo(false)}
            className='capitalize'
            ripple='light'
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Product
