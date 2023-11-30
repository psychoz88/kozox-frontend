import React from 'react';

import SocialLinks from 'components/SocialLinks/SocialLinks';

import {useAppSelector} from 'store/hooks';

import {DoubleContentProps} from './types';
import {
  BlockItem,
  Container,
  FirstBlock,
  SecondBlock,
  Text,
  Title,
  ItemTitle,
  ItemLink,
} from './DoubleBlock.styles';

const DoubleContent = ({title, text, email, phone}: DoubleContentProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  return (
    <Container isMobile={isMobile}>
      <FirstBlock>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </FirstBlock>
      <SecondBlock>
        <BlockItem>
          <ItemTitle>Email</ItemTitle>
          <ItemLink href={`mailto:${email}`}>{email}</ItemLink>
        </BlockItem>
        <BlockItem>
          <ItemTitle>Phone</ItemTitle>
          <ItemLink href={`tel:${phone}`}>{phone}</ItemLink>
        </BlockItem>
        <BlockItem>
          <ItemTitle margin='0 0 10px' >Social media</ItemTitle>
          <SocialLinks green />
        </BlockItem>
      </SecondBlock>
    </Container>
  );
};

export default DoubleContent;
