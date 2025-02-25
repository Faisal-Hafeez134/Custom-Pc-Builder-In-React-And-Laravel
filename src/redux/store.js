import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  
});
// export default store;
