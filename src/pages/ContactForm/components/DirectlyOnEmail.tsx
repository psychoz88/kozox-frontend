import React from 'react';

import {StyledDiv, StyledLink} from '../ContactForm.styles';

const DirectlyOnEmail = () => {
  return (
    <StyledDiv>
      <span>Contact us directly at </span>
      <StyledLink href='mailto:klinoktop@gmail.com'>
        klinoktop@gmail.com
      </StyledLink>
    </StyledDiv>
  );
};

export default DirectlyOnEmail;
