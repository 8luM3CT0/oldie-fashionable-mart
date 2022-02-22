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
        //item is present
        newCart.splice(index, 1)
      } else {
        console.warn(
          `Cannot remove product (id: ${action.payload.id}) as it is not in your cart`
        )
      }
      state.items = newCart
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectItem = state => state.cart.items

export const itemsTotal = state =>
  state.basket.items.reduce((total, item) => total + item.price, 0)

export default cartSlice.reducer
