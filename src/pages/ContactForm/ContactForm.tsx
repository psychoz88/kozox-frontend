import React from 'react';
import styled from 'styled-components';
import {Form} from 'react-final-form';

import Button from 'components/Button';

import {FormItemInput} from 'components/FormItem/FormItem';
import {emailFieldRules, firstNameFieldRules} from 'utils/finalFormFieldRules';

import {xlg} from 'constants/styleVars';

export const FormGroup = styled.div<{
  columnNumber: number;
  columnNumberXLg?: number;
  gap?: number | string;
  alignItems?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${({columnNumber}) => columnNumber}, 1fr);
  grid-gap: ${({gap}) => (typeof gap === 'number' ? `${gap}px` : gap || 0)};
  align-items: ${({alignItems}) => alignItems || 'initial'};

  @media (min-width: ${xlg}) {
    grid-template-columns: repeat(
      ${({columnNumber, columnNumberXLg}) => columnNumberXLg || columnNumber},
      1fr
    );
  }

  > div {
    margin: 0;
  }
`;

const ContactForm = () => {
  const openForgotPassword = () => {};
  const loginInSystem = () => {};
  const isLoading = false;
  const isSubmitFailed = false;

  return (
    <Form onSubmit={loginInSystem}>
      {({handleSubmit}) => {
        return (
          <form onSubmit={handleSubmit} noValidate>
            <FormGroup columnNumber={1} gap={16}>
              <FormItemInput
                name='name'
                type='text'
                label='Your name'
                placeholder='Your name'
                rules={firstNameFieldRules}
                highlightAsError={isSubmitFailed}
                showAllValidationErrors
              />
              <FormItemInput
                name='email'
                type='email'
                label='Email address'
                placeholder='Email address'
                rules={emailFieldRules}
                highlightAsError={isSubmitFailed}
                showAllValidationErrors
              />
              <Button
                loading={isLoading}
                type='submit'
                buttonType='primary'
                fullWidth
              >
                {isLoading ? 'Loading...' : 'Log in'}
              </Button>
            </FormGroup>
            {/* TODO: directly on email */}
            <a onClick={openForgotPassword}>Concat us on email</a>
          </form>
        );
      }}
    </Form>
  );
};

export default ContactForm;
