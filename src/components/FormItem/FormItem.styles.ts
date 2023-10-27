import styled, {css} from 'styled-components';

import Icon from 'components/Icon';

import {
  blackColor,
  fontSizeXSm,
  fontWeightBold,
  formItemLabelZIndex,
  offsetDef,
  offsetSm,
  offsetXSm,
  offsetXXSm,
  offsetXXXLg,
  whiteColor,
  offsetXXXSm,
  fontSizeSm,
  lineHeightMd,
  mdBp,
  lineHeightSm,
  fontSizeLg,
  lineHeightXL,
  fontSizeXXSm,
  lineHeightXSm,
  fontSizeMd,
  lineHeightLg,
  errorColor,
  greyTextColor,
  disabledColor,
  elementsGreyColor,
  mainColor,
  inputDarkGreyColor,
  inputFocusedGreenColor,
  dirtyWhiteTextColor,
} from 'constants/styleVars';
import {THasError, TInputSize} from './types';

const LABEL_FONT_SIZE = fontSizeXSm;
export const INPUT_FONT_SIZE = fontSizeMd;
export const LABEL_COLOR = elementsGreyColor;
export const INPUT_PADDING = offsetSm;
export const INPUT_HEIGHT = '46px';
const INPUT_HEIGHT_LARGE = '54px';
const INPUT_HEIGHT_SMALL = '36px';

export const INPUT_PLACEHOLDER_COLOR = greyTextColor;
export const INPUT_BORDER_COLOR = inputDarkGreyColor;
export const INPUT_FOCUS_BORDER_COLOR = inputFocusedGreenColor;
export const INPUT_ERROR_COLOR = errorColor;
export const INPUT_DISABLED_COLOR = disabledColor;

export const inputStylesMap = {
  borderColor: INPUT_BORDER_COLOR,
  borderFocusedColor: INPUT_FOCUS_BORDER_COLOR,
  borderErrorColor: INPUT_ERROR_COLOR,
  borderDisabledColor: greyTextColor,
  backgroundColorDisabled: dirtyWhiteTextColor,
  colorDisabled: greyTextColor,
  colorError: INPUT_ERROR_COLOR,
  colorLabel: dirtyWhiteTextColor,
  placeholderColor: INPUT_PLACEHOLDER_COLOR,
  outlineFocused: '1px solid',
};

const getLabelFont = (inputSize?: TInputSize) => {
  switch (inputSize) {
    case 'small':
      return css`
        font-size: ${fontSizeXXSm};
        line-height: ${lineHeightXSm};
      `;
    case 'large':
      return css`
        font-size: ${fontSizeSm};
        line-height: ${lineHeightMd};
      `;
    default:
      return css`
        font-size: ${fontSizeXSm};
        line-height: ${lineHeightSm};
      `;
  }
};

const getInputSizes = (inputSize: TInputSize) => {
  switch (inputSize) {
    case 'small':
      return css`
        font-size: ${fontSizeXSm};
        line-height: ${lineHeightSm};
        height: ${INPUT_HEIGHT_SMALL};
      `;
    case 'medium':
      return css`
        font-size: ${INPUT_FONT_SIZE};
        line-height: ${lineHeightMd};
        height: ${INPUT_HEIGHT};
      `;
    case 'large':
      return css`
        font-size: ${fontSizeLg};
        line-height: ${lineHeightXL};
        height: ${INPUT_HEIGHT_LARGE};
      `;
    default:
      return css`
        font-size: ${fontSizeSm};
        line-height: ${lineHeightMd};
        height: ${INPUT_HEIGHT};
      `;
  }
};

export const InputStyles = css`
  position: relative;
  background: ${mainColor};
  color: ${greyTextColor};
  border-radius: 5px;
  border: 1px solid;
`;

export const LabelContainerStyles = css`
  height: 20px;
  position: absolute;
  left: ${offsetSm};
  transform: translateY(-50%);
  z-index: ${formItemLabelZIndex};
  padding: 0 ${offsetXXXSm};
  max-width: calc(100% - ${offsetDef});
`;

export const LabelContainerStylesFocused = css`
  font-size: ${LABEL_FONT_SIZE};
  font-weight: ${fontWeightBold};
  top: 0;

  &:before {
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 12px;
    position: absolute;
    background-color: ${whiteColor};
  }
`;

