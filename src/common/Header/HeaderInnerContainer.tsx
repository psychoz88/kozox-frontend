import React from 'react';

import HeaderLogo from './NavLinks/HeaderLogo';
import NavServices from './NavLinks/NavServices';
import NavContacts from './NavLinks/NavContacts';

import {ECommonHeaderItems} from './types';

const containerComponents = (
  currentPath: string,
  venueId: string,
  activeItem: ECommonHeaderItems | '',
  selectMenuItem: (value: ECommonHeaderItems) => void,
  rest: Partial<Record<string, unknown>>,
): Record<string, JSX.Element> => {
  // const commonProps: TMenuListProps = {
  //   activeItem,
  //   selectMenuItem,
  //   currentPath,
  //   venueId,
  // };

  return {
    isLogo: <HeaderLogo />,
    isServices: <NavServices {...rest} />,
    isContacts: <NavContacts />,
  };
};

type TProps = {
  currentPath: string;
  component: string;
  activeItem: ECommonHeaderItems | '';
  selectMenuItem: (value: ECommonHeaderItems) => void;
  venueId: string;
};

function HeaderInnerContainer({
  currentPath,
  component,
  venueId,
  activeItem,
  selectMenuItem,
  ...rest
}: TProps) {
  const ComponentToRender = containerComponents(
    currentPath,
    venueId,
    activeItem,
    selectMenuItem,
    rest,
  )[component];

  return ComponentToRender || null;
}

export default HeaderInnerContainer;
