import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import {offsetSm} from 'constants/styleVars';
import {TColorProps} from 'components/Typography/Typography';
import {LINKEDIN_LINK, INSTAGRAM_LINK, FACEBOOK_LINK} from 'constants/appConst';

const Container = styled.div<{center?: boolean}>`
  display: flex;
  gap: ${offsetSm};
  ${({center}) => center && `justify-content: center;`}
`;

export type TProps = {
  center?: boolean;
} & TColorProps;

const SocialLinks = ({center, ...restColors}: TProps) => {
  const commonProps = {
    size: 20,
    target: '_blank',
    rel: 'noreferrer noopener',
    ...restColors,
  };

  return (
    <Container center={center}>
      <Icon {...commonProps} icon='LINKEDIN' href={`${LINKEDIN_LINK}`} />
      <Icon {...commonProps} icon='INSTAGRAM' href={`${INSTAGRAM_LINK}`} />
      <Icon {...commonProps} icon='FACEBOOK' href={`${FACEBOOK_LINK}`} />
    </Container>
  );
};

export default SocialLinks;
