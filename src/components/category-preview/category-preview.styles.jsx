import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryTitle = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const CategoryPreviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const ViewMore = styled.span`
  margin-left: 20px;
  font-size: 20px;
  color: #808282;
  cursor: pointer;
`;
