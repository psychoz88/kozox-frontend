import {ReactNode} from 'react';

export interface FirstDoubleContentProps {
  title: string;
  text: string | ReactNode;
  image?: string;
  withButton?: boolean;
  imageObjectfFit?: string;
}

export interface FirstDoubleBlockProps extends FirstDoubleContentProps {
  isShowed: boolean;
  isContacts?: boolean;
}
