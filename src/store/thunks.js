import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from 'api/adverts';


export const fetchAdverts = createAsyncThunk(
  'adverts/All',
  async (page, thunkaAPI) => {
    try {
      return await getAdverts(page);
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);


