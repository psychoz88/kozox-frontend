import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import {Routes} from 'constants/routes';

import {maxGreenTextColor} from 'constants/styleVars';

const StyledLink = styled.a`
  color: ${maxGreenTextColor};
`;

const HeaderLogo = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.mainLanding);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>Kozox</StyledLink>;
};

export default HeaderLogo;
