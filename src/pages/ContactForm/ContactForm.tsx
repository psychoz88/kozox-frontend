import React from 'react';
import {Form} from 'react-final-form';

import Button from 'components/Button';
import DirectlyOnEmail from './components/DirectlyOnEmail';
import Title from 'components/Title/Title';

import {FormItemInput} from 'components/FormItem/FormItem';
import {emailFieldRules, firstNameFieldRules} from 'utils/finalFormFieldRules';
import {useAppSelector} from 'store/hooks';

import {Container, FormGroup} from './ContactForm.styles';

const ContactForm = () => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const onSubmit = () => {};
  const isLoading = false;
  const isSubmitFailed = false;

  return (
    <Container isMobile={isMobile}>
      <Title title='Contact us' subTitle='Get in touch' />
      <Form onSubmit={onSubmit}>
        {({handleSubmit}) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <FormGroup columnNumber={1} gap={16}>
                <FormItemInput
                  name='name'
                  type='text'
                  placeholder='Name'
                  rules={firstNameFieldRules}
                  highlightAsError={isSubmitFailed}
                  showAllValidationErrors
                />
                <FormItemInput
                  name='email'
                  type='email'
                  placeholder='Email'
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
                  Submit
                </Button>
              </FormGroup>
              <DirectlyOnEmail />
            </form>
          );
        }}
      </Form>
    </Container>
  );
};

export default ContactForm;
