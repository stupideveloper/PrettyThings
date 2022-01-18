import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LabelComponent from './Label';

export default {

  title: 'PrettyThings/Form/Input/Label',
  component: LabelComponent,
} as ComponentMeta<typeof LabelComponent>;


const Template: ComponentStory<typeof LabelComponent> = (args) => <LabelComponent {...args} />;

export const Label = Template.bind({});

Label.args = {
  htmlFor: 'mail',
	label: 'Email',
};


