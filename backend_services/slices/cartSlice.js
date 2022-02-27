import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        cartItem => cartItem.id === action.payload.id
      )
      let newCart = [...state.items]

      if (index >= 0) {
        //item exists
        newCart.splice(index, 1)
      } else {
        //item does not exist
        console.warn(
          `Cannot remove product (id: ${action.payload.id}) as it's not in your cart`
        )
      }
      state.items = newCart
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectItem = state => state.cart.items

export const itemsTotal = state =>
  state.cart.items.reduce((total, item) => total + item.price, 0)

export default cartSlice.reducer
