import {ButtonHTMLAttributes, ReactNode} from 'react';

type TButtonType =
  | 'primary'
  | 'secondary'
  | 'link';

export type TButtonSize =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'responsiveAdaptive';

export type TButtonBaseProps = {
  active?: boolean;
  buttonType?: TButtonType;
  fullWidth?: boolean;
  inline?: boolean;
  inverted?: boolean;
  loading?: boolean | number;
  minimized?: boolean;
  icon?: ReactNode;
  iconPlace?: 'left' | 'right';
  size?: TButtonSize;
  white?: boolean;
  borderColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
