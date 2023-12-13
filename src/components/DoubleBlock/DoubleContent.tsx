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
  isReverse,
}: DoubleContentProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  return (
    <Container isMobile={isMobile} isReverse={isReverse}>
      <FirstBlock isReverse={isReverse}>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </FirstBlock>
      {isContacts ? (
        <ContactBlock email={email} phone={phone} />
      ) : (
        <div>{image}</div>
      )}
    </Container>
  );
};

export default DoubleContent;
