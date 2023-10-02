import {Routes} from 'constants/routes';
import {getCommonLayout} from '../layoutConfigs/CommonLayout';

import {ECommonHeaderItems} from '../types';

const getUserMenuDropdownItems = () => {
  return [
    {
      id: ECommonHeaderItems.Contacts,
      title: 'Log out',
      // check
      link: Routes.contacts,
      isExternal: false,
    },
  ];
};

const userMenuList = () => [
  {
    id: ECommonHeaderItems.Contacts,
    text: 'Profile',
    isVisible: true,
    dropDownItems: getUserMenuDropdownItems(),
    icon: 'USER',
  },
];

export const commonMenu = () => {
  return {
    layout: {
      defaultLayoutType: getCommonLayout(),
      customRoutesLayout: {
        [Routes.mainLanding.toLowerCase()]: getCommonLayout(),
        [Routes.services.toLowerCase()]: getCommonLayout(),
        [Routes.portfolio.toLowerCase()]: getCommonLayout(),
        [Routes.contacts.toLowerCase()]: getCommonLayout(),
      },
    },
    userMenuList: userMenuList(),
  };
};
