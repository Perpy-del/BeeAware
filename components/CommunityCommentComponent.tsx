'use client';

import { FaHeart } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { useState } from 'react';

type Props = {};

const CommunityCommentComponent = (props: Props) => {
  const [likes, setLikes] = useState<number>(54);
  const { user } = useBeeawareHook();

  return (
    <div>
      <div className="py-7 md:py-10 bg-baAccent px-5 rounded-[20px] mb-5">
        <h2 className="text-[18px] lg:text-headerFour text-baDark font-ba_normal md:pb-7 text-center">
          What type of contraception do you use and why?
        </h2>
      </div>
      <div className="flex items-center gap-2 pb-5 text-baError" title="Like">
        <FaHeart size={24} /> <span className='text-baDark dark:text-baLight'>{likes}</span>
      </div>
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-3">
          <Avatar className="bg-baAccent">
            <AvatarImage src="/avatar.svg" alt="Profile Image" />
            <AvatarFallback className="text-baSecondary font-ba_medium border border-baPrimary dark:border-none">
              {user?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-[18px] lg:text-headerFive font-ba_normal">
            I and my partner use the calendar rhythm method. It&apos;s working
            for now 😉
          </h3>
        </div>
        <span
          className="cursor-pointer hover:scale-110 ease-in-out duration-300 text-baDark dark:text-baLight hover:text-baError hover:dark:text-baError transition transform"
          onClick={() => setLikes((prev: number) => prev + 1)}
        >
          <FaHeart size={24} />
        </span>
      </div>
      <div className="flex items-center gap-5 md:gap-10 pl-5">
        <div className="flex items-center gap-3">
          <Avatar className="bg-baAccent h-8 w-8">
            <AvatarImage src="/avatar_too.svg" alt="Profile Image" />
            <AvatarFallback className="text-baSecondary font-ba_medium border border-baPrimary dark:border-none">
              {user?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-[18px] lg:text-headerFive text-baSubtle font-ba_normal">Me too 🤣</h3>
        </div>
        <span className='text-baPrimary dark:text-baSecondary lg:text-headerSix font-ba_normal hover:font-ba_medium cursor-pointer'>View all replies</span>
      </div>
    </div>
  );
};

export default CommunityCommentComponent;
