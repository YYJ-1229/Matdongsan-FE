import { FoodDetailInfo } from "../../../types/detail";

export const FoodDetail = ({ title, desc }: FoodDetailInfo) => {
  return (
    <div className="mt-4 px-4 text-left">
      <div className="inline-flex items-center justify-center border rounded-3xl border-[var(--neutral-coolgray-30)] px-2 py-1">
        <p className="text-[13px] text-[var(--neutral-coolgray-90)] font-normal tracking-tightest leading-[1.38]">
          {title}
        </p>
      </div>
      <p className="m-2 text-[14px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
        {desc}
      </p>
      <div className="mb-4 h-px w-full bg-[var(--neutral-coolgray-20)]" />
    </div>
  );
};
