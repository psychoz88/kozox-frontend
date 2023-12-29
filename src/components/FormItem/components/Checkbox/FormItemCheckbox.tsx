import React from 'react';
import {Field} from 'react-final-form';

import InputCheckbox from './components/InputCheckbox';
import ErrorMessage from '../ErrorMessage';

import {StyledFieldContainer} from './FormItemCheckbox.styles';
import {ECheckboxSizes, ICheckboxFieldProps} from './types';

const FormItemCheckbox = ({
  id,
  name,
  label,
  type = 'checkbox',
  rules,
  value,
  highlightAsError = false,
  showAllValidationErrors = false,
  noErrorMessage = false,
  size = ECheckboxSizes.MEDIUM,
  disabled,
  onChange,
}: ICheckboxFieldProps) => {
  return (
    <Field
      value={value}
      type={type}
      id={id || label}
      name={name}
      validate={rules}
    >
      {({input, meta}) => {
        const checked = input.checked || false;
        const hasError = highlightAsError || (meta.error && meta.touched);

        return (
          <StyledFieldContainer>
            <InputCheckbox
              size={size}
              id={id}
              name={name}
              label={label}
              checked={checked}
              disabled={disabled}
              inputProps={input}
              hasError={hasError}
              onChange={onChange}
            />

            {!noErrorMessage && (
              <ErrorMessage
                hasError={hasError}
                errorData={meta.error}
                showAllValidationErrors={showAllValidationErrors}
              />
            )}
          </StyledFieldContainer>
        );
      }}
    </Field>
  );
};

export default FormItemCheckbox;
