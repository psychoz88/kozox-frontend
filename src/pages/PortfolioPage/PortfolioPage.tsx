import React from 'react';

import QuadrupleBlock from 'components/Quadruple/QuadrupleBlock';

import Title from 'components/Title/Title';
import GetInTouchBlock from 'components/GetInTouch/GetInTouchBlock';

import nwMainPage from 'images/portfolio/nwMainPage.png';
import nwVenueProfile from 'images/portfolio/nwVenueProfile.png';
import nwOfferCreation from 'images/portfolio/nwOfferCreation.png';
import avtorPartners from 'images/portfolio/avtorParters.png';
import avtorDownloads from 'images/portfolio/avtorDownloads.png';
import avtorSolution from 'images/portfolio/avtorSolutions.png';
import pointerMain from 'images/portfolio/pointerMain.png';
import pointerMulti from 'images/portfolio/pointerMulti.png';
import pointerSurvey from 'images/portfolio/pointerSurvey.png';
import {Devider} from 'components/Devider/Devider.styles';

const PortfolioPage = () => {
  return (
    <>
      <Title title='Our Projects' isPageTitle />
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
        thirdBlock={nwMainPage}
        foursBlock={[nwVenueProfile, nwOfferCreation]}
        isShowed
      />
      <Devider />
      <QuadrupleBlock
        title='Avtor'
        websiteLink='https://avtor.ua/'
        secondBlock={
          <div>
            Limited Liability Company "AVTOR" is one of the leading developers
            of products and solutions in the industry of cryptographic
            information protection, including the use of electronic digital
            signature. The company's products have positive expert conclusions
            of the State Service of Special Communications and Information
            Protection of Ukraine.
          </div>
        }
        thirdBlock={avtorPartners}
        foursBlock={[avtorDownloads, avtorSolution]}
        isShowed
        isReverse
      />
      <Devider />
      <QuadrupleBlock
        title='PointerPro'
        websiteLink='https://pointerpro.com/'
        secondBlock={
          <div>
            Pointerpro is an all-in-one platform to create attractive online
            assessments and automatically deliver personalized advice reports in
            PDF. Trusted by more than 1.000 companies like consultants, coaches,
            HR and marketers, to build maturity assessments, personality tests,
            risk assessments, guided selling assessments, and much more.
          </div>
        }
        thirdBlock={pointerMain}
        foursBlock={[pointerMulti, pointerSurvey]}
        isShowed
      />
      <GetInTouchBlock />
    </>
  );
};

export default PortfolioPage;
