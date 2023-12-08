import styled, {createGlobalStyle} from 'styled-components';
import {Drawer} from 'antd';

import {
  borderRadiusLg,
  drawerZIndex,
  fontSizeXLg,
  fontSizeXSm,
  fontWeightExtraBold,
  lineHeightSm,
  lineHeightXLg,
  mdBp,
  offsetSm,
  offsetXSm,
  offsetXLg,
  whiteColor,
  offsetDef,
} from 'constants/styleVars';

export const ModalGlobalStyle = createGlobalStyle`
  .modal-custom {
    .ant-modal {

      &-content {
        border-radius: ${borderRadiusLg};
        background-color: ${whiteColor};
        overflow: hidden;
      }

      &-header {
        border-radius: ${borderRadiusLg} ${borderRadiusLg} 0 0;
        border-bottom: 0;
        background-color: ${whiteColor};
      }

      &-body {
        border-radius: 0 0 ${borderRadiusLg} ${borderRadiusLg};
        overflow: auto;
      }

      &-footer {
        border: none;
        padding: 0 ${offsetXLg} ${offsetSm};
        text-align: left;
        border-radius: ${borderRadiusLg};
        background-color: ${whiteColor};
      }
    }
  }
`;

export const ModalTitle = styled.div`
  font-size: ${fontSizeXSm};
  line-height: ${lineHeightSm};
  font-weight: ${fontWeightExtraBold};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-align: center;

  @media (min-width: ${mdBp}px) {
    font-size: ${fontSizeXLg};
    line-height: ${lineHeightXLg};
    text-align: left;
  }
`;

export const StyledModalTitle = styled(ModalTitle)`
  margin-top: ${offsetXSm};
`;

export const StyledDrawer = styled(Drawer)<{
  drawerTextColor?: string;
  drawerMarginBottom?: string;
}>`
  z-index: ${drawerZIndex};
  color: ${({drawerTextColor}) => drawerTextColor};
  margin-bottom: ${({drawerMarginBottom}) => drawerMarginBottom};

  .ant-drawer {
    &-title {
      // need this for share drawer
      overflow: hidden;
      color: ${({drawerTextColor}) => drawerTextColor};
    }

    &-header {
      padding: ${offsetDef};

      @media (min-width: ${mdBp}px) {
        padding: ${offsetDef} ${offsetXLg};
      }
    }

    &-header-title {
      flex-direction: row-reverse;
    }

    &-content {
      border-radius: 16px 16px 0 0;
    }

    &-body {
      padding: ${offsetXLg} ${offsetDef};

      @media (min-width: ${mdBp}px) {
        padding: ${offsetXLg};
      }
    }

    &-footer {
      padding: ${offsetSm} ${offsetDef};

      @media (min-width: ${mdBp}px) {
        padding: ${offsetSm} ${offsetXLg};
      }
    }

    &-close {
      margin-left: 0;
      margin-right: -${offsetXSm};
      padding: 0 ${offsetXSm};

      & svg {
        color: ${({drawerTextColor}) => drawerTextColor};
      }
    }
  }
`;
