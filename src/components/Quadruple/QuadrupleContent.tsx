import React from 'react';

// import {useAppSelector} from 'store/hooks';

import {QuadrupleContentProps} from './types';
import {
  Container,
  FirstBlock,
  SecondBlock,
  ThirdBlock,
  FoursBlock,
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
        <div>{title}</div>
        <a href={`${websiteLink}`} target='_blank' rel='noreferrer'>
          {websiteLink}
        </a>
        <div>{firstBlock}</div>
      </FirstBlock>
      <SecondBlock>{secondBlock}</SecondBlock>
      <ThirdBlock>{thirdBlock}</ThirdBlock>
      <FoursBlock>{foursBlock}</FoursBlock>
    </Container>
  );
};

export default QuadrupleContent;
