export interface DoubleContentProps {
  title: string;
  text: string;
  email: string;
  phone: string;
  linkedIn: string;
  facebook?: string;
  instagram?: string;
}

export interface DoubleBlockProps extends DoubleContentProps {
  isShowed: boolean;
}
