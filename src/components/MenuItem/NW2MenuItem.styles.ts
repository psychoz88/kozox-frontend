import styled, {css} from 'styled-components';
import {Dropdown, Menu} from 'antd';
import {NavLink} from 'react-router-dom';

import {
  app_colors,
  blackColor,
  fontWeightBold,
  NW2Primary,
  offsetDef,
  offsetXXSm,
  offsetXXLg,
  whiteColor,
  offsetNone,
  borderRadiusDef,
  fontSizeXSm,
  lineHeightSm,
  fontSizeLg,
  offsetSm,
  NW2Blue200Color,
  lineHeightXL,
} from 'constants/styleVars';
import { TArrowBlockProps, TItemStyle, TPosition } from './types';
// import Icon from 'components/Icon';

const OFFSET_6 = '6px';
const OFFSET_10 = '10px';
const OFFSET_18 = '18px';
const BUTTON_WIDTH = '70px';
const UNDERLINE_THICKNESS = '5px';
const NEGATIVE_INLINE_OFFSET = '-13px';
const INLINE_OFFSET = '13px';
const DROPDOWN_WIDTH = '280px';

export const OuterWrapper = styled.div<{position: TPosition}>`
  display: flex;
  margin: 0 ${offsetXXSm};
  min-width: ${BUTTON_WIDTH};
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s, border-color 0.15s,
    stroke 0.15s;

  &:hover * {
    color: ${NW2Primary};
    transition: color 0.15s, background-color 0.15s, border-color 0.15s,
      stroke 0.15s;

    & > :after {
      color: ${NW2Primary};
    }

    svg path.styled-stroke,
    svg circle.styled-stroke {
      transition: stroke 0.15s;
      stroke: ${NW2Primary};
    }
  }

  justify-content: ${({position}) => {
    switch (position) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
    }
  }};
`;

export const Wrapper = styled.div<TArrowBlockProps>`
  position: relative;
  color: ${whiteColor};

  line-height: initial;
  max-width: fit-content;

  svg path.styled-stroke,
  svg circle.styled-stroke {
    stroke: ${whiteColor};
  }

  &:before {
    content: '';
    height: ${UNDERLINE_THICKNESS};
    width: 100%;
    position: absolute;
    bottom: -6px;
    left: 0;
    background-color: transparent;
  }

  ${({isActive, color}) =>
    isActive &&
    css`
      &.ant-dropdown-open {
        svg path.styled-stroke,
        svg circle.styled-stroke {
          stroke: ${color && app_colors[color]};
        }
      }

      :before {
        background-color: ${color && app_colors[color]};
        opacity: 1;
      }
    `};

  ${({itemStyle}) =>
    itemStyle === 'inline' &&
    css`
      &:before {
        bottom: -13px;
      }
    `}
`;

export const DropdownWrapper = styled(Wrapper)`
  color: ${whiteColor};

  &:before {
    left: -3%;
    width: 106%;
  }
`;

export const PlainNavLink = styled(NavLink)`
  ${whiteColor};
`;

export const StyledNavLink = styled(PlainNavLink)`
  display: flex;
  justify-content: center;
  min-width: 70px;
  margin: ${offsetNone} ${offsetXXSm};
`;

export const SimpleMenuItem = styled.div<
  TArrowBlockProps & {itemstyle?: TItemStyle}
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  color: inherit;
  font-size: ${fontSizeXSm};
  line-height: ${lineHeightSm};
  font-weight: ${fontWeightBold};
  transition: color 0.15s, background-color 0.15s, border-color 0.15s,
    stroke 0.15s;

  ${({itemstyle}) =>
    itemstyle === 'inline' &&
    css`
      flex-direction: row;
      font-size: ${fontSizeLg};
      line-height: ${lineHeightXL};

      & > div {
        margin-right: ${offsetSm};
      }
      & > span {
        margin-right: ${OFFSET_6};
      }
    `};
