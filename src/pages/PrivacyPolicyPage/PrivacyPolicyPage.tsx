import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <TwoColumnsBlock
        title='Privacy policy'
        isShowed
        colLeft={<div>Left side</div>}
        colRight={<div>Right side</div>}
        footer={<div>Footer block</div>}
      />
    </div>
  );
};

export default PrivacyPolicyPage;
