import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';
import {EHeaderItems, TMenuListProps} from '../types';

const NavServices = ({
  activeItem,
  selectMenuItem,
  setMenuShowed,
}: TMenuListProps) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.services);
    selectMenuItem(EHeaderItems.Services);
    if (setMenuShowed) setMenuShowed();
  }, [navigate, selectMenuItem, setMenuShowed]);

  return (
    <StyledLink
      isActive={activeItem === EHeaderItems.Services}
      onClick={onClick}
    >
      SERVICES
    </StyledLink>
  );
};

export default NavServices;
