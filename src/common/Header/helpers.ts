import {matchPath} from 'react-router';

import {Routes} from 'constants/routes';
import {commonMenu} from './menuConfigs/CommonMenu';
import {mobileMenu} from './menuConfigs/MobileMenu';

import {EHeaderItems, TLayout} from './types';

const getCurrentMenu = (isMobile: boolean): any => {
  // case if need another menu
  if (isMobile) return mobileMenu();
  return commonMenu();
};

const getIsExactPath = (customRoutes: string[], currentPath: string) =>
  customRoutes.find((route: any) => {
    return matchPath(route, currentPath);
  }) || '';

export const setHeaderStyle = (
  currentPath: string,
  isMobile: boolean,
): TLayout => {
  const {
    layout: {defaultLayoutType, customRoutesLayout = {}},
  } = getCurrentMenu(isMobile);

  let menuComponents = defaultLayoutType.components;
  let layoutType = defaultLayoutType.type;

  const currentPathLowerCased = getIsExactPath(
    Object.keys(customRoutesLayout),
    currentPath,
  );

  const isCustomRoutesLayout =
    customRoutesLayout && customRoutesLayout[currentPathLowerCased];

  if (isCustomRoutesLayout) {
    menuComponents = customRoutesLayout[currentPathLowerCased].components;
    layoutType = customRoutesLayout[currentPathLowerCased].type;
  }

  return {
    type: layoutType,
    components: menuComponents,
  };
};

export const getActiveItemFromRoute = (pathname: string): EHeaderItems => {
  switch (pathname) {
    case Routes.services:
      return EHeaderItems.Services;
    case Routes.portfolio:
      return EHeaderItems.Portfolio;
    case Routes.contacts:
      return EHeaderItems.Contacts;
    default:
      return EHeaderItems.HeaderLogo;
  }
};
