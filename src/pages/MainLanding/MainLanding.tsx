import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';

const MainLanding = () => {
  return (
    <div>
      <TwoColumnsBlock
        title='Our best site'
        isShowed
        colLeft={<div>KOZOX left side</div>}
        colRight={<div>Right side</div>}
        footer={<div>Footer for main land</div>}
      />
    </div>
  );
};

export default MainLanding;