export const StyledFieldContainer = styled.div`
  margin: ${offsetDef} 0;
`;

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const getLabelColor = (
  hasError?: THasError,
  labelColor?: string,
  focused?: boolean,
  disabled?: boolean,
) => {
  if (hasError) {
    return INPUT_ERROR_COLOR;
  }

  if (disabled) {
    return INPUT_DISABLED_COLOR;
  }

  if (focused) {
    return INPUT_FOCUS_BORDER_COLOR;
  }

  if (labelColor) {
    return labelColor;
  }

  return inputStylesMap.colorLabel;
};

export const StyledLabel = styled.span<{
  labelColor?: string;
  hasError?: THasError;
  inputSize?: TInputSize;
  focused?: boolean;
  disabled?: boolean;
}>`
  ${({inputSize}) => getLabelFont(inputSize)};
  position: relative;
  z-index: ${formItemLabelZIndex};
  color: ${({hasError, labelColor, focused, disabled}) =>
    getLabelColor(hasError, labelColor, focused, disabled)};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLabelContainer = styled.span<{
  hasError: THasError;
  focused: boolean;
}>`
  ${LabelContainerStyles};
  ${LabelContainerStylesFocused};
  color: ${({hasError}) => (hasError ? INPUT_ERROR_COLOR : LABEL_COLOR)};
`;

export const getInputStyles = ({
  hasError,
  focused,
  inputSize = 'medium',
}: {
  hasError?: THasError;
  focused?: boolean;
  inputSize: TInputSize;
}) => {
  return css`
    ${InputStyles};
    ${getInputSizes(inputSize)};

    width: 100%;
    border-color: ${hasError
      ? inputStylesMap.borderErrorColor
      : focused
      ? inputStylesMap.borderFocusedColor
      : inputStylesMap.borderColor};
    outline: none;

    &::placeholder {
      color: ${inputStylesMap.placeholderColor};
    }

    ${inputSize !== 'large' &&
    css`
      @media (max-width: ${mdBp - 1}px) {
        font-size: ${fontSizeMd};
        line-height: ${lineHeightLg};
      }
    `}

    &:focus,
    &:hover {
      border-color: ${hasError
        ? inputStylesMap.borderErrorColor
        : inputStylesMap.borderFocusedColor};
    }

    &:focus {
      outline: ${inputStylesMap.outlineFocused};
      outline-color: ${hasError
        ? inputStylesMap.borderErrorColor
        : inputStylesMap.borderFocusedColor};
    }

    &:read-only {
      cursor: default;
    }

    &:disabled {
      pointer-events: none;
      background-color: ${inputStylesMap.backgroundColorDisabled};
      border-color: ${inputStylesMap.borderDisabledColor};
      color: ${inputStylesMap.colorDisabled};
      -webkit-text-fill-color: ${inputStylesMap.colorDisabled};
    }
  `;
};

export const StyledInput = styled.input<{
  placeholderIcon?: string;
  hasError?: THasError;
  focused?: boolean;
  small?: boolean;
  inputSize: TInputSize;
}>`
  ${({hasError, focused, inputSize}) =>
    getInputStyles({hasError, focused, inputSize})};
  padding: ${({placeholderIcon}) =>
    placeholderIcon
      ? `0 ${INPUT_PADDING} 0 ${offsetXXXLg}`
      : `0 ${INPUT_PADDING}`};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const StyledPasswordInput = styled(StyledInput)`
  position: relative;
  padding: 0 ${offsetXXXLg} 0 ${INPUT_PADDING};
`;

export const StyledIcon = styled(Icon)`
  top: 50%;
  position: absolute;
  right: ${offsetXSm};
  padding: ${offsetXXSm};
  transform: translateY(-50%);
`;

export const StyledErrorMessage = styled.div<{
  inputSize?: TInputSize;
  margin?: string;
}>`
  ${({inputSize}) => getLabelFont(inputSize)};
  color: ${inputStylesMap.colorError};
  font-weight: ${fontWeightBold};
  text-align: left;
  margin: ${({margin}) => (margin ? margin : '0')};
`;

export const StyledTermsConditionsLabel = styled.div`
  text-align: left;
  font-size: ${fontSizeXSm};

  & a {
    color: ${blackColor};
    text-decoration: underline;
    font-weight: ${fontWeightBold};

    &:hover,
    &:active {
      color: ${blackColor};
    }
  }
`;

export const PlaceholderIcon = styled(Icon)<{iconPosition?: 'left' | 'right'}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({iconPosition}) =>
    (iconPosition === 'left' || !iconPosition) && `left: ${INPUT_PADDING};`}
  ${({iconPosition}) => iconPosition === 'right' && `right: ${INPUT_PADDING};`}
  color: ${INPUT_PLACEHOLDER_COLOR};
  pointer-events: none;
  z-index: 1;

  display: flex;
  align-items: center;
`;
