import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './thunks';
import { handelGetAdverts, handelPending, handelRejected } from './handels';

const sliceAdvers = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: '',
  },
  extraReducers: bilder => {
    bilder
      .addCase(fetchAdverts.fulfilled, handelGetAdverts)
      .addMatcher(action => action.type.endsWith('pending'), handelPending)
      .addMatcher(action => action.type.endsWith('rejected'), handelRejected);
  },
});

export const advertsReducer = sliceAdvers.reducer;
