import React from 'react';

import {LinkButton, PrimaryButton, SecondaryButton} from './Button.styles';
import {TButtonBaseProps} from './types';

function Button({
  buttonType,
  type = 'button',
  iconPlace = 'left',
  size = 'medium',
  icon,
  children,
  loading,
  borderColor,
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
    borderColor,
    loading: loading ? 1 : 0, // https://github.com/styled-components/styled-components/issues/1198
    ...restProps,
  };

  switch (buttonType) {
    case 'primary':
      return <PrimaryButton {...commonProps}>{content}</PrimaryButton>;
    case 'link':
      return <LinkButton {...commonProps}>{content}</LinkButton>;
    default:
      return <SecondaryButton {...commonProps}>{content}</SecondaryButton>;
  }
}

export default Button;
