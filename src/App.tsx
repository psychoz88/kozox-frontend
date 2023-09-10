import React, {FC} from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import MainLanding from './components/MainLanding';
import RouteContainer from 'common/RouterContainer';

import {RouteComponents} from 'constants/routeComponents';
import {Routes} from 'constants/routes';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLanding />}>
      {RouteComponents.map(({key, ...rest}) => (
        <Route
          key={key}
          {...rest}
          // errorElement={<Page404 />}
          element={<RouteContainer {...rest} />}
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
