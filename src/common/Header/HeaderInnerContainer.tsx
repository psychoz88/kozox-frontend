import React from 'react';
import { SupplierHeaderItems, TMenuListProps } from './types';
import { ESpaceSelectedTab } from 'types.ts/main';
import HeaderLogo from './HeaderLogo';
import NavBackButton from './NavBackButton';

const containerComponents = (
  currentPath: string,
  venueId: string,
  activeItem: SupplierHeaderItems | '',
  selectMenuItem: (value: SupplierHeaderItems) => void,
  activeDropdownItem: SupplierHeaderItems | ESpaceSelectedTab | '',
  selectActiveDropdownItem: (id: SupplierHeaderItems) => void,
  rest: Partial<Record<string, unknown>>,
): Record<string, JSX.Element> => {
  const commonProps: TMenuListProps = {
    activeItem,
    selectMenuItem,
    activeDropdownItem,
    selectActiveDropdownItem,
    currentPath,
    venueId,
  };

  console.log(commonProps);

  return {
    isLogo: <HeaderLogo />,
    isBackButton: <NavBackButton {...rest} />,
    // isSelectLocationButton: <NavSelectLocationButton {...commonProps} />,
  };
};

type TProps = {
  currentPath: string;
  component: string;
  activeItem: SupplierHeaderItems | '';
  activeDropdownItem: SupplierHeaderItems | ESpaceSelectedTab | '';
  selectMenuItem: (value: SupplierHeaderItems) => void;
  selectActiveDropdownItem: (id: SupplierHeaderItems) => void;
  venueId: string;
};

function HeaderInnerContainer({
  currentPath,
  component,
  venueId,
  activeItem,
  activeDropdownItem,
  selectActiveDropdownItem,
  selectMenuItem,
  ...rest
}: TProps) {
  const ComponentToRender = containerComponents(
    currentPath,
    venueId,
    activeItem,
    selectMenuItem,
    activeDropdownItem,
    selectActiveDropdownItem,
    rest,
  )[component];
  return ComponentToRender || null;
}

export default HeaderInnerContainer;
