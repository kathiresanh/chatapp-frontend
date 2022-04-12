import { configureStore } from '@reduxjs/toolkit'
import { StateSlice } from '../features/Statecontrol'

export default configureStore({
  reducer: {
      userstate : StateSlice.reducer,
  },
})