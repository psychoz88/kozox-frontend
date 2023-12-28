import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Modal} from 'antd';
import {ModalProps} from 'antd/lib/modal/Modal';

import {modalDefaultWidth} from 'constants/styleVars';

const StyledModalWrapper = styled(Modal)<{
  modalHeight?: string;
  headerPaddingBottom?: string;
  isHeaderHidden?: boolean;
}>`
  height: ${({modalHeight}) => modalHeight || ''} !important;

  .ant-modal-content {
    ${({modalHeight}) =>
      modalHeight
        ? `height: 100%;
            display: grid;`
        : ''};
  }

  .ant-modal-header {
    padding-bottom: ${({headerPaddingBottom}) => headerPaddingBottom || `0`};
    ${({isHeaderHidden}) => isHeaderHidden && 'display:none'};
  }

  .ant-modal-body {
    ${({modalHeight}) => (modalHeight ? `overflow: auto;` : '')};
  }
`;

interface IProps extends ModalProps {
  children?: ReactNode;
  modalHeight?: string;
  headerPaddingBottom?: string;
  isHeaderHidden?: boolean;
}

const MainModal = (props: IProps) => {
  const modalConfig = {
    width: modalDefaultWidth,
    style: {top: !props.centered ? '54px' : ''},
    // closeIcon: <Icon icon='NW2_CLOSE' />, // TODO: update close icon for modal
  };

  return <StyledModalWrapper {...modalConfig} {...props} />;
};

export default MainModal;
