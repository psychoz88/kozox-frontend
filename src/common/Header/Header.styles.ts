import styled from 'styled-components';
import {Layout} from 'antd';

import {
  contentMaxWidthLg,
  lgBp,
  mdBp,
  offset120,
  offset80,
  offsetDef,
  offsetXXLg,
  xxs,
} from 'constants/styleVars';

const {Header} = Layout;

export const Container = styled.div<{offset?: string}>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({offset}) => (offset ? `margin-top: ${offset}` : '')}
  padding: 0 ${offsetDef};

  @media (min-width: ${mdBp}px) {
    padding: 0 ${offsetXXLg};
  }

  @media (min-width: ${lgBp}px) {
    max-width: calc(${contentMaxWidthLg} + 2 * ${offsetXXLg});
  }
`;

export const StyledHeader = styled(Header)`
  width: 100%;
  padding: 0;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #1a2225;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  // Blur on background
  background: #060f11d6; // with opacity
  backdrop-filter: blur(5px);
`;

export const HeaderContainer = styled(Container)<{isMobile: boolean}>`
  display: grid;
  grid-template-columns: ${({isMobile}) =>
    isMobile
      ? `${offset120} 1fr ${offset120}`
      : `1fr ${offset80} ${offset80} ${offset80} ${offset120}`};
  align-items: center;
  grid-gap: 10px;
  position: relative;

  ${({isMobile}) =>
    isMobile &&
    `
    justify-items: center;
    grid-gap: 0px;
  `}

  @media (max-width: ${xxs}) {
    grid-template-columns: 70px 1fr 70px;
  }
`;
