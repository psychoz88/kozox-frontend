import React from 'react';
import {Form} from 'react-final-form';

import Button from 'components/Button';
import DirectlyOnEmail from './components/DirectlyOnEmail';
import Title from 'components/Title/Title';
import FormTextarea from 'components/FormItem/components/Textarea/Textarea';

import {FormItemInput} from 'components/FormItem/FormItem';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getContactFormData} from 'store/app/actions';
import {
  emailFieldRules,
  firstNameFieldRules,
  noteFieldRules,
} from 'utils/finalFormFieldRules';

import {Container, FormGroup} from './ContactForm.styles';

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  const status = useAppSelector(({app}) => app.contactFormData[0]?.ok);

  const onSubmit = (formData: any) => {
    dispatch(getContactFormData(formData));
  };
  const isLoading = false;

  return (
    <Container isMobile={isMobile}>
      {status === true ? (
        <Title
          title='Congratulations!'
          subTitle='Your information has been sent. We will contact with You as soon as possible.'
        />
      ) : (
        <>
          <Title title='Contact us' subTitle='Get in touch' />
          <Form onSubmit={onSubmit}>
            {({handleSubmit}) => {
              return (
                <form onSubmit={handleSubmit} noValidate>
                  <FormGroup columnNumber={1} gap={16}>
                    <FormItemInput
                      name='name'
                      type='text'
                      placeholder='name'
                      rules={firstNameFieldRules}
                    />
                    <FormItemInput
                      name='email'
                      type='email'
                      placeholder='email'
                      rules={emailFieldRules}
                    />
                    <FormTextarea
                      name='note'
                      placeholder='note'
                      minHeight={180}
                      rules={noteFieldRules}
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
        </>
      )}
    </Container>
  );
};

export default ContactForm;
