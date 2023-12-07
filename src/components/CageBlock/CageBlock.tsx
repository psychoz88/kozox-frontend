import React from 'react';

import {useAppSelector} from 'store/hooks';

import {
  Block,
  ItemBlock,
  ItemTitle,
  ItemContent,
  Container,
  Title,
  AdditionalText,
} from './CageBlock.styles';

export type TCageBlockItem = {
  title: string;
  content: string;
};
export type TCageBlock = {
  data: TCageBlockItem[];
  title?: string;
  additionalText?: string;
};

const CageBlock = ({data, title, additionalText}: TCageBlock) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  return (
    <Container>
      <Title>{title}</Title>
      <AdditionalText>{additionalText}</AdditionalText>
      <Block isMobile={isMobile}>
        {data.map((item, index) => {
          return (
            <ItemBlock key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemContent>{item.content}</ItemContent>
            </ItemBlock>
          );
        })}
      </Block>
    </Container>
  );
};

export default CageBlock;
