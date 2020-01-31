import { createSlice } from '@reduxjs/toolkit'
import { API_CALL_STATUS } from '../../constant';

const configSlice = createSlice({
  name: 'login',
  initialState: {
    error: null,
    state: API_CALL_STATUS.NOT_STARTED,
    loading: false,
  },
  reducers: {
    login(state) {
      state.state = API_CALL_STATUS.STARTED;
      state.loading = true;
    },
    loginSuccess(state) {
      state.state = API_CALL_STATUS.SUCCESS;
      state.loading = false;
    },
    loginFailure(state, action) {
      state.state = API_CALL_STATUS.FAILURE;
      state.error = action.payload;
      state.loading = false;
    }
  }
})

const { actions, reducer } = configSlice;

export const { login, loginSuccess, loginFailure } = actions;

export default reducer;

