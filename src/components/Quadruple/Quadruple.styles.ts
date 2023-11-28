import styled from 'styled-components';

import {
  backgroundElementColor,
  dirtyGreyTextColor,
  elementsGreyColor,
  fontSizeXXXXXLg,
  lineHeightXXXXLg,
  offsetXSm,
  offsetXXLg,
  whiteColor,
} from 'constants/styleVars';

export const Container = styled.div<{
  isMiniMobile?: boolean;
}>`
  ${({isMiniMobile}) =>
    isMiniMobile
      ? `
        display: flex;
        flex-direction: column;
        `
      : `
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
  `}
  gap: ${offsetXXLg};
  color: ${dirtyGreyTextColor};
  margin-bottom: 120px;
`;

export const FirstBlock = styled.div<{isMobile?: boolean; isReverse?: boolean}>`
  grid-column: ${({isMobile}) =>
    isMobile ? 'span 12 / span 12' : 'span 6 / span 6'};

  ${({isReverse, isMobile}) =>
    isReverse &&
    !isMobile &&
    `
      order: 1;
      text-align: end;
    `}
`;

export const SecondBlock = styled.div<{
  isMobile?: boolean;
  isReverse?: boolean;
}>`
  grid-column: ${({isMobile}) =>
    isMobile ? 'span 12 / span 12' : 'span 6 / span 6'};
  font-size: 18px;
  line-height: 26px;

  ${({isReverse, isMobile}) =>
    isReverse &&
    !isMobile &&
    `
    order: 0;
  `}
`;

export const ThirdBlock = styled.div<{isMobile?: boolean; isReverse?: boolean}>`
  grid-column: ${({isMobile}) =>
    isMobile ? 'span 12 / span 12' : 'span 8 / span 8'};
  background: ${backgroundElementColor};
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
  padding: 20px;

  ${({isReverse}) =>
    isReverse &&
    `
      order: 3;
    `}
`;

export const Image = styled.img<{height?: string}>`
  width: 100%;
  object-fit: contain;
  height: ${({height}) => height || 'auto'};
  max-height: 550px;
`;

export const FoursBlock = styled.div<{isMobile?: boolean; isReverse?: boolean}>`
  grid-column: ${({isMobile}) =>
    isMobile ? 'span 12 / span 12' : 'span 4 / span 4'};
  display: flex;
  flex-direction: ${({isMobile}) => (isMobile ? 'row' : 'column')};
  justify-content: space-between;
  gap: 20px;

  ${({isReverse}) =>
    isReverse &&
    `
    order: 2;
  `}
`;

export const FoursBlockItem = styled.div`
  background: #0e1618;
  border: 1px solid ${elementsGreyColor};
  border-radius: 10px;
  padding: 20px;
`;

export const Title = styled.p`
  font-size: ${fontSizeXXXXXLg};
  line-height: ${lineHeightXXXXLg};
  color: ${whiteColor};
  margin: 0 0 ${offsetXSm};
`;

export const FirstBlockDiv = styled.div`
  margin: ${offsetXSm} 0 0;
`;
