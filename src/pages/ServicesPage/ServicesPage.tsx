import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title/Title';
import Blobs from 'components/Blobs/Blobs';
import DoubleBlock from 'components/DoubleBlock/DoubleBlock';
import GetInTouchBlock from 'components/GetInTouch/GetInTouchBlock';

import {Devider} from 'components/Devider/Devider.styles';
import {servicesList} from './helpers';

import {dirtyWhiteTextColor} from 'constants/styleVars';
import {ABOUT_KOZOX} from 'constants/appConst';
import {EServices, EServicesIDs} from './types';
import image1 from '../../images/privacyPolicy.jpg';

const StyledDiv = styled.div`
  color: ${dirtyWhiteTextColor};
`;

const ServicesPage = () => {
  const servicesBlocksData = [
    {
      title: EServices.WEB_AND_MOB_DEV,
      text: ABOUT_KOZOX,
      image: image1,
      anchor: EServicesIDs.WEB_AND_MOB_DEV,
    },
    {
      title: EServices.DEVOPS_SOLUTIONS,
      text: ABOUT_KOZOX,
      image: image1,
      anchor: EServicesIDs.DEVOPS_SOLUTIONS,
      isReverse: true,
    },
    {
      title: EServices.ARCHITECTURE_DESIGN,
      text: ABOUT_KOZOX,
      image: image1,
      anchor: EServicesIDs.ARCHITECTURE_DESIGN,
    },
    {
      title: EServices.POC_PROT_MVP,
      text: ABOUT_KOZOX,
      image: image1,
      anchor: EServicesIDs.POC_PROT_MVP,
      isReverse: true,
    },
    {
      title: EServices.TESTIMG,
      text: ABOUT_KOZOX,
      image: image1,
      anchor: EServicesIDs.TESTIMG,
    },
    {
      title: EServices.DESIGN,
      text: ABOUT_KOZOX,
      image: image1,
      anchor: EServicesIDs.DESIGN,
      isReverse: true,
    },
  ];

  return (
    <StyledDiv>
      <Title title='Our Services' isPageTitle />
      <Blobs data={servicesList} />
      <Devider />
      {servicesBlocksData.map((block, index) => {
        const {title, text, image, isReverse, anchor} = block;
        return (
          <>
            <DoubleBlock
              title={title}
              text={text}
              image={image}
              isShowed
              isReverse={isReverse}
              key={index}
              anchor={anchor}
            />
            <Devider />
          </>
        );
      })}
      <GetInTouchBlock />
    </StyledDiv>
  );
};

export default ServicesPage;
