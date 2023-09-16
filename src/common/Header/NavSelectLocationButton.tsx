import React, {useCallback} from 'react';

import {ESupplierHeaderItems, TMenuListProps} from './types';
import {supplierMenu} from './menuConfigs/SupplierMenu';
import styled from 'styled-components';
import {NW2MenuItem} from 'components/MenuItem/NW2MenuItem';
import { TNmmNavMenuList } from './headerTypes';

export const LocationSelectContainer = styled.div`
  flex-grow: 1;
  display: inline-flex;
  white-space: nowrap;
`;

interface ILocationButtonListProps {
  role?: string;
  venueId: string;
  venueName: string;
}

const setLocationButtonList = ({
  role,
  venueId,
  venueName,
}: ILocationButtonListProps): TNmmNavMenuList[] | null => {
  switch (role) {
    case 'NWRK_SUPPLIER':
      return supplierMenu({
        venueId,
        venueName,
      }).selectLocationButton.filter(({isVisible}) => isVisible);
    default:
      return null;
  }
};

function NavSelectLocationButton({
  role,
  activeItem,
  selectMenuItem,
  activeDropdownItem,
  selectActiveDropdownItem,
  venueId,
}: TMenuListProps) {
  const handleDropdownClick = useCallback(
    (id: ESupplierHeaderItems) => {
      selectActiveDropdownItem(id);
    },
    [selectActiveDropdownItem],
  );

  const locationButtonList = setLocationButtonList({
    venueId,
    venueName: '123',
    role,
  });

  const handleMenuClick = (id: ESupplierHeaderItems) => () => {
    selectMenuItem(id);
  };

  if (!locationButtonList) return null;

  return (
    <LocationSelectContainer>
      {locationButtonList.map(({url, text, dropDownItems, icon, id, width}) => (
        <NW2MenuItem
          id={id}
          key={id}
          isActive={activeItem === id}
          position='left'
          itemStyle='inline'
          title={text}
          url={url}
          width={width}
          iconSize={16}
          color='NW2Primary'
          onClick={handleMenuClick(id)}
          activeDropdownItem={activeDropdownItem}
          onDropdownClick={handleDropdownClick}
          dropdownItems={dropDownItems}
          icon={icon}
        />
      ))}
    </LocationSelectContainer>
  );
}

export default NavSelectLocationButton;
