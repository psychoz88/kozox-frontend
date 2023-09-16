import { matchPath } from "react-router";
import { ESupplierHeaderItems, TLayout } from "./types";
import { adminMenu } from "./menuConfigs/AdminMenu";
import { Routes } from "constants/routes";

const getNmmCurrentMenu = (): any => {
  return adminMenu();
};

const getIsExactPath = (customRoutes: string[], currentPath: string) =>
  customRoutes.find((route: any) => {
    return matchPath(route, currentPath);
  }) || '';

export const setHeaderStyle = (
  currentPath: string,
): TLayout => {
  const {
    layout: {defaultLayoutType, customRoutesLayout = {}},
  } = getNmmCurrentMenu();
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

export const getActiveItemFromRoute = (pathname: string): ESupplierHeaderItems => {
  switch (pathname) {
    case Routes.mainLanding:
      return ESupplierHeaderItems.LocationButton;
    default:
      return ESupplierHeaderItems.VenueDetails;
  }
};

export const getActiveDropdownItemFromRoute = (
  location: any,
): ESupplierHeaderItems | '' => {
  if (location.hash) {
    switch (location.hash) {
      case '#desk':
        return ESupplierHeaderItems.WorkDesks;
      case '#room':
        return ESupplierHeaderItems.MeetingRooms;
      default:
        return '';
    }
  } else {
    switch (location.pathname) {
      case Routes.mainLanding:
        return ESupplierHeaderItems.VenueDetails;
      default:
        return '';
    }
  }
};