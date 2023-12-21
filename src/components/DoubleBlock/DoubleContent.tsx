import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import ContactsBlock from './components/ContactsBlock';
import Image from 'components/Image';

import {Routes} from 'constants/routes';
import {useAppSelector} from 'store/hooks';

import {DoubleContentProps} from './types';
import {
  AdditionalButton,
  Container,
  FirstBlock,
  Text,
  Title,
} from './DoubleBlock.styles';
import {elementsGreyColor} from 'constants/styleVars';

const DoubleContent = ({
  title,
  text,
  anchor,
  email,
  phone,
  image,
  isReverse,
  withButton,
  imageObjectfFit,
}: DoubleContentProps) => {
  const navigate = useNavigate();
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const openContactForm = useCallback(() => {
    navigate(Routes.contactForm);
  }, [navigate]);

  return (
    <Container isMobile={isMobile} isReverse={isReverse} id={anchor}>
      <FirstBlock isReverse={isReverse}>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {withButton && (
          <AdditionalButton
            onClick={openContactForm}
            buttonType='primary'
            size='small'
            borderColor={elementsGreyColor}
          >
            Get more info
          </AdditionalButton>
        )}
      </FirstBlock>
      {image ? (
        <Image src={image} alt={image} objectfFit={imageObjectfFit} />
      ) : (
        <ContactsBlock email={email} phone={phone} />
      )}
    </Container>
  );
};

export default DoubleContent;
