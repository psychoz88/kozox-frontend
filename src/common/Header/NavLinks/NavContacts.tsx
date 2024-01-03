import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';
import {TMenuListProps, EHeaderItems} from '../types';

const NavContacts = ({
  activeItem,
  selectMenuItem,
  setMenuShowed,
}: TMenuListProps) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.contacts);
    selectMenuItem(EHeaderItems.Contacts);
    if (setMenuShowed) setMenuShowed();
  }, [navigate, selectMenuItem, setMenuShowed]);

  return (
    <StyledLink
      isActive={activeItem === EHeaderItems.Contacts}
      onClick={onClick}
    >
      CONTACTS
    </StyledLink>
  );
};

export default NavContacts;
