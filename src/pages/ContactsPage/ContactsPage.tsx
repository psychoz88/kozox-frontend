import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title/Title';
import DoubleBlock from 'components/DoubleBlock/DoubleBlock';

import {dirtyWhiteTextColor} from 'constants/styleVars';
import {ABOUT_KOZOX, CONTACT_EMAIL, CONTACT_PHONE} from 'constants/appConst';

const StyledDiv = styled.div`
  color: ${dirtyWhiteTextColor};
`;

const ContactsPage = () => {
  return (
    <StyledDiv>
      <Title title='Contacts' isPageTitle />
      <DoubleBlock
        title='About KOZOX'
        text={ABOUT_KOZOX}
        email={CONTACT_EMAIL}
        phone={CONTACT_PHONE}
        isShowed
      />
    </StyledDiv>
  );
};

export default ContactsPage;
