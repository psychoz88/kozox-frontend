import React from 'react';

// import {useAppSelector} from 'store/hooks';

import {TrippleContentProps} from './types';
import {
  Container,
  FirstBlock,
  SecondBlock,
  ThirdBlock,
  FoursBlock,
} from './Tripple.styles';

const TrippleContent = ({
  title,
  websiteLink,
  firstBlock,
  secondBlock,
  thirdBlock,
  foursBlock,
}: TrippleContentProps) => {
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

export default TrippleContent;
