import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './App';
import store from './store/config';

import './styles/index.css';
import {GlobalStyle} from 'styles';

// ENTRY POINT FOR REACT APP WITH REDUX STORE PROVIDER
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
createRoot(rootElement).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
