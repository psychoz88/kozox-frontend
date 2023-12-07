import styled from 'styled-components';

import {
  backgroundElementColor,
  dirtyGreyTextColor,
  dirtyWhiteTextColor,
  elementsGreyColor,
  maxGreenTextColor,
} from 'constants/styleVars';

export const Container = styled.div``;

export const Title = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  color: ${dirtyWhiteTextColor};
  margin: 0;
  text-align: center;
`;

export const AdditionalText = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${dirtyGreyTextColor};
  margin: 16px auto;
  text-align: center;
  max-width: 700px;
`;

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

export const ItemTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${maxGreenTextColor};
  margin: 0;
  border-bottom: 1px solid ${elementsGreyColor};
  padding: 20px 16px 12px;
`;

export const ItemContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${dirtyWhiteTextColor};
  padding: 12px 16px 20px;
`;
