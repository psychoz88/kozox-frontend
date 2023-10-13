import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';

const NavContactButton = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.contactForm);
  }, [navigate]);

  return <StyledLink onClick={onClick}>Contact US</StyledLink>;
};

export default NavContactButton;
