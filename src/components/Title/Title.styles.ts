import styled from 'styled-components';

import {
  dirtyGreyTextColor,
  dirtyWhiteTextColor,
  fontSizeXXXXLg,
  fontSizeXXXXXLg,
  fontSizeXXXXXXLg,
  inputFocusedGreenColor,
  lineHeightXXLg,
  lineHeightXXXXLg,
  lineHeightXXXXXLg,
  offset80,
  offsetXLg,
} from 'constants/styleVars';

export const Container = styled.div<{isPageTitle?: boolean}>`
  line-height: ${lineHeightXXLg};
  margin: ${offset80} 0;
  text-align: center;

  ${({isPageTitle}) =>
    isPageTitle &&
    `
    border-bottom: 1px solid ${inputFocusedGreenColor};
    padding-bottom: 25px;
  `}
`;

export const TitleParagraph = styled.p<{isPageTitle?: boolean}>`
  color: ${dirtyWhiteTextColor};
  font-size: ${({isPageTitle}) => isPageTitle ? fontSizeXXXXXXLg : fontSizeXXXXXLg}};
  line-height: ${({isPageTitle}) => isPageTitle ? lineHeightXXXXXLg : lineHeightXXXXLg}};
  margin: 0 0 ${offsetXLg};
`;

export const SubTitleParagraph = styled.p`
  color: ${dirtyGreyTextColor};
  font-size: ${fontSizeXXXXLg};
  margin: 0;
`;
