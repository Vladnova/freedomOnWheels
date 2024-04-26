import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  location: '',
  equipment: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilter: (_, { payload }) => {
      return { ...payload };
    },
    resetFilter: () => initialState,
  },
});

export const filterReducer = filterSlice.reducer;

export const { addFilter, resetFilter } = filterSlice.actions;
