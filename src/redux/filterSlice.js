import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const filterAction = filterSlice.actions;
export default filterSlice.reducer;