import React, {useCallback, useEffect, useState} from 'react';
import * as History from 'history';

import {
  getActiveDropdownItemFromRoute,
  getActiveItemFromRoute,
  setHeaderStyle,
} from 'common/Header/helpers';
import {SupplierHeaderItems} from 'common/Header/types';
import {ESpaceSelectedTab} from 'types.ts/main';
import {NW2HeaderContainer, StyledHeader} from 'common/Header/Header.styles';
import HeaderInnerContainer from 'common/Header/HeaderInnerContainer';

type TProps = {
  location: History.Location;
};

const Navigation = ({location}: TProps) => {
  const {pathname} = location;

  const {components, type} = setHeaderStyle(pathname);

  const [activeItem, setActiveItem] = useState<SupplierHeaderItems | ''>(
    getActiveItemFromRoute(pathname),
  );
  const [activeDropdownItem, setActiveDropdownItem] = useState<
    ESpaceSelectedTab | SupplierHeaderItems | ''
  >(getActiveDropdownItemFromRoute(location));

  useEffect(() => {
    setActiveItem(getActiveItemFromRoute(pathname));
    setActiveDropdownItem(getActiveDropdownItemFromRoute(location));
  }, [location, pathname]);

  const getActionFromMenuItem = useCallback((menuItem: string) => {
    switch (menuItem) {
      case ESpaceSelectedTab.DESK:
      case ESpaceSelectedTab.ROOM:
      case ESpaceSelectedTab.BEDROOM:
        // dispatch(setSpaceSelectedTab(menuItem));
        break;
      default:
        break;
    }
  }, []);

  const selectMenuItem = useCallback(
    (id: SupplierHeaderItems) => {
      const excludedButtons = [
        SupplierHeaderItems.LocationButton,
        SupplierHeaderItems.Profile,
        SupplierHeaderItems.Spaces,
      ].includes(id);

      getActionFromMenuItem(id);

      if (activeItem !== id && !excludedButtons) {
        setActiveDropdownItem('');
      }

      if (!excludedButtons) {
        setActiveItem(id);
      }
    },
    [activeItem, getActionFromMenuItem],
  );

  const selectDropdownItem = useCallback(
    (id: SupplierHeaderItems) => {
      getActionFromMenuItem(id);
      setActiveDropdownItem(id);
    },
    [getActionFromMenuItem],
  );

  return (
    <StyledHeader datatype={type}>
      <NW2HeaderContainer datatype={type}>
        {components.map((el) => (
          <HeaderInnerContainer
            key={el.component}
            activeItem={activeItem}
            activeDropdownItem={activeDropdownItem}
            selectMenuItem={selectMenuItem}
            selectActiveDropdownItem={selectDropdownItem}
            currentPath={pathname}
            venueId={'123'}
            {...el}
          />
        ))}
      </NW2HeaderContainer>
    </StyledHeader>
  );
};

export default Navigation;
