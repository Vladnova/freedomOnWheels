import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts, getAllAdverts } from 'api/adverts';


export const fetchAdverts = createAsyncThunk(
  'adverts/FirstPage',
  async (page, thunkaAPI) => {
    try {
      return await getAdverts(page);
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);


export const fetchLoadMore = createAsyncThunk(
  'adverts/LoadMore',
  async (page, thunkaAPI) => {
    try {
      return await getAdverts(page);
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);


export const fetchAllAdverts = createAsyncThunk(
  'adverts/All',
  async (_, thunkaAPI) => {
    try {
      return await getAllAdverts();
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);
