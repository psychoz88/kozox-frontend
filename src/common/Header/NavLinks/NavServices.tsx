import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';

const NavServices = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.services);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>SERVICES</StyledLink>;
};

export default NavServices;
