import {TInputSize, TInputVariant} from '../../types';

export interface IProps {
  name: string;
  label?: string;
  labelColor?: string;
  disabled?: boolean;
  showAllValidationErrors?: boolean;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  minHeight?: number;
  rules?: (values: any) => any;
  variant?: TInputVariant;
  inputSize?: TInputSize;
}

export interface ITextAreaProps {
  hasError: boolean;
  disabled?: boolean;
  focused?: boolean;
  minHeight?: number;
  variant: TInputVariant;
  inputSize: TInputSize;
}
