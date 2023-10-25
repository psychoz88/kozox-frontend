import styled, {css} from 'styled-components';

import {
  fontSizeXLg,
  fontSizeLg,
  lineHeightXLg,
  fontWeightSemiBold,
  offsetDef,
  fontSizeMd,
  lineHeightDefault,
  fontSizeDefault,
  offsetXXSm,
  fontWeightExtraBold,
  NW2FontSizeH1Xs,
  mdBp,
  NW2FontSizeH1Md,
  lgBp,
  NW2FontSizeH1Lg,
  NW2FontSizeH2Xs,
  NW2FontSizeH2Md,
  NW2FontSizeH3Xs,
  NW2FontSizeH3Md,
  NW2FontSizeH4Xs,
  NW2FontSizeH4Md,
  NW2FontSizeH6,
  NW2FontSizeH7,
  fontWeightBold,
  offsetXLg,
  NW2FontSizeH4Lg,
  NW2FontSizeH5Md,
  NW2FontSizeH5Xs,
  app_colors,
} from 'constants/styleVars';

type TConvertColor<T> = {
  [P in keyof T]?: boolean;
};
export type TColor = typeof app_colors;

export type TColorProps = {
  primary?: boolean;
} & TConvertColor<TColor>;

type PropsType = TColorProps & {
  inline?: boolean;
  fontWeight?: string;
  fontSize?: string;
  offset?: string;
};

export const getColorFromProps = ({
  theme,
  ...prop
}: TColorProps & {theme: any}) => {
  let colorVar = '';
  const colorsObj: Record<string, string> = app_colors;
  const colorProps: Record<string, any> = prop;

  for (const color in prop) {
    if (color === 'primary' && Boolean(prop[color])) {
      colorVar = theme.primaryColor;
      break;
    }

    if (Boolean(colorProps[color]) && colorsObj[color]) {
      colorVar = colorsObj[color];
      break;
    }
  }
  return colorVar;
};

export const PageTitle = styled.div<PropsType>`
  display: ${({inline}) => (inline ? 'inline-block' : 'block')};
  font-size: ${fontSizeXLg};
  line-height: ${lineHeightXLg};
  font-weight: ${({fontWeight}) =>
    fontWeight ? fontWeight : fontWeightSemiBold};
  margin-bottom: ${offsetDef};

  color: ${(props) => getColorFromProps(props)};
`;

export const SubPageTitle = styled(PageTitle)<PropsType>`
  font-size: ${fontSizeLg};
  line-height: ${lineHeightXLg};
`;

export const BlockTitle = styled(PageTitle)<PropsType>`
  font-size: ${fontSizeMd};
  line-height: ${lineHeightDefault};
`;

export const SubBlockTitle = styled(PageTitle)<PropsType>`
  font-size: ${fontSizeDefault};
  line-height: ${lineHeightDefault};
  margin-bottom: ${offsetXXSm};
`;

export const sharedHeadingStyle = css`
  text-transform: uppercase;
  font-weight: ${fontWeightExtraBold};
  line-height: 1.2;
  margin: 0;
`;

export const StyledH1 = styled.h1<PropsType>`
  ${sharedHeadingStyle};
  font-size: ${NW2FontSizeH1Xs};
  color: ${(props) => getColorFromProps(props)};
  line-height: 0.79;
  ${({offset}) => (offset ? `margin-top: ${offset}` : '')};

  @media (min-width: ${mdBp}px) {
    font-size: ${NW2FontSizeH1Md};
  }

  @media (min-width: ${lgBp}px) {
    font-size: ${NW2FontSizeH1Lg};
  }
`;

export const StyledH2 = styled.h2<PropsType>`
  ${sharedHeadingStyle};
  font-size: ${NW2FontSizeH2Xs};
  color: ${(props) => getColorFromProps(props)};

  @media (min-width: ${mdBp}px) {
    font-size: ${NW2FontSizeH2Md};
  }
`;

export const StyledSubH2 = styled.div<PropsType>`
  font-size: ${fontSizeLg};
  color: ${(props) => getColorFromProps(props)};
  font-weight: ${fontWeightBold};
  line-height: 1.1;
  ${({offset}) => (offset ? `margin-top: ${offset}` : '')};

  @media (min-width: ${mdBp}px) {
    font-size: ${NW2FontSizeH5Md};
  }
`;

export const StyledH3 = styled.h3<PropsType>`
  ${sharedHeadingStyle};
  font-size: ${NW2FontSizeH3Xs};
  color: ${(props) => getColorFromProps(props)};

  @media (min-width: ${mdBp}px) {
    font-size: ${NW2FontSizeH3Md};
  }
`;

export const StyledH4 = styled.h4<PropsType>`
  ${sharedHeadingStyle};
  font-size: ${NW2FontSizeH4Xs};
  color: ${(props) => getColorFromProps(props)};

  * + & {
    margin-top: ${offsetXLg};
  }

  @media (min-width: ${mdBp}px) {
    font-size: ${NW2FontSizeH4Md};

    * + & {
      margin-top: ${offsetDef};
    }
  }
  @media (min-width: ${lgBp}px) {
    font-size: ${NW2FontSizeH4Lg};
  }
`;

export const StyledH5 = styled.h5<PropsType>`
  ${sharedHeadingStyle};
  font-size: ${NW2FontSizeH5Xs};
  color: ${(props) => getColorFromProps(props)};

  @media (min-width: ${mdBp}px) {
    font-size: ${NW2FontSizeH5Md};
  }
`;

export const StyledH6 = styled.h6<PropsType>`
  ${sharedHeadingStyle};
  font-size: ${NW2FontSizeH6};
  color: ${(props) => getColorFromProps(props)};
  letter-spacing: 0.02em;
`;

export const StyledH7 = styled.h6<PropsType>`
  ${sharedHeadingStyle};
  font-size: ${NW2FontSizeH7};
  color: ${(props) => getColorFromProps(props)};
  letter-spacing: 0.02em;
`;

export const StyledSpan = styled.span<PropsType>`
  display: ${({inline}) => (inline ? 'inline-block' : 'initial')};
  color: ${(props) => getColorFromProps(props)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 'inherit')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'inherit')};
  ${({offset}) => (offset ? `margin-top: ${offset}` : '')}
`;

export const LinkStyles = css`
  text-decoration: underline;
  color: inherit;
  font-weight: ${fontWeightBold};

  &:hover {
    color: ${(props) => getColorFromProps(props)};
  }
`;
export const Link = styled.a<PropsType>`
  ${LinkStyles};
`;
