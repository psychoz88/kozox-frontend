import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title/Title';
import Blobs from 'components/Blobs/Blobs';

import {dirtyWhiteTextColor} from 'constants/styleVars';

const StyledDiv = styled.div`
  color: ${dirtyWhiteTextColor};
`;

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
