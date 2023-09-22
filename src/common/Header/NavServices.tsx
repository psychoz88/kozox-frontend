import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import {Routes} from 'constants/routes';

const StyledLink = styled.a`
  color: white;
`;

const NavServices = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.services);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>Services</StyledLink>;
};

export default NavServices;