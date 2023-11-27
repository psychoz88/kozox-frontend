import {
  dirtyGreyTextColor,
  fontSizeXXXXXLg,
  lineHeightXXXXLg,
  offsetXSm,
  whiteColor,
} from 'constants/styleVars';
import styled from 'styled-components';

export const Container = styled.div`
  color: ${dirtyGreyTextColor};
`;

export const FirstBlock = styled.div``;

export const Title = styled.p`
  font-size: ${fontSizeXXXXXLg};
  line-height: ${lineHeightXXXXLg};
  color: ${whiteColor};
  margin: 0 0 ${offsetXSm};
`;

export const Text = styled.div`
  font-size: 18px;
  line-height: 26px;
`;

export const SecondBlock = styled.div``;

export const BlockItem = styled.div``;

export const ItemTitle = styled.p``;

export const ItemLink = styled.a``;
