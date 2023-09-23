import {createGlobalStyle} from 'styled-components';

import {
  borderRadiusLg,
  dirtyGreyTextColor,
  fontSizeDefault,
  fontSizeXSm,
  fontWeightExtraBold,
  lineHeightDefault,
  mdBp,
  offset26,
  offsetXXSm,
  scrollBarWidth,
} from '../constants/styleVars';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${fontSizeDefault};
  line-height: ${lineHeightDefault};
}
  
.ant-steps-item-content > .ant-steps-item-title {
  font-size: 15px;
}
.ant-checkbox-wrapper.ant-checkbox-group-item {
  width: 100%;
}
.ant-input-number-readonly,
.ant-input-affix-wrapper-readonly {
  border: none;
}

.ant-typography strong:hover,
.ant-input-number-readonly input:hover,
.ant-input-affix-wrapper-readonly input:hover,
div p:hover,
section div:hover {
  cursor: default;
}

.ant-upload-select-picture-card span,
.ant-upload-select-picture-card div,
.ant-form-item-control-input-content,
.ant-select-selector,
div span button:hover {
  cursor: pointer;
}

.ant-card-meta-detail > div:not(:last-child) {
  margin-bottom: 0 !important;
}

.ant-card-meta-detail {
  margin: 0 10px;
}

.editor-heading-h1,
.editor-heading-h2,
.editor-heading-h3,
.editor-heading-h4,
.editor-heading-h5,
.editor-heading-h6 {
  font-weight: ${fontWeightExtraBold};
  letter-spacing: 0.02em;
  line-height: 1.4;
  text-transform: uppercase;
}

.editor-paragraph{
  word-break: break-word;
}

.editor-heading-h5 {
  font-size: ${fontSizeXSm};
}

.editor-nested-listitem {
  list-style-type: none;
}

.editor-list-ol {
  padding: 0;
}

.editor-list-ul {
  padding: 0;
}

.editor-listitem {
  margin: ${offsetXXSm} ${offset26};
}

.editor-text-bold {
  font-weight: bold;
}

.editor-text-italic {
  font-style: italic;
}

.editor-text-underline {
  text-decoration: underline;
}

.editor-text-strikethrough {
  text-decoration: line-through;
}

/* Scroll bar */
* {
  &::-webkit-scrollbar {
    width: ${scrollBarWidth};
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${dirtyGreyTextColor};
    background-clip: content-box;
    border-radius: ${borderRadiusLg};
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    height: 4px;
  }

  // firefox
  scrollbar-width: thin;
  scrollbar-color: ${dirtyGreyTextColor} transparent;

  @media (min-width: ${mdBp}px) {
    &::-webkit-scrollbar:horizontal {
      height: ${scrollBarWidth};
    }
  }
}
`;
