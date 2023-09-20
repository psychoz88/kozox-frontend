import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import {useAppSelector} from 'store/hooks';

// import {Routes} from 'constants/routes';

// function HeaderLogo() {
//   const navigate = useNavigate();

//   const userRole: EUserRoleCognito = useAppSelector(({app}) => app.user.role);

//   const onLogoClick = useCallback(() => {
//     const allowedRolesToGoHome = [
//       EUserRoleCognito.ROLE_GUEST,
//       EUserRoleCognito.ROLE_CUSTOMER,
//     ];

//     if (allowedRolesToGoHome.includes(userRole)) {
//       navigate(Routes.mainLanding);
//     }
//   }, [navigate, userRole]);

//   return <HeaderLogoIcon icon='LOGO' onClick={onLogoClick} />;
// }

const HeaderLogo = () => {
  return <div>Kozox</div>;
};

export default HeaderLogo;
