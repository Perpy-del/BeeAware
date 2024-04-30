import { Bookmark } from 'lucide-react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';
import { toast } from './ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';

type Props = {
  comment: string;
  handleClickComments: () => void;
};

const CommunityFollowComponent = (props: Props) => {
  const { user } = useBeeawareHook();

  return (
    <div>
      <div className="pt-10 lg:pt-20 pb-5 bg-baAccent px-5 rounded-[20px] mb-5">
        <h2 className="text-[18px] lg:text-headerFour text-baDark font-ba_normal pb-7 text-center">
          {props.comment}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div
              className="flex items-center gap-2 text-baError"
              title="Like"
            >
              <FaHeart size={24} /> 54
            </div>
            <div
              className="flex items-center gap-2 text-baDark "
              title="Comments"
            >
              <FaCommentDots size={24} /> 15
            </div>
          </div>
          <div
            className="hover:text-baSecondary text-baBody cursor-pointer hover:scale-110 ease-in-out duration-300 transition transform"
            onClick={() =>
              toast({
                title: 'Activity has been saved',
                description:
                  'Check the saved section to see all saved activities',
                className:
                  'bg-baSecondary text-baLight dark:bg-baLight dark:text-baBody',
              })
            }
          >
            <Bookmark />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between'>
        <div className='flex items-center gap-3 pb-3 md:pb-0'>
          <Avatar className="bg-baAccent">
            <AvatarImage src="/avatar.svg" alt="Profile Image" />
            <AvatarFallback className="text-baSecondary font-ba_medium border border-baPrimary dark:border-none">
              {user?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h3 className='sm:text-[18px] lg:text-headerFive font-ba_normal'>I and my partner use the calendar rhythm method. It&apos;s working for now 😉</h3>
        </div>
        <span className='text-baPrimary dark:text-baSecondary lg:text-headerSix font-ba_normal cursor-pointer hover:font-ba_medium' onClick={props.handleClickComments}>View all 15 comments</span>
      </div>
    </div>
  );
};

export default CommunityFollowComponent;
