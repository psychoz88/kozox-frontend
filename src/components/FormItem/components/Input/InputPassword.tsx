import React, {useState} from 'react';

import {StyledPasswordInput, StyledIcon} from '../../FormItem.styles';

import {IPasswordProps} from '../../types';

const InputPassword = ({
  name,
  placeholder,
  hasError,
  inputProps,
}: IPasswordProps) => {
  const [visibleText, setVisibleText] = useState(false);
  const toggleVisibleText = () => {
    setVisibleText(!visibleText);
  };
  return (
    <>
      <StyledPasswordInput
        {...inputProps}
        name={name}
        type={visibleText ? 'text' : 'password'}
        placeholder={placeholder}
        hasError={hasError}
      />
      <StyledIcon
        icon={visibleText ? 'EYE' : 'EYE_CLOSED'}
        onClick={toggleVisibleText}
      />
    </>
  );
};

export default InputPassword;
