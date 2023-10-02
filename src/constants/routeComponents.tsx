// import React from 'react';

import MainLanding from 'pages/MainLanding/MainLanding';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';

import {Routes} from './routes';
import PortfolioPage from 'pages/PortfolioPage/PortfolioPage';

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
    pageTitle: 'Services',
  },
  {
    exact: true,
    path: Routes.contacts,
    component: ContactsPage,
    pageTitle: 'Contacts',
  },
  {
    exact: true,
    path: Routes.portfolio,
    component: PortfolioPage,
    pageTitle: 'Portfolio',
  },
  // need to add page404
].map((item, index) => ({...item, key: index}));

export {RouteComponents};
