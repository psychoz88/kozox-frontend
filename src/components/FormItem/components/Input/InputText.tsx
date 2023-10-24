import React from 'react';

import {IPasswordProps} from '../../types';

import {StyledInput} from '../../FormItem.styles';

const InputText = ({
  name,
  type,
  placeholder,
  placeholderIcon,
  hasError,
  inputProps,
  focused,
  inputSize,
  ...restInputProps
}: IPasswordProps) => {
  return (
    <StyledInput
      {...inputProps}
      name={name}
      type={type}
      placeholder={placeholder}
      placeholderIcon={placeholderIcon}
      hasError={hasError}
      focused={focused}
      inputSize={inputSize}
      {...restInputProps}
    />
  );
};

export default InputText;
