import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';

const NavPortfolio = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.portfolio);
  }, [navigate]);

  return <StyledLink onClick={onClick}>PORTFOLIO</StyledLink>;
};

export default NavPortfolio;
