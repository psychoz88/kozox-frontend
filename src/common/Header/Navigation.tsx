import React, {useCallback, useEffect, useState} from 'react';
import * as History from 'history';

import HeaderInnerContainer from 'common/Header/HeaderInnerContainer';

import {getActiveItemFromRoute, setHeaderStyle} from 'common/Header/helpers';
import {useAppSelector} from 'store/hooks';

import {ECommonHeaderItems} from 'common/Header/types';
import {HeaderContainer, StyledHeader} from 'common/Header/Header.styles';

type TProps = {
  location: History.Location;
};

const Navigation = ({location}: TProps) => {
  const {pathname} = location;
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const {components} = setHeaderStyle(pathname, isMobile);

  const [activeItem, setActiveItem] = useState<ECommonHeaderItems | ''>(
    getActiveItemFromRoute(pathname),
  );

  const selectMenuItem = useCallback((item: ECommonHeaderItems) => {
    const excludedButtons = [ECommonHeaderItems.Contacts].includes(item);

    if (!excludedButtons) {
      setActiveItem(item);
    }
  }, []);

  useEffect(() => {
    setActiveItem(getActiveItemFromRoute(pathname));
  }, [location, pathname]);

  return (
    <StyledHeader>
      <HeaderContainer>
        {components.map((item) => (
          <HeaderInnerContainer
            key={item.component}
            activeItem={activeItem}
            selectMenuItem={selectMenuItem}
            currentPath={pathname}
            // TODO
            venueId={'123'}
            {...item}
          />
        ))}
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Navigation;
