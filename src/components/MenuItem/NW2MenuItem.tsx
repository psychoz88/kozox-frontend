import React from 'react';
import {NavLink} from 'react-router-dom';


import {TProps, TMenuProps} from './types';
import {
  ArrowBlock,
  DropdownWrapper,
  MenuItem,
  SimpleMenuItem,
  StyledDropdown,
  StyledMenu,
  StyledNavLink,
  StyledMenuItem,
  Wrapper,
  OuterWrapper,
  // StyledIcon,
} from './NW2MenuItem.styles';
import { ESupplierHeaderItems } from 'common/Header/types';
// import Icon from 'components/Icon';

const getDropdownMenu = ({
  dropdownItems,
  onDropdownClick,
  itemStyle,
  width,
  activeDropdownItem,
}: TMenuProps) => {
  const handleDropDownClick = (id: ESupplierHeaderItems) => () =>
    onDropdownClick(id);

  return (
    <StyledMenu
      selectedKeys={[activeDropdownItem]}
      itemstyle={itemStyle}
      width={width}
    >
      {dropdownItems?.map(
        ({id, title, disabled, onClick, customComponent, link = ''}) => {
          if (customComponent) return customComponent;

          return (
            <StyledMenuItem
              key={id}
              disabled={disabled}
              onClick={handleDropDownClick(id)}
              data-testid={`dropdown-item-${id}`}
            >
              {disabled ? (
                <>{title}</>
              ) : (
                <NavLink onClick={onClick} to={link}>
                  {title}
                </NavLink>
              )}
            </StyledMenuItem>
          );
        },
      )}
    </StyledMenu>
  );
};

export const NW2MenuItem = ({
  title,
  // icon,
  activeDropdownItem,
  dropdownItems,
  color = 'white',
  position = 'center',
  // iconSize = 20,
  itemStyle = 'default',
  url = '',
  isActive = false,
  width,
  onClick,
  onDropdownClick,
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
          <StyledDropdown
            overlay={getDropdownMenu({
              dropdownItems,
              onDropdownClick,
              itemStyle,
              width,
              activeDropdownItem,
            })}
            trigger={['click']}
          >
            <ArrowBlock color={color} isActive={isActive}>
              <MenuItem itemstyle={itemStyle} isActive={isActive}>
                {/* <StyledIcon icon={icon} size={iconSize} whiteColor /> */}
                <span data-testid={'header-dropdown-title-venue-name'}>
                  {title}
                </span>
              </MenuItem>
            </ArrowBlock>
          </StyledDropdown>
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
            {/* <Icon icon={icon} size={iconSize} whiteColor /> */}
            <span data-testid={`dropdown-title-${title}`}>{title}</span>
          </SimpleMenuItem>
        </Wrapper>
      </StyledNavLink>
    </OuterWrapper>
  );
};
