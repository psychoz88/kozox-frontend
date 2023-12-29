import {ReactNode} from 'react';

export enum ECheckboxSizes {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum ECheckboxActualSize {
  sizeS = '20px',
  sizeM = '22px',
  sizeL = '24px',
}

export type THasError = boolean | undefined;

export interface ICheckboxProps {
  id: string;
  name: string;
  value?: any;
  checked: boolean;
  disabled?: boolean;
  label?: string | ReactNode;
  onChange?: (name: string, value: number) => void;
  onClick?: () => void;
  showAllValidationErrors?: boolean;
  inputProps: any;
  size: ECheckboxSizes;
  hasError: THasError;
}

export interface ICheckboxFieldProps {
  name: string;
  value?: any;
  id: string;
  type?: 'checkbox';
  size?: ECheckboxSizes;
  disabled?: boolean;
  noErrorMessage?: boolean;
  label?: string | ReactNode;
  onClick?: (name: string, value: number) => void;
  onChange?: (name: string, value: number) => void;
  rules?: (value: any, _: any, meta: any) => string;
  showAllValidationErrors?: boolean;
  highlightAsError?: boolean;
}

export type TCheckboxSize = {
  width: string;
  height: string;
  top: string;
  left: string;
  iconSize: number;
  labelFontSize: string;
  labelLineHeight: string;
};

type TCheckboxSchema = {
  [key in ECheckboxSizes]: TCheckboxSize;
};

export const checkboxSizeSchema: TCheckboxSchema = Object.freeze({
  [ECheckboxSizes.SMALL]: {
    width: ECheckboxActualSize.sizeS,
    height: ECheckboxActualSize.sizeS,
    top: '3px',
    left: '3px',
    iconSize: 15,
    labelFontSize: '12px',
    labelLineHeight: '20px',
  },
  [ECheckboxSizes.MEDIUM]: {
    width: ECheckboxActualSize.sizeM,
    height: ECheckboxActualSize.sizeM,
    top: '3px',
    left: '3px',
    iconSize: 16,
    labelFontSize: '14px',
    labelLineHeight: '22px',
  },
  [ECheckboxSizes.LARGE]: {
    width: ECheckboxActualSize.sizeL,
    height: ECheckboxActualSize.sizeL,
    top: '3px',
    left: '4px',
    iconSize: 17,
    labelFontSize: '16px',
    labelLineHeight: '24px',
  },
});
