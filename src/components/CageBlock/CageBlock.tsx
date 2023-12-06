import React from 'react';

import {useAppSelector} from 'store/hooks';

import {Block, ItemBlock, Title, Content} from './CageBlock.styles';

type TProps = {
  data: {
    title: string;
    content: string;
  }[];
};

const CageBlock = ({data}: TProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  return (
    <Block isMobile={isMobile}>
      {data.map((item, index) => {
        return (
          <ItemBlock key={index}>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
          </ItemBlock>
        );
      })}
    </Block>
  );
};

export default CageBlock;
