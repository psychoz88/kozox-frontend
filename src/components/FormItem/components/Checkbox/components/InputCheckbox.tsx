import React, {ChangeEvent} from 'react';

import {
  Checkbox,
  CheckboxWrapper,
  CheckboxLabel,
  CheckIcon,
} from '../FormItemCheckbox.styles';

import {checkboxSizeSchema, ICheckboxProps} from '../types';

const InputCheckbox = ({
  id,
  name,
  hasError,
  label,
  checked,
  inputProps,
  size,
  disabled = false,
  onChange,
  onClick,
}: ICheckboxProps) => {
  const schema = checkboxSizeSchema[size];

  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();

    if (typeof onChange === 'function') {
      onChange(event.target.name, Number(event.target.value));
    }
  };

  return (
    <CheckboxWrapper>
      <CheckboxLabel
        size={size}
        hasError={hasError}
        checked={!disabled ? checked : false}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
        {checked && (
          <CheckIcon
            clickable={!disabled}
            size={schema.iconSize}
            offsetSize={size}
            disabled={disabled}
            icon='SIMPLE_CHECKED'
            main
          />
        )}

        {!disabled && (
          <Checkbox
            id={id}
            hasError={hasError}
            name={name}
            onClick={handleClick}
            type='checkbox'
            {...inputProps}
          />
        )}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default InputCheckbox;
