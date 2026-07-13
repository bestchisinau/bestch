import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false
}

const dialogVisibleSlice = createSlice({
  name: 'dialogVisible',
  initialState,
  reducers: {
    setDialogVisibility: (state) => {
      state.visible = !state.visible
    }
  }
})

export const { setDialogVisibility } = dialogVisibleSlice.actions
export default dialogVisibleSlice.reducer
