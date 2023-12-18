import React from 'react';

import {useAppSelector} from 'store/hooks';

import {Block, ItemBlock, ItemContent, Container} from './Blobs.styles';

type TProps = {
  data: any[];
};

const Blobs = ({data}: TProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  return (
    <Container>
      <Block isMobile={isMobile}>
        {data.map((item, index) => {
          const {content, anchor} = item;
          return (
            <ItemBlock key={index}>
              <ItemContent href={`#${anchor}`}>{content}</ItemContent>
            </ItemBlock>
          );
        })}
      </Block>
    </Container>
  );
};

export default Blobs;
