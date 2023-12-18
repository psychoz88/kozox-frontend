import React from 'react';

import ContactsBlock from './components/ContactsBlock';
import Image from 'components/Image';

import {useAppSelector} from 'store/hooks';

import {DoubleContentProps} from './types';
import {Container, FirstBlock, Text, Title} from './DoubleBlock.styles';

const DoubleContent = ({
  title,
  text,
  anchor,
  email,
  phone,
  image,
  isReverse,
}: DoubleContentProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  return (
    <Container isMobile={isMobile} isReverse={isReverse} id={anchor}>
      <FirstBlock isReverse={isReverse}>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </FirstBlock>
      {image ? (
        <Image src={image} alt={image} />
      ) : (
        <ContactsBlock email={email} phone={phone} />
      )}
    </Container>
  );
};

export default DoubleContent;
