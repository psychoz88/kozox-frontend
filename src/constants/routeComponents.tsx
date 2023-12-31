import MainLanding from 'pages/MainLandingPage/MainLanding';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import PortfolioPage from 'pages/PortfolioPage/PortfolioPage';
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage/PrivacyPolicyPage';
import ContactForm from 'pages/ContactForm/ContactForm';
import CookiePolicyPage from 'pages/CookiePolicyPage/CookiePolicyPage';

import {Routes} from './routes';
import TermsAndConditionsPage from 'pages/TermsAndConditions/TermsAndConditionsPage';
import Page404 from 'pages/Page404/Page404';

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
  {
    exact: true,
    path: Routes.contactForm,
    component: ContactForm,
    pageTitle: 'Contact us',
  },
  {
    exact: true,
    path: Routes.privacyPolicy,
    component: PrivacyPolicyPage,
    pageTitle: 'Privacy policy',
  },
  {
    exact: true,
    path: Routes.cookiePolicy,
    component: CookiePolicyPage,
    pageTitle: 'Cookie policy',
  },
  {
    exact: true,
    path: Routes.termsAndConditions,
    component: TermsAndConditionsPage,
    pageTitle: 'Terms & Conditions',
  },
  {
    exact: true,
    path: Routes.page404,
    component: Page404,
    pageTitle: 'Error 404',
  },
].map((item, index) => ({...item, key: index}));

export {RouteComponents};
