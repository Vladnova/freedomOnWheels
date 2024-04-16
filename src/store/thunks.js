import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from 'api/adverts';


export const fetchAdverts = createAsyncThunk(
  'adverts/All',
  async (_, thunkaAPI) => {
    try {
      return await getAdverts();
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);
