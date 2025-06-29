import { FoodIngredientInfo } from "../../../types/detail";
import { FoodIngredientDetail } from "../../molecules/FoodIngredientDetail/FoodIngredientDetail";

interface FoodIngredientProps {
  ingredientInfo?: FoodIngredientInfo[];
}

export const FoodIngredient = ({ ingredientInfo }: FoodIngredientProps) => {
  return (
    <div className="mt-4 px-4 text-left">
      <div className="inline-flex items-center justify-center border rounded-3xl border-[var(--neutral-coolgray-30)] px-2 py-1">
        <p className="text-[13px] text-[var(--neutral-coolgray-90)] font-normal tracking-tightest leading-[1.38]">
          영양성분
        </p>
      </div>
      <p className="m-2 text-[12px] text-[var(--neutral-coolgray-50)] font-light tracking-tightest leading-[1.33] text-right">
        100g 당 기준
      </p>
      <div className="mb-4 h-px w-full bg-[var(--neutral-coolgray-10)]" />
      <div>
        {ingredientInfo?.map(({ title, data }) => (
          <FoodIngredientDetail title={title} data={data} />
        ))}
      </div>
    </div>
  );
};
