import React from 'react';

// import {useAppSelector} from 'store/hooks';

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
// import {xxsBp} from 'constants/styleVars';

const DoubleContent = ({
  title,
  text,
  email,
  phone,
  linkedIn,
  facebook,
  instagram,
}: DoubleContentProps) => {
  //   const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  //   const deviceWidth = useAppSelector(({app}) => app.deviceType.width);

  return (
    <Container>
      <FirstBlock>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </FirstBlock>
      <SecondBlock>
      <BlockItem>
          <ItemTitle>Email</ItemTitle>
          <ItemLink>{email}</ItemLink>
        </BlockItem>
        <BlockItem>
          <ItemTitle>Phone</ItemTitle>
          <ItemLink>{phone}</ItemLink>
        </BlockItem>
        <BlockItem>
          <ItemTitle>Social media</ItemTitle>
          <ItemLink>{linkedIn} {facebook} {instagram}</ItemLink>
        </BlockItem>
      </SecondBlock>
    </Container>
  );
};

export default DoubleContent;
