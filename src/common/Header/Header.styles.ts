import {Layout} from 'antd';
import { NW2Container } from 'components/MainLanding.styles';
import styled from 'styled-components';

const {Header} = Layout;

export const StyledHeader = styled(Header)<{datatype: string}>`
  display: flex;
  align-items: center;
`;

export const NW2HeaderContainer = styled(NW2Container)<{datatype?: string}>``;