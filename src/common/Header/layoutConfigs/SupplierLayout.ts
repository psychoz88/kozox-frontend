import {TLayout} from '../types';

export const getSupplierLayout = (): TLayout => {
  return {
    type: 'NW2SupplierLayout',
    components: [
      {component: 'isLogo'},
      {component: 'isSelectLocationButton'},
      {component: 'isQuickNavList'},
      {component: 'isRestNavList'},
      {component: 'isSignOutButton'},
    ],
  };
};
