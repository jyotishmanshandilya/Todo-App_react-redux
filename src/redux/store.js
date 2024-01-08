import { configureStore } from '@reduxjs/toolkit'
import addTodosSlice from './addTodosSlice'

export const store =  configureStore({
  reducer: {
    addTodos: addTodosSlice
  }
})