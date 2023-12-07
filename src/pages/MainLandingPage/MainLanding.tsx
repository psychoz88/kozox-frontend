import React from 'react';

import TwoColumnsBlock from 'components/TwoColumnsBlock';
import CageBlock from 'components/CageBlock/CageBlock';

import {dataWhyChooseUS} from './helper';

import {Devider} from 'components/Devider/Devider.styles';

const MainLanding = () => {
  const additionalText = `Indeed, many of these values can become pathological when taken to an
    illogical extreme; absolute adherence to a particular value should never
    trump prudence.`;

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
      <Devider />
      <CageBlock
        data={dataWhyChooseUS}
        title='Why choose us'
        additionalText={additionalText}
      />
    </div>
  );
};

export default MainLanding;
