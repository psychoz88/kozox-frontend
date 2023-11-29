import React from 'react';
import styled from 'styled-components';

import linkedin from 'images/icons/linkedin.svg';
import youtube from 'images/icons/youtube.svg';

import {offsetSm} from 'constants/styleVars';

const Container = styled.div`
  display: flex;
  gap: ${offsetSm};
`;

const SocialLinks = () => {
  return (
    <Container>
      <a
        href='https://www.linkedin.com/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img src={linkedin} alt='LinkedIn' />
      </a>

      <a
        href='https://www.youtube.com'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img src={youtube} alt='YouTube' />
      </a>
    </Container>
  );
};

export default SocialLinks;
