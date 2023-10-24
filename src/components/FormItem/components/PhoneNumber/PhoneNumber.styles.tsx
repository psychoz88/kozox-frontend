import styled from 'styled-components';

import {offsetSm, offsetXSm} from 'styles/configs/offset';
import {Group} from 'styles/basicStyledComponents/group';
import {fontSizeXXXLg} from 'styles/configs/typography';
import {INPUT_PADDING} from 'view/components/NW2FormItem/NW2FormItem.styles';
import Icon from 'components/Icon';

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
  left: ${INPUT_PADDING};

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
