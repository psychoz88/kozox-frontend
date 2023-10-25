import React from 'react';
import {
  parsePhoneNumber,
  formatPhoneNumberIntl,
} from 'react-phone-number-input';

import ErrorMessage from '../ErrorMessage';
import Input from '../Input/Input';

import {PhoneNumberContainer} from './PhoneNumber.styles';
import {IInputFieldProps} from 'components/FormItem/types';

export interface ILegalPhone {
  phoneCountryCode?: string;
  phone?: string;
  phoneCountry?: string;
  fullPhoneNumber?: string;
}

const replaceNonNumberValue = (value: string) => value.replace(/[^\d]+/g, '');

const trimPhoneNumber = (value: ILegalPhone): ILegalPhone => {
  const nonNumberValue = replaceNonNumberValue(value.fullPhoneNumber || '');
  if ('phoneCountryCode' in value) {
    return {
      ...value,
      fullPhoneNumber: formatPhoneNumberIntl(`+${nonNumberValue}`),
    };
  }

  return {
    ...value,
    fullPhoneNumber: nonNumberValue ? `+${nonNumberValue}` : '',
  };
};

type TPhoneNumber = IInputFieldProps & {
  input: any;
  meta: any;
  isCountrySelect?: boolean;
};

function PhoneNumber({
  input,
  meta,
  name,
  label,
  labelColor,
  placeholder,
  placeholderIcon,
  highlightAsError = false,
  showAllValidationErrors = false,
  disabled,
  className,
  isCountrySelect,
}: TPhoneNumber) {
  const hasError = highlightAsError || (meta.error && meta.touched);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedPhone = parsePhoneNumber(event.target.value || '');
    const value = parsedPhone
      ? {
          phoneCountryCode: parsedPhone.countryCallingCode,
          phone: parsedPhone.nationalNumber,
          fullPhoneNumber: parsedPhone.number,
          phoneCountry: parsedPhone.country,
        }
      : {
          fullPhoneNumber: event.target.value,
        };
    const trimmedValue = trimPhoneNumber(value);
    input.onChange(trimmedValue.fullPhoneNumber);
  };

  return (
    <PhoneNumberContainer
      className={className}
      isCountrySelect={isCountrySelect}
    >
      <Input
        {...input}
        name={name}
        type={input.type}
        label={label}
        labelColor={labelColor}
        placeholder={placeholder}
        placeholderIcon={placeholderIcon}
        hasError={hasError}
        value={input.value}
        onChange={onChange}
        inputProps={{...input, disabled}}
        disabled={disabled}
      />

      <ErrorMessage
        hasError={hasError}
        errorData={meta.error}
        showAllValidationErrors={showAllValidationErrors}
      />
    </PhoneNumberContainer>
  );
}

export default PhoneNumber;
