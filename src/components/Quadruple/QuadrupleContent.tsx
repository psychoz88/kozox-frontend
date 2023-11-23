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
import {xxsBp} from 'constants/styleVars';

const QuadrupleContent = ({
  title,
  websiteLink,
  firstBlock,
  secondBlock,
  thirdBlock,
  foursBlock,
  isReverse,
}: QuadrupleContentProps) => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  const deviceWidth = useAppSelector(({app}) => app.deviceType.width);

  return (
    <Container isMiniMobile={!!(deviceWidth && deviceWidth < xxsBp)}>
      <FirstBlock isMobile={isMobile} isReverse={isReverse}>
        <Title>{title}</Title>
        <a href={`${websiteLink}`} target='_blank' rel='noreferrer'>
          {websiteLink}
        </a>
        <FirstBlockDiv>{firstBlock}</FirstBlockDiv>
      </FirstBlock>
      <SecondBlock isMobile={isMobile} isReverse={isReverse}>
        {secondBlock}
      </SecondBlock>
      <ThirdBlock isMobile={isMobile} isReverse={isReverse}>
        <Image src={`${thirdBlock}`} alt='image' />
      </ThirdBlock>
      <FoursBlock isMobile={isMobile} isReverse={isReverse}>
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
