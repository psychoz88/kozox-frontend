import React from 'react';

import {
  ChipNW2Button,
  LinkNW2Button,
  PrimaryNW2Button,
  SecondaryNW2Button,
  TertiaryNW2Button,
  BadgeNW2Button,
} from './Button.styles';
import {TButtonBaseProps} from './types';

function NW2Button({
  buttonType,
  type = 'button',
  iconPlace = 'left',
  size = 'medium',
  icon,
  children,
  loading,
  ...restProps
}: TButtonBaseProps) {
  const content = (
    <>
      {!restProps.minimized && <span>{children || 'Label'}</span>}
      {icon}
    </>
  );

  const commonProps = {
    type,
    icon,
    iconPlace,
    size,
    loading: loading ? 1 : 0, // https://github.com/styled-components/styled-components/issues/1198
    ...restProps,
  };

  switch (buttonType) {
    case 'tertiary':
      return <TertiaryNW2Button {...commonProps}>{content}</TertiaryNW2Button>;
    case 'primary':
      return <PrimaryNW2Button {...commonProps}>{content}</PrimaryNW2Button>;
    case 'link':
      return <LinkNW2Button {...commonProps}>{content}</LinkNW2Button>;
    case 'chip':
      return <ChipNW2Button {...commonProps}>{content}</ChipNW2Button>;
    case 'badge':
      return <BadgeNW2Button {...commonProps}>{content}</BadgeNW2Button>;
    default:
      return (
        <SecondaryNW2Button {...commonProps}>{content}</SecondaryNW2Button>
      );
  }
}

export default NW2Button;
