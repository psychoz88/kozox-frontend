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
  ${({hasError, focused, inputSize}) =>
    getInputStyles({hasError, focused, inputSize})};
  padding: ${offsetSm};
  min-height: ${({minHeight}) => minHeight || 216}px;
`;
