// import {ESpaceSelectedTab, ISpacesData} from 'types/venue';

import { ESpaceSelectedTab } from "types.ts/main";

export enum SupplierHeaderItems {
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
  activeItem: SupplierHeaderItems | '';
  selectMenuItem: (value: SupplierHeaderItems) => void;
  activeDropdownItem: '' | SupplierHeaderItems | ESpaceSelectedTab;
  selectActiveDropdownItem: (id: SupplierHeaderItems) => void;
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
