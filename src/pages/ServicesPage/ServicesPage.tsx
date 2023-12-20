import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title/Title';
import Blobs from 'components/Blobs/Blobs';
import DoubleBlock from 'components/DoubleBlock/DoubleBlock';
import GetInTouchBlock from 'components/GetInTouch/GetInTouchBlock';

import {servicesBlocksData, servicesList} from './helpers';
import {Devider} from 'components/Devider/Devider.styles';

import {dirtyWhiteTextColor} from 'constants/styleVars';

const StyledDiv = styled.div`
  color: ${dirtyWhiteTextColor};
`;

const ServicesPage = () => {
  return (
    <StyledDiv>
      <Title title='Our Services' isPageTitle />
      <Blobs data={servicesList} />
      <Devider />
      {servicesBlocksData.map((block, index) => {
        const {title, text, image, isReverse, anchor} = block;
        return (
          <div key={index}>
            <DoubleBlock
              title={title}
              text={text}
              image={image}
              anchor={anchor}
              isReverse={isReverse}
              isShowed
              withButton
            />
            <Devider />
          </div>
        );
      })}
      <GetInTouchBlock />
    </StyledDiv>
  );
};

export default ServicesPage;
