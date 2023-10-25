import React from 'react';
import styled from 'styled-components';

import {TIconPropsType} from './types';
import {getColorFromProps} from 'components/Typography/Typography';
import ICON_MAP from 'constants/iconMap';

const Container = styled.div<TIconPropsType>`
  display: inline-flex;
  color: ${(props) => getColorFromProps(props)};
  ${({justify}) => justify && `justify-content: ${justify}`}} 

  ${({onClick, clickable}) =>
    onClick || clickable
      ? `
    &:hover {
      cursor: pointer;
    }
  `
      : ''}

  & svg {
    ${({size}) => size && `width: ${size}px`};
    ${({size}) => size && `height: ${size}px`};
    & path.styled-stroke,
    & circle.styled-stroke {
      stroke: ${(props) => getColorFromProps(props)};
    }

    & path.styled-fill,
    & circle.styled-fill {
      fill: ${(props) => getColorFromProps(props)};
    }
  }
`;

const Icon = ({
  icon,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  clickable,
  id,
  size,
  dataTestClass = 'icon',
  justify,
  ...restColors
}: TIconPropsType) => {
  const IconImg = (ICON_MAP as any)[icon];

  if (!IconImg) return null;

  return (
    <Container
      className={className} // needed by styled-components!
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      clickable={clickable}
      icon={icon}
      size={size}
      data-test-class={dataTestClass}
      {...restColors}
      justify={justify}
    >
      <IconImg id={id} />
    </Container>
  );
};

export default Icon;
