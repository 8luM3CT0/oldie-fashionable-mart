import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../backend_services/slices/basketSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer
  }
})
