import {SyntheticEvent} from 'react';

import {ECommonHeaderItems} from 'common/Header/types';
import {app_colors} from 'constants/styleVars';
import {ESpaceSelectedTab} from 'types/main';

export type TColor = typeof app_colors;

export type TPosition = 'left' | 'center' | 'right';
export type TItemStyle = 'inline' | 'default';

export type TdropdownItem = {
  id: ECommonHeaderItems;
  title: string;
  isExternal: boolean;
  link?: string;
  disabled?: boolean;
  customComponent?: JSX.Element;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};

export type TProps = {
  id: ECommonHeaderItems;
  icon?: string;
  isActive: boolean;
  color: keyof TColor;
  title: string;
  itemStyle?: TItemStyle;
  iconSize?: number;
  width?: string;
  url?: string;
  position?: TPosition;
  dropdownItems?: TdropdownItem[];
  onClick: () => void;
};

export type TArrowBlockProps = {
  isActive?: boolean;
  color?: keyof TColor;
  itemStyle?: TItemStyle;
  onClick?: (id: number) => void;
};

export type TMenuProps = {
  dropdownItems: TdropdownItem[] | undefined;
  activeDropdownItem: ECommonHeaderItems | ESpaceSelectedTab | '';
  width?: string;
  itemStyle?: TItemStyle;
  onDropdownClick: (id: ECommonHeaderItems) => void;
};
