import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {

  title: 'PrettyThings/Button',
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  varient: 'default',
  label: 'Button',
};

export const Outline = Template.bind({});

Outline.args = {
  varient: 'outline',
  label: 'Button',
};

export const Ghost = Template.bind({});

Ghost.args = {
  varient: 'ghost',
  label: 'Button',
};