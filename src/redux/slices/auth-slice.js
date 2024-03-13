import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { axiosBaseUrl, setAuthToken } from '../../config/axios-configuration';

const axios = axiosBaseUrl();

export const SignIn = createAsyncThunk(
  'auth/signIn',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/sign-in', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
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

export const SignUp = createAsyncThunk(
  'auth/signUp',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/sign-up', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
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

export const VerifyEmial = createAsyncThunk(
  'auth/verifyEmail',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.get('/auth/verify-email');
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
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

export const SendEmail = createAsyncThunk(
  'auth/SendEmail',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/resend-email', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
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

export const ResetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/reset-password', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
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

export const RefreshUser = createAsyncThunk(
  'user/getRefreshUser',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get('/users/');
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
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
)

const auth = createSlice({
  name: 'auth',
  initialState: {
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
    saleSupportLogin: false,
    selectedUser: '',
    connectedStore: ''
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
    [SignIn.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [SignIn.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      const { token } = action.payload;
      state.message = action.payload?.message;
      state.isStoreExist = action.payload?.user?.isStoreExist;
      state.isAdmin = action.payload?.user?.isAdmin;
      state.spApiStoreStatus = action.payload?.user?.spApiStoreStatus;
      state.adStoreStatus = action.payload?.user?.adStoreStatus;
      state.profileId = action.payload?.user?.profileId;
      state.success = true;
      state.loading = false;
      setAuthToken(token);
    },
    [SignIn.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
    [VerifyEmial.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [VerifyEmial.fulfilled]: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      message: action.payload.message,
    }),
    [VerifyEmial.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err?.error,
    }),
    [SignUp.pending]: (state, action) => ({
      ...state,
      success: false,
      loading: true
    }),
    [SignUp.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload.message,
      success: true,
      loading: false,
      isSignUp: true
    }),
    [SignUp.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      success: false,
      loading: false
    }),
    [SendEmail.pending]: (state, action) => ({
      ...state,
      success: false,
      loading: true
    }),
    [SendEmail.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload.message,
      success: true,
      loading: false
    }),
    [SendEmail.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err.error,
      success: false,
      loading: false
    }),
    [ResetPassword.pending]: (state, action) => ({
      ...state,
      success: false,
      loading: true
    }),
    [ResetPassword.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload.message,
      loading: false,
      success: true
    }),
    [ResetPassword.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      success: true,
      loading: false
    }),
    [RefreshUser.pending]: (state, action) => ({
      ...state,
      loading: true
    }),
    [RefreshUser.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload.message,
      loading: false,
      isStoreExist: action.payload?.user?.isStoreExist,
      isAdmin: action.payload?.user?.isAdmin,
      spApiStoreStatus: action.payload.spApiStoreStatus,
      adStoreStatus: action.payload.adStoreStatus,
      profileId: action.payload.profileId
    }),
    [RefreshUser.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false
    })
  }
});

const { reducer, actions } = auth;

export const {
  SetState, LogOut
} = actions;

export default reducer;
