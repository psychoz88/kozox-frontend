import {ReactNode} from 'react';

export interface TwoColumnsContentProps {
  title: string;
  subTitle?: string;
  isRightColumnBeforeLeft?: boolean;
  isLeftColumnFixed?: boolean;
  isRightColumnFullHeight?: boolean;
  colLeft: ReactNode;
  colRight: ReactNode;
  footer?: ReactNode;
  onToggleShow?: () => void;
  isRefreshScroll?: boolean;
  customPadding?: string;
  gridColumns?: string;
  rightColumnStyles?: any;
  leftColumnStyles?: any;
}

export interface TwoColumnsProps extends TwoColumnsContentProps {
  isShowed: boolean;
}
