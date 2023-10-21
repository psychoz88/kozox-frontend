import {SyntheticEvent} from 'react';

// import {ESpaceSelectedTab, ISpacesData} from 'types/venue';

export enum ECommonHeaderItems {
  Services = 'Services',
  Contacts = 'Contacts',
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
  activeItem: ECommonHeaderItems | '';
  selectMenuItem: (value: ECommonHeaderItems) => void;
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
  id: ECommonHeaderItems;
  title: string;
  isExternal: boolean;
  link?: string;
  disabled?: boolean;
  customComponent?: JSX.Element;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};

export type TNavProps = {
  setMenuShowed?: () => void;
};
