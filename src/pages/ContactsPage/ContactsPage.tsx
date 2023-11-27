import React from 'react';

import Title from 'components/Title/Title';
import DoubleBlock from 'components/DoubleBlock/DoubleBlock';

import {StyledDiv} from 'pages/Pages.styles';

const ContactsPage = () => {
  return (
    <StyledDiv>
      <Title title='Contacts' isPageTitle />
      <DoubleBlock
        title='About Kozox'
        text='Our meeting room providers are there to help you and your team to
            get the business done whichever way suits best your team and your
            task. NewWork helps you to book a meeting room space within the
            venues where you already have a work desk booked or venture out to
            one of our hotel providers who can cater for larger get togethers
            with plentiful of extras to choose from making sure your team is
            well catered for.'
        email='klinoktop@gmail.com'
        phone='+380666803003'
        linkedIn='https://www.google.com.ua'
        isShowed
      ></DoubleBlock>
    </StyledDiv>
  );
};

export default ContactsPage;
