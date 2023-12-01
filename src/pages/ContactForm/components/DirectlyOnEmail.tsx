import React from 'react';

import {StyledDiv, StyledLink} from '../ContactForm.styles';
import {CONTACT_EMAIL} from 'constants/appConst';

const DirectlyOnEmail = () => {
  return (
    <StyledDiv>
      <span>Contact us directly at </span>
      <StyledLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</StyledLink>
    </StyledDiv>
  );
};

export default DirectlyOnEmail;
