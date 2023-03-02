import { createSelector } from 'reselect';
import { CategoriesState } from './categories.slice';
import { CategoryMap } from './categories.types';

const selectCategorySlice = (state): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategorySlice],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategorySlice],
  (categories) => categories.isLoading
);
