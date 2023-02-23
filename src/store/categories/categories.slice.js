import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  categories: [],
  error: null,
  isLoading: false,
};

const options = {
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesStart: (state, action) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
  },
};

const categoriesSlice = createSlice(options);

export const {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
