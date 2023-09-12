// import React, {useCallback} from 'react';
// import _get from 'lodash/get';
// import {useSelector} from 'react-redux';
// import {useNavigate} from 'react-router-dom';

// import useGlobalVenue from 'view/venue/hooks/useGlobalVenue';

// import {NW2MenuItem} from 'view/components/NW2MenuItem/NW2MenuItem';
// import {useAppDispatch} from 'store/hooks';
// import {LocationSelectContainer} from 'view/common/Header/Header.styles';
// import {EUserRoleCognito} from 'types/dto/EUserRoleCognito';
// import {propertyManagerMenu, supplierMenu} from '../menuConfigs';
// import {TNmmNavMenuList} from 'types/header';
// import {SupplierHeaderItems, TMenuListProps} from '../types';
// import {clearVenueData, getPublicVenueById} from 'store/venue/actions';
// import {PATH_TO_REDUCER_VENUE_DATA} from 'constants/venue';
// import {useCorporateOffices} from 'hooks/useCorporateOffices';
// import {IVenue} from 'types/venue';
// import {getCorporateOffices} from 'store/corporateOffice/apiActions';
// import {setSelectedOfficeId} from 'store/corporateOffice/corporateOfficeSlice';
// import {TImage} from 'types/app';
// import {Routes} from 'constants/routes';

// const userRolesWithOfficeName = [
//   EUserRoleCognito.ROLE_PROPERTY_MANAGER,
//   EUserRoleCognito.ROLE_SUPPLIER,
// ];

// interface ILocationButtonListProps {
//   role: string;
//   venueId: string;
//   image: string;
//   venueName: string;
//   officeList: IVenue[];
//   selectedOfficeId: number;
//   handleOfficeListClick: (id: number) => () => void;
// }

// const setLocationButtonList = ({
//   role,
//   venueId,
//   image,
//   venueName,
//   officeList,
//   selectedOfficeId,
//   handleOfficeListClick,
// }: ILocationButtonListProps): TNmmNavMenuList[] | null => {
//   switch (role) {
//     case EUserRoleCognito.ROLE_SUPPLIER:
//       return supplierMenu({
//         venueId,
//         venueName,
//       }).selectLocationButton.filter(({isVisible}) => isVisible);
//     case EUserRoleCognito.ROLE_PROPERTY_MANAGER:
//       return propertyManagerMenu({
//         officeList,
//         venueId,
//         image,
//         selectedOfficeId,
//         venueName,
//         handleOfficeListClick,
//       }).selectLocationButton.filter(({isVisible}) => isVisible);
//     // case EUserRoleCognito.ROLE_ADMIN:
//     //   return adminMenu.navList;
//     default:
//       return null;
//   }
// };

// function NavSelectLocationButton({
//   role,
//   activeItem,
//   selectMenuItem,
//   activeDropdownItem,
//   selectActiveDropdownItem,
//   venueId,
// }: TMenuListProps) {
//   const dispatch = useAppDispatch();
//   const [globalVenue] = useGlobalVenue();
//   const navigate = useNavigate();
//   const {corporateOffices, corporateAccountId} = useCorporateOffices();

//   const venueName = useSelector((state) =>
//     _get(state, `${PATH_TO_REDUCER_VENUE_DATA}.name`),
//   );

//   const handleDropdownClick = useCallback(
//     (id: SupplierHeaderItems) => {
//       dispatch(getPublicVenueById(Number(venueId)));
//       selectActiveDropdownItem(id);
//     },
//     [dispatch, selectActiveDropdownItem, venueId],
//   );

//   const handleOfficeListClick = (id: number) => () => {
//     if (id === globalVenue?.venue?.id) return;

//     dispatch(clearVenueData());
//     dispatch(setSelectedOfficeId(id));
//     dispatch(getCorporateOffices(Number(corporateAccountId), true));
//     navigate(Routes.corporateVenue);
//   };

//   if (!venueName || !userRolesWithOfficeName.includes(role as EUserRoleCognito))
//     return null;

//   const image =
//     (globalVenue.venue.documents as TImage[])?.find((doc) => doc.isCover)
//       ?.url || '';

//   const locationButtonList = setLocationButtonList({
//     role,
//     venueId,
//     image,
//     venueName,
//     officeList: corporateOffices,
//     selectedOfficeId: globalVenue?.venue?.id,
//     handleOfficeListClick,
//   });

//   const handleMenuClick = (id: SupplierHeaderItems) => () => {
//     selectMenuItem(id);
//   };

//   if (!locationButtonList) return null;

//   return (
//     <LocationSelectContainer>
//       {locationButtonList.map(({url, text, dropDownItems, icon, id, width}) => (
//         <NW2MenuItem
//           id={id}
//           key={id}
//           isActive={activeItem === id}
//           position='left'
//           itemStyle='inline'
//           title={text}
//           url={url}
//           width={width}
//           iconSize={16}
//           color='NW2Primary'
//           onClick={handleMenuClick(id)}
//           activeDropdownItem={activeDropdownItem}
//           onDropdownClick={handleDropdownClick}
//           dropdownItems={dropDownItems}
//           icon={icon}
//         />
//       ))}
//     </LocationSelectContainer>
//   );
// }

// export default NavSelectLocationButton;

export const asd = () => {
  return '123';
};
