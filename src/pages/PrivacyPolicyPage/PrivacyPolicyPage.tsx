import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';
import PolicyImage from '../components/PolicyImage';
import PrivacyPolicyContent from './components/PrivacyPolicyContent';
import image from '../../images/privacyPolicy.jpg';

const PrivacyPolicyPage = () => {
  return (
    <>
      <TwoColumnsBlock
        title='Privacy policy'
        isShowed
        colLeft={<PolicyImage src={image} />}
        colRight={<PrivacyPolicyContent />}
        customPadding='0'
      />
    </>
  );
};

export default PrivacyPolicyPage;
