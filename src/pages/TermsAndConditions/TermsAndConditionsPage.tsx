import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';
import PolicyImage from 'pages/components/PolicyImage';
import TermsAndConditionsContent from './components/TermsAndConditionsContent';
import image from '../../images/termsAndConditions.jpg';

const TermsAndConditionsPage = () => {
  return (
    <>
      <TwoColumnsBlock
        title='Terms & Conditions'
        colLeft={<PolicyImage src={image} />}
        colRight={<TermsAndConditionsContent />}
        customPadding='0'
        isShowed
      />
    </>
  );
};

export default TermsAndConditionsPage;
