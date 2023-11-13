import React from 'react';

import {StyledErrorDiv, StyledLink} from '../ContactForm.styles';

const ErrorMessage = () => {
  return (
    <StyledErrorDiv>
      <span>Please try again or </span>
      <span>contact us directly at </span>
      <StyledLink href='mailto:klinoktop@gmail.com'>
        klinoktop@gmail.com
      </StyledLink>
    </StyledErrorDiv>
  );
};

export default ErrorMessage;
