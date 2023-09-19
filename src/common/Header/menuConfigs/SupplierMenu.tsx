import {Routes} from 'constants/routes';
import { ECommonHeaderItems, TDropdownItem } from '../types';
import { getCenteredLayout } from '../layoutConfigs/CenteredLayout';
import { getSupplierLayout } from '../layoutConfigs/SupplierLayout';
import { TNmmNavMenuList } from '../headerTypes';

const getLocationButtonDropDownItems = (): TDropdownItem[] => {
  return [
    {
      id: ECommonHeaderItems.Contacts,
      title: 'Venue details',
      link: `${Routes.contacts}`,
      isExternal: false,
    },
  ];
};

export const getNavigationDropdownItems = (
  venueId: string | undefined,
): TDropdownItem[] => {
  return [
    {
      id: ECommonHeaderItems.Services,
      title: 'Meeting rooms',
      link: `${Routes.mainLanding}?id=${venueId}#room`,
      isExternal: false,
    },
    {
      id: ECommonHeaderItems.Contacts,
      title: 'Workdesks',
      link: `${Routes.contacts}?id=${venueId}#desk`,
      isExternal: false,
    },
  ];
};

const getUserMenuDropdownItems = (): TDropdownItem[] => {
  return [
    {
      id: ECommonHeaderItems.Contacts,
      title: 'Log out',
      link: Routes.mainLanding,
      isExternal: false,
    },
  ];
};

const selectLocationButtonList = (
  venueId?: string,
  venueName?: string,
): TNmmNavMenuList[] => [
  {
    id: ECommonHeaderItems.Contacts,
    text: `${venueName}`,
    isVisible: true,
    dropDownItems: getLocationButtonDropDownItems(),
    icon: 'NW2_LOCATION_OUTLINE',
  },
];

const quickNavigationList = (): TNmmNavMenuList[] => [
  {
    id: ECommonHeaderItems.Contacts,
    url: Routes.page404,
    text: 'Meetings',
    isVisible: true,
    icon: 'SEARCH_MEETING_ROOM',
  },
  {
    id: ECommonHeaderItems.Contacts,
    url: Routes.mainLanding,
    text: 'Workdesks',
    isVisible: true,
    icon: 'SEARCH_WORK_DESK',
  },
];

export const restNavigationList = (venueId?: string): TNmmNavMenuList[] => [
  {
    id: ECommonHeaderItems.Contacts,
    text: 'Spaces',
    isVisible: true,
    dropDownItems: getNavigationDropdownItems(venueId),
    icon: 'NW2_SPACES',
  },
  {
    id: ECommonHeaderItems.Contacts,
    url: Routes.contacts,
    text: 'Availability',
    isVisible: true,
    icon: 'NW2_CALENDAR',
  },
];
const userMenuList = (): TNmmNavMenuList[] => [
  {
    id: ECommonHeaderItems.Contacts,
    text: 'Profile',
    isVisible: true,
    dropDownItems: getUserMenuDropdownItems(),
    icon: 'USER',
  },
];

type TReturnType = {
  layout: Record<string, any>;
  selectLocationButton: TNmmNavMenuList[];
  quickNavList: TNmmNavMenuList[];
  restNavList: TNmmNavMenuList[];
  userMenuList: TNmmNavMenuList[];
};

export const supplierMenu = ({
  venueId,
  venueName,
}: {
  venueId: string;
  venueName?: string;
  isSpaces?: boolean;
}): TReturnType => {
  return {
    layout: {
      defaultLayoutType: getSupplierLayout(),
      customRoutesLayout: {
        [Routes.contacts.toLowerCase()]: getCenteredLayout(),
      },
    },
    selectLocationButton: venueId
      ? selectLocationButtonList(venueId, venueName)
      : [],
    quickNavList: venueId ? quickNavigationList() : [],
    restNavList: venueId ? restNavigationList(venueId) : [],
    userMenuList: userMenuList(),
  };
};
