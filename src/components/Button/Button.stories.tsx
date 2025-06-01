import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      options: ["primary", "secondary"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryBlue: Story = {
  args: {
    variant: "primaryBlue",
    size: "large",
    label: "투표하기!"
  }
};

export const PrimaryDark: Story = {
  args: {
    variant: "primaryDark",
    size: "medium",
    label: "투표하기"
  }
};

export const SecondaryGray: Story = {
  args: {
    size: "small",
    variant: "secondaryGray",
    label: "투표하기"
  }
};

export const SecondaryLight: Story = {
  args: {
    size: "extraSmall",
    variant: "secondaryLight",
    label: "투표하기"
  }
};
