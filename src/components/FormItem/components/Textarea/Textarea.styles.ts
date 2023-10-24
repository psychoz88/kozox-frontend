import styled from 'styled-components';

import {offsetSm} from 'constants/styleVars';
import {ITextAreaProps} from './Textarea.types';
import {getInputStyles} from '../../FormItem.styles';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TextArea = styled.textarea<ITextAreaProps>`
  ${({hasError, focused, variant, inputSize}) =>
    getInputStyles({hasError, focused, variant, inputSize})};
  padding: ${offsetSm};
  min-height: ${({minHeight}) => minHeight || 216}px;
`;
