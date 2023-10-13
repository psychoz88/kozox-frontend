import React from 'react';

import NavHeaderLogo from './NavLinks/NavHeaderLogo';
import NavServices from './NavLinks/NavServices';
import NavContacts from './NavLinks/NavContacts';
import NavPortfolio from './NavLinks/NavPortfolio';
import NavContactButton from './NavLinks/NavContactButton';

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
    isLogo: <NavHeaderLogo />,
    isServices: <NavServices {...rest} />,
    isPortfolio: <NavPortfolio />,
    isContacts: <NavContacts />,
    isContactButton: <NavContactButton />,
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
