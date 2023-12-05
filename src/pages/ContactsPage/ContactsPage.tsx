import React from 'react';

import Title from 'components/Title/Title';
import DoubleBlock from 'components/DoubleBlock/DoubleBlock';

import {StyledDiv} from 'pages/Pages.styles';
import {CONTACT_EMAIL, CONTACT_PHONE} from 'constants/appConst';

const ContactsPage = () => {
  return (
    <StyledDiv>
      <Title title='Contacts' isPageTitle />
      <DoubleBlock
        title='About KOZOX'
        text='Our meeting room providers are there to help you and your team to
            get the business done whichever way suits best your team and your
            task. NewWork helps you to book a meeting room space within the
            venues where you already have a work desk booked or venture out to
            one of our hotel providers who can cater for larger get togethers
            with plentiful of extras to choose from making sure your team is
            well catered for.'
        email={CONTACT_EMAIL}
        phone={CONTACT_PHONE}
        isShowed
      />
    </StyledDiv>
  );
};

export default ContactsPage;
