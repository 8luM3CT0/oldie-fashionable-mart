//front-end
import { Button, Icon } from '../../index'
import { useDispatch } from 'react-redux'
//back-end
import {
  addToBasket,
  removeFromBasket
} from '../../../backend_services/slices/basketSlice'
import { creds, store } from '../../../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function CheckoutProduct (id, item_jpg, name, price, category, description) {
  const [user] = useAuthState(creds)
  const dispatch = useDispatch()

  const addItem = () => {
    const product = {
      id,
      item_jpg,
      name,
      price,
      category,
      description
    }
    dispatch(addToBasket(product))

    store
      .collection('orderForPayment')
      .doc(user.email)
      .collection('order')
      .doc(id)
      .set({
        order_id: id,
        order_image: item_jpg,
        order_name: name,
        order_price: price,
        order_category: category,
        order_description: description
      })
      .then(() => {
        console.log(`SUCCESS!!! Order ${creds.id} is now waiting for payment`)
      })
  }

  const removeItem = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className='grid grid-cols-5'>
      {/**left */}
      <img
        src={item_jpg}
        alt=''
        className='
        h-[200px]
        w-[200px]
        object-contain
        rounded-lg
        '
      />
      {/**middle */}
      <div
        className='
      col-span-3
      mx-5
      font-google-sans
      text-purple-300
      '
      >
        <p className='font-semibold'>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Icon name='thumb_up' color='purple' />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
