import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';

const PortfolioPage = () => {
  return (
    <div>
      <TwoColumnsBlock
        title='Our work'
        isShowed
        colLeft={<div>Left side</div>}
        colRight={<div>Right side</div>}
      />
    </div>
  );
};

export default PortfolioPage;
