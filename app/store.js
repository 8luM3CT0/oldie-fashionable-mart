import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../backend_services/slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
