import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledButton} from './NavLinks.styles';

const NavContactButton = () => {
  const navigate = useNavigate();

  const openContactForm = useCallback(() => {
    navigate(Routes.contactForm);
  }, [navigate]);

  return (
    <StyledButton
      onClick={openContactForm}
      buttonType='primary'
      size='small'
      fullWidth
    >
      Contact us
    </StyledButton>
  );
};

export default NavContactButton;
