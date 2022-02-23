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
    </>
  )
}

export default TopItem
