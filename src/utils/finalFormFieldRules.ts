import {
  isPossiblePhoneNumber,
  parsePhoneNumber,
} from 'react-phone-number-input';

const emailRegexp =
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isEmailValid = (email: string) => emailRegexp.test(email);
const required = (value: any) => !value || value?.length === 0;
const minChar = (value: string, min: number) => value?.length < min;
const maxChar = (value: string, max: number) => value?.length >= max;
export const noLowCase = (value: string) => !/[a-z]/.test(value);
export const noUpperCase = (value: string) => !/[A-Z]/.test(value);
const consistOnlySpaces = (value: string) =>
  !!value && !value.replace(/\s/g, '').length;
export const numbersOneToThousand = (value: string) =>
  !/^([1-9][0-9]{0,2}|1000)$/.test(value);

export const firstNameFieldRules = (value: any) => {
  const errors: string[] = [];
  if (required(value)) errors.push(`Please enter your first name`);
  if (!required(value) && minChar(value, 2))
    errors.push(`Minimum number of symbols 2`);
  if (consistOnlySpaces(value)) errors.push(`Can't consist only from spaces`);
  return errors.join('--');
};

export const lastNameFieldRules = (value: any) => {
  const errors: string[] = [];
  if (required(value)) errors.push(`Please enter your last name`);
  if (!required(value) && minChar(value, 2))
    errors.push(`Minimum number of symbols 2`);
  if (consistOnlySpaces(value)) errors.push(`Can't consist only from spaces`);
  return errors.join('--');
};

export const legalPhoneFieldRules = (value: string) => {
  const errors: string[] = [];
  if (value) {
    const isPhoneNumberValid = isPossiblePhoneNumber(value);
    const parsedPhoneNumber = parsePhoneNumber(value);
    if (!isPhoneNumberValid || !parsedPhoneNumber?.country)
      errors.push(`The phone number you entered isn't valid`);
  }
  if (required(value)) errors.push(`Please enter your phone`);
  return errors.join('--');
};

export const emailFieldRules = (value: any, _: any, meta: any) => {
  const errors: string[] = [];
  if (required(value)) errors.push(`Please enter your ${meta.name}`);
  if (!isEmailValid(value) && !required(value))
    errors.push(`Please enter correct ${meta.name}`);
  return errors.join('--');
};

type TRequiredFieldRulesProps = {
  maxLength: number;
  minLength: number;
};

export const requiredFieldRules =
  (fieldName: string, props?: Partial<TRequiredFieldRulesProps>) =>
  (value: any) => {
    const errors: string[] = [];
    if (required(value)) errors.push(`Please enter ${fieldName}`);
    if (props?.maxLength && maxChar(value, props.maxLength)) {
      errors.push(`Maximum number of symbols ${props.maxLength - 1}`);
    }
    if (props?.minLength && minChar(value, props.minLength)) {
      errors.push(`Minimum number of symbols ${props.minLength}`);
    }
    return errors.join('--');
  };

export const notRequiredStringFieldRules = (value: any) => {
  const errors: string[] = [];
  if (!required(value) && minChar(value, 2))
    errors.push(`Minimum number of symbols 2`);
  if (consistOnlySpaces(value)) errors.push(`Can't consist only from spaces`);
  return errors.join('--');
};

export const descriptionFieldRules = (value: any) => {
  const errors: string[] = [];

  if (required(value)) {
    errors.push('Description is required');
  } else if (minChar(value, 50)) {
    errors.push('Description needs to have at least 50 characters.');
  }

  return errors.join('--');
};
