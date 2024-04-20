import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { axiosBaseUrl } from '../../config/axios-configuration';

import notification from '../../component/notifications';

const axios = axiosBaseUrl();

export const CreateAppointment = createAsyncThunk(
  'create-appointment',
  async (appointmentInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/appointment', appointmentInfo);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        notification('error', err.message);
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: {
          error: 'Network Error'
        }
      });
    }
  }
);

const auth = createSlice({
  name: 'auth',
  initialState: {
    message: '',
    err: '',
    loading: false
  },
  reducers: {
    SetState(state, { payload: { field, value } }) {
      state[field] = value;
    },
    LogOut: (state) => ({
      name: '',
      email: '',
      message: '',
      err: '',
      token: '',
      userId: '',
      success: false,
      loading: false,
      role: '',
      stripSubscription: '',
      isSignUp: false,
      isStoreExist: false,
      isAdmin: false,
      users: [],
      user: '',
      spApiStoreStatus: '',
      adStoreStatus: '',
      profileId: '',
      selectedUser: ''
    })
  },
  extraReducers: {
    [CreateAppointment.pending]: (state, action) => ({
      ...state,
      success: false,
      loading: true
    }),
    [CreateAppointment.fulfilled]: (state, action) => {
      notification('success', action?.payload?.message);
      state.loading = false
    },
    [CreateAppointment.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      success: false,
      loading: false
    })
  }
});

const { reducer, actions } = auth;

export const {
  SetState, LogOut
} = actions;

export default reducer;
