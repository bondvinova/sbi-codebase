import type { Decorator, Meta, StoryObj } from '@storybook/react';

import Input from '@/components/input';

const withWrapperDecorator: Decorator = (Story) => (
  <div className="w-[500px]">
    <Story />
  </div>
);

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withWrapperDecorator],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    placeholder: 'sbidm.w.teo',
  },
};

export const InputWithValue: Story = {
  args: {
    value: 'bond@sbi.com',
  },
};

export const InputError: Story = {
  args: {
    errorMessage: 'Something went wrong, try again!',
    placeholder: 'Something went wrong, try again!',
  },
};
