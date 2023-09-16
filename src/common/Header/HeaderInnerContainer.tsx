import React from 'react';

import HeaderLogo from './HeaderLogo';
import NavBackButton from './NavBackButton';
import NavSelectLocationButton from './NavSelectLocationButton';

import {ESupplierHeaderItems, TMenuListProps} from './types';
import {ESpaceSelectedTab} from 'types.ts/main';

const containerComponents = (
  currentPath: string,
  venueId: string,
  activeItem: ESupplierHeaderItems | '',
  selectMenuItem: (value: ESupplierHeaderItems) => void,
  activeDropdownItem: ESupplierHeaderItems | ESpaceSelectedTab | '',
  selectActiveDropdownItem: (id: ESupplierHeaderItems) => void,
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

  return {
    isLogo: <HeaderLogo />,
    isBackButton: <NavBackButton {...rest} />,
    isSelectLocationButton: <NavSelectLocationButton {...commonProps} />,
  };
};

type TProps = {
  currentPath: string;
  component: string;
  activeItem: ESupplierHeaderItems | '';
  activeDropdownItem: ESupplierHeaderItems | ESpaceSelectedTab | '';
  selectMenuItem: (value: ESupplierHeaderItems) => void;
  selectActiveDropdownItem: (id: ESupplierHeaderItems) => void;
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
