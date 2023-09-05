import type { Meta, StoryObj } from '@storybook/react';

import Label from '@/components/label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Username',
  },
};

export const Select: Story = {
  args: {
    children: 'Password',
    variant: 'select',
    size: 'base',
  },
};
