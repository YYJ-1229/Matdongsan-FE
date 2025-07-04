export const NoFoodStory = () => {
  return (
    <div className="relative w-full h-[198px] py-8 px-6 rounded-2xl shadow-md bg-[var(--neutral-basic-white)] grid justify-items-center">
      <div className="w-full flex items-center justify-center">
        <img src="/assets/Icons/writeStory.svg"></img>
      </div>
      <p className="my-4 text-[13px] text-[var(--neutral-warmgray-90)] font-normal tracking-tightest leading-[1.43]">
        첫번째 이야기를 작성해 주세요
      </p>
      <button className="w-[fit-content] border border-[var(--neutral-gray-10)] rounded-lg p-2">
        <p className="text-[14px] text-[var(--neutral-warmgray-80)] font-semibold tracking-tightest leading-[1.43]">
          작성하기
        </p>
      </button>
    </div>
  );
};
