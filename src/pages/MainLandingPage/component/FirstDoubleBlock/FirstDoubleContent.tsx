import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import Image from 'components/Image';

import { Routes } from 'constants/routes';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { FirstDoubleContentProps } from './types';
import {
  AdditionalButton,
  Container,
  FirstBlock,
  Text,
  Title,
} from './FirstDoubleBlock.styles';
import { elementsGreyColor } from 'constants/styleVars';
import { getBybitTokensData } from 'store/app/actions';

const FirstDoubleContent = ({
  title,
  text,
  image,
  withButton,
  imageObjectfFit,
}: FirstDoubleContentProps) => {
  const navigate = useNavigate();
  const isMobile = useAppSelector(({ app }) => app.deviceType.isMobile);

  const openContactForm = useCallback(() => {
    navigate(Routes.contactForm);
  }, [navigate]);

  // Bybit
  // https://api.bybit.com/v5/market/instruments-info?category=linear - перехожу на сайт и получаю список
  const dispatch = useAppDispatch();
  // const bybitTokensData = useAppSelector(({ app }) => app.bybitTokensData);
  const onTokensData = () => {
    dispatch(getBybitTokensData());
  };
  // end Bybit

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
        <AdditionalButton
          onClick={onTokensData}
          buttonType='primary'
          size='small'
          borderColor={elementsGreyColor}
        >
          Get Tokens
        </AdditionalButton>
      </FirstBlock>
      <Image src={image} alt={image} objectfFit={imageObjectfFit} />
    </Container>
  );
};

export default FirstDoubleContent;
