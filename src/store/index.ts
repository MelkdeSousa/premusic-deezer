import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './ducks/Search'
import likeReducer from './ducks/Like'

const store = configureStore({
  reducer: {
    search: searchReducer,
    like: likeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
