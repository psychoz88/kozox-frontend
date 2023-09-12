import React, {FC} from 'react';
import {useLocation} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
  const location = useLocation();

  return <Navigation location={location} />;
};

export default Header;
