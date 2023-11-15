import React from 'react';

// import {useAppSelector} from 'store/hooks';

import {TrippleContentProps} from './types';
import {BottomSide, Container, LeftSide, RightSide} from './Tripple.styles';

const TrippleContent = ({
  title,
  websiteLink,
  leftSide,
  rightSide,
  bottomSide
}: TrippleContentProps) => {
  // const isDesktop = useAppSelector(({app}) => app.deviceType.isDesktop);
  // const isTablet = useAppSelector(({app}) => app.deviceType.isTablet);
  // const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  console.log(title, 'title');
  console.log(websiteLink, 'websiteLink');

  return (
    <Container>
      <LeftSide>{leftSide}</LeftSide>
      <RightSide>{rightSide}</RightSide>
      <BottomSide>{bottomSide}</BottomSide>
    </Container>
  );
};

export default TrippleContent;
