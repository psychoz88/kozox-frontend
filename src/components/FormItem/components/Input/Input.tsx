import React, {useState} from 'react';

import InputText from './InputText';

import {PlaceholderIcon, StyledInputContainer} from '../../FormItem.styles';

import {IPasswordProps} from '../../types';

const COMPONENTS_MAP = {
  email: InputText,
  text: InputText,
  number: InputText,
};

const Input = ({
  name,
  type,
  placeholder,
  placeholderIcon,
  hasError,
  inputProps,
  inputSize = 'medium',
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
        {...restInputProps}
      />
    </StyledInputContainer>
  );
};

export default Input;
