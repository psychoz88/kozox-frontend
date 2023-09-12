import React from 'react';
// import styled from 'styled-components';
// import {useNavigate} from 'react-router-dom';
// import {useAppSelector} from 'store/hooks';

// import NWLink from 'view/components/NWLink';

// import {offsetDef} from 'constants/styleVars';
// import {EUserRoleCognito} from 'types/dto/EUserRoleCognito';

// type TProps = {
//   isButtonVisible?: boolean;
// };

// const StyledNWLink = styled(NWLink)`
//   margin-bottom: 0;
//   margin-right: ${offsetDef};
// `;

// function NavBackButton({isButtonVisible = true}: TProps) {
//   const navigate = useNavigate();

//   const userRole: string = useAppSelector(({app}) => app.user.role);

//   const isPropertyManager = userRole === EUserRoleCognito.ROLE_PROPERTY_MANAGER;
//   const linkText = `Back to ${isPropertyManager ? 'office' : 'venue'} overview`;

//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       {isButtonVisible && <StyledNWLink text={linkText} onClick={goBack} />}
//     </div>
//   );
// }

const NavBackButton = () => {
  return <div></div>;
};

export default NavBackButton;
