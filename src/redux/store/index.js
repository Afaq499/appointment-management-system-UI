import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from '../slices/auth-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'store']
  // transforms: [storesTransform]
};

const reducers = combineReducers({
  auth: authSlice
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/LogOut') {
    state = undefined;
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true
});

