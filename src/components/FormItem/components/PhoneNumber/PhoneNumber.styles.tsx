import styled from 'styled-components';

import Icon from 'components/Icon';

import {offsetDef, offsetSm, offsetXSm} from 'styles/configs/offset';
import {fontSizeXXXLg} from 'styles/configs/typography';

export const Group = styled.div<{
  gap?: string;
  isInline?: boolean;
  justify?: string;
  direction?: string;
  wrap?: string;
  align?: string;
}>`
  display: ${({isInline}) => (isInline ? 'inline-flex' : 'flex')};
  gap: ${({gap}) => gap || offsetDef};
  justify-content: ${({justify}) => justify || 'start'};
  flex-direction: ${({direction}) => direction || 'row'};
  flex-wrap: ${({wrap}) => wrap || 'wrap'};
  align-items: ${({align}) => align || 'initial'};
`;

const CountryListItem = styled.div`
  padding: ${offsetXSm} ${offsetSm};
`;

const CountryIcon = styled.div`
  font-size: ${fontSizeXXXLg};
`;

const RotatedIcon = styled(Icon)`
  transform: rotate(180deg);
`;

const StyledGroup = styled(Group)`
  cursor: pointer !important;

  > * {
    pointer-events: none;
  }
`;

const CountrySelectDropdown = styled.div`
  position: absolute;
  z-index: 1;
  top: 13px;
  left: ${offsetSm};

  display: flex;
  align-items: center;
`;

const PhoneNumberContainer = styled.div<{isCountrySelect?: boolean}>`
  position: relative;

  ${({isCountrySelect}) =>
    isCountrySelect &&
    `
  input {padding-left: 50px;}
  `}
`;

export {
  PhoneNumberContainer,
  CountrySelectDropdown,
  CountryIcon,
  RotatedIcon,
  CountryListItem,
  StyledGroup,
};
