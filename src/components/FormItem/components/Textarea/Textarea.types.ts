import {TInputSize} from '../../types';

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
  inputSize?: TInputSize;
}

export interface ITextAreaProps {
  hasError: boolean;
  disabled?: boolean;
  focused?: boolean;
  minHeight?: number;
  inputSize: TInputSize;
}
