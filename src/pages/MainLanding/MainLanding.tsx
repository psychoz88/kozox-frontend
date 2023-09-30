import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';

const MainLanding = () => {
  return (
    <div>
      <TwoColumnsBlock
        title='Our first site'
        isShowed
        colLeft={<div>Left side</div>}
        colRight={<div>Right side</div>}
        footer={<div>Footer block</div>}
      />
    </div>
  );
};

export default MainLanding;
