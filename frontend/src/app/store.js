import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/navigation/navigationSlice';
import authReducer from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    nav: navReducer,
    auth: authReducer
  }
});
