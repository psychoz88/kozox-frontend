import React, {useCallback, useRef} from 'react';

import useToggle from 'hooks/useToggle';

import {MobileMenu} from '../MobileMenu/MobileMenu';
import {useClickOutside} from 'hooks/useClickOutside';

import {StyledMobileMenuButton} from './NavLinks.styles';

const NavMenuButton = () => {
  const [isMenuShowed, setMenuShowed] = useToggle(false);

  const handleMobileMenu = useCallback(() => {
    setMenuShowed();
  }, [setMenuShowed]);

  // Closing logic when click outside
  const containerRef = useRef(null);
  useClickOutside(containerRef, isMenuShowed, () => {
    setMenuShowed();
  });

  return (
    <div ref={containerRef}>
      <StyledMobileMenuButton
        onClick={handleMobileMenu}
        buttonType='primary'
        size='small'
        fullWidth
      >
        Menu
      </StyledMobileMenuButton>
      {isMenuShowed && <MobileMenu setMenuShowed={setMenuShowed} />}
    </div>
  );
};

export default NavMenuButton;
