import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';

const NavServices = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.services);
  }, [navigate]);

  return <StyledLink onClick={onClick}>SERVICES</StyledLink>;
};

export default NavServices;
