import React from 'react';
import styled from 'styled-components';

import NavContactButton from 'common/Header/NavLinks/NavContactButton';

import {useAppSelector} from 'store/hooks';

import {
  getInTouchBlockBackgroundColor,
  dirtyWhiteTextColor,
  elementsGreyColor,
  maxGreenColor,
  dirtyGreyTextColor,
} from 'constants/styleVars';

const Container = styled.div<{isMobile?: boolean}>`
  ${({isMobile}) =>
    isMobile
      ? `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 35px;`
      : `
        display: grid;
        grid-template-columns: 1fr 120px;
        justify-content: space-between;
        align-items: center;`}

  background-color: ${getInTouchBlockBackgroundColor};
  color: ${dirtyWhiteTextColor};
  padding: 32px 40px;
  border-radius: 10px;
  border: 1px solid ${elementsGreyColor};
`;

const StyledDiv = styled.div<{isMobile?: boolean}>`
  ${({isMobile}) => isMobile && 'text-align: center;'}
`;

const Title = styled.p`
  margin: 0;
  color: ${dirtyWhiteTextColor};
  font-size: 25px;
  line-height: 32px;
`;

const SubTitle = styled.p`
  margin: 0;
  color: ${dirtyGreyTextColor};
  font-size: 25px;
  line-height: 32px;
`;

const GetInTouchBlock = () => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  return (
    <Container isMobile={isMobile}>
      <StyledDiv isMobile={isMobile}>
        <Title>Get in touch</Title>
        <SubTitle>Service as it should be</SubTitle>
      </StyledDiv>
      <div>
        <NavContactButton borderColor={maxGreenColor} />
      </div>
    </Container>
  );
};

export default GetInTouchBlock;
