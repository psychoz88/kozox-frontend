import styled from 'styled-components';

import {dirtyWhiteTextColor, offsetXXLg} from 'constants/styleVars';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${offsetXXLg};
  color: ${dirtyWhiteTextColor};
`;

export const FirstBlock = styled.div`
  grid-column: span 6 / span 6;
`;

export const SecondBlock = styled.div`
  grid-column: span 6 / span 6;
`;

export const ThirdBlock = styled.div`
  grid-column: span 8 / span 8;
`;

export const FoursBlock = styled.div`
  grid-column: span 4 / span 4;
`;
