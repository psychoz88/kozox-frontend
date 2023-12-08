import React, {CSSProperties, ReactNode} from 'react';

import MainModal from 'components/MainModal';

import {modalDefaultWidth, offsetXLg} from 'constants/styleVars';
import {ModalGlobalStyle, StyledModalTitle} from './Modal.styles';

interface IProps {
  isShowed: boolean;
  header: ReactNode;
  body?: ReactNode;
  footer?: ReactNode | null;
  onClose: () => void;
  modalRender?: ((node: ReactNode) => ReactNode) | undefined;
  modalBodyStyle?: CSSProperties;
  modalWidth?: string | number;
  modalHeight?: string;
  children?: ReactNode;
  destroyOnClose?: boolean;
  headerPaddingBottom?: string;
}

function Modal({
  isShowed,
  header,
  body,
  footer = null,
  modalRender,
  modalWidth,
  modalHeight,
  modalBodyStyle,
  onClose,
  children,
  destroyOnClose = true,
  headerPaddingBottom,
}: IProps) {
  return (
    <>
      <MainModal
        width={modalWidth || modalDefaultWidth}
        modalHeight={modalHeight}
        title={<StyledModalTitle>{header}</StyledModalTitle>}
        visible={isShowed}
        onCancel={onClose}
        footer={footer}
        bodyStyle={
          modalBodyStyle || {
            padding: offsetXLg,
          }
        }
        wrapClassName='modal-custom'
        centered
        modalRender={modalRender}
        destroyOnClose={destroyOnClose}
        headerPaddingBottom={headerPaddingBottom}
      >
        {body || children}
      </MainModal>

      <ModalGlobalStyle />
    </>
  );
}

export default Modal;
