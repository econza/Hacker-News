import { configureStore } from '@reduxjs/toolkit';
import mainState from './reducers/mainState';

export const store = configureStore({
  reducer: {
    mainState,
  },
});
