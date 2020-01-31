import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    user: null,
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
    }
  }
})

const { actions, reducer } = configSlice;

export const { getMe, getMeSuccess, getMeFailure } = actions;

export default reducer;
