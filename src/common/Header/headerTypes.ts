import { ESupplierHeaderItems } from "./types";

export type TNavMenuList = {
  url: string;
  text: string;
  isVisible?: boolean;
};

export type TNmmNavMenuList = {
  id: ESupplierHeaderItems;
  url?: string;
  text: string;
  icon: string;
  venueName?: string;
  width?: string;
  isVisible?: boolean;
  isActive?: (arg0: any, arg1: any) => boolean;
  dropDownItems?: any;
};
