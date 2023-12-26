import React from 'react';

import CageBlock from 'components/CageBlock/CageBlock';
import Blobs from 'components/Blobs/Blobs';
import Title from 'components/Title/Title';
import earth from '../../images/earth.png';
import FirstDoubleBlock from './component/FirstDoubleBlock/FirstDoubleBlock';

import {dataWhyChooseUS} from './helper';
import {servicesList} from 'pages/ServicesPage/helpers';
import {Devider} from 'components/Devider/Devider.styles';

const MainLanding = () => {
  const additionalText = `Indeed, many of these values can become pathological when taken to an
    illogical extreme; absolute adherence to a particular value should never
    trump prudence.`;

  return (
    <>
      <FirstDoubleBlock
        title={'K0Z0X'}
        text={'Better. Faster. Stronger.'}
        image={earth}
        imageObjectfFit={'contain'}
        isShowed
        withButton
      />
      <Devider />
      <CageBlock
        data={dataWhyChooseUS}
        title='Why choose us'
        additionalText={additionalText}
      />
      <Devider />
      <Title title='Our Services' />
      <Blobs data={servicesList} />
    </>
  );
};

export default MainLanding;
