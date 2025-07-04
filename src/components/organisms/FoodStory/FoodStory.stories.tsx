import type { Meta, StoryObj } from "@storybook/react";

import { FoodStory } from "./FoodStory";

const meta: Meta<typeof FoodStory> = {
  title: "Components/Organisms/FoodStory",
  component: FoodStory,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "343px", margin: "auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {}
};
