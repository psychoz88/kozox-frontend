import {Routes} from 'constants/routes';
import { ESupplierHeaderItems, TDropdownItem } from '../types';
import { getCenteredLayout } from '../layoutConfigs/CenteredLayout';
import { getSupplierLayout } from '../layoutConfigs/SupplierLayout';
import { TNmmNavMenuList } from '../headerTypes';

const getLocationButtonDropDownItems = (): TDropdownItem[] => {
  return [
    {
      id: ESupplierHeaderItems.VenueDetails,
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
      id: ESupplierHeaderItems.MeetingRooms,
      title: 'Meeting rooms',
      link: `${Routes.mainLanding}?id=${venueId}#room`,
      isExternal: false,
    },
    {
      id: ESupplierHeaderItems.WorkDesks,
      title: 'Workdesks',
      link: `${Routes.contacts}?id=${venueId}#desk`,
      isExternal: false,
    },
  ];
};

const getUserMenuDropdownItems = (): TDropdownItem[] => {
  return [
    {
      id: ESupplierHeaderItems.LogOut,
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
    id: ESupplierHeaderItems.LocationButton,
    text: `${venueName}`,
    isVisible: true,
    dropDownItems: getLocationButtonDropDownItems(),
    icon: 'NW2_LOCATION_OUTLINE',
  },
];

const quickNavigationList = (): TNmmNavMenuList[] => [
  {
    id: ESupplierHeaderItems.BookingMeetingRooms,
    url: Routes.page404,
    text: 'Meetings',
    isVisible: true,
    icon: 'SEARCH_MEETING_ROOM',
  },
  {
    id: ESupplierHeaderItems.BookingDesks,
    url: Routes.mainLanding,
    text: 'Workdesks',
    isVisible: true,
    icon: 'SEARCH_WORK_DESK',
  },
];

export const restNavigationList = (venueId?: string): TNmmNavMenuList[] => [
  {
    id: ESupplierHeaderItems.Spaces,
    text: 'Spaces',
    isVisible: true,
    dropDownItems: getNavigationDropdownItems(venueId),
    icon: 'NW2_SPACES',
  },
  {
    id: ESupplierHeaderItems.Availability,
    url: Routes.contacts,
    text: 'Availability',
    isVisible: true,
    icon: 'NW2_CALENDAR',
  },
];
const userMenuList = (): TNmmNavMenuList[] => [
  {
    id: ESupplierHeaderItems.Profile,
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
