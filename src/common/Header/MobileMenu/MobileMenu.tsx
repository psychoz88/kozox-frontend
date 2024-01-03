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
import {TMenuListProps} from '../types';

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

export const MobileMenu = ({
  activeItem,
  selectMenuItem,
  setMenuShowed,
}: TMenuListProps) => {
  const commonProps: any = {
    activeItem,
    selectMenuItem,
    setMenuShowed,
  };

  return (
    <Container>
      <Wrapper>
        <NavServices {...commonProps} />
      </Wrapper>
      <Wrapper>
        <NavPortfolio {...commonProps} />
      </Wrapper>
      <Wrapper>
        <NavContacts {...commonProps} />
      </Wrapper>
    </Container>
  );
};
