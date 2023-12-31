import styled, {css} from 'styled-components';

import {
  offsetDef,
  fontSizeXSm,
  lineHeightSm,
  offsetXLg,
  lgBp,
  sectionInsetXs,
  mdBp,
  sectionInsetLg,
  offsetXXLg,
  contentMaxWidthLg,
  mainColor,
  blueTextColor,
  greyTextColor,
  fontWeightNormal,
  elementsGreyColor,
  offsetSm,
  offsetLg,
} from 'constants/styleVars';

const breakpoint = `${lgBp}px`;

export const FooterContainer = styled.footer<{bottomOffset?: string}>`
  width: 100%;
  text-transform: uppercase;
  background-color: ${mainColor};
  border-top: 1px solid ${elementsGreyColor};
  color: ${greyTextColor};
  font-size: ${fontSizeXSm};
  line-height: ${lineHeightSm};
  padding: ${sectionInsetXs} ${offsetXLg}
    ${({bottomOffset}) => (bottomOffset ? bottomOffset : sectionInsetLg)}
    ${offsetDef};

  @media (min-width: ${mdBp}px) {
    padding: ${offsetDef} 0;
  }
`;

export const Container = styled.div<{offset?: string}>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({offset}) => (offset ? `margin-top: ${offset}` : '')}
  padding: 0 ${offsetDef};

  @media (min-width: ${mdBp}px) {
    padding: 0 ${offsetXXLg};
  }

  @media (min-width: ${lgBp}px) {
    max-width: calc(${contentMaxWidthLg} + 2 * ${offsetXXLg});
  }
`;

export const FooterRow = styled.div`
  display: grid;
  grid-gap: ${sectionInsetXs};
  justify-content: center;

  @media (min-width: ${mdBp}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const sharedFooterBlockStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  > * + * {
    margin-left: ${offsetDef};
  }

  @media (min-width: ${lgBp}px) {
    > * + * {
      margin-left: ${offsetXLg};
    }
  }
`;

export const FooterLinkBlock = styled.div`
  display: grid;
  grid-gap: ${offsetDef};
  text-align: center;

  @media (min-width: ${mdBp}px) {
    ${sharedFooterBlockStyles};
    grid-gap: ${offsetXLg};

    > * + * {
      margin-left: 0;
    }
  }
`;

export const FooterBlock = styled.div`
  ${sharedFooterBlockStyles}
`;

export const Link = styled.a`
  color: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const StyledNavLink = styled.a`
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: ${fontWeightNormal};
  text-decoration: none;

  &:hover {
    color: ${blueTextColor};
  }
`;

export const Text = styled.span`
  min-width: 120px;
  display: inline-block;
  white-space: nowrap;

  @media (min-width: ${breakpoint}) {
    min-width: 0;
  }
`;

export const WithMarginLeftNoWrap = styled.span`
  margin-left: ${offsetXLg};
`;

export const CentralBlock = styled.div<{isMobile?: boolean}>`
  display: flex;
  gap: ${({isMobile}) => (isMobile ? offsetSm : offsetLg)};

  ${({isMobile}) =>
    isMobile &&
    `
    justify-content: center;
    flex-direction: column;
  `}
`;
