import type { Meta, StoryObj } from "@storybook/react";

import { NoFoodStory } from "./NoFoodStory";

const meta: Meta<typeof NoFoodStory> = {
  title: "Components/Molecules/NoFoodStory",
  component: NoFoodStory,
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
