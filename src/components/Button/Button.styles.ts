import styled, {css} from 'styled-components';

import {
  blackColor,
  fontSizeLg,
  fontSizeSm,
  fontSizeXSm,
  fontSizeXXSm,
  lgBp,
  lineHeightSm,
  lineHeightXLg,
  lineHeightXSm,
  mdBp,
  dirtyGreyTextColor,
  middleGreenColor,
  maxGreenColor,
  minGreenColor,
  disabledColor,
  offsetDef,
  offsetSm,
  offsetXLg,
  offsetXSm,
  offsetXXSm,
  offsetXXXSm,
  whiteColor,
  maxGreenTextColor,
  buttonBackgroundColor,
  buttonHoverColor,
} from 'constants/styleVars';
import {TButtonBaseProps, TButtonSize} from './types';

const getSizes = (size?: TButtonSize, minimized?: boolean) => {
  const SIZE_MEDIUM = css`
    font-size: ${fontSizeSm};
    line-height: ${lineHeightSm};
    padding: ${offsetSm} ${minimized ? offsetSm : offsetXLg};
  `;

  const SIZE_SMALL = css`
    font-size: ${fontSizeXSm};
    line-height: ${lineHeightXSm};
    padding: ${offsetXSm} ${minimized ? offsetXSm : offsetDef};
  `;

  const SIZE_LARGE = css`
    font-size: ${fontSizeLg};
    line-height: ${lineHeightXLg};
    padding: ${offsetSm} ${minimized ? offsetSm : offsetXLg};
  `;

  switch (size) {
    case 'responsiveAdaptive':
      return css`
        ${SIZE_LARGE};

        @media (min-width: ${mdBp}px) {
          ${SIZE_MEDIUM};
        }

        @media (min-width: ${lgBp}px) {
          ${SIZE_SMALL};
        }
      `;
    case 'extraSmall':
      return css`
        font-size: ${fontSizeXXSm};
        line-height: 16px;
        padding: ${offsetXXSm} ${minimized ? offsetXXSm : offsetXSm};
      `;
    case 'medium':
      return SIZE_MEDIUM;
    case 'large':
      return SIZE_LARGE;

    case 'small':
    default:
      return SIZE_SMALL;
  }
};

const BaseButton = styled.button<TButtonBaseProps>(
  ({
    disabled,
    fullWidth,
    icon,
    iconPlace,
    inline,
    loading,
    minimized,
    size,
    borderColor,
  }) => {
    const offset = size === 'large' ? offsetSm : offsetXSm;

    return css`
      display: ${inline ? `inline-flex` : 'flex'};
      font-family: 'GT America Mono Trial', monospace;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      width: ${fullWidth ? '100%' : ''};
      padding: ${minimized ? offsetSm : `${offsetSm} ${offsetXLg}`};
      background-color: transparent;
      color: ${maxGreenTextColor};
      border: 1px solid ${borderColor || blackColor};
      transition:
        background-color 0.25s,
        border-color 0.25s,
        color 0.25s;
      border-radius: 5px;
      box-sizing: border-box;
      user-select: none;
      cursor: pointer;

      ${getSizes(size, minimized)};

      & > span {
        order: ${iconPlace === 'right' ? 0 : 1};
        margin: ${icon
          ? iconPlace === 'right'
            ? `0 ${offset} 0 0`
            : `0 0 0 ${offset}`
          : 0};
      }

      svg {
        cursor: pointer;
        ${size === 'large' &&
        minimized &&
        css`
          width: 26px;
          height: 26px;
        `}
      }

      ${loading &&
      css`
        pointer-events: none;
        cursor: not-allowed;
      `};

      ${disabled &&
      css`
        background-color: ${whiteColor};
        border-color: ${dirtyGreyTextColor};
        color: ${blackColor};
        pointer-events: none;
        cursor: not-allowed;

        svg {
          cursor: not-allowed;
        }
      `};
    `;
  },
);

