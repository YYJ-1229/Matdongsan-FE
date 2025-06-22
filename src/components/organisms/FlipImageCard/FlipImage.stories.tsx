import type { Meta, StoryObj } from "@storybook/react";

import { FlipImageCard } from "./FlipImage";

const meta: Meta<typeof FlipImageCard> = {
  title: "Components/FlipImage",
  component: FlipImageCard,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    week: "2025년 7월 둘째주",
    name: "옥수수 CORN",
    descTitle: "알맹부터 수염까지 아낌없이 주는",
    descDetail:
      "7월 둘째주 선정된 제철음식은 바로 ‘옥수수' 에요. 더워지기 시작하는 초여름에는 아삭아삭한 초당옥수수부터 땡볕 더위엔 쫀득쫀득한 찰옥수수까지 다양한 식감으로 여름 대표 간식으로 불리운답니다."
  }
};
