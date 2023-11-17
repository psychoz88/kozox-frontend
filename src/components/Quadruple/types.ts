import {ReactNode} from 'react';

export interface QuadrupleContentProps {
  title: string;
  websiteLink?: string;
  firstBlock?: ReactNode;
  secondBlock: ReactNode;
  thirdBlock: string;
  foursBlock: ReactNode;
}

export interface QuadrupleBlockProps extends QuadrupleContentProps {
  isShowed: boolean;
}