export const PrimaryButton = styled(BaseButton)<{
  inverted?: boolean;
  active?: boolean;
  white?: boolean;
}>`
  background-color: ${buttonBackgroundColor};

  &:active {
    background-color: ${middleGreenColor};
  }

  ${({active}) =>
    active &&
    css`
      background-color: ${middleGreenColor};
    `};

  @media (hover: hover) {
    &:hover {
      background-color: ${buttonHoverColor};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${dirtyGreyTextColor};
    border-color: ${dirtyGreyTextColor};
    color: ${blackColor};
  }

  ${({inverted}) =>
    inverted &&
    css`
      background-color: ${blackColor};
      border-color: ${blackColor};
      color: ${whiteColor};

      &:active {
        background-color: ${whiteColor};
        color: ${blackColor};
        border-color: ${blackColor};
      }

      @media (hover: hover) {
        &:hover {
          background-color: ${whiteColor};
          color: ${blackColor};
          border-color: ${whiteColor};
        }
      }
    `}

  ${({white}) =>
    white &&
    css`
      background-color: ${whiteColor};
      border-color: ${whiteColor};
      color: ${blackColor};

      &:active {
        background-color: ${blackColor};
        color: ${whiteColor};
        border-color: ${whiteColor};
      }

      @media (hover: hover) {
        &:hover {
          background-color: ${blackColor};
          color: ${whiteColor};
          border-color: ${blackColor};
        }
      }
    `}
`;

export const SecondaryButton = styled(BaseButton)<{
  inverted?: boolean;
  active?: boolean;
}>`
  svg path.styled-stroke,
  svg circle.styled-stroke {
    stroke: ${blackColor};
  }

  &:active {
    border-color: ${minGreenColor};
    background-color: ${minGreenColor};
    color: ${blackColor};
  }

  ${({active}) =>
    active &&
    `
    border-color: ${minGreenColor};
    background-color: ${minGreenColor};
    color: ${blackColor};
  `};

  @media (hover: hover) {
    &:hover {
      border-color: ${blackColor};
      background-color: ${blackColor};
      color: ${whiteColor};

      svg path.styled-stroke,
      svg circle.styled-stroke {
        stroke: ${whiteColor};
      }
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${disabledColor};
    border-color: ${disabledColor};
    color: ${blackColor};
  }

  ${({inverted}) =>
    inverted &&
    css`
      border-color: ${whiteColor};
      color: ${whiteColor};

      svg path.styled-stroke,
      svg circle.styled-stroke {
        stroke: ${whiteColor};
      }

      @media (hover: hover) {
        &:hover {
          background-color: ${whiteColor};
          border-color: ${whiteColor};
          color: ${blackColor};

          svg path.styled-stroke,
          svg circle.styled-stroke {
            stroke: ${blackColor};
          }
        }
      }

      &:active {
        background-color: ${minGreenColor};
        border-color: ${minGreenColor};
      }
    `}
`;

export const LinkButton = styled(BaseButton)<{
  inverted?: boolean;
  active?: boolean;
}>`
  position: relative;
  display: inline-flex;
  color: ${whiteColor};
  border-radius: 0;
  border: none;
  background-color: transparent;
  padding: ${offsetXXXSm};

  svg path.styled-stroke,
  svg circle.styled-stroke {
    stroke: ${whiteColor};
  }

  > span {
    position: relative;
  }

  > span::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 3px;
    background: ${maxGreenColor};
    opacity: 0;
    transition: all 0.25s;
  }

  @media (hover: hover) {
    &:hover {
      > span::before {
        opacity: 1;
      }

      svg path.styled-stroke,
      svg circle.styled-stroke {
        stroke: ${maxGreenColor};
      }
    }
  }

  &:active {
    color: ${maxGreenColor};
  }

  ${({active}) =>
    active &&
    css`
      & > span::before {
        opacity: 1;
      }
    `}

  ${({inverted}) => inverted && `color: ${blackColor}`};
`;
