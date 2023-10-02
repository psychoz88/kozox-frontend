import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

import {StyledLink} from './NavLinks.styles';

const NavContacts = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.contacts);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>CONTACTS</StyledLink>;
};

export default NavContacts;
