import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';
import PrivacyPolicyContent from './components/PrivacyPolicyContent';
import PrivacyPolicyImage from './components/PrivacyPolicyImage';
import image from '../../images/privacyPolicy.jpg';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <TwoColumnsBlock
        title='Privacy policy'
        isShowed
        colLeft={<PrivacyPolicyImage src={image} />}
        colRight={<PrivacyPolicyContent />}
      />
    </div>
  );
};

export default PrivacyPolicyPage;
