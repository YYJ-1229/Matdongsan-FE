import { FoodIngredientInfo } from "../../../types/detail";

export const FoodIngredientDetail = ({ title, data }: FoodIngredientInfo) => {
  return (
    <div className="flex h-7">
      <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
        {title}
      </p>
      <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38] text-right">
        {data}
      </p>
    </div>
  );
};
