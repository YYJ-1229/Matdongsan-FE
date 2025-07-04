export const FoodStory = () => {
  return (
    <div className="rounded-2xl py-2 px-4 shadow-lg bg-[var(--neutral-basic-white)]">
      <div className="flex items-center">
        <div className="flex w-[98px] items-center">
          <img className="w-9 h-9" src="/assets/Icons/user-profile.svg"></img>
          <div className="ml-2">
            <div className="font-normal text-[14px] text-[var(--neutral-coolgray-90)] tracking-tightest leading-[1.43]">
              도란도란1
            </div>
            <div className="mt-[2px] font-light text-[11px] text-[var(--neutral-coolgray-40)] tracking-tightest leading-[1.45]">
              2025.03.12
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <img src="/assets/Icons/category_1.svg" />
        </div>
      </div>
      <div className="mt-2 mb-2 h-px w-full bg-[var(--neutral-coolgray-20)]" />
      <div>
        <div>
          <p className="rounded-lg py-1 px-1.5 h-7.5 bg-[var(--brand-orange-10)] w-fit">
            찐옥수수
          </p>
        </div>
        <div>
          <p>재료</p>
          <p>옥수수, 소금 2T, 뉴슈가 1T</p>
        </div>
        <div>
          <p>조리방법</p>
          <p>
            1. 옥수수 껍질을 두 세장 남겨두고 나머지는 다 손질해줍니다. 옥수수
            껍질이 조금 남아있어야 맛있어요!
          </p>
          <p>
            2. 옥수수가 잠길정도로 물을 부어주고, 소금과 뉴슈가를 2:1 비율로
            넣어주세요. 뉴슈가가 없으면 설탕을 소금보다 조금 더 많이 넣어주세요.
          </p>
          <p>3. 센불로 20분정도 끓인 후 중불에서 20분 끓여서 먹으면 됩니다.</p>
        </div>
      </div>
    </div>
  );
};
