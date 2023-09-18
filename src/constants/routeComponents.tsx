import React from 'react';

import MainLanding from 'pages/MainLanding';

import {Routes} from './routes';

const RouteComponents = [
  {
    exact: true,
    path: Routes.mainLanding,
    component: MainLanding,
    pageTitle: 'Kozox',
  },
  {
    exact: true,
    path: Routes.page404,
    component: () => <div></div>,
    pageTitle: 'Registration - Venue - NewWork',
  },
].map((item, index) => ({...item, key: index}));

export {RouteComponents};
