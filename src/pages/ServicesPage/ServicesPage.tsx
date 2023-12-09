import React from 'react';

import Title from 'components/Title/Title';

import {StyledDiv} from 'pages/Pages.styles';
import Blobs from 'components/Blobs/Blobs';

const ServicesPage = () => {
  const blobsData = [
    'Web and Mobile development',
    'DevOps solutions',
    'Architecture Design',
    'POC, Prototype, MVP',
    'QA & Testing',
    'UX/UI Design',
  ];
  
  return (
    <StyledDiv>
      <Title title='Our Services' isPageTitle />
      <Blobs data={blobsData} />
    </StyledDiv>
  );
};

export default ServicesPage;
