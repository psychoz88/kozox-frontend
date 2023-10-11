import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';

const MainLanding = () => {
  return (
    <div>
      <TwoColumnsBlock
        title='First info block'
        isShowed
        colLeft={<div>Left side</div>}
        colRight={<div>Right side</div>}
        footer={<div>Footer block</div>}
        customPadding='0'
      />
      <TwoColumnsBlock
        title='Second info block'
        isShowed
        colLeft={<div>Left side</div>}
        colRight={<div>Right side</div>}
        footer={<div>Footer block</div>}
        customPadding='0'
      />
      <TwoColumnsBlock
        title='Third info block'
        isShowed
        colLeft={<div>Left side</div>}
        colRight={<div>Right side</div>}
        footer={<div>Footer block</div>}
        customPadding='0'
      />
    </div>
  );
};

export default MainLanding;
