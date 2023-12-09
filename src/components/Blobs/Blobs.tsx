import React from 'react';

import {useAppSelector} from 'store/hooks';

import {Block, ItemBlock, ItemContent, Container} from './Blobs.styles';

type TProps = {
  data: string[];
};

const Blobs = ({data}: TProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  return (
    <Container>
      <Block isMobile={isMobile}>
        {data.map((item, index) => {
          return (
            <ItemBlock key={index}>
              <ItemContent>{item}</ItemContent>
            </ItemBlock>
          );
        })}
      </Block>
    </Container>
  );
};

export default Blobs;
