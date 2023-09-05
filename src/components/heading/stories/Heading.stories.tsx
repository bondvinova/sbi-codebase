import type { Meta, StoryObj } from '@storybook/react';

import Heading from '@/components/heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    type: 'h3',
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingDefault: Story = {
  args: {
    children: 'Heading Default',
  },
};

export const HeadingForm: Story = {
  args: {
    children: 'Heading Form',
    variant: 'title-form',
  },
};

export const HeadingSmall: Story = {
  args: {
    children: 'Heading Small',
    size: 'sm',
  },
};
