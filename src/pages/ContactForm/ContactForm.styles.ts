import styled from 'styled-components';

import {
  fontSizeMd,
  greyTextColor,
  maxGreenTextColor,
  offsetDef,
  xlg,
} from 'constants/styleVars';

export const Container = styled.div<{isMobile?: boolean}>`
  width: ${({isMobile}) => (isMobile ? 'inherit' : '500px')};
`;

export const FormGroup = styled.div<{
  columnNumber: number;
  columnNumberXLg?: number;
  gap?: number | string;
  alignItems?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${({columnNumber}) => columnNumber}, 1fr);
  grid-gap: ${({gap}) => (typeof gap === 'number' ? `${gap}px` : gap || 0)};
  align-items: ${({alignItems}) => alignItems || 'initial'};

  @media (min-width: ${xlg}) {
    grid-template-columns: repeat(
      ${({columnNumber, columnNumberXLg}) => columnNumberXLg || columnNumber},
      1fr
    );
  }

  > div {
    margin: 0;
  }
`;

export const StyledDiv = styled.div`
  color: ${greyTextColor};
  font-size: ${fontSizeMd};
  margin-top: ${offsetDef};
`;

export const StyledLink = styled.a`
  color: ${maxGreenTextColor};
`;
