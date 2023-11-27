import React from 'react';

import DoubleContent from './DoubleContent';

import {DoubleBlockProps} from './types';

function DoubleBlock(props: DoubleBlockProps) {
  if (!props.isShowed) {
    return null;
  }

  return <DoubleContent {...props} />;
}

export default DoubleBlock;
