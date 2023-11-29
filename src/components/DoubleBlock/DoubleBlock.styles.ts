import styled from 'styled-components';

import {
  backgroundElementColor,
  dirtyGreyTextColor,
  elementsGreyColor,
  fontSizeXXXXXLg,
  lineHeightXXXXLg,
  maxGreenTextColor,
  offset50,
  offset100,
  offsetXLg,
  whiteColor,
  fontSizeLg,
  lineHeightXL,
  lineHeightLg,
  fontSizeMd,
  offsetXXSm,
} from 'constants/styleVars';

export const Container = styled.div<{isMobile?: boolean}>`
  color: ${dirtyGreyTextColor};

  ${({isMobile}) =>
    isMobile
      ? `
        display: flex;
        flex-direction: column;
        gap: ${offset50};`
      : `
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: ${offset100};`}
`;

export const FirstBlock = styled.div``;

export const Title = styled.p`
  font-size: ${fontSizeXXXXXLg};
  line-height: ${lineHeightXXXXLg};
  color: ${whiteColor};
  margin: 0 0 ${offsetXLg};
`;

export const Text = styled.div`
  font-size: ${fontSizeLg};
  line-height: ${lineHeightXL};
`;

export const SecondBlock = styled.div`
  background: ${backgroundElementColor};
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
  height: 310px;

  div:nth-child(1) {
    border-bottom: 1px solid ${elementsGreyColor};
  }
  div:nth-child(3) {
    border-top: 1px solid ${elementsGreyColor};
  }
`;

export const BlockItem = styled.div`
  font-family: 'GT America Mono Trial', monospace;
  font-size: ${fontSizeMd};
  line-height: ${lineHeightLg};
  padding: ${offsetXLg};
`;

export const ItemTitle = styled.p`
  color: ${whiteColor};
  margin: 0 0 ${offsetXXSm};
`;

export const ItemLink = styled.a`
  color: ${maxGreenTextColor};
`;
