import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';
import PolicyImage from 'pages/components/PolicyImage';
import CookiePolicyContent from './components/CookiePolicyContent';
import image from '../../images/termsAndConditions.png';

const CookiePolicyPage = () => {
  return (
    <div>
      <TwoColumnsBlock
        title='Cookie policy'
        isShowed
        colLeft={<PolicyImage src={image} />}
        colRight={<CookiePolicyContent />}
        customPadding='0'
      />
    </div>
  );
};

export default CookiePolicyPage;
