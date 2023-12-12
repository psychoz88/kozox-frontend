import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title/Title';
import Blobs from 'components/Blobs/Blobs';
import DoubleBlock from 'components/DoubleBlock/DoubleBlock';

import {dirtyWhiteTextColor} from 'constants/styleVars';
import {ABOUT_KOZOX} from 'constants/appConst';
import {EServices} from './types';

const StyledDiv = styled.div`
  color: ${dirtyWhiteTextColor};
`;

const ServicesPage = () => {
  const blobsData = [
    EServices.WEB_AND_MOB_DEV,
    EServices.DEVOPS_SOLUTIONS,
    EServices.ARCHITECTURE_DESIGN,
    EServices.POC_PROT_MVP,
    EServices.TESTIMG,
    EServices.DESIGN,
  ];

  const servicesBlocksData = [
    {title: EServices.WEB_AND_MOB_DEV, text: ABOUT_KOZOX},
    {title: EServices.DEVOPS_SOLUTIONS, text: ABOUT_KOZOX},
    {title: EServices.ARCHITECTURE_DESIGN, text: ABOUT_KOZOX},
    {title: EServices.POC_PROT_MVP, text: ABOUT_KOZOX},
    {title: EServices.TESTIMG, text: ABOUT_KOZOX},
    {title: EServices.DESIGN, text: ABOUT_KOZOX},
  ];

  return (
    <StyledDiv>
      <Title title='Our Services' isPageTitle />
      <Blobs data={blobsData} />
      {servicesBlocksData.map((block, index) => {
        const {title, text} = block;
        return <DoubleBlock title={title} text={text} isShowed key={index} />;
      })}
    </StyledDiv>
  );
};

export default ServicesPage;
