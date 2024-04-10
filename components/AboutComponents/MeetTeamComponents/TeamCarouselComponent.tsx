import React, { useCallback, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../ui/carousel';
import { teamMemberData } from '@/data';
import TeamCardComponent, { TeamHoverProps } from './TeamCardComponent';

type Props = {};

const TeamCarouselComponent = (props: Props) => {
  const [progress, setProgress] = useState<number>(17);
  const [progressSmall, setProgressSmall] = useState<number>(12.5);

  const progressNext = useCallback(
    function handleProgressNext() {
      setProgress((progress: number) => progress + 17);
    },
    [setProgress]
  );

  const progressPrev = useCallback(
    function handleProgressPrev() {
      setProgress((progress: number) => progress - 17);
    },
    [setProgress]
  );

  const progressNextSmall = useCallback(
    function handleProgressSmallNext() {
      setProgressSmall((progress: number) => progress + 12.5);
    },
    [setProgressSmall]
  );

  const progressPrevSmall = useCallback(
    function handleProgressSmallPrev() {
      setProgressSmall((progress: number) => progress - 12.5);
    },
    [setProgressSmall]
  );

  return (
    <>
      {/* TODO: Fix the progress bar */}
      <Carousel className="w-full sm:pl-5 sm:pr-7 lg:pl-20">
        <CarouselContent className="-ml-1 gap-4">
          {teamMemberData.map((data: TeamHoverProps, index: number) => {
            return (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/4 3xl:basis-1/5"
              >
                <TeamCardComponent
                  memberName={data?.memberName}
                  position={data?.position}
                  content={data?.content}
                  avatarFallback={data?.avatarFallback}
                  memberImage={data?.memberImage}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="sm:hidden lg:flex gap-5 items-center pt-5 lg:pr-20">
          <div className="w-full h-1 rounded-md bg-baSubtle">
            <div className={`w-[${progress}%] h-1 rounded-md bg-baLight`}></div>
          </div>
          <div className="flex gap-5">
            <div onClick={progressPrev}>
              <CarouselPrevious className="text-baLight" />
            </div>
            <div onClick={progressNext}>
              <CarouselNext className="text-baLight" />
            </div>
          </div>
        </div>
        <div className="sm:flex lg:hidden gap-5 items-center pt-5 lg:pr-20">
          <div className="w-full h-1 rounded-md bg-baSubtle">
            <div
              className={`w-[${progressSmall}%] h-1 rounded-md bg-baLight`}
            ></div>
          </div>
          <div className="flex gap-5">
            <div onClick={progressPrevSmall}>
              <CarouselPrevious className="text-baLight" />
            </div>
            <div onClick={progressNextSmall}>
              <CarouselNext className="text-baLight" />
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default TeamCarouselComponent;
