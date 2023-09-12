import { TLayout } from "../types";

const getAdminLayout = (): TLayout => {
  return {
    type: 'AdminLayout',
    components: [
      {component: 'isLogo'},
      {component: 'isSelectLocationButton'},
      {component: 'isNavList'},
      {component: 'isSignOutButton'},
    ],
  };
};

export {getAdminLayout};
