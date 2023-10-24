import {TColorProps} from 'view/components/Typography/Typography';

export type TIconPropsType = {
  icon: string;
  className?: string; // needed by styled-components!
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  clickable?: boolean;
  id?: string;
  size?: number;
  dataTestClass?: string;
  justify?: string;
} & TColorProps;
