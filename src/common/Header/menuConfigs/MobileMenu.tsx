// import {Routes} from 'constants/routes';

import {getMobileLayout} from '../layoutConfigs/MobileLayout';

// import {ECommonHeaderItems, TDropdownItem} from '../types';
// import {TNmmNavMenuList} from '../headerTypes';

// const getLocationButtonDropDownItems = (): TDropdownItem[] => {
//   return [
//     {
//       id: ECommonHeaderItems.Contacts,
//       title: 'Venue details',
//       link: `${Routes.contacts}`,
//       isExternal: false,
//     },
//   ];
// };

// export const getNavigationDropdownItems = (
//   venueId: string | undefined,
// ): TDropdownItem[] => {
//   return [
//     {
//       id: ECommonHeaderItems.Services,
//       title: 'Meeting rooms',
//       link: `${Routes.mainLanding}?id=${venueId}#room`,
//       isExternal: false,
//     },
//     {
//       id: ECommonHeaderItems.Contacts,
//       title: 'Workdesks',
//       link: `${Routes.contacts}?id=${venueId}#desk`,
//       isExternal: false,
//     },
//   ];
// };

// const getUserMenuDropdownItems = (): TDropdownItem[] => {
//   return [
//     {
//       id: ECommonHeaderItems.Contacts,
//       title: 'Log out',
//       link: Routes.mainLanding,
//       isExternal: false,
//     },
//   ];
// };

// const selectLocationButtonList = (
//   venueId?: string,
//   venueName?: string,
// ): TNmmNavMenuList[] => [
//   {
//     id: ECommonHeaderItems.Contacts,
//     text: `${venueName}`,
//     isVisible: true,
//     dropDownItems: getLocationButtonDropDownItems(),
//     icon: 'NW2_LOCATION_OUTLINE',
//   },
// ];

// const quickNavigationList = (): TNmmNavMenuList[] => [
//   {
//     id: ECommonHeaderItems.Contacts,
//     url: Routes.page404,
//     text: 'Meetings',
//     isVisible: true,
//     icon: 'SEARCH_MEETING_ROOM',
//   },
//   {
//     id: ECommonHeaderItems.Contacts,
//     url: Routes.mainLanding,
//     text: 'Workdesks',
//     isVisible: true,
//     icon: 'SEARCH_WORK_DESK',
//   },
// ];

// export const restNavigationList = (venueId?: string): TNmmNavMenuList[] => [
//   {
//     id: ECommonHeaderItems.Contacts,
//     text: 'Spaces',
//     isVisible: true,
//     dropDownItems: getNavigationDropdownItems(venueId),
//     icon: 'NW2_SPACES',
//   },
//   {
//     id: ECommonHeaderItems.Contacts,
//     url: Routes.contacts,
//     text: 'Availability',
//     isVisible: true,
//     icon: 'NW2_CALENDAR',
//   },
// ];

// const userMenuList = (): TNmmNavMenuList[] => [
//   {
//     id: ECommonHeaderItems.Contacts,
//     text: 'Profile',
//     isVisible: true,
//     dropDownItems: getUserMenuDropdownItems(),
//     icon: 'USER',
//   },
// ];

export const mobileMenu = () => {
  return {
    layout: {
      defaultLayoutType: getMobileLayout(),
    },
    // userMenuList: userMenuList(),
  };
};
