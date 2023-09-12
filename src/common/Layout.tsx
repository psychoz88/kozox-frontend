import React, {FC, PropsWithChildren, useEffect} from 'react';
import {Layout} from 'antd';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';

import Header from './Header/Header';

const AppContainer = styled(Div100vh)`
  display: flex;
  flex-direction: column;
`;

const PageContentContainer = styled(Layout)`
  background: ${(props) => props.theme.bodyBackground};
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
`;

const MainLayout: FC<PropsWithChildren<any>> = (props) => {
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
      <PageContentContainer id='main'>{props.children}</PageContentContainer>
      {/* <Footer /> */}
    </AppContainer>
  );
};

export default MainLayout;
