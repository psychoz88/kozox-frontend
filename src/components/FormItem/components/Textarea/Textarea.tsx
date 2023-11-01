import React, {useState} from 'react';
import {Field} from 'react-final-form';

import {IProps} from './Textarea.types';
import ErrorMessage from '../ErrorMessage';
import {TextAreaContainer, TextArea} from './Textarea.styles';
import {StyledLabel, StyledLabelContainer} from '../../FormItem.styles';

const FormTextarea = ({
  name,
  label,
  labelColor,
  disabled,
  showAllValidationErrors = false,
  placeholder,
  minLength = 150,
  maxLength = 1000,
  minHeight,
  inputSize = 'medium',
  rules,
}: IProps) => {
  const [focused, setFocused] = useState(false);
  const onFocusHandler = () => setFocused(true);
  const onBlurHandler = () => setFocused(false);
  const placeholderText = focused ? '' : placeholder;

  return (
    <Field name={name} validate={rules}>
      {({input, meta}) => {
        const hasError = meta.error && (meta.touched || meta.submitFailed);

        return (
          <TextAreaContainer onFocus={onFocusHandler} onBlur={onBlurHandler}>
            {label && (!!input.value || focused) && (
              <StyledLabelContainer hasError={hasError} focused={focused}>
                <StyledLabel
                  labelColor={labelColor}
                  hasError={hasError}
                  inputSize={inputSize}
                  focused={focused}
                >
                  {label}
                </StyledLabel>
              </StyledLabelContainer>
            )}

            <TextArea
              maxLength={maxLength}
              minLength={minLength}
              minHeight={minHeight}
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              hasError={hasError}
              disabled={disabled}
              placeholder={placeholderText}
              inputSize={inputSize}
              focused={focused}
            />

            <ErrorMessage
              hasError={hasError}
              errorData={meta.error}
              showAllValidationErrors={showAllValidationErrors}
            />
          </TextAreaContainer>
        );
      }}
    </Field>
  );
};

export default FormTextarea;
