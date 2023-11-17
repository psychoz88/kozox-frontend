import React from 'react';

import QuadrupleBlock from 'components/Quadruple/QuadrupleBlock';

import mainImage from 'images/portfolio/nwMainPage.png';

const PortfolioPage = () => {
  const title = 'HRS: NewWork';
  const websiteLink = 'https://newwork.hrs.com/';
  const secondBlock = (
    <div>
      Our meeting room providers are there to help you and your team to get the
      business done whichever way suits best your team and your task. NewWork
      helps you to book a meeting room space within the venues where you already
      have a work desk booked or venture out to one of our hotel providers who
      can cater for larger get togethers with plentiful of extras to choose from
      making sure your team is well catered for.
    </div>
  );
  const foursBlock = <div>Fours side</div>;

  return (
    <div>
      <QuadrupleBlock
        title={title}
        websiteLink={websiteLink}
        secondBlock={secondBlock}
        thirdBlock={mainImage}
        foursBlock={foursBlock}
        isShowed
      />
    </div>
  );
};

export default PortfolioPage;
