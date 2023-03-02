import { createSlice } from '@reduxjs/toolkit';
import { Category } from './categories.types';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CategoriesState = {
  categories: Category[];
  error: Error | null;
  isLoading: Boolean;
}

const initialState: CategoriesState = {
  categories: [],
  error: null,
  isLoading: false,
};

const options = {
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesFailed: (state: CategoriesState, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesStart: (state: CategoriesState) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state: CategoriesState, action: PayloadAction<Category[]>) => {
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
