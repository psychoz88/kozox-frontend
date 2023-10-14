import styled from 'styled-components';

import Button from 'components/Button';

import {fontSizeXSm, greyTextColor} from 'constants/styleVars';

export const StyledLink = styled.a`
  color: ${greyTextColor};
  font-size: ${fontSizeXSm};
  text-transform: uppercase;
`;

export const StyledButton = styled(Button)`
  height: 35px;
`;
