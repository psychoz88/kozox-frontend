export enum EHeaderItems {
  HeaderLogo = 'HeaderLogo',
  Services = 'Services',
  Portfolio = 'Portfolio',
  Contacts = 'Contacts',
  ContactButton = 'ContactButton',
  MenuButton = 'MenuButton',
}

export type TMenuListProps = {
  activeItem: EHeaderItems | '';
  selectMenuItem: (value: EHeaderItems) => void;
  setMenuShowed?: () => void;
  currentPath?: string; // TODO: check do we need it
};

export type TLayoutComponent = {
  component: string;
  isButtonVisible?: boolean;
};

export type TLayout = {
  type: string;
  components: TLayoutComponent[];
};

export type TNavProps = {
  setMenuShowed?: () => void;
};
