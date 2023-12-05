import React from 'react';

import CageBlock from 'components/CageBlock/CageBlock';
import Title from 'components/Title/Title';

import {StyledDiv} from 'pages/Pages.styles';

const ServicesPage = () => {
  return (
    <StyledDiv>
      <Title title='Our Services' isPageTitle />
      <CageBlock />
    </StyledDiv>
  );
};

export default ServicesPage;
