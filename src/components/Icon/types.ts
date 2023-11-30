import {TColorProps} from 'components/Typography/Typography';

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

  // For Anchor 
  href?: string;
  target?: string;
  rel?: string;
} & TColorProps;
