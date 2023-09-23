import styled from 'styled-components';
import {Layout} from 'antd';

import {
  contentMaxWidthLg,
  lgBp,
  mainColor,
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
  display: flex;
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0;
  background: ${mainColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
