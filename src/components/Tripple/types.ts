import {ReactNode} from 'react';

export interface TrippleContentProps {
  title: string;
  websiteLink?: string;
  firstBlock: ReactNode;
  secondBlock: ReactNode;
  thirdBlock: ReactNode;
  foursBlock: ReactNode;
}

export interface TrippleBlockProps extends TrippleContentProps {
  isShowed: boolean;
}
