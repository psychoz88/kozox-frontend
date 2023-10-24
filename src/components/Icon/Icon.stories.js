import React from 'react';
import styled from 'styled-components';
import {message} from 'antd';

import ICON_MAP from '../../../constants/iconMap';
import IconComponent from './Icon';

const Wrapper = styled.div`
  columns: 2;

  @media (min-width: 992px) {
    columns: 3;
  }
`;

const IconCell = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 16px 0;
`;

const IconContainer = styled.div`
  min-width: 30px;
  margin: 0 20px 0 0;
  text-align: center;
`;

export default {
  title: 'Components/Icon',
  component: IconComponent,
};

const Template = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});

Icon.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: Object.keys(ICON_MAP),
    },
  },
  primary: {control: 'boolean'},
  disabled: {control: 'boolean'},
  secondary: {control: 'boolean'},
  success: {control: 'boolean'},
  warn: {control: 'boolean'},
  error: {control: 'boolean'},
  white: {control: 'boolean'},
  transparent: {control: 'boolean'},
  className: {control: false},
  onClick: {control: false},
  onMouseEnter: {control: false},
  onMouseLeave: {control: false},
  clickable: {control: 'boolean'},
  id: 'elementId',
  size: {control: 'number'},
};

Icon.args = {
  icon: 'EMAIL',
  primary: false,
  disabled: false,
  secondary: false,
  success: false,
  warn: false,
  error: false,
  onClick: () => {
    message.info('Button has been clicked!');
  },
  onMouseEnter: () => {
    message.info('onMouseEnter has been triggered!');
  },
  onMouseLeave: () => {
    message.info('onMouseLeave has been triggered!');
  },
  size: 16,
};

Icon.parameters = {
  controls: {exclude: ['className']}, // styled-component props
};

export const IconNames = (args) => {
  return (
    <Wrapper>
      {Object.keys(ICON_MAP).map((icon) => {
        return (
          <IconCell key={icon}>
            <IconContainer>
              <Template {...args} icon={icon} />
            </IconContainer>
            <div>{icon}</div>
          </IconCell>
        );
      })}
    </Wrapper>
  );
};
