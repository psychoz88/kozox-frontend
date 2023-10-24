import React, {useState} from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import {
  getCountryCallingCode,
  parsePhoneNumber,
  Country,
} from 'react-phone-number-input';
import {getCountries} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';

import NW2Dropdown from 'view/components/NW2Dropdown';
import Icon from 'view/components/Icon';

import {
  ErrorMessage,
  Input,
} from 'view/components/NW2FormItem/components/index';
import {IInputFieldProps} from 'view/components/NW2FormItem/types';
import {trimPhoneNumber} from 'view/components/FormItemPhoneNumber/FormItemPhoneNumber';

import {
  StyledGroup,
  CountryIcon,
  RotatedIcon,
  CountrySelectDropdown,
  CountryListItem,
  PhoneNumberContainer,
} from './PhoneNumber.styles';
import {offsetXXSm} from 'styles/configs/offset';

type TPhoneNumber = IInputFieldProps & {
  input: any;
  meta: any;
  isCountrySelect?: boolean;
};

type TCountrySelect = {
  value?: string;
  onChange: (countryCode: Country) => void;
  labels: Record<string, string>;
  isCountrySelect?: boolean;
};

const CountrySelect = ({
  value,
  onChange,
  labels,
  isCountrySelect,
}: TCountrySelect) => {
  if (!isCountrySelect) return null;

  const triggerItem = value ? (
    <StyledGroup gap={offsetXXSm} align='center'>
      <CountryIcon>{getUnicodeFlagIcon(value)}</CountryIcon>
      <RotatedIcon icon='ARROW_UP_FILLED' size={10} />
    </StyledGroup>
  ) : (
    <StyledGroup gap={offsetXXSm} align='center'>
      <Icon icon='NW2_PHONE_COUNTRY' size={20} />
      <RotatedIcon icon='ARROW_UP_FILLED' size={10} />
    </StyledGroup>
  );

  const handleOnClick = (country: Country) => () => onChange(country);

  return (
    <CountrySelectDropdown>
      <NW2Dropdown triggerItem={triggerItem} maxHeight='200px'>
        {getCountries()
          .map((country) => ({country, label: labels[country]}))
          .sort((a, b) => a.label.localeCompare(b.label))
          .map(({country, label}) => (
            <CountryListItem key={country} onClick={handleOnClick(country)}>
              {label}
            </CountryListItem>
          ))}
      </NW2Dropdown>
    </CountrySelectDropdown>
  );
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
  const [country, setCountry] = useState<Country>();
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
    if (parsedPhone?.country) setCountry(parsedPhone.country);
  };

  const handleCountryChange = (countryCode: Country) => {
    input.onChange(`+${getCountryCallingCode(countryCode)}`);
    setCountry(countryCode);
  };

  return (
    <PhoneNumberContainer
      className={className}
      isCountrySelect={isCountrySelect}
    >
      <CountrySelect
        labels={en}
        value={country}
        onChange={handleCountryChange}
        isCountrySelect={isCountrySelect}
      />

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
