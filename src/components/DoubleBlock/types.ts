export interface DoubleContentProps {
  title: string;
  text: string;
  email?: string;
  phone?: string;
  image?: string;
  isReverse?: boolean;
}

export interface DoubleBlockProps extends DoubleContentProps {
  isShowed: boolean;
  isContacts?: boolean;
}
