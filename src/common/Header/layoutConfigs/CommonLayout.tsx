import {TLayout} from '../types';

const getCommonLayout = (): TLayout => {
  return {
    type: 'commonLayout',
    components: [
      {component: 'isLogo'},
      {component: 'isServices'},
      {component: 'isContacts'},
    ],
  };
};

export {getCommonLayout};
