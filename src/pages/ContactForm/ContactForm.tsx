import React, {useEffect, useState} from 'react';
import {Form} from 'react-final-form';

import Button from 'components/Button';
import DirectlyOnEmail from './components/DirectlyOnEmail';
import Title from 'components/Title/Title';
import FormTextarea from 'components/FormItem/components/Textarea/Textarea';
import ErrorMessage from './components/ErrorMessage';

import {setContactFormData} from 'store/app/reducer';
import {FormItemInput} from 'components/FormItem/FormItem';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getContactFormData} from 'store/app/actions';
import {
  emailFieldRules,
  firstNameFieldRules,
  noteFieldRules,
} from 'utils/finalFormFieldRules';

import {Container, FormGroup, Wrapper} from './ContactForm.styles';

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  const contactFormData = useAppSelector(({app}) => app.contactFormData);

  const status1 = useAppSelector(({app}) => app.contactFormData[0]?.ok);
  const status2 = useAppSelector(({app}) => app.contactFormData[1]?.ok);
  const status = status1 && status2;

  const arrayOfErrors = contactFormData.map((item) => {
    return item?.error;
  });
  const error = arrayOfErrors.includes(true);

  const onSubmit = (formData: any) => {
    setLoading(true);
    dispatch(getContactFormData(formData));
  };

  const onSendAgain = () => {
    setLoading(false);
    dispatch(setContactFormData([]));
  };

  useEffect(() => {
    if (status) return setLoading(false);
  }, [status]);

  return (
    <Container isMobile={isMobile}>
      {error ? (
        <Wrapper>
          <Title title='Something goes wrong!' />
          <ErrorMessage />
          <Button buttonType='primary' onClick={onSendAgain}>
            Try again
          </Button>
        </Wrapper>
      ) : (
        <>
          {status ? (
            <Wrapper>
              <Title
                title='Congratulations!'
                subTitle='Your information has been sent. We will contact with You as soon as possible.'
              />
              <Button buttonType='primary' onClick={onSendAgain}>
                Send again
              </Button>
            </Wrapper>
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
                          buttonType='primary'
                          type='submit'
                          loading={isLoading}
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
        </>
      )}
    </Container>
  );
};

export default ContactForm;
