import React from 'react';

import {TwoColumnsContent} from './TwoColumnsContent';
import {TwoColumnsProps} from './types';

function TwoColumnsBlock(props: TwoColumnsProps) {
  if (!props.isShowed) {
    return null;
  }

  return <TwoColumnsContent {...props} />;
}

export default TwoColumnsBlock;
