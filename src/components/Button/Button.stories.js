import React from 'react';

import Button from './Button';

export default {
  title: 'PrettyThings/Button',
  component: Button,
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  type: 'default',
};
export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  type: 'outline',
};
export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Ghost Button',
  type: 'ghost',
};