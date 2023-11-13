import styled from 'styled-components';

import {
  dirtyGreyTextColor,
  dirtyWhiteTextColor,
  fontSizeXXXXLg,
  fontSizeXXXXXLg,
  lineHeightXXLg,
  lineHeightXXXXLg,
  offset80,
  offsetXLg,
} from 'constants/styleVars';

export const Container = styled.div`
  line-height: ${lineHeightXXLg};
  margin: ${offset80} 0;
  text-align: center;
`;

export const TitleParagraph = styled.p`
  color: ${dirtyWhiteTextColor};
  font-size: ${fontSizeXXXXXLg};
  line-height: ${lineHeightXXXXLg};
  margin: 0 0 ${offsetXLg};
`;

export const SubTitleParagraph = styled.p`
  color: ${dirtyGreyTextColor};
  font-size: ${fontSizeXXXXLg};
  margin: 0;
`;
