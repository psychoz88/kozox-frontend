export interface DoubleContentProps {
  title: string;
  text: string;
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
