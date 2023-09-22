import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import {Routes} from 'constants/routes';

const StyledLink = styled.a`
  color: white;
`;

const NavContacts = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate(Routes.contacts);
  }, [navigate]);

  return <StyledLink onClick={onLogoClick}>Contacts</StyledLink>;
};

export default NavContacts;