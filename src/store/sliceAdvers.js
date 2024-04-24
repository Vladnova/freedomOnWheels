import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './thunks';
import { handelGetAdverts, handelPending, handelRejected } from './handels';
import persistConfig from './persistConfig';
import persistReducer from 'redux-persist/es/persistReducer';

const sliceAdvers = createSlice({
  name: 'adverts',
  initialState: {
    favorites: [],
    items: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites.unshift(payload);
    },

    delFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: bilder => {
    bilder
      .addCase(fetchAdverts.fulfilled, handelGetAdverts)
      .addMatcher(action => action.type.endsWith('pending'), handelPending)
      .addMatcher(action => action.type.endsWith('rejected'), handelRejected);
  },
});

export const advertsReducer = sliceAdvers.reducer;

export const { addFavorites, delFavorites } = sliceAdvers.actions;

const persistedReducer = persistReducer(persistConfig, advertsReducer);

export default persistedReducer;
