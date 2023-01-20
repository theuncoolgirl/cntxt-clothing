import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => ({
      ...state,
      categories: action.payload,
    }),
  },
};

const categoriesSlice = createSlice(options);

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
