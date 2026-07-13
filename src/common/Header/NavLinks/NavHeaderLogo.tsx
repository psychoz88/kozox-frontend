import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import {Routes} from 'constants/routes';

import {maxGreenTextColor} from 'constants/styleVars';

const StyledLink = styled.a`
  display: inline-block;
  justify-self: start;
  width: fit-content;
  padding: 4px 8px;
  margin: -4px -8px;
  color: ${maxGreenTextColor};
  font-size: 25px;
`;

const NavHeaderLogo = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.mainLanding);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>K0Z0X</StyledLink>;
};

export default NavHeaderLogo;
