import {TLayout} from '../types';

const getMobileLayout = (): TLayout => {
  return {
    type: 'commonLayout',
    components: [
      {component: 'isLogo'},
      {component: 'isContactButton'},
    ],
  };
};

export {getMobileLayout};