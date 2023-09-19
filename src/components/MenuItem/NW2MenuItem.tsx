import React from 'react';

import {TProps} from './types';
import {
  ArrowBlock,
  DropdownWrapper,
  MenuItem,
  SimpleMenuItem,
  StyledNavLink,
  Wrapper,
  OuterWrapper,
} from './NW2MenuItem.styles';

export const NW2MenuItem = ({
  title,
  dropdownItems,
  color = 'white',
  position = 'center',
  itemStyle = 'default',
  url = '',
  isActive = false,
  onClick,
}: TProps) => {
  const hasDropdown = !!dropdownItems?.length;

  if (hasDropdown) {
    return (
      <OuterWrapper position={position} onClick={onClick}>
        <DropdownWrapper
          color={color}
          isActive={isActive}
          itemStyle={itemStyle}
        >
          <ArrowBlock color={color} isActive={isActive}>
            <MenuItem itemstyle={itemStyle} isActive={isActive}>
              <span data-testid={'header-dropdown-title-venue-name'}>
                {title}
              </span>
            </MenuItem>
          </ArrowBlock>
        </DropdownWrapper>
      </OuterWrapper>
    );
  }

  return (
    <OuterWrapper position={position} onClick={onClick}>
      <StyledNavLink to={url}>
        <Wrapper color={color} isActive={isActive} itemStyle={itemStyle}>
          <SimpleMenuItem
            color={color}
            isActive={isActive}
            itemstyle={itemStyle}
          >
            <span data-testid={`dropdown-title-${title}`}>{title}</span>
          </SimpleMenuItem>
        </Wrapper>
      </StyledNavLink>
    </OuterWrapper>
  );
};
