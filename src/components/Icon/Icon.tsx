import React from 'react';
import styled from 'styled-components';

import ICON_MAP from 'constants/iconMap';

import {getColorFromProps} from 'components/Typography/Typography';

import {TIconPropsType} from './types';

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

const ContainerAnchor = styled.a<TIconPropsType>`
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
  href,
  target,
  rel,
  ...restColors
}: TIconPropsType) => {
  const IconImg = (ICON_MAP as any)[icon];

  if (!IconImg) return null;

  const commonProps = {
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    clickable,
    icon,
    size,
    justify,
  };

  return (
    <>
      {href ? (
        <ContainerAnchor
          {...commonProps}
          data-test-class={dataTestClass}
          {...restColors}
          href={href}
          target={target}
          rel={rel}
        >
          <IconImg id={id} />
        </ContainerAnchor>
      ) : (
        <Container
          {...commonProps}
          data-test-class={dataTestClass}
          {...restColors}
        >
          <IconImg id={id} />
        </Container>
      )}
    </>
  );
};

export default Icon;
