import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './reducers/cursor-slice'
import languageReducer from './reducers/language-slice'
import dialogReducer from './reducers/dialog-visible-slice'

const store = configureStore({
  reducer: {
    cursor: cursorReducer,
    language: languageReducer,
    dialog: dialogReducer
  }
})

export default store
