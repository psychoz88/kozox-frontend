import React from 'react';

import QuadrupleBlock from 'components/Quadruple/QuadrupleBlock';

import mainImage from 'images/portfolio/nwMainPage.png';
import nwVenueProfile from 'images/portfolio/nwVenueProfile.png';
import nwOfferCreation from 'images/portfolio/nwOfferCreation.png';

import {Devider} from 'components/Devider/Devider.styles';

const PortfolioPage = () => {
  return (
    <div>
      <QuadrupleBlock
        title='HRS: NewWork'
        websiteLink='https://newwork.hrs.com/'
        secondBlock={
          <div>
            Our meeting room providers are there to help you and your team to
            get the business done whichever way suits best your team and your
            task. NewWork helps you to book a meeting room space within the
            venues where you already have a work desk booked or venture out to
            one of our hotel providers who can cater for larger get togethers
            with plentiful of extras to choose from making sure your team is
            well catered for.
          </div>
        }
        thirdBlock={mainImage}
        foursBlock={[nwVenueProfile, nwOfferCreation]}
        isShowed
      />
      <Devider />
      <QuadrupleBlock
        title='HRS: NewWork'
        websiteLink='https://newwork.hrs.com/'
        secondBlock={
          <div>
            Our meeting room providers are there to help you and your team to
            get the business done whichever way suits best your team and your
            task. NewWork helps you to book a meeting room space within the
            venues where you already have a work desk booked or venture out to
            one of our hotel providers who can cater for larger get togethers
            with plentiful of extras to choose from making sure your team is
            well catered for.
          </div>
        }
        thirdBlock={mainImage}
        foursBlock={[nwVenueProfile, nwOfferCreation]}
        isShowed
        isReverse
      />
    </div>
  );
};

export default PortfolioPage;
