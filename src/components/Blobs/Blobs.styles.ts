import styled from 'styled-components';

import {
  backgroundElementColor,
  dirtyWhiteTextColor,
  elementsGreyColor,
} from 'constants/styleVars';

export const Container = styled.div``;

export const Block = styled.div<{isMobile: boolean}>`
  display: grid;
  grid-template-columns: ${({isMobile}) => (isMobile ? '1fr' : '1fr 1fr 1fr')};
  gap: 20px;
  margin-top: 80px;
`;

export const ItemBlock = styled.div`
  background: ${backgroundElementColor};
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
`;

export const ItemContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${dirtyWhiteTextColor};
  padding: 25px 20px;
  text-align: center;
`;
