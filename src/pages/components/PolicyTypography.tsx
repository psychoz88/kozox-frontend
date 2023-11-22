import styled, {css} from 'styled-components';
import {NavLink} from 'react-router-dom';

import {
  offsetXSm,
  offsetDef,
  offsetLg,
  offsetXXLg,
  fontSizeXSm,
  fontSizeMd,
  fontSizeLg,
  fontWeightNormal,
  fontWeightBold,
  lineHeightSm,
  lineHeightMd,
  lineHeightLg,
  lineHeightXL,
  blueTextColor,
  fontWeightExtraBold,
  fontSizeSm,
  dirtyWhiteTextColor,
} from 'constants/styleVars';

const MAX_WIDTH = '572px';

const sharedParagraphStyle = css`
  font-weight: ${fontWeightNormal};
  font-size: ${fontSizeMd};
  line-height: ${lineHeightLg};
  margin-bottom: ${offsetXSm};
`;

const sharedLinkStyle = css`
  text-decoration: underline;
  color: inherit;
  font-weight: ${fontWeightBold};

  &:hover {
    color: ${blueTextColor};
  }
`;

export const Content = styled.div``;

export const Section = styled.section`
  margin-bottom: ${offsetXXLg};
`;

export const Container = styled.div`
  margin-bottom: ${offsetDef};
`;

export const StyledContainer = styled(Container)`
  max-width: ${MAX_WIDTH};
`;

export const Title = styled.h6`
  font-weight: ${fontWeightBold};
  font-size: ${fontSizeLg};
  line-height: ${lineHeightXL};
  margin-bottom: ${offsetDef};
  color: ${dirtyWhiteTextColor};
`;

export const SubTitle = styled(Title)`
  margin-bottom: ${offsetXSm};
`;

export const SubSubTitle = styled.h5`
  font-weight: ${fontWeightBold};
  font-size: ${fontSizeMd};
  line-height: ${lineHeightLg};
  margin-bottom: ${offsetXSm};
`;

export const StyledTitle = styled.div`
  text-transform: uppercase;
  font-weight: ${fontWeightExtraBold};
  line-height: 1.2;
  margin: 0;
  line-height: ${lineHeightMd};
  margin-bottom: ${offsetXSm};
  font-size: ${fontSizeSm};
  color: ${dirtyWhiteTextColor};
  letter-spacing: 0.02em;
`;

export const Paragraph = styled.p`
  ${sharedParagraphStyle}
`;

export const StyledUnorderedList = styled.ul`
  ${sharedParagraphStyle};
  padding-left: ${offsetLg};
  list-style-type: disc;
`;

export const StyledCircleUnorderedList = styled(StyledUnorderedList)`
  list-style-type: circle;
`;

export const StyledList = styled.li`
  margin-bottom: ${offsetXSm};
`;

export const StyledNavLink = styled(NavLink)`
  ${sharedLinkStyle}
`;

export const StyledExternalLink = styled.a`
  ${sharedLinkStyle}
`;

export const Text = styled.p`
  font-weight: ${fontWeightNormal};
  font-size: ${fontSizeXSm};
  line-height: ${lineHeightSm};
`;

export const SecondaryText = styled(Text)`
  color: ${dirtyWhiteTextColor};
`;
