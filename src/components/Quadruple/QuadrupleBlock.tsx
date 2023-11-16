import React from 'react';

import QuadrupleContent from './QuadrupleContent';

import {QuadrupleBlockProps} from './types';

function QuadrupleBlock(props: QuadrupleBlockProps) {
  if (!props.isShowed) {
    return null;
  }

  return <QuadrupleContent {...props} />;
}

export default QuadrupleBlock;
