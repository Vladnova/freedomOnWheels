import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAllAdverts, fetchLoadMore } from './thunks';
import {
  handelGetAdverts,
  handelGetAllAdverts,
  handelLoadMore,
  handelPending,
  handelRejected,
} from './handels';
import persistConfig from './persistConfig';
import persistReducer from 'redux-persist/es/persistReducer';

const sliceAdvers = createSlice({
  name: 'adverts',
  initialState: {
    allItems: [],
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
      .addCase(fetchLoadMore.fulfilled, handelLoadMore)
      .addCase(fetchAllAdverts.fulfilled, handelGetAllAdverts)
      .addMatcher(action => action.type.endsWith('pending'), handelPending)
      .addMatcher(action => action.type.endsWith('rejected'), handelRejected);
  },
});

export const advertsReducer = sliceAdvers.reducer;

export const { addFavorites, delFavorites, loadMore } = sliceAdvers.actions;

const persistedReducer = persistReducer(persistConfig, advertsReducer);

export default persistedReducer;
