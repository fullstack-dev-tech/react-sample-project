import { createSlice } from '@reduxjs/toolkit'

const userInitialState = {
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
  email: '',
  dateOfBirth: '',
};

const configSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    user: userInitialState,
    isAuthenticated: false,
    loading: false,
  },
  reducers: {
    getMe(state) {
      state.loading = true;
    },
    getMeSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    getMeFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateAuthentication(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
    }
  }
})

const { actions, reducer } = configSlice;

export const { getMe, getMeSuccess, getMeFailure, updateAuthentication } = actions;

export default reducer;
