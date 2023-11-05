import React from 'react';
import {Form} from 'react-final-form';

import Button from 'components/Button';
import DirectlyOnEmail from './components/DirectlyOnEmail';
import Title from 'components/Title/Title';
import FormTextarea from 'components/FormItem/components/Textarea/Textarea';

import {FormItemInput} from 'components/FormItem/FormItem';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getContactFormData} from 'store/app/actions';

import {Container, FormGroup} from './ContactForm.styles';

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const onSubmit = (formData: any) => {
    console.log(formData, 'formData');
    dispatch(getContactFormData(formData));
  };
  const isLoading = false;

  return (
    <Container isMobile={isMobile}>
      <Title title='Contact us' subTitle='Get in touch' />
      <Form onSubmit={onSubmit}>
        {({handleSubmit}) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <FormGroup columnNumber={1} gap={16}>
                <FormItemInput name='name' type='text' placeholder='name' />
                <FormItemInput name='email' type='email' placeholder='email' />
                <FormTextarea name='note' placeholder='note' minHeight={180} />
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
