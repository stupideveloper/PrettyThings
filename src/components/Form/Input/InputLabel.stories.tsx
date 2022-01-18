import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LabelComponent from './InputLabel';

export default {

  title: 'PrettyThings/Form/InputLabel',
  component: LabelComponent,
} as ComponentMeta<typeof LabelComponent>;


const Template: ComponentStory<typeof LabelComponent> = (args) => <LabelComponent {...args} />;

export const InputLabel = Template.bind({});

InputLabel.args = {
  htmlFor: 'mail',
	label: 'Email',
  className: '',
};


