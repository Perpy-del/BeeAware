import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface TeamHoverProps {
  memberName: string;
  position: string;
  content: string;
  avatarFallback: string;
  memberImage: string;
};

const TeamCardComponent = (props: TeamHoverProps) => {
  return (
    <div className="w-[300px] h-[420px] bg-no-repeat bg-center bg-cover rounded-[20px] relative" style={{backgroundImage: `url(${props?.memberImage})`}}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="w-fit px-5 py-3 mx-auto bg-baAccent rounded-[30px] text-baPrimary text-center font-ba_normal cursor-pointer absolute bottom-3 right-3 left-3">
            <h3 className="text-headerFive">{props.memberName}</h3>
            <p className="text-headerSix">{props.position}</p>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-baPrimary border-none">
          <div className="flex justify-between space-x-4 py-5">
            <Avatar>
              <AvatarImage src={props.memberImage} />
              <AvatarFallback>{props.avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
                {props.content}
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default TeamCardComponent;
