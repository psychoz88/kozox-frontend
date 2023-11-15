import React from 'react';

import TrippleContent from './TrippleContent';

import {TrippleBlockProps} from './types';

function TrippleBlock(props: TrippleBlockProps) {
  if (!props.isShowed) {
    return null;
  }

  return <TrippleContent {...props} />;
}

export default TrippleBlock;
