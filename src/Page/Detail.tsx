import { Icon } from "../components/atoms/Icon/Icon";
import { Title } from "../components/atoms/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const Detail = () => {
  return (
    <>
      {/* 헤더 */}
      <div className="w-full h-14 flex py-[17px] px-5">
        <Icon size="medium" img="/src/assets/Icons/leftArrow.svg"></Icon>
        <div className="w-full flex justify-center">
          <Title size="large" label="옥수수" />
        </div>
      </div>
      {/* 사진 */}
      <div className="pt-4">
        <div className="relative w-full h-96 p-4 rounded-2xl shadow-md bg-[var(--neutral-basic-white)]">
          <div className="h-[318px]relative w-full flex justify-center z-10">
            <img src="/src/assets/Image/Corn.png"></img>
          </div>
          {/* 다시 생각 */}
          <div className="relative w-full grid grid-rows-[24px_42px] gap-2 z-20 -mt-8">
            <button className="rounded-xl py-1 px-1 w-[95px] h-full bg-[var(--neutral-warmgray-80)] text-[var(--brand-yellow-30)] text-[11px] font-normal tracking-tightest">
              2025년 7월 둘째주
            </button>
            <div className="flex">
              <div className="w-1/2 flex items-start">
                <button className="rounded-2xl p-2 bg-[var(--brand-yellow-30)] font-semibold text-[15px] tracking-tightest color-[var(--neutral-coolgray-80)]  ">
                  옥수수 CORN
                </button>
              </div>
              <div className="w-1/2 flex justify-end ">
                <Icon size="medium" img="/src/assets/Icons/Heart.svg"></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 상세설명 */}
      <div className="mt-4 rounded-xl pt-2 px-4 pb-4 border border-[var(--neutral-coolgray-20)] bg-[var(--neutral-basic-white)]">
        {/* 자세히 알아보기 */}
        <div className="flex w-full h-7 items-center py-2 px-4">
          <div className="w-full">
            <p className="w-fit font-normal text-[14px] color-[var(--neutral-coolgray-90)]">
              옥수수 자세히 알아보기
            </p>
          </div>
          <div className="w-full flex justify-end">
            <img src="/src/assets/Icons/upArrow.svg"></img>
          </div>
        </div>
        {/* 내용 목록 */}
        <div>
          {/* 제철시기 */}
          <div className="mt-4 px-4 text-left">
            <div className="inline-flex items-center justify-center border rounded-3xl border-[var(--neutral-coolgray-30)] px-2 py-1">
              <p className="text-[13px] text-[var(--neutral-coolgray-90)] font-normal tracking-tightest leading-[1.38]">
                제철시기
              </p>
            </div>
            <p className="m-2 text-[14px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
              7 ~ 8월
            </p>
            <div className="mb-4 h-px w-full bg-[var(--neutral-coolgray-20)]" />
          </div>
          {/* 주요산지 */}
          <div className="mt-4 px-4 text-left">
            <div className="inline-flex items-center justify-center border rounded-3xl border-[var(--neutral-coolgray-30)] px-2 py-1">
              <p className="text-[13px] text-[var(--neutral-coolgray-90)] font-normal tracking-tightest leading-[1.38]">
                주요산지
              </p>
            </div>
            <p className="m-2 text-[14px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
              강원 홍천, 영원, 평창, 충북 괴산, 전남 등지
            </p>
            <div className="mb-4 h-px w-full bg-[var(--neutral-coolgray-20)]" />
          </div>
          {/* 옥수수의 효능 */}
          <div className="mt-4 px-4 text-left">
            <div className="inline-flex items-center justify-center border rounded-3xl border-[var(--neutral-coolgray-30)] px-2 py-1">
              <p className="text-[13px] text-[var(--neutral-coolgray-90)] font-normal tracking-tightest leading-[1.38]">
                주요산지
              </p>
            </div>
            <p className="m-2 text-[14px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
              비타민B1, B2, E와 함께 칼륨, 철분 등 무기질이 풍부하며 식이섬유도
              많이 들어 있어 다이어트와 변비 예방에 효과가 있습니다.
            </p>
            <div className="mb-4 h-px w-full bg-[var(--neutral-coolgray-20)]" />
          </div>
          {/* 구입요령 */}
          <div className="mt-4 px-4 text-left">
            <div className="inline-flex items-center justify-center border rounded-3xl border-[var(--neutral-coolgray-30)] px-2 py-1">
              <p className="text-[13px] text-[var(--neutral-coolgray-90)] font-normal tracking-tightest leading-[1.38]">
                구입요령
              </p>
            </div>
            <p className="m-2 text-[14px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
              찰옥수수는 겉껍질이 푸르고 윤기가 나며, 알맹이가 꽉 차 있는 것이
              좋습니다. 옥수수 중간 아랫부분을 눌렀을 때 탄력이 있는 것을 고르는
              것이 좋습니다.
            </p>
            <div className="mb-4 h-px w-full bg-[var(--neutral-coolgray-20)]" />
          </div>
          {/* 손질요령 */}
          <div className="mt-4 px-4 text-left">
            <div className="inline-flex items-center justify-center border rounded-3xl border-[var(--neutral-coolgray-30)] px-2 py-1">
              <p className="text-[13px] text-[var(--neutral-coolgray-90)] font-normal tracking-tightest leading-[1.38]">
                손질요령
              </p>
            </div>
            <p className="m-2 text-[14px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
              찰옥수수의 껍질과 수염을 같이 잡고 아래로 세게 벗긴다.
            </p>
            <div className="mb-4 h-px w-full bg-[var(--neutral-coolgray-20)]" />
          </div>
          {/* 영양성분 */}
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
              <div className="flex h-7">
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
                  에너지
                </p>
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38] text-right">
                  86kcal
                </p>
              </div>
              <div className="flex h-7">
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
                  탄수화물
                </p>
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38] text-right">
                  19g
                </p>
              </div>
              <div className="flex h-7">
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
                  식이섬유
                </p>
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38] text-right">
                  2.7g
                </p>
              </div>
              <div className="flex h-7">
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
                  당
                </p>
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38] text-right">
                  3.2g
                </p>
              </div>
              <div className="flex h-7">
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
                  단백질
                </p>
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38] text-right">
                  3.2g
                </p>
              </div>
              <div className="flex h-7">
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38]">
                  지방
                </p>
                <p className="w-1/2 text-[13px] text-[var(--neutral-coolgray-50)] font-normal tracking-tightest leading-[1.38] text-right">
                  1.2g
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 공간 분리용 */}
      <div className="h-[38px] my-4"></div>
      <div>
        <div className="px-2">
          <p className="text-[16px] text-[var(--neutral-coolgray-90)] font-bold tracking-tightest leading-[1.38] text-left">
            맛동산 Pick 제철요리
          </p>
          <p className="mt-1 text-[14px] text-[var(--neutral-coolgray-60)] font-light tracking-tightest leading-[1.43] text-left">
            맛동산에서 선정된 옥수수의 제철요리는 무엇일까요?
          </p>
        </div>
        <div className="m-4">
          <div className="flex justify-end">
            <div className="inline-flex rounded-2xl py-1 px-2 bg-[var(--brand-yellow-20)]">
              <p className="text-[11px] text-[var(--neutral-warmgray-70)] font-normal tracking-tightest leading-[1.45]">
                102명 참여중
              </p>
            </div>
          </div>
          {/* 음식목록 */}

          <div>
            <Swiper pagination={true} modules={[Pagination]}>
              <SwiperSlide>
                <div className="py-2 pr-4 pl-2">
                  <div className="flex items-center">
                    <p className="w-[26px] h-[20px] text-[14px] text-[var(--neutral-gray-60)] font-bold tracking-tightest leading-[1.43]">
                      1
                    </p>
                    <img src="/src/assets/Image/corn_2.svg"></img>
                    <div className="grid ml-2">
                      <div className="p-1 rounded-lg bg-[var(--neutral-gray-10)]">
                        <p className="text-[12px] text-[var(--neutral-gray-70)] font-light tracking-tightest leading-[1.33]">
                          4명이 선택했어요.
                        </p>
                      </div>
                      <p className="mt-2 text-[14px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
                        마약옥수수
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-2 pr-4 pl-2">
                  <div className="flex items-center">
                    <p className="w-[26px] h-[20px] text-[14px] text-[var(--neutral-gray-60)] font-bold tracking-tightest leading-[1.43]">
                      2
                    </p>
                    <img src="/src/assets/Image/corn_2.svg"></img>
                    <div className="grid ml-2">
                      <div className="p-1 rounded-lg bg-[var(--neutral-gray-10)]">
                        <p className="text-[12px] text-[var(--neutral-gray-70)] font-light tracking-tightest leading-[1.33]">
                          4명이 선택했어요.
                        </p>
                      </div>
                      <p className="mt-2 text-[14px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
                        마약옥수수
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-2 pr-4 pl-2">
                  <div className="flex items-center">
                    <p className="w-[26px] h-[20px] text-[14px] text-[var(--neutral-gray-60)] font-bold tracking-tightest leading-[1.43]">
                      3
                    </p>
                    <img src="/src/assets/Image/corn_2.svg"></img>
                    <div className="grid ml-2">
                      <div className="p-1 rounded-lg bg-[var(--neutral-gray-10)]">
                        <p className="text-[12px] text-[var(--neutral-gray-70)] font-light tracking-tightest leading-[1.33]">
                          4명이 선택했어요.
                        </p>
                      </div>
                      <p className="mt-2 text-[14px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
                        마약옥수수
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="py-2 pr-4 pl-2">
                  <div className="flex items-center">
                    <p className="w-[26px] h-[20px] text-[14px] text-[var(--neutral-gray-60)] font-bold tracking-tightest leading-[1.43]">
                      4
                    </p>
                    <img src="/src/assets/Image/corn_2.svg"></img>
                    <div className="grid ml-2">
                      <div className="p-1 rounded-lg bg-[var(--neutral-gray-10)]">
                        <p className="text-[12px] text-[var(--neutral-gray-70)] font-light tracking-tightest leading-[1.33]">
                          4명이 선택했어요.
                        </p>
                      </div>
                      <p className="mt-2 text-[14px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
                        마약옥수수
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-2 pr-4 pl-2">
                  <div className="flex items-center">
                    <p className="w-[26px] h-[20px] text-[14px] text-[var(--neutral-gray-60)] font-bold tracking-tightest leading-[1.43]">
                      5
                    </p>
                    <img src="/src/assets/Image/corn_2.svg"></img>
                    <div className="grid ml-2">
                      <div className="p-1 rounded-lg bg-[var(--neutral-gray-10)]">
                        <p className="text-[12px] text-[var(--neutral-gray-70)] font-light tracking-tightest leading-[1.33]">
                          4명이 선택했어요.
                        </p>
                      </div>
                      <p className="mt-2 text-[14px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
                        마약옥수수
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-2 pr-4 pl-2">
                  <div className="flex items-center">
                    <p className="w-[26px] h-[20px] text-[14px] text-[var(--neutral-gray-60)] font-bold tracking-tightest leading-[1.43]">
                      6
                    </p>
                    <img src="/src/assets/Image/corn_2.svg"></img>
                    <div className="grid ml-2">
                      <div className="p-1 rounded-lg bg-[var(--neutral-gray-10)]">
                        <p className="text-[12px] text-[var(--neutral-gray-70)] font-light tracking-tightest leading-[1.33]">
                          4명이 선택했어요.
                        </p>
                      </div>
                      <p className="mt-2 text-[14px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
                        마약옥수수
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2 pr-4 pl-2">
                  <div className="flex items-center">
                    <p className="w-[26px] h-[20px] text-[14px] text-[var(--neutral-gray-60)] font-bold tracking-tightest leading-[1.43]">
                      7
                    </p>
                    <img src="/src/assets/Image/corn_2.svg"></img>
                    <div className="grid ml-2">
                      <div className="p-1 rounded-lg bg-[var(--neutral-gray-10)]">
                        <p className="text-[12px] text-[var(--neutral-gray-70)] font-light tracking-tightest leading-[1.33]">
                          4명이 선택했어요.
                        </p>
                      </div>
                      <p className="mt-2 text-[14px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
                        마약옥수수
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* 공간 분리용 */}
        </div>
      </div>
      <div className="h-[38px] my-4"></div>
      <div>
        <div className="px-2 my-4">
          <p className="text-[16px] text-[var(--neutral-gray-90)] font-bold tracking-tightest leading-[1.43] text-left">
            나의 제철음식 이야기
          </p>
          <p className="mt-1 text-[14px] text-[var(--neutral-coolgray-60)] font-light tracking-tightest leading-[1.43] text-left">
            제철음식과 관련된 이야기를 공유해주세요
          </p>
        </div>
        <div className="relative w-full h-[198px] py-8 px-6 rounded-2xl shadow-md bg-[var(--neutral-basic-white)]">
          <div className="w-full flex items-center justify-center">
            <img src="/src/assets/Icons/writeStory.svg"></img>
          </div>
          <p className="my-4 text-[13px] text-[var(--neutral-warmgray-90)] font-normal tracking-tightest leading-[1.43]">
            첫번째 이야기를 작성해 주세요
          </p>
          <button className="border border-[var(--neutral-gray-10)] rounded-lg p-2">
            <p className="text-[14px] text-[var(--neutral-warmgray-80)] font-semibold tracking-tightest leading-[1.43]">
              작성하기
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
