import { testimonialData } from '@/data';
import React, { useCallback, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';
import { PrevButton, NextButton } from './CarouselButtons';

type PropType = {
  options?: EmblaOptionsType;
};

const TestimonialSection: React.FC<PropType> = props => {
  const [emblaRef, emblaApi] = useEmblaCarousel(props.options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    autoplay.play;
  }, [emblaApi]);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      autoplay.options.active === false
          ? autoplay.reset
          : autoplay.stop

      callback()
    },
    [emblaApi]
  )

  return (
    <div className="bg-baAccent py-12 mb-28">
      <h1 className="sm:hidden lg:block text-headerTwo text-baPrimary text-center font-ba_large pb-5">
        Over 100 People Trust Us
      </h1>
      <div className="w-full m-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y m-[calc(1rem * -1)]">
            {testimonialData.map((data, index) => (
              <div className="sm:flex-[1_0_100%] lg:flex-[0_0_60%] sm:px-5 sm:w-full lg:w-0 lg:px-16" key={index}>
                <div className="flex flex-col">
                  <div className="rounded-[3.5rem] text-[1rem] 2xl:text-[1.5rem] 3xl:text-[1.8rem] sm:leading-5 lg:leading-7 3xl:leading-9 sm:font-ba_normal lg:font-ba_medium items-center justify-center sm:h-fit xl:h-[12rem] 2xl:h-fit  3xl:h-[13rem] border bg-baPrimary text-baLight sm:p-10 lg:px-14 lg:pt-8">
                    {data.words}
                  </div>
                  <div className="text-baDark mx-auto text-center pt-10">
                    <h3 className="font-ba_normal text-headerFive 3xl:text-headerThree text-baDark">
                      {data.testifier}
                    </h3>
                    <span className="font-ba_normal text-headerFive 3xl:text-headerFour text-baPrimary">
                      {data.job}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center pt-10 flex gap-10">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
