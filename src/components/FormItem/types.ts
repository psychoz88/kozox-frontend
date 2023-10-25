import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';

export type TInputVariant = 'primary' | 'secondary';
export type TInputSize = 'small' | 'medium' | 'large';

interface IBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'email' | 'text' | 'number';
  label?: string;
  labelColor?: string;
  placeholderIcon?: string;
  focused?: boolean;
  variant?: TInputVariant;
  inputSize?: TInputSize;
}

export type THasError = boolean | undefined;

export interface IPasswordProps extends IBaseProps {
  inputProps: any;
  hasError: THasError;
  isLabelActive?: boolean;
}

export interface IInputFieldProps extends IBaseProps {
  rules?: (value: any, _: any, meta: any) => string;
  showAllValidationErrors?: boolean;
  highlightAsError?: boolean;
  className?: string; // styled-components needs it
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  hasValidation?: boolean;
  isCountrySelect?: boolean;
  errorMessageMargin?: string;
  hasAdditionalError?: boolean;
}

export interface ICheckboxProps {
  name: string;
  value?: any;
  label?: string | ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  showAllValidationErrors?: boolean;
  inputProps: any;
  hasError: THasError;
}

export interface IRadioButtonProps {
  name: string;
  value?: any;
  label?: string | ReactNode;
  labelShift?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
  hasError?: THasError;
  checked?: boolean;
  disabled?: boolean;
}

export interface IRadioButtonFieldProps {
  name: string;
  value?: any;
  label?: string | ReactNode;
  labelShift?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  rules?: (value: any, _: any, meta: any) => string;
  showAllValidationErrors?: boolean;
  highlightAsError?: boolean;
  isChecked?: boolean;
}

export interface ICheckboxFieldProps {
  name: string;
  value?: any;
  type: 'password' | 'email' | 'text' | 'checkbox' | 'radio';
  label?: string | ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  rules?: (value: any, _: any, meta: any) => string;
  showAllValidationErrors?: boolean;
  highlightAsError?: boolean;
}

export interface IErrorMessage {
  errorData: string;
  hasError: THasError;
  showAllValidationErrors: boolean;
  variant?: TInputVariant;
  inputSize?: TInputSize;
  margin?: string;
}

export interface IDropdownListOption {
  key: string;
  text: string;
  value: string;
}

export interface ISelectListOption extends Omit<IDropdownListOption, 'value'> {
  value: string | number;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string | ReactNode;
  labelColor?: string;
  highlightAsError?: boolean;
  multiple?: boolean;
  showAllValidationErrors?: boolean;
  rules?: (value: any, _: any, meta: any) => string;
  inputProps?: any;
  hasError?: THasError;
  options: IDropdownListOption[];
  readonly?: boolean;
  variant?: TInputVariant;
  inputSize?: TInputSize;
  maxHeight?: string;
  isCapitalLetterInOptions?: boolean;
  onChange?: (value: string | ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISelectListProps {
  name: string;
  multiple?: boolean;
  rules?: (value: any, _: any, meta: any) => string;
  inputProps?: any;
  hasError?: THasError;
  maxHeight?: number;
  options: ISelectListOption[];
}
