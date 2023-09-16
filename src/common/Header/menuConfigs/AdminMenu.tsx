import {Routes} from 'constants/routes';
import {ESupplierHeaderItems} from '../types';
import { getAdminLayout } from '../layoutConfigs/AdminLayout';

const getUserMenuDropdownItems = () => {
  return [
    {
      id: ESupplierHeaderItems.LogOut,
      title: 'Log out',
      // check
      link: Routes.contacts,
      isExternal: false,
    },
  ];
};

const userMenuList = () => [
  {
    id: ESupplierHeaderItems.Profile,
    text: 'Profile',
    isVisible: true,
    dropDownItems: getUserMenuDropdownItems(),
    icon: 'USER',
  },
];

export const adminMenu = () => {
  return {
    layout: {
      defaultLayoutType: getAdminLayout(),
      customRoutesLayout: {
        [Routes.services.toLowerCase()]: getAdminLayout(),
        [Routes.mainLanding.toLowerCase()]: getAdminLayout(),
      },
    },
    userMenuList: userMenuList(),
  };
};
