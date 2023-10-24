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
  variant = 'primary',
  inputSize = 'medium',
  disabled,
  className,
  onChange,
  onBlur,
  hasValidation = true,
  errorMessageMargin,
  hasAdditionalError,
  ...restInputProps
}: IInputFieldProps) => {
  return (
    <Field name={name} validate={hasValidation ? rules : undefined}>
      {({input, meta}) => {
        const hasError = hasValidation
          ? hasAdditionalError
            ? highlightAsError || (meta.error && meta.touched)
            : false
          : false;

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
              variant={variant}
              inputSize={inputSize}
              {...restInputProps}
            />
            <ErrorMessage
              hasError={hasError}
              errorData={meta.error}
              showAllValidationErrors={showAllValidationErrors}
              variant={variant}
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
