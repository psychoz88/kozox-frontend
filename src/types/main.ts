export enum ESpaceSelectedTab {
  OVERVIEW = 'overview',
  DESK = 'desk',
  ROOM = 'room',
  BEDROOM = 'bedroom',
}

export type TDeviceType = {
  width?: number;
  height?: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export type TFormData = {
  name: string;
  email: string;
  note: string;
  phone?: string;
};