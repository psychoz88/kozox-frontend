import React from 'react';
import styled from 'styled-components';

import {Devider} from 'components/Devider/Devider.styles';
import {
  dirtyWhiteTextColor,
  fontSizeXXXXXLg,
  fontWeightThin,
  lineHeightXXXXXLg,
} from 'constants/styleVars';
import {Routes} from 'constants/routes';

export const Error404Text = styled.div`
  color: ${dirtyWhiteTextColor};
  font-size: ${fontSizeXXXXXLg};
  font-weight: ${fontWeightThin};
  line-height: ${lineHeightXXXXXLg};
  text-align: center;
`;

const Page404 = () => {
  return (
    <>
      <Devider />
      <Error404Text>
        Something goes wrong! <br /> Please go to{' '}
        <a href={`${Routes.mainLanding}`} rel='noreferrer'>
          main page
        </a>
        .
      </Error404Text>
      <Devider />
    </>
  );
};

export default Page404;
