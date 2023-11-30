import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import {offsetSm} from 'constants/styleVars';
import {TColorProps} from 'components/Typography/Typography';

const Container = styled.div`
  display: flex;
  gap: ${offsetSm};
`;

const SocialLinks = ({...restColors}: TColorProps) => {
  const commonProps = {
    size: 20,
    target: '_blank',
    rel: 'noreferrer noopener',
    ...restColors,
  };

  return (
    <Container>
      <Icon {...commonProps} icon='LINKEDIN' href='https://www.linkedin.com/' />
      <Icon
        {...commonProps}
        icon='INSTAGRAM'
        href='https://www.instagram.com/'
      />
      <Icon {...commonProps} icon='FACEBOOK' href='https://facebook.com/' />
    </Container>
  );
};

export default SocialLinks;
