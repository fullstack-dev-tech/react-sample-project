import { createSlice } from '@reduxjs/toolkit'
import { API_CALL_STATUS } from '../../constant';

const configSlice = createSlice({
  name: 'signup',
  initialState: {
    error: null,
    state: API_CALL_STATUS.NOT_STARTED,
    loading: false,
  },
  reducers: {
    signup(state) {
      state.state = API_CALL_STATUS.STARTED;
      state.loading = true;
    },
    signupSuccess(state) {
      state.state = API_CALL_STATUS.SUCCESS;
      state.loading = false;
    },
    signupFailure(state, action) {
      state.state = API_CALL_STATUS.FAILURE;
      state.error = action.payload;
      state.loading = false;
    }
  }
})

const { actions, reducer } = configSlice;

export const { signup, signupSuccess, signupFailure } = actions;

export default reducer;
