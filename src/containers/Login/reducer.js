import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuthenticated: false, error: '' }

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: initialState,
  reducers: {
    userAuthenticated: (state) => {
      state.isAuthenticated = true
      return state
    },
    userAuthenticationFailed: (state) => {
      state.error = "Error has occured"
      return state
    },
  }
})

export const { userAuthenticated, userAuthenticationFailed } = AuthSlice.actions

export default AuthSlice
