import { ESupplierHeaderItems } from "common/Header/types";
import { SyntheticEvent } from "react";
import { app_colors } from "styles";
import { ESpaceSelectedTab } from "types.ts/main";

export type TColor = typeof app_colors;

export type TPosition = 'left' | 'center' | 'right';
export type TItemStyle = 'inline' | 'default';

export type TdropdownItem = {
  id: ESupplierHeaderItems;
  title: string;
  isExternal: boolean;
  link?: string;
  disabled?: boolean;
  customComponent?: JSX.Element;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};

export type TProps = {
  id: ESupplierHeaderItems;
  icon?: string;
  isActive: boolean;
  color: keyof TColor;
  title: string;
  activeDropdownItem: '' | ESupplierHeaderItems | ESpaceSelectedTab;
  itemStyle?: TItemStyle;
  iconSize?: number;
  width?: string;
  url?: string;
  position?: TPosition;
  dropdownItems?: TdropdownItem[];
  onClick: () => void;
  onDropdownClick: (id: ESupplierHeaderItems) => void;
};

export type TArrowBlockProps = {
  isActive?: boolean;
  color?: keyof TColor;
  itemStyle?: TItemStyle;
  onClick?: (id: number) => void;
};

export type TMenuProps = {
  dropdownItems: TdropdownItem[] | undefined;
  activeDropdownItem: ESupplierHeaderItems | ESpaceSelectedTab | '';
  width?: string;
  itemStyle?: TItemStyle;
  onDropdownClick: (id: ESupplierHeaderItems) => void;
};
