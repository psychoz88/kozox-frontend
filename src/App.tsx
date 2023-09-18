import React, {FC, Suspense} from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from 'common/Layout';
import RouteContainer from 'common/RouterContainer';

import {RouteComponents} from 'constants/routeComponents';
import {Routes} from 'constants/routes';

import './App.css';

const LayoutContainer: FC = () => {
  return (
    <Layout>
      <Suspense>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutContainer />}>
      {RouteComponents.map(({key, ...rest}) => (
        <Route
          key={key}
          {...rest}
          element={<RouteContainer {...rest} />}
          // errorElement={<Page404 />}
        />
      ))}
      <Route path='*' element={<Navigate to={Routes.page404} />} />
    </Route>,
  ),
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
