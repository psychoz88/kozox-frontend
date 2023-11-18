import React from 'react';

import QuadrupleBlock from 'components/Quadruple/QuadrupleBlock';

import mainImage from 'images/portfolio/nwMainPage.png';
import firstImage from 'images/portfolio/nwVenueProfile.png';
import secondImage from 'images/portfolio/nwOfferCreation.png';

const PortfolioPage = () => {
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

  return (
    <div>
      <QuadrupleBlock
        title='HRS: NewWork'
        websiteLink='https://newwork.hrs.com/'
        secondBlock={secondBlock}
        thirdBlock={mainImage}
        foursBlock={[firstImage, secondImage]}
        isShowed
      />
    </div>
  );
};

export default PortfolioPage;
