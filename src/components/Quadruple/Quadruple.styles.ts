import styled from 'styled-components';

import {
  backgroundImagesColor,
  dirtyGreyTextColor,
  elementsGreyColor,
  fontSizeXXXXXLg,
  lineHeightXXXXLg,
  offsetXSm,
  offsetXXLg,
  whiteColor,
} from 'constants/styleVars';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${offsetXXLg};
  color: ${dirtyGreyTextColor};
`;

export const FirstBlock = styled.div`
  grid-column: span 6 / span 6;
`;

export const SecondBlock = styled.div`
  grid-column: span 6 / span 6;
  font-size: 18px;
  line-height: 26px;
`;

export const ThirdBlock = styled.div`
  grid-column: span 8 / span 8;
  background: ${backgroundImagesColor};
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
  padding: 20px;
`;

export const Image = styled.img<{height?: string}>`
  width: 100%;
  object-fit: contain;
  height: ${({height}) => height || 'auto'};
`;

export const FoursBlock = styled.div`
  grid-column: span 4 / span 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FoursBlockItem = styled.div`
  background: #0e1618;
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
  padding: 20px;
`;

export const Title = styled.p`
  font-size: ${fontSizeXXXXXLg};
  line-height: ${lineHeightXXXXLg};
  color: ${whiteColor};
  margin: 0 0 ${offsetXSm};
`;

export const FirstBlockDiv = styled.div`
  margin: ${offsetXSm} 0 0;
`;
