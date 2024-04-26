import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './sliceAdvers';
import persistStore from 'redux-persist/es/persistStore';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    adverts: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
