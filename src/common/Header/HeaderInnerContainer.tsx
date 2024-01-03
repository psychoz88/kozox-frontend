import React from 'react';

import NavHeaderLogo from './NavLinks/NavHeaderLogo';
import NavServices from './NavLinks/NavServices';
import NavContacts from './NavLinks/NavContacts';
import NavPortfolio from './NavLinks/NavPortfolio';
import NavContactButton from './NavLinks/NavContactButton';
import NavMenuButton from './NavLinks/NavMenuButton';

import {EHeaderItems, TMenuListProps} from './types';

const containerComponents = (
  currentPath: string,
  activeItem: EHeaderItems | '',
  selectMenuItem: (value: EHeaderItems) => void,
  rest: Partial<Record<string, unknown>>,
): Record<string, JSX.Element> => {
  const commonProps: TMenuListProps = {
    activeItem,
    selectMenuItem,
  };

  return {
    isLogo: <NavHeaderLogo />,
    isServices: <NavServices {...rest} {...commonProps} />,
    isPortfolio: <NavPortfolio {...commonProps} />,
    isContacts: <NavContacts {...commonProps} />,
    isContactButton: <NavContactButton />,
    isMenuButton: <NavMenuButton {...commonProps} />,
  };
};

type TProps = {
  currentPath: string;
  component: string;
  activeItem: EHeaderItems | '';
  selectMenuItem: (value: EHeaderItems) => void;
};

function HeaderInnerContainer({
  currentPath,
  component,
  activeItem,
  selectMenuItem,
  ...rest
}: TProps) {
  const ComponentToRender = containerComponents(
    currentPath,
    activeItem,
    selectMenuItem,
    rest,
  )[component];

  return ComponentToRender || null;
}

export default HeaderInnerContainer;
