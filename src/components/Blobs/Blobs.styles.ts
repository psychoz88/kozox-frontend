import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background: ${backgroundElementColor};
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
`;

export const ItemContent = styled(Link)`
  display: block;
  font-size: 16px;
  font-weight: 200;
  line-height: 24px;
  color: ${dirtyWhiteTextColor};
  padding: 25px 20px;
  text-align: center;
`;
