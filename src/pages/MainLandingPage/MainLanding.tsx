import React from 'react';

import CageBlock from 'components/CageBlock/CageBlock';

import {dataWhyChooseUS} from './helper';

// import {Devider} from 'components/Devider/Devider.styles';

const MainLanding = () => {
  const additionalText = `Indeed, many of these values can become pathological when taken to an
    illogical extreme; absolute adherence to a particular value should never
    trump prudence.`;

  return (
    <>
      {/* <Devider /> */}
      <CageBlock
        data={dataWhyChooseUS}
        title='Why choose us'
        additionalText={additionalText}
      />
    </>
  );
};

export default MainLanding;
