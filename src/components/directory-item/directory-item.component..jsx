import { useNavigate } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemContent,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <DirectoryItemContainer onClick={goToCategoryHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemContent>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemContent>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
