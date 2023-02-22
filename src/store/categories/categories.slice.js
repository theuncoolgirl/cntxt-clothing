import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'categories',
  initialState: {
    categories: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    fetchCategoriesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
