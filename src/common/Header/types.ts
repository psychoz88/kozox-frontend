// import {ESpaceSelectedTab, ISpacesData} from 'types/venue';

import { SyntheticEvent } from "react";
import { ESpaceSelectedTab } from "types.ts/main";

export enum ESupplierHeaderItems {
  MultiLocation = 'MultiLocation',
  LocationButton = 'LocationButton',
  VenueDetails = 'VenueDetails',
  CreateNewOffice = 'CreateNewOffice',
  BookingMeetingRooms = 'BookingMeetingRooms',
  BookingDesks = 'BookingDesks',
  WorkDesks = 'desk',
  MeetingRooms = 'room',
  Bedrooms = 'bedroom',
  Spaces = 'Spaces',
  Availability = 'Availability',
  Services = 'Services',
  Profile = 'Profile',
  LogOut = 'LogOut',
}

type TLayoutComponent = {
  component: string;
  isButtonVisible?: boolean;
};

type TLayout = {
  type: string;
  components: TLayoutComponent[];
};

type TMenuListProps = {
  currentPath: string;
  venueId: string;
  activeItem: ESupplierHeaderItems | '';
  selectMenuItem: (value: ESupplierHeaderItems) => void;
  activeDropdownItem: '' | ESupplierHeaderItems | ESpaceSelectedTab;
  selectActiveDropdownItem: (id: ESupplierHeaderItems) => void;
  role?: string;
};

// type TMenuListPropsWithSpaces = {
//   spaces: ISpacesData[] | null;
// } & TMenuListProps;

export type {
  TLayout,
  TLayoutComponent,
  TMenuListProps,
  // TMenuListPropsWithSpaces,
};

export type TDropdownItem = {
  id: ESupplierHeaderItems;
  title: string;
  isExternal: boolean;
  link?: string;
  disabled?: boolean;
  customComponent?: JSX.Element;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};