import { createSlice } from '@reduxjs/toolkit'
import PERFILES from "../datos/perfiles"

export const perfilesSlice = createSlice({
  name: 'perfiles',
  initialState: {
    perfiles: PERFILES,
    perfilActual: undefined
  },
  reducers: {
    login: (state, action) => {
      state.perfilActual = action.payload
    }
  },
})

export const { login } = perfilesSlice.actions

export default perfilesSlice.reducer
