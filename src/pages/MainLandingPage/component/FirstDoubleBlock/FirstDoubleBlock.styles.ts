import styled from 'styled-components';

import {
  backgroundElementColor,
  dirtyGreyTextColor,
  elementsGreyColor,
  lineHeightXXXXLg,
  maxGreenTextColor,
  offset50,
  offset100,
  offsetXLg,
  whiteColor,
  lineHeightXL,
  lineHeightLg,
  fontSizeMd,
  offsetXXSm,
  offset80,
  contactsBoxShadow,
  offsetXXLg,
  fontSizeXXXXXXLg,
  fontWeightNormal,
  fontSizeXLg,
} from 'constants/styleVars';
import Button from 'components/Button';

export const Container = styled.div<{isMobile?: boolean}>`
  color: ${dirtyGreyTextColor};
  margin: ${offset80} 0;

  ${({isMobile}) =>
    isMobile
      ? `
        display: flex;
        flex-direction: column;
        gap: ${offset50};`
      : `
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: ${offset100};`}
`;

export const FirstBlock = styled.div`
`;

export const Title = styled.p`
  font-family: 'GT America Mono Trial', monospace;
  font-size: ${fontSizeXXXXXXLg};
  font-weight: ${fontWeightNormal};
  line-height: ${lineHeightXXXXLg};
  color: ${maxGreenTextColor};
  margin: 0 0 ${offsetXLg};
`;

export const Text = styled.div`
  font-size: ${fontSizeXLg};
  line-height: ${lineHeightXL};
`;

export const AdditionalButton = styled(Button)`
  margin-top: ${offsetXXLg};
`;

export const SecondBlock = styled.div`
  background: ${backgroundElementColor};
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
  height: 310px;
  box-shadow: ${contactsBoxShadow};

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

export const ItemTitle = styled.p<{margin?: string}>`
  color: ${whiteColor};
  margin: ${({margin}) => margin || `0 0 ${offsetXXSm}`};
`;

export const ItemLink = styled.a`
  color: ${maxGreenTextColor};
`;
