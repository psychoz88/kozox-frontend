import React from 'react';

import {
  StyledRadioButton,
  StyledRadioButtonLabel,
  StyledRadioButtonWrapper,
} from '../../FormItem.styles';

import {IRadioButtonProps} from '../../types';

const InputRadioButton = ({
  name,
  hasError,
  label,
  inputProps,
  value,
  labelShift,
  onChange,
  checked,
  disabled,
}: IRadioButtonProps) => {
  return (
    <StyledRadioButtonWrapper>
      <StyledRadioButton
        {...inputProps}
        name={name}
        hasError={hasError}
        type='radio'
        id={value}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      {!!label && (
        <StyledRadioButtonLabel shift={labelShift} htmlFor={value}>
          {label}
        </StyledRadioButtonLabel>
      )}
    </StyledRadioButtonWrapper>
  );
};

export default InputRadioButton;
