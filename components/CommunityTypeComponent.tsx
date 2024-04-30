import { Bookmark, Ellipsis } from 'lucide-react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';
import { toast } from './ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {
  type: string;
  comment: string;
  handleClickFollow: () => void;
};

const CommunityTypeComponent = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-5">
          <h2 className="text-headerSix lg:text-headerFour font-ba_normal">
            {props.type}
          </h2>
          <span className="text-baPrimary dark:text-baSecondary font-ba_normal text-smallSize lg:text-bodySize hover:font-ba_medium flex cursor-pointer" onClick={props.handleClickFollow}>
            Follow
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="dark:text-baLight p-2 rounded-full hover:dark:bg-baSubtle cursor-pointer text-baDark hover:bg-baAccent">
              <Ellipsis />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="mt-2 rounded-lg border-none bg-baLight dark:baSubtle dark:border dark:border-slate-800 w-fit"
          >
            <DropdownMenuItem
              className="px-4 py-2 space-x-2 hover:bg-baPrimary/50 dark:hover:bg-baBody dark:hover:rounded-lg text-baDark dark:text-baLight font-ba_normal"
            >
              🏃‍♀️ Start a new thread on {props.type}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-4 py-2 space-x-2 hover:bg-baPrimary/50 dark:hover:bg-baBody dark:hover:rounded-lg text-baDark dark:text-baLight font-ba_normal" onClick={props.handleClickFollow}
            >
              👉 Follow {props.type}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="pt-20 pb-5 bg-baAccent px-5 rounded-[20px] mb-10">
        <h2 className="text-headerFour text-baDark font-ba_normal pb-7 text-center">
          {props.comment}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div
              className="cursor-pointer flex items-center gap-2 hover:scale-110 ease-in-out duration-300 text-baError transition transform"
              title="Like"
            >
              <FaHeart size={24} /> 54
            </div>
            <div
              className="cursor-pointer flex items-center gap-2 hover:scale-110 ease-in-out duration-300 text-baDark transition transform"
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
    </>
  );
};

export default CommunityTypeComponent;
