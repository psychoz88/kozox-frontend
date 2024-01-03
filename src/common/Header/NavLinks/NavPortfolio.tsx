import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';
import {EHeaderItems, TMenuListProps} from '../types';

const NavPortfolio = ({
  activeItem,
  selectMenuItem,
  setMenuShowed,
}: TMenuListProps) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.portfolio);
    selectMenuItem(EHeaderItems.Services);
    if (setMenuShowed) setMenuShowed();
  }, [navigate, selectMenuItem, setMenuShowed]);

  return (
    <StyledLink
      isActive={activeItem === EHeaderItems.Portfolio}
      onClick={onClick}
    >
      PORTFOLIO
    </StyledLink>
  );
};

export default NavPortfolio;
