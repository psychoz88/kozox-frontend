import React from 'react';

import TrippleBlock from 'components/Tripple/TrippleBlock';

const PortfolioPage = () => {
  const leftSide = <div>Left side</div>;
  const rightSide = <div>Right side</div>;
  const bottomSide = <div>Bottom side</div>;
  return (
    <div>
      <TrippleBlock
        title='Our work'
        leftSide={leftSide}
        rightSide={rightSide}
        bottomSide={bottomSide}
        isShowed
      />
    </div>
  );
};

export default PortfolioPage;
