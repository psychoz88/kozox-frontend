import {TLayout} from '../types';

const getMobileLayout = (): TLayout => {
  return {
    type: 'commonLayout',
    components: [
      {component: 'isMenuButton'},
      {component: 'isLogo'},
      {component: 'isContactButton'},
    ],
  };
};

export {getMobileLayout};
