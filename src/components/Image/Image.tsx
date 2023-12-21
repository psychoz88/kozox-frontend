import React from 'react';
import styled from 'styled-components';
import {Image as AntdImage} from 'antd';
import {ImagePreviewType} from 'rc-image/lib/Image';

import {
  contentMaxWidthLg,
  contentMaxWidthXs,
  mdBp,
  xLgBp,
} from 'constants/styleVars';

export enum EAspectRation {
  '1x1' = '1x1',
  '4x3' = '4x3',
  '16x9' = '16x9',
  '21x9' = '21x9',
}

const aspectRationValue = {
  [EAspectRation['1x1']]: '100%',
  [EAspectRation['4x3']]: '75%',
  [EAspectRation['16x9']]: '56.25%',
  [EAspectRation['21x9']]: '42.85%',
};

const ImageContainer = styled.div<{
  ratio?: EAspectRation;
  disabled?: boolean;
  isExpandToLeft?: boolean;
  maxHeight: number | string;
  maxWidth: number | string;
  width: number | string;
  height: number | string;
  borderRadius: string;
  objectfFit?: string;
}>`
  position: relative;
  overflow: ${({isExpandToLeft}) => (isExpandToLeft ? 'visible' : 'hidden')};
  width: ${({width}) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({height}) =>
    typeof height === 'string' ? height : `${height}px`};
  max-width: ${({maxWidth}) =>
    typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`};
  max-height: ${({maxHeight}) =>
    typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`};

  &:before {
    display: block;
    padding-top: ${({ratio}) =>
      ratio
        ? aspectRationValue[ratio]
        : aspectRationValue[EAspectRation['16x9']]};
    content: '';
  }

  ${({disabled}) =>
    disabled &&
    `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(0deg, rgba(255,255,255,0.68), rgba(255,255,255,0.68));
    }
  `}

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${mdBp}px) {
      ${({isExpandToLeft}) =>
        isExpandToLeft
          ? `
          left: auto;
          right: 0;
          width: calc(100% + ((100vw - ${contentMaxWidthXs})/2));
          `
          : ''}
    }

    @media (min-width: ${xLgBp}px) {
      ${({isExpandToLeft}) =>
        isExpandToLeft
          ? `
          width: calc(100% + ((100vw - ${contentMaxWidthLg})/2));
          `
          : ''}
    }
  }

  .ant-image-error {
    img {
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      flex-shrink: 0;
    }
  }

  img {
    object-fit: ${({objectfFit}) => objectfFit || 'cover'};
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius}) => borderRadius};
  }
`;

export type TImageProps = {
  ratio?: EAspectRation;
  src?: string;
  alt?: string;
  preview?: boolean | ImagePreviewType;
  disabled?: boolean;
  isExpandToLeft?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  height?: number | string;
  borderRadius?: string;
  objectfFit?: string;
};

function Image({
  ratio,
  src,
  alt,
  preview = false,
  disabled = false,
  isExpandToLeft = false,
  maxHeight = 'none',
  maxWidth = 'none',
  width = 'auto',
  height = 'auto',
  borderRadius = '0',
  objectfFit = 'cover',
}: TImageProps) {
  return (
    <ImageContainer
      ratio={ratio}
      disabled={disabled}
      isExpandToLeft={isExpandToLeft}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      width={width}
      height={height}
      borderRadius={borderRadius}
      objectfFit={objectfFit}
    >
      <AntdImage
        src={src}
        alt={alt}
        preview={preview}
      />
    </ImageContainer>
  );
}

export default Image;
