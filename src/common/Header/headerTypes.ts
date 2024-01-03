import {EHeaderItems} from './types';

export type TNavMenuList = {
  url: string;
  text: string;
  isVisible?: boolean;
};

export type TNmmNavMenuList = {
  id: EHeaderItems;
  url?: string;
  text: string;
  icon: string;
  venueName?: string;
  width?: string;
  isVisible?: boolean;
  isActive?: (arg0: any, arg1: any) => boolean;
  dropDownItems?: any;
};
