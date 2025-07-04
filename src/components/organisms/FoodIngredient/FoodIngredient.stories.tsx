import type { Meta, StoryObj } from "@storybook/react";

import { FoodIngredient } from "./FoodIngredient";

const meta: Meta<typeof FoodIngredient> = {
  title: "Components/Organisms/FoodIngredient",
  component: FoodIngredient,
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
  args: {
    ingredientInfo: [
      {
        title: "에너지",
        data: "86kcal"
      },
      {
        title: "탄수화물",
        data: "19g"
      },
      {
        title: "식이섬유",
        data: "2.7g"
      },
      {
        title: "당",
        data: "3.2g"
      },
      {
        title: "단백질",
        data: "3.2g"
      }
    ]
  }
};