`;

export const StyledDropdown = styled(Dropdown)<{$itemstyle?: TItemStyle}>`
  transition: color 0.15s, background-color 0.15s, border-color 0.15s,
    stroke 0.15s;

  &.ant-dropdown-trigger {
    padding-left: 0;
    padding-bottom: 0;
  }
`;

export const StyledMenuItem = styled(Menu.Item)<{disabled?: boolean}>`
  padding: ${OFFSET_10} ${offsetDef} ${OFFSET_10} ${offsetXXLg};

  ${({disabled}) =>
    !disabled &&
    css`
      .ant-dropdown-menu-item:active {
        font-weight: ${fontWeightBold};

        transition: background-color 0.15s;
        background-color: ${NW2Blue200Color};
      }
    `};
`;

export const StyledMenu = styled(Menu)<{
  width?: string;
  itemstyle?: TItemStyle;
}>`
  padding: ${offsetNone};
  border-radius: ${borderRadiusDef};
  width: ${({width}) => width ?? DROPDOWN_WIDTH};
  overflow: hidden;
  transition: background-color 0.15s, color 0.15s;
  top: ${({itemstyle}) =>
    itemstyle === 'inline' ? `${INLINE_OFFSET}` : `${OFFSET_6}`};

  li {
    position: relative;
    transition: background-color 0.15s, color 0.15s;

    &:before {
      content: '';
      width: 6px;
      height: 13px;
      position: absolute;
      bottom: 14px;
      left: ${offsetXXLg};
      background-color: transparent;
      transition: background-color 0.15s;
    }
  }

  .ant-dropdown-menu-item:hover {
    transition: background-color 0.15s;
    background-color: ${NW2Blue200Color};
  }

  .ant-dropdown-menu-item:active {
    font-weight: ${fontWeightBold};

    transition: background-color 0.15s;
    background-color: ${NW2Blue200Color};
  }

  .ant-dropdown-menu-item-selected {
    background-color: ${whiteColor};
    font-weight: ${fontWeightBold};
    color: ${blackColor};

    & span {
      margin-left: ${OFFSET_18};
    }

    &:before {
      background-color: ${NW2Primary};
    }

    &:hover {
      &:before {
        background-color: ${blackColor};
      }
    }
  }
`;

export const MenuItem = styled(SimpleMenuItem)`
  align-items: flex-end;

  &:before {
    width: 100%;
    left: ${offsetNone};
  }

  ${({itemstyle}) =>
    itemstyle === 'inline' &&
    css`
      align-items: center;
      &:before {
        bottom: ${NEGATIVE_INLINE_OFFSET};
      }
    `}
`;

export const AvatarInnerBlock = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;

  &,
  button {
    color: ${({theme}) => theme.navigation.color};
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    margin-left: 6px;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: currentcolor transparent transparent transparent;
    border-radius: 4px;
    transform: rotateX(0);
  }

  &:after,
  svg {
    transition: all 0.25s;
  }

  &.ant-dropdown-open {
    &,
    svg,
    button,
    button:before {
      color: ${({theme}) => theme.primaryColor};
      opacity: 1;
    }
    &:after {
      transform: rotateX(180deg);
    }
  }
`;

export const ArrowBlock = styled(AvatarInnerBlock)<TArrowBlockProps>`
  align-items: flex-end;
  color: ${whiteColor};

  &:after {
    margin-bottom: ${OFFSET_6};
    transition: color 0.15s;
  }

  &.ant-dropdown-open {
    &,
    svg,
    button,
    button:before {
      color: ${NW2Primary};
      opacity: 1;
    }

    svg path.styled-stroke,
    svg circle.styled-stroke {
      stroke: ${NW2Primary};
    }

    div:before {
      background-color: ${({color}) => color && app_colors[color]};
      opacity: 1;
    }
  }
`;

// export const StyledIcon = styled(Icon)`
//   margin-right: ${offsetXXSm};
// `;
