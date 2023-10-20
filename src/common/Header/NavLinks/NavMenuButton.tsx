import React, {useCallback} from 'react';
import styled from 'styled-components';

import useToggle from 'hooks/useToggle';

import {StyledMobileMenuButton} from './NavLinks.styles';

export const Container = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background: bisque;
`;

export const MobileMenu = () => {
  return (
    <Container>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Container>
  );
};

const NavMenuButton = () => {
  const [isMenuShowed, setMenuShowed] = useToggle(false);

  const openMobileMenu = useCallback(() => {
    setMenuShowed();
  }, [setMenuShowed]);

  return (
    <>
      <StyledMobileMenuButton
        onClick={openMobileMenu}
        buttonType='primary'
        size='small'
        fullWidth
      >
        Menu
      </StyledMobileMenuButton>
      {isMenuShowed && <MobileMenu />}
    </>
  );
};

export default NavMenuButton;
