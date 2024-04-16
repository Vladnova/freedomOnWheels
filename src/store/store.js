import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './sliceAdvers';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
