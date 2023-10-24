import React, {useState} from 'react';

import {
  PlaceholderIcon,
  StyledInputContainer,
  StyledLabel,
  StyledLabelContainer,
} from '../../FormItem.styles';

import {IPasswordProps} from '../../types';
import InputPassword from './InputPassword';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';

const COMPONENTS_MAP = {
  password: InputPassword,
  email: InputText,
  text: InputText,
  number: InputText,
  checkbox: InputCheckbox,
};

const Input = ({
  name,
  type,
  placeholder,
  placeholderIcon,
  hasError,
  inputProps,
  disabled,
  label,
  labelColor,
  variant = 'primary',
  inputSize = 'medium',
  isLabelActive,
  ...restInputProps
}: IPasswordProps) => {
  const [focused, setFocused] = useState(false);
  const onFocusHandler = () => setFocused(true);
  const onBlurHandler = () => setFocused(false);
  const placeholderText = focused ? '' : placeholder;

  const Component = COMPONENTS_MAP[type];
  if (!Component) return null;

  return (
    <StyledInputContainer onFocus={onFocusHandler} onBlur={onBlurHandler}>
      {type !== 'checkbox' &&
        label &&
        (!!inputProps.value || focused || isLabelActive) && (
          <StyledLabelContainer hasError={hasError} focused={focused}>
            <StyledLabel
              labelColor={labelColor}
              hasError={hasError}
              variant={variant}
              inputSize={inputSize}
              focused={focused}
              disabled={disabled}
            >
              {label}
            </StyledLabel>
          </StyledLabelContainer>
        )}

      {placeholderIcon && (
        <PlaceholderIcon icon={placeholderIcon} transparent />
      )}
      <Component
        name={name}
        type={type}
        value={inputProps.value}
        placeholder={placeholderText}
        placeholderIcon={placeholderIcon}
        onChange={inputProps.onChange}
        inputProps={inputProps}
        hasError={hasError}
        focused={focused}
        inputSize={inputSize}
        variant={variant}
        {...restInputProps}
      />
    </StyledInputContainer>
  );
};

export default Input;
