import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewList,
  CategoryPreviewContainer,
  CategoryTitle,
  ViewMore,
} from './category-preview.styles';

const CategoryPreview = ({ products, title }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
        <Link to={`/shop/${title}`}>
          <ViewMore>View More &#10095;</ViewMore>
        </Link>
      </h2>
      <CategoryPreviewList>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewList>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
