import React from 'react';

import {
  StyledCheckbox,
  StyledCheckboxWrapper,
  StyledTermsConditionsLabel,
} from '../../FormItem.styles';

import {ICheckboxProps} from '../../types';

const InputCheckbox = ({name, hasError, label, inputProps}: ICheckboxProps) => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox
        {...inputProps}
        name={name}
        hasError={hasError}
        type='checkbox'
      />
      <StyledTermsConditionsLabel>{label}</StyledTermsConditionsLabel>
    </StyledCheckboxWrapper>
  );
};

export default InputCheckbox;
