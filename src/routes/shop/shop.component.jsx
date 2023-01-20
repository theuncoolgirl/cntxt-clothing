import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/categories.reducer';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
    // eslint-disable-next-line
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
