import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import {Routes} from 'constants/routes';

import {greyTextColor} from 'constants/styleVars';

const StyledLink = styled.a`
  color: ${greyTextColor};
`;

const NavServices = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.services);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>SERVICES</StyledLink>;
};

export default NavServices;
