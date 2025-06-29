import { FlipImageProps } from "../../../types/detail";
import { Icon } from "../../atoms/Icon/Icon";
import { useState } from "react";

export const FlipImageCard = ({
  week,
  name,
  descTitle,
  descDetail
}: FlipImageProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-40 perspective "
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div className="pt-4">
        <div
          className={`relative w-[343px] h-[398px] transition-transform duration-500 transform ${flipped ? "rotate-y-180" : ""}`}
        >
          <div className="relative w-full h-full p-4 rounded-2xl shadow-md bg-[var(--neutral-basic-white)]">
            <div className="relative w-full flex justify-center z-10">
              <img
                className={"w-[312px] h-[316px]"}
                src="/assets/Image/Corn.png"
              ></img>
            </div>
            {/* 앞면 */}
            <div
              className={`relative w-full grid z-20 gap-2 ${flipped ? "-mt-18" : "-mt-5"}  ${flipped ? "-rotate-y-180" : ""}`}
            >
              <button className="bg-[var(--neutral-warmgray-80)] text-[var(--brand-yellow-30)] w-[95px] h-[24px] rounded-2xl py-1 px-1 text-[11px] font-normal tracking-tightest leading-[1.45]">
                {week}
              </button>

              {!flipped ? (
                <div className={`flex h-[42px] ${flipped ? "hidden" : ""}`}>
                  <div className="w-1/2 flex items-start">
                    <button className="w-[105px] rounded-2xl p-2 bg-[var(--brand-yellow-30)] font-semibold text-[15px] tracking-tightest color-[var(--neutral-coolgray-80)]">
                      {name}
                    </button>
                  </div>
                  <div className="w-1/2 flex justify-end ">
                    <Icon size="medium" img="/assets/Icons/Heart.svg"></Icon>
                  </div>
                </div>
              ) : (
                <div className={`grid gap-2 ${flipped ? "" : "hidden"}`}>
                  <div className="w-full  text-[14px] font-semibold leading-[1.43] tracking-tightest color[var(--neutral-coolgray-100)]">
                    {descTitle}
                  </div>
                  <div className="w-full font-normal text-[12px] leading-[1.33] tracking-tightest color[var(--neutral-coolgray-80)]">
                    {descDetail}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className={` ${flipped ? "bg-[var(--brand-yellow-30)] backdrop-blur-md" : "none"} absolute w-[343px] h-[398px] rounded-2xl opacity-90 top-0 left-0 z-15`}
          ></div>
        </div>
      </div>
    </div>
  );
};
