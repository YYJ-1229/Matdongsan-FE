import type { Meta, StoryObj } from "@storybook/react";

import { FoodStoryTitle } from "./FoodStoryTitle";

const meta: Meta<typeof FoodStoryTitle> = {
  title: "Components/Molecules/FoodStoryTitle",
  component: FoodStoryTitle,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {}
};
