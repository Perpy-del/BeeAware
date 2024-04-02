import { testimonialData } from '@/data';
import React, { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
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

  return (
    <div className="bg-baAccent py-12 mb-28">
      <h1 className="text-headerTwo text-baPrimary text-center font-ba_large pb-5">
        Over 100 People Trust Us
      </h1>
      <div className="w-full m-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y m-[calc(1rem * -1)]">
            {testimonialData.map((data, index) => (
              <div className="flex-[0_0_60%] w-0 px-16" key={index}>
                <div className="flex flex-col">
                  <div className="rounded-[3.5rem] text-[1rem] leading-7 font-ba_medium items-center justify-center h-[12rem] border bg-baPrimary text-baLight px-14 pt-8">
                    {data.words}
                  </div>
                  <div className="text-baDark mx-auto text-center pt-10">
                    <h3 className="font-ba_normal text-headerFive text-baDark">
                      {data.testifier}
                    </h3>
                    <span className="font-ba_normal text-headerFive text-baPrimary">
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
            onClick={() => onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
