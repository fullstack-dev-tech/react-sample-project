import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuthenticated: false, userData: {} }

const ProfileSlice = createSlice({
  name: 'ProfileSlice',
  initialState: initialState,
  reducers: {
    userAuthenticated: (state) => {
      state.isAuthenticated = true
      return state
    },
    userDataRecieved: (state, actions) => {
      state.userData = actions.payload
    }
  }
})

export const { userDataRecieved } = ProfileSlice.actions

export default ProfileSlice
