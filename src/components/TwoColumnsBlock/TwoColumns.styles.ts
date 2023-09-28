import styled, {css} from 'styled-components';

import {
  xLgBp,
  whiteColor,
  mdBp,
  offsetXLg,
  offsetXXLg,
  offsetXXXLg,
  offsetXXXXLg,
  offsetXSm,
  fontWeightExtraBold,
  fontSizeSm,
  lineHeightMd,
  fontWeightBold,
  offsetSm,
  offsetDef,
  NW2BackIconSize,
  modalTwoColumnFooterHeight,
  greyTextColor,
} from 'constants/styleVars';

const desktopLayoutBreakpoint = xLgBp;
const containerSmPaddingLeftAndRight = offsetDef;
const containerMdPaddingLeftAndRight = offsetXXLg;

export const StyledWrapper = styled.div<{
  isHasFooter: boolean;
  isMobile: boolean;
  customPadding?: string;
  gridColumns?: string;
}>(({customPadding, isHasFooter, isMobile, gridColumns}) => {
  const horizontalPadding = isMobile
    ? containerSmPaddingLeftAndRight
    : containerMdPaddingLeftAndRight;

  const bottomPadding = isHasFooter
    ? `calc(${modalTwoColumnFooterHeight} + ${
        isMobile ? offsetXXLg : offsetXXXLg
      })`
    : offsetXXXXLg;

  return css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${whiteColor};

    padding: ${customPadding ||
    `${offsetXXXXLg} ${horizontalPadding} ${bottomPadding}`};

    ${isHasFooter &&
    css`
      padding-bottom: ${bottomPadding};
    `};

    @media (min-width: ${desktopLayoutBreakpoint}px) {
      display: grid;
      grid-template-columns: ${gridColumns || '1fr 2fr'};
    }
  `;
});

export const MobileContent = styled.div<{
  isRightColumnFullHeight?: boolean;
}>`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: ${desktopLayoutBreakpoint}px) {
    overflow-y: initial;
    overflow-x: initial;
  }

  ${({isRightColumnFullHeight}) =>
    isRightColumnFullHeight
      ? `
    flex-grow: 1; // e.g. google map needs to take all remaining height
  `
      : ''}
`;

export const StyledColLeft = styled.div`
  overflow-y: initial;
  overflow-x: initial;

  @media (min-width: ${desktopLayoutBreakpoint}px) {
    overflow-y: auto;
    overflow-x: hidden;
    margin-right: ${offsetXLg};
  }
`;

export const StyledColLeftHeader = styled.div`
  display: grid;
  grid-template-columns: ${NW2BackIconSize} 1fr;
  grid-column-gap: ${offsetXXLg};
  align-items: start;
  margin-bottom: 40px;
`;

export const StyledTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${offsetXSm};
  border-bottom: 1px solid black;
  padding-bottom: ${offsetXLg};
`;

export const StyledTitle = styled.div`
  font-size: 26px;
  line-height: 34px;
  font-weight: ${fontWeightExtraBold};
  text-transform: uppercase;
  letter-spacing: 0.02em;

  @media (min-width: ${mdBp}px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const StyledSubtitle = styled.div`
  font-size: ${fontSizeSm};
  line-height: ${lineHeightMd};
  font-weight: ${fontWeightBold};
  color: ${greyTextColor};
`;

export const StyledColLeftMain = styled.div<{
  leftColumnStyles?: any;
}>`
  @media (min-width: ${desktopLayoutBreakpoint}px) {
    padding-left: calc(${NW2BackIconSize} + ${offsetXXLg});
  }
  ${({leftColumnStyles}) => leftColumnStyles};
`;

export const StyledColRight = styled.div<{
  isRightColumnFullHeight?: boolean;
  rightColumnStyles?: any;
}>`
  height: auto; // otherwise it takes all height even with little content
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  ${({isRightColumnFullHeight}) =>
    isRightColumnFullHeight
      ? `
    height: 100%;
    flex-grow: 1; // e.g. google map needs to take all remaining height
  `
      : ''};

  ${({rightColumnStyles}) => rightColumnStyles};

  @media (min-width: ${desktopLayoutBreakpoint}px) {
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const StyledFooter = styled.div`
  padding: ${offsetSm} ${containerSmPaddingLeftAndRight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${whiteColor};
`;
