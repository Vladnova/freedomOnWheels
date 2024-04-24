import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './sliceAdvers';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    adverts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
