import React, {FC, PropsWithChildren, useEffect} from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import {Layout} from 'antd';
import {useLocation} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import CookiesModal from './Cookies/CookiesModal';

import {useDeviceType} from 'hooks/useDeviceType';

import {mainColor} from 'constants/styleVars';

const AppContainer = styled(Div100vh)`
  display: flex;
  flex-direction: column;
`;

const PageContentContainer = styled(Layout)`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  background-color: ${mainColor};
`;

const ContentContainer = styled.div`
  padding: 100px 32px;
  background-color: ${mainColor};
  max-width: 1168px;
  margin: 0 auto;
`;

const MainLayout: FC<PropsWithChildren<any>> = (props) => {
  useDeviceType();
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const appElement = document.getElementById('app');
        appElement && appElement.scrollIntoView();
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return (
    <AppContainer id='app'>
      <Header />
      <PageContentContainer id='main'>
        <ContentContainer>{props.children}</ContentContainer>
      </PageContentContainer>
      <Footer />
      <CookiesModal />
    </AppContainer>
  );
};

export default MainLayout;
