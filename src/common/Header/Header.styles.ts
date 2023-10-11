import styled from 'styled-components';
import {Layout} from 'antd';

import {
  contentMaxWidthLg,
  lgBp,
  mdBp,
  offsetDef,
  offsetXXLg,
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
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  background: #060f11;
  border-bottom: 1px solid #1a2225;
`;

export const HeaderContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 80px 80px 80px;
  grid-gap: 10px;


`;
