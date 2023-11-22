import React from 'react';
import styled from 'styled-components';

import {borderRadiusDef, mdBp, lgBp, offsetXXXLg} from 'constants/styleVars';

type TProps = {
  src: string;
};

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${borderRadiusDef};
  height: 200px;
  margin-bottom: ${offsetXXXLg};

  @media (min-width: ${mdBp}px) {
    height: 250px;
  }

  @media (min-width: ${lgBp}px) {
    height: 200px;
  }
`;

const PolicyImage = ({src}: TProps) => <StyledImg src={src} />;

export default PolicyImage;
