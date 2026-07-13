import { createSlice } from '@reduxjs/toolkit'
import i18next from 'i18next'

const initialState = {
  language: localStorage.getItem('language')
    ? localStorage.getItem('language')
    : navigator.language.split('-')[0]
}

const langaugeSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      i18next.changeLanguage(action.payload)
      localStorage.setItem('language', action.payload)
      state.language = action.payload
    }
  }
})

export const { setLanguage } = langaugeSlice.actions
export default langaugeSlice.reducer
