import styled from 'styled-components';

import Button from 'components/Button';

import {fontSizeXSm, greyTextColor, blueTextColor} from 'constants/styleVars';

export const StyledLink = styled.a<{isActive?: boolean}>`
  color: ${({isActive}) => (isActive ? blueTextColor : greyTextColor)};
  font-size: ${fontSizeXSm};
  text-transform: uppercase;
`;

export const StyledButton = styled(Button)`
  height: 35px;
`;

export const StyledMobileMenuButton = styled(Button)`
  height: 35px;
`;
