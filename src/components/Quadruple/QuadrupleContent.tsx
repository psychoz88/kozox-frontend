import React from 'react';

import {useAppSelector} from 'store/hooks';

import {QuadrupleContentProps} from './types';
import {
  Container,
  FirstBlock,
  SecondBlock,
  ThirdBlock,
  FoursBlock,
  FoursBlockItem,
  Title,
  FirstBlockDiv,
  Image,
} from './Quadruple.styles';

const QuadrupleContent = ({
  title,
  websiteLink,
  firstBlock,
  secondBlock,
  thirdBlock,
  foursBlock,
}: QuadrupleContentProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  return (
    <Container>
      <FirstBlock isMobile={isMobile}>
        <Title>{title}</Title>
        <a href={`${websiteLink}`} target='_blank' rel='noreferrer'>
          {websiteLink}
        </a>
        <FirstBlockDiv>{firstBlock}</FirstBlockDiv>
      </FirstBlock>
      <SecondBlock isMobile={isMobile}>{secondBlock}</SecondBlock>
      <ThirdBlock isMobile={isMobile}>
        <Image src={`${thirdBlock}`} alt='image' />
      </ThirdBlock>
      <FoursBlock isMobile={isMobile}>
        {foursBlock.map((img, index) => (
          <FoursBlockItem key={index}>
            <Image src={`${img}`} alt='image' />
          </FoursBlockItem>
        ))}
      </FoursBlock>
    </Container>
  );
};

export default QuadrupleContent;
