import styled from 'styled-components';

import {
  backgroundElementColor,
  dirtyWhiteTextColor,
  elementsGreyColor,
  maxGreenTextColor,
} from 'constants/styleVars';

export const Block = styled.div<{isMobile: boolean}>`
  display: grid;
  grid-template-columns: ${({isMobile}) => (isMobile ? '1fr' : '1fr 1fr 1fr')};
  gap: 20px;
`;

export const ItemBlock = styled.div`
  background: ${backgroundElementColor};
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${maxGreenTextColor};
  margin: 0;
  border-bottom: 1px solid ${elementsGreyColor};
  padding: 20px 16px 12px;
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${dirtyWhiteTextColor};
  padding: 12px 16px 20px;
`;
