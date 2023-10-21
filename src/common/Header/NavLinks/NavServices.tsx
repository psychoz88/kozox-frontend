import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';
import {TNavProps} from '../types';

const NavServices = ({setMenuShowed}: TNavProps) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.services);
    if (setMenuShowed) setMenuShowed();
  }, [navigate, setMenuShowed]);

  return <StyledLink onClick={onClick}>SERVICES</StyledLink>;
};

export default NavServices;
