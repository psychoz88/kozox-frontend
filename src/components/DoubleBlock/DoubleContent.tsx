import React from 'react';

import ContactBlock from './components/ContactBlock';

import {useAppSelector} from 'store/hooks';

import {DoubleContentProps} from './types';
import {Container, FirstBlock, Text, Title} from './DoubleBlock.styles';

const DoubleContent = ({
  title,
  text,
  email,
  phone,
  image,
  isContacts,
}: DoubleContentProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  return (
    <Container isMobile={isMobile}>
      <FirstBlock>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </FirstBlock>
      {isContacts ? <ContactBlock email={email} phone={phone} /> : <>{image}</>}
    </Container>
  );
};

export default DoubleContent;
