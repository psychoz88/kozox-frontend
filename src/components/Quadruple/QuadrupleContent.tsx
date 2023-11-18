import React from 'react';

// import {useAppSelector} from 'store/hooks';

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
  // const isDesktop = useAppSelector(({app}) => app.deviceType.isDesktop);
  // const isTablet = useAppSelector(({app}) => app.deviceType.isTablet);
  // const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  return (
    <Container>
      <FirstBlock>
        <Title>{title}</Title>
        <a href={`${websiteLink}`} target='_blank' rel='noreferrer'>
          {websiteLink}
        </a>
        <FirstBlockDiv>{firstBlock}</FirstBlockDiv>
      </FirstBlock>
      <SecondBlock>{secondBlock}</SecondBlock>
      <ThirdBlock>
        <Image src={`${thirdBlock}`} height='360px' alt='image' />
      </ThirdBlock>
      <FoursBlock>
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
