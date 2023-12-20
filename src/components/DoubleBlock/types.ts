import {ReactNode} from 'react';

export interface DoubleContentProps {
  title: string;
  text: string | ReactNode;
  anchor?: string;
  email?: string;
  phone?: string;
  image?: string;
  isReverse?: boolean;
  withButton?: boolean;
}

export interface DoubleBlockProps extends DoubleContentProps {
  isShowed: boolean;
  isContacts?: boolean;
}
