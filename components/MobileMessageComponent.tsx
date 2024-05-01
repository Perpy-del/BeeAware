'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  SendHorizontal,
  EllipsisVertical,
  Trash2,
  ChevronLeft,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {};

const MobileMessageComponent = (props: Props) => {
  const router = useRouter();
  const {
    setNumMessages,
    messages,
    userMessage,
    setUserMessage,
    handleSendMessage,
    docMessages,
  } = useBeeawareHook();

  const [showMessages, setShowMessages] = useState<boolean>(false);

  return (
    <div className="px-5 sm:block md:hidden h-screen">
      <div className="pt-5 w-full" onClick={() => setShowMessages(true)}>
        <h1 className="dark:text-baLight sm:text-headerFive md:text-headerThree font-ba_normal pb-5 px-5">
          Messages
        </h1>
        <div className="flex items-center gap-3 bg-baAccent dark:bg-baSubtle cursor-pointer transition-all transform hover:scale-105 duration-300 p-3 rounded-sm">
          <Avatar className="bg-baAccent">
            <AvatarImage src="/Profile.png" alt="Profile Image" />
            <AvatarFallback className="dark:text-baSecondary font-ba_medium p-2 rounded-full bg-baSecondary text-baLight dark:bg-baAccent">
              NW
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="sm:text-[18px] md:text-headerSix text-baDark font-ba_normal">
              Nwakaego Onyah
            </h3>
            <span className="block text-baBody sm:text-[10px] md:text-bodySize">
              Quick Doctor Consultation
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="p-2 rounded-full cursor-pointer dark:text-baDark hover:bg-baPrimary/20">
                <EllipsisVertical />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="mt-2 rounded-lg border-none bg-baLight dark:baSubtle dark:border dark:border-slate-800 w-fit"
            >
              <DropdownMenuItem
                className="px-4 py-2 space-x-2 hover:bg-baPrimary/50 dark:hover:bg-baBody dark:hover:rounded-lg text-baError font-ba_normal"
                onClick={() => setNumMessages((prev: number) => prev - 1)}
              >
                <Trash2 />
                Delete Chat
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {showMessages && (
        <div className="z-10 flex flex-col min-h-screen fixed left-0 top-0 bottom-0 right-0 bg-baLight dark:bg-baDark">
          <div className="relative">
            <div className="flex items-center gap-3 py-3 pl-5 w-full rounded-sm border-b border-baSubtle">
              <div onClick={() => setShowMessages(false)}>
                <ChevronLeft />
              </div>
              <Avatar className="bg-baAccent">
                <AvatarImage src="/Profile.png" alt="Profile Image" />
                <AvatarFallback className="dark:text-baSecondary font-ba_medium p-2 rounded-full bg-baSecondary text-baLight dark:bg-baAccent">
                  NW
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-headerSix text-baDark dark:text-baLight font-ba_normal">
                  Nwakaego Onyah
                </h3>
                <span className="block text-baBody dark:font-ba_normal">
                  Doctor
                </span>
              </div>
            </div>
            <span className="text-baSubtle text-smallSize block text-center pt-2">
              Today
            </span>
            <div className="fixed block w-[88%] left-5 bottom-2 space-y-5">
              {messages.length !== 0 ? (
                <div className="space-y-2 flex flex-col justify-end items-end">
                  {messages.map((message: any, index: number) => (
                    <h2
                      key={message?.id}
                      className="px-5 py-2 font-ba_normal bg-baAccent w-fit text-baDark rounded-lg"
                    >
                      {message?.message}
                    </h2>
                  ))}
                </div>
              ) : null}
              {docMessages.length !== 0 ? (
                <div className="space-y-2 flex flex-col justify-start items-start">
                  {docMessages.map((message: any, index: number) => (
                    <h2
                      key={message?.id}
                      className="px-5 py-2 font-ba_normal bg-[#b8b3db] w-fit text-baDark rounded-lg"
                    >
                      {message?.message}
                    </h2>
                  ))}
                </div>
              ) : null}
              <div className="block w-full relative">
                <Textarea
                  name="send-message"
                  id="send-message"
                  placeholder="Type your message..."
                  rows={4}
                  className="rounded-[20px] pl-4 pt-4"
                  value={userMessage}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setUserMessage(e.target.value)
                  }
                  onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault(); // Prevent newline in textarea
                      handleSendMessage(e);
                    }
                  }}
                />
                <Button
                  variant="primary"
                  className={`absolute bottom-4 right-4 flex items-center transition transform duration-700 hover:scale-105 ease-in-out rounded-full w-fit px-4`}
                  onClick={handleSendMessage}
                >
                  <SendHorizontal size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMessageComponent;
