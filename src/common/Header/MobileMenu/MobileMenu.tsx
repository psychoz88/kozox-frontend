import React from 'react';
import styled from 'styled-components';

import NavServices from '../NavLinks/NavServices';
import NavPortfolio from '../NavLinks/NavPortfolio';
import NavContacts from '../NavLinks/NavContacts';

import {
  elementsGreyColor,
  greyTextColor,
  mainColor,
  offsetLg,
} from 'constants/styleVars';

export const Container = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background: ${mainColor};
  color: ${greyTextColor};
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid ${elementsGreyColor};
  padding: 0 ${offsetLg};
`;

type TProps = {
  setMenuShowed: () => void;
};

export const MobileMenu = ({setMenuShowed}: TProps) => {
  return (
    <Container>
      <Wrapper>
        <NavServices setMenuShowed={setMenuShowed} />
      </Wrapper>
      <Wrapper>
        <NavPortfolio setMenuShowed={setMenuShowed} />
      </Wrapper>
      <Wrapper>
        <NavContacts setMenuShowed={setMenuShowed} />
      </Wrapper>
    </Container>
  );
};
