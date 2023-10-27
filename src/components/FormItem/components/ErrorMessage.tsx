import React from 'react';

import {IErrorMessage} from '../types';
import {StyledErrorMessage} from '../FormItem.styles';

const ErrorMessage = ({
  hasError,
  errorData,
  showAllValidationErrors,
  inputSize = 'medium',
  margin,
}: IErrorMessage) => {
  if (!hasError) return null;

  const errorArr = errorData?.split?.('--');
  const errorList = errorArr
    ? showAllValidationErrors
      ? errorArr.map((item: string) => <div key={item}>{item}</div>)
      : errorArr[0]
    : Array.isArray(errorData)
    ? errorData[0]
    : null;

  return (
    <StyledErrorMessage  inputSize={inputSize} margin={margin}>
      {errorList}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
