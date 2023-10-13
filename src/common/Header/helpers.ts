import {matchPath} from 'react-router';

import {Routes} from 'constants/routes';
import {commonMenu} from './menuConfigs/CommonMenu';

import {ECommonHeaderItems, TLayout} from './types';

const getCurrentMenu = (): any => {
  // case it need another menu
  return commonMenu();
};

const getIsExactPath = (customRoutes: string[], currentPath: string) =>
  customRoutes.find((route: any) => {
    return matchPath(route, currentPath);
  }) || '';

export const setHeaderStyle = (currentPath: string): TLayout => {
  const {
    layout: {defaultLayoutType, customRoutesLayout = {}},
  } = getCurrentMenu();

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

// TODO
export const getActiveItemFromRoute = (
  pathname: string,
): ECommonHeaderItems => {
  switch (pathname) {
    case Routes.contacts:
      return ECommonHeaderItems.Contacts;
    default:
      return ECommonHeaderItems.Services;
  }
};
