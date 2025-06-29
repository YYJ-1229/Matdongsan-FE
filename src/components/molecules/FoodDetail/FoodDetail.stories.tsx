import type { Meta, StoryObj } from "@storybook/react";

import { FoodDetail } from "./FoodDetail";

const meta: Meta<typeof FoodDetail> = {
  title: "Components/FoodDetail",
  component: FoodDetail,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "제철시기",
    desc: "7~8월"
  }
};
