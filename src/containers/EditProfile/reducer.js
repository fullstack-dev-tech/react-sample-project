import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'edit',
  initialState: {
    error: null,
    loading: false,
  },
  reducers: {
    editProfile(state) {
      state.loading = true;
    },
    editProfileSuccess(state) {
      state.loading = false;
    },
    editProfileFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  }
})

const { actions, reducer } = configSlice;

export const { editProfile, editProfileSuccess, editProfileFailure } = actions;

export default reducer;
