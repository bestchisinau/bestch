import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size: 40
}

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload
    }
  }
})

export const { setSize } = cursorSlice.actions
export default cursorSlice.reducer
