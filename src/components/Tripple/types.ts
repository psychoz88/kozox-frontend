import {ReactNode} from 'react';

export interface TrippleContentProps {
  title: string;
  websiteLink?: string;
  leftSide: ReactNode;
  rightSide: ReactNode;
  bottomSide: ReactNode;
}

export interface TrippleBlockProps extends TrippleContentProps {
  isShowed: boolean;
}
