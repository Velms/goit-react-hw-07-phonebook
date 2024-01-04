import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filterContact(state, { payload }) {
      state.value = payload;
    },
  },
});

export const  filterContact  = filterSlice.actions;

export const onFilterChange = state => state.filter.filter;
export default filterSlice.reducer;
