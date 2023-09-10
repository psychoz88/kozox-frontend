import React from 'react';

import {Routes} from './routes';

const RouteComponents = [
  {
    exact: true,
    path: Routes.mainLanding,
    component: () => <div></div>,
    pageTitle: 'Registration - Venue - NewWork',
  },
  {
    exact: true,
    path: Routes.page404,
    component: () => <div></div>,
    pageTitle: 'Registration - Venue - NewWork',
  },
].map((item, index) => ({...item, key: index}));

export {RouteComponents};
