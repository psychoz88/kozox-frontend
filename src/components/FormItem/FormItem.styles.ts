import styled, {css} from 'styled-components';

import {
  blackColor,
  borderRadiusDef,
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
  maxGreenTextColor,
} from 'constants/styleVars';
import {THasError, TInputSize, TInputVariant} from './types';
import Icon from 'components/Icon';

const LABEL_FONT_SIZE = fontSizeXSm;
export const INPUT_FONT_SIZE = fontSizeMd;
export const LABEL_COLOR = greyTextColor;
export const INPUT_PADDING = offsetSm;
export const INPUT_HEIGHT = '46px';
const INPUT_HEIGHT_LARGE = '54px';
const INPUT_HEIGHT_SMALL = '36px';

export const INPUT_COLOR = greyTextColor;
export const INPUT_PLACEHOLDER_COLOR = greyTextColor;
export const INPUT_BORDER_COLOR = greyTextColor;
export const INPUT_FOCUS_BORDER_COLOR = blackColor;
export const INPUT_ERROR_COLOR = errorColor;
export const INPUT_DISABLED_COLOR = disabledColor;

export const inputStylesMap: {
  [key in TInputVariant]: any;
} = {
  primary: {
    borderColor: INPUT_BORDER_COLOR,
    borderFocusedColor: INPUT_FOCUS_BORDER_COLOR,
    borderErrorColor: INPUT_ERROR_COLOR,
    borderDisabledColor: greyTextColor,
    backgroundColorDisabled: whiteColor,
    colorDisabled: greyTextColor,
    colorError: INPUT_ERROR_COLOR,
    colorLabel: greyTextColor,
    placeholderColor: INPUT_PLACEHOLDER_COLOR,
    outlineFocused: '1px solid',
    selectDropdownListTopSpacing: offsetXXSm,
    selectDropdownListBorderRadius: offsetXSm,
    selectDropdownListPadding: 0,
    selectDropdownActiveItemBg: greyTextColor,
    selectDropdownItemPadding: `${offsetDef} ${offsetSm}`,
  },
  secondary: {
    borderColor: INPUT_BORDER_COLOR,
    borderFocusedColor: greyTextColor,
    borderErrorColor: errorColor,
    borderDisabledColor: greyTextColor,
    backgroundColorDisabled: whiteColor,
    colorDisabled: greyTextColor,
    colorError: INPUT_ERROR_COLOR,
    colorLabel: greyTextColor,
    placeholderColor: INPUT_PLACEHOLDER_COLOR,
    outlineFocused: 'none',
    selectDropdownListTopSpacing: 0,
    selectDropdownListBorderRadius: borderRadiusDef,
    selectDropdownListPadding: offsetXSm,
    selectDropdownActiveItemBg: greyTextColor,
    selectDropdownItemPadding: `${offsetXXSm} 0`,
  },
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
  border-radius: ${borderRadiusDef};
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
  variant?: TInputVariant,
  focused?: boolean,
  disabled?: boolean,
) => {
  if (hasError) {
    if (variant) {
      return inputStylesMap[variant].colorError;
    }

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

  if (variant) {
    return inputStylesMap[variant].colorLabel;
  }

  return 'inherit';
};

export const StyledLabel = styled.span<{
  labelColor?: string;
  hasError?: THasError;
  variant?: TInputVariant;
  inputSize?: TInputSize;
  focused?: boolean;
  disabled?: boolean;
}>`
  ${({inputSize}) => getLabelFont(inputSize)};
  position: relative;
  z-index: ${formItemLabelZIndex};
  color: ${({hasError, labelColor, variant, focused, disabled}) =>
    getLabelColor(hasError, labelColor, variant, focused, disabled)};
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
  variant = 'primary',
  inputSize = 'medium',
}: {
  hasError?: THasError;
  focused?: boolean;
  variant: TInputVariant;
  inputSize: TInputSize;
}) => {
  const inputStyle = inputStylesMap[variant];

  return css`
    ${InputStyles};
    ${getInputSizes(inputSize)};

    width: 100%;
    border-color: ${hasError
      ? inputStyle.borderErrorColor
      : focused
      ? inputStyle.borderFocusedColor
      : inputStyle.borderColor};
    outline: none;

    &::placeholder {
      color: ${inputStyle.placeholderColor};
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
        ? inputStyle.borderErrorColor
        : inputStyle.borderFocusedColor};
    }

    &:focus {
      outline: ${inputStyle.outlineFocused};
      outline-color: ${hasError
        ? inputStyle.borderErrorColor
        : inputStyle.borderFocusedColor};
    }

    &:read-only {
      cursor: default;
    }

    &:disabled {
      pointer-events: none;
      background-color: ${inputStyle.backgroundColorDisabled};
      border-color: ${inputStyle.borderDisabledColor};
      color: ${inputStyle.colorDisabled};
      -webkit-text-fill-color: ${inputStyle.colorDisabled};
    }
  `;
};

export const StyledInput = styled.input<{
  placeholderIcon?: string;
  hasError?: THasError;
  focused?: boolean;
  small?: boolean;
  variant: TInputVariant;
  inputSize: TInputSize;
}>`
  ${({hasError, focused, variant, inputSize}) =>
    getInputStyles({hasError, focused, variant, inputSize})};
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
  variant?: TInputVariant;
  inputSize?: TInputSize;
  margin?: string;
}>`
  ${({inputSize}) => getLabelFont(inputSize)};
  color: ${({variant = 'primary'}) => inputStylesMap[variant].colorError};
  font-weight: ${fontWeightBold};
  text-align: left;
  margin: ${({margin}) => (margin ? margin : '0')};
`;

export const StyledRadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRadioButton = styled.input<{
  hasError: THasError;
}>`
  width: 22px;
  height: 22px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  appearance: none;
  position: relative;
  transition: 100ms border ease-in-out;
  border: 1px solid
    ${({hasError}) => (hasError ? INPUT_ERROR_COLOR : INPUT_BORDER_COLOR)};

  &:focus,
  &:hover {
    border: 1px solid
      ${({hasError}) => (hasError ? INPUT_ERROR_COLOR : maxGreenTextColor)};
  }

  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${maxGreenTextColor};
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transition: 90ms transform ease-in-out;
    transform: translate(-50%, -50%) scale(0);
  }

  &:checked {
    border-color: ${maxGreenTextColor};

    &:before {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const StyledCheckbox = styled.input<{
  hasError: THasError;
}>`
  width: 22px;
  height: 22px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  margin-right: ${offsetDef};
  border-radius: ${borderRadiusDef};
  border: 1px solid
    ${({hasError}) => (hasError ? INPUT_ERROR_COLOR : INPUT_BORDER_COLOR)};

  &:focus,
  &:hover {
    border: 1px solid
      ${({hasError}) => (hasError ? INPUT_ERROR_COLOR : maxGreenTextColor)};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  appearance: none;

  &:before {
    display: block;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMC
    IgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjMzMzIgMUw0Ljk5OTg0IDguMzMzMzNMMS42NjY1IDU
    iIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=');
  }
  &:checked {
    background: ${maxGreenTextColor};
    border-color: ${maxGreenTextColor};

    &:before {
      transform: scale(1);
    }
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledRadioButtonLabel = styled.label<{shift: string | undefined}>`
  text-align: left;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  padding-left: ${({shift}) => (shift ? shift : offsetSm)};
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
