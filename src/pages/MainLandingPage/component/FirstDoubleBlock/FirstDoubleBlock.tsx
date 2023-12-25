import React from 'react';

import FirstDoubleContent from './FirstDoubleContent';

import {FirstDoubleBlockProps} from './types';

function FirstDoubleBlock(props: FirstDoubleBlockProps) {
  if (!props.isShowed) {
    return null;
  }

  return <FirstDoubleContent {...props} />;
}

export default FirstDoubleBlock;
