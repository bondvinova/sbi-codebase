import type { Decorator, Meta, StoryObj } from '@storybook/react';

import Icons from '@/components/icons';

const DecoratorCustom: Decorator = (Story) => {
  return (
    <div className="min-w-[720px] rounded-md border p-10">
      <Story />
    </div>
  );
};

const meta = {
  title: 'Components/Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  decorators: [DecoratorCustom],
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
