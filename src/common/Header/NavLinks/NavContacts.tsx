import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';

const NavContacts = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Routes.contacts);
  }, [navigate]);

  return <StyledLink onClick={onClick}>CONTACTS</StyledLink>;
};

export default NavContacts;
