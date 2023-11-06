import React from 'react';
import {Field} from 'react-final-form';

import {Input, ErrorMessage, PhoneNumber} from './components';

import {IInputFieldProps} from './types';

export const FormItemInput = ({
  name,
  type,
  label,
  labelColor,
  placeholder,
  placeholderIcon,
  rules,
  highlightAsError = false,
  showAllValidationErrors = false,
  inputSize = 'medium',
  disabled,
  className,
  onChange,
  onBlur,
  hasValidation = true,
  errorMessageMargin,
  ...restInputProps
}: IInputFieldProps) => {
  return (
    <Field name={name} validate={hasValidation ? rules : undefined}>
      {({input, meta}) => {
        const hasError = hasValidation
          ? highlightAsError || (meta.error && meta.touched)
          : false;

        // console.log(hasValidation, 'hasValidation')
        // console.log(hasAdditionalError, 'hasAdditionalError')
        // console.log(highlightAsError, 'highlightAsError')
        // console.log(meta.error, 'meta.error')
        // console.log(meta.touched, 'meta.touched')
        // console.log(hasError, 'hasError')

        return (
          <div className={className}>
            <Input
              name={name}
              type={type}
              label={label}
              labelColor={labelColor}
              placeholder={placeholder}
              placeholderIcon={placeholderIcon}
              hasError={hasError}
              value={input.value}
              onChange={onChange || input.onChange}
              onBlur={onBlur || input.onBlur}
              inputProps={{...input, disabled}}
              disabled={disabled}
              inputSize={inputSize}
              {...restInputProps}
            />
            <ErrorMessage
              hasError={hasError}
              errorData={meta.error}
              showAllValidationErrors={showAllValidationErrors}
              inputSize={inputSize}
              margin={errorMessageMargin}
            />
          </div>
        );
      }}
    </Field>
  );
};

export const FormItemPhoneNumber = ({
  name,
  type,
  label,
  labelColor,
  placeholder,
  placeholderIcon,
  rules,
  highlightAsError = false,
  showAllValidationErrors = false,
  className,
  isCountrySelect,
}: IInputFieldProps) => {
  return (
    <Field
      name={name}
      type={type}
      validate={rules}
      label={label}
      labelColor={labelColor}
      placeholder={placeholder}
      placeholderIcon={placeholderIcon}
      highlightAsError={highlightAsError}
      showAllValidationErrors={showAllValidationErrors}
      className={className}
    >
      {(props) => (
        <PhoneNumber
          name={name}
          type={type}
          isCountrySelect={isCountrySelect}
          {...props}
        />
      )}
    </Field>
  );
};
