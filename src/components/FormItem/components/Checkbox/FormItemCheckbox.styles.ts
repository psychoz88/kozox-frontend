import styled, {css} from 'styled-components';

import Icon from 'components/Icon';

import {
  borderRadiusDef,
  errorColor,
  fontSizeXSm,
  fontWeightBold,
  offsetXSm,
  offsetXXSm,
  whiteColor,
  disabledColor,
  maxGreenTextColor,
  backgroundElementColor,
  dirtyWhiteTextColor,
} from 'constants/styleVars';
import {
  checkboxSizeSchema,
  ECheckboxSizes,
  TCheckboxSize,
  THasError,
} from './types';

const LABEL_FONT_SIZE = fontSizeXSm;

export const StyledFieldContainer = styled.div``;

export const StyledIcon = styled(Icon)`
  top: 50%;
  position: absolute;
  right: ${offsetXSm};
  padding: ${offsetXXSm};
  transform: translateY(-50%);
`;

export const StyledErrorMessage = styled.div`
  text-align: left;
  color: ${errorColor};
  font-size: ${LABEL_FONT_SIZE};
  font-weight: ${fontWeightBold};
`;

export const CheckIcon = styled(Icon)<{
  offsetSize: ECheckboxSizes;
  disabled: boolean;
}>(({offsetSize, disabled}) => {
  const schema = checkboxSizeSchema[offsetSize];

  return css`
    position: absolute;
    top: ${schema.top};
    left: ${schema.left};

    ${disabled &&
    css`
      color: ${disabledColor};
    `}
  `;
});

export const Checkbox = styled.input<{
  hasError: THasError;
  size: ECheckboxSizes;
}>`
  display: flex;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  appearance: none;
`;

export const CheckboxLabel = styled.label<{
  hasError: THasError;
  size: ECheckboxSizes;
  checked: boolean;
  disabled: boolean;
}>(({size, hasError, checked, disabled}) => {
  const schema: TCheckboxSize = checkboxSizeSchema[size];

  return css`
    display: inline-flex;
    user-select: none;
    font-size: ${schema.labelFontSize};
    line-height: ${schema.labelLineHeight};
    cursor: pointer;
    color: ${dirtyWhiteTextColor};

    &:before {
      content: '';
      display: inline-block;
      cursor: pointer;
      pointer-events: auto;
      width: ${schema.width};
      background-color: ${whiteColor};
      height: ${schema.height};
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid ${hasError ? errorColor : disabledColor};
      border-radius: ${borderRadiusDef};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
      margin-right: ${offsetXSm};

      ${checked &&
      css`
        border-color: ${maxGreenTextColor};
        background-color: ${maxGreenTextColor};
      `}

      ${disabled &&
      css`
        border: 1px solid ${backgroundElementColor};
        background-color: ${backgroundElementColor};
        pointer-events: none;
        cursor: not-allowed;
      `}
    }

    ${disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
    `}
  `;
});

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;
