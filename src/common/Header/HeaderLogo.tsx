import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import {Routes} from 'constants/routes';

const StyledLink = styled.a`
  color: white;
`;

const HeaderLogo = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.mainLanding);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>Kozox</StyledLink>;
};

export default HeaderLogo;
