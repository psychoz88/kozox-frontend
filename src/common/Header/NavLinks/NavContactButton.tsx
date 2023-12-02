import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';
import {useAppSelector} from 'store/hooks';

import {StyledButton} from './NavLinks.styles';
import {xxxsBp} from 'constants/styleVars';

const NavContactButton = ({borderColor}: {borderColor?: string}) => {
  const navigate = useNavigate();
  const deviceWidth = useAppSelector(({app}) => app.deviceType.width);

  const openContactForm = useCallback(() => {
    navigate(Routes.contactForm);
  }, [navigate]);

  return (
    <StyledButton
      onClick={openContactForm}
      buttonType='primary'
      size='small'
      fullWidth
      borderColor={borderColor}
    >
      {deviceWidth && deviceWidth <= xxxsBp ? 'Contact' : 'Contact us'}
    </StyledButton>
  );
};

export default NavContactButton;
