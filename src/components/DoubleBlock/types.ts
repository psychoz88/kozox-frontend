export interface DoubleContentProps {
  title: string;
  text: string;
  email: string;
  phone: string;
}

export interface DoubleBlockProps extends DoubleContentProps {
  isShowed: boolean;
}
