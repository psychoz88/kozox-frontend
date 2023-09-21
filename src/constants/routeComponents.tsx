// import React from 'react';

import MainLanding from 'pages/MainLanding/MainLanding';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';

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
    path: Routes.services,
    component: ServicesPage,
    pageTitle: 'Registration - Venue - NewWork',
  },
  {
    exact: true,
    path: Routes.contacts,
    component: ContactsPage,
    pageTitle: 'Registration - Venue - NewWork',
  },
  // need to add page404
].map((item, index) => ({...item, key: index}));

export {RouteComponents};
