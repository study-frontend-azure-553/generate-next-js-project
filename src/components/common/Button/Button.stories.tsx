import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from ".";

const meta: Meta<typeof Button> = {
  title: "components/common/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "background, text 색상을 결정합니다",
    },
    children: { description: "버튼에 들어갈 내용을 작성합니다" },
    isFullWidth: { description: "width: 100%을 적용합니다" },
    width: { description: "width: ${width}px을 적용합니다" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: "default",
    children: "Button",
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2">
        <Button type={"default"}>full width</Button>
      </div>
    );
  },
};
