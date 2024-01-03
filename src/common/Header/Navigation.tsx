import React, {useCallback, useEffect, useState} from 'react';
import * as History from 'history';

import HeaderInnerContainer from 'common/Header/HeaderInnerContainer';

import {getActiveItemFromRoute, setHeaderStyle} from 'common/Header/helpers';
import {useAppSelector} from 'store/hooks';

import {EHeaderItems} from 'common/Header/types';
import {HeaderContainer, StyledHeader} from 'common/Header/Header.styles';

type TProps = {
  location: History.Location;
};

const Navigation = ({location}: TProps) => {
  const {pathname} = location;
  const [activeItem, setActiveItem] = useState<EHeaderItems | ''>(
    getActiveItemFromRoute(pathname),
  );
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const {components} = setHeaderStyle(pathname, isMobile);

  const selectMenuItem = useCallback((item: EHeaderItems) => {
    const excludedButtons = [
      EHeaderItems.HeaderLogo,
      EHeaderItems.ContactButton,
      EHeaderItems.MenuButton,
    ].includes(item);

    if (!excludedButtons) {
      setActiveItem(item);
    }
  }, []);

  useEffect(() => {
    setActiveItem(getActiveItemFromRoute(pathname));
  }, [location, pathname]);

  return (
    <StyledHeader>
      <HeaderContainer isMobile={isMobile}>
        {components.map((item) => (
          <HeaderInnerContainer
            key={item.component}
            activeItem={activeItem}
            selectMenuItem={selectMenuItem}
            currentPath={pathname}
            {...item}
          />
        ))}
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Navigation;
