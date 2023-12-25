import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import Image from 'components/Image';

import {Routes} from 'constants/routes';
import {useAppSelector} from 'store/hooks';

import {FirstDoubleContentProps} from './types';
import {
  AdditionalButton,
  Container,
  FirstBlock,
  Text,
  Title,
} from './FirstDoubleBlock.styles';
import {elementsGreyColor} from 'constants/styleVars';

const FirstDoubleContent = ({
  title,
  text,
  image,
  withButton,
  imageObjectfFit,
}: FirstDoubleContentProps) => {
  const navigate = useNavigate();
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const openContactForm = useCallback(() => {
    navigate(Routes.contactForm);
  }, [navigate]);

  return (
    <Container isMobile={isMobile}>
      <FirstBlock>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {withButton && (
          <AdditionalButton
            onClick={openContactForm}
            buttonType='primary'
            size='small'
            borderColor={elementsGreyColor}
          >
            Contact us
          </AdditionalButton>
        )}
      </FirstBlock>
      <Image src={image} alt={image} objectfFit={imageObjectfFit} />
    </Container>
  );
};

export default FirstDoubleContent;
