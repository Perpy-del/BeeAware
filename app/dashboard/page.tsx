'use client';

import { User } from 'firebase/auth';
import { ChangeEvent, useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import ButtonComponent from '@/components/ButtonComponent';
import Image from 'next/image';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import MessagesBreadcrumbComponent from '@/components/BreadcrumbComponents/MessagesBreadcrumbComponent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SendHorizontal, EllipsisVertical, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import MobileMessageComponent from '@/components/MobileMessageComponent';
import { query, onSnapshot, where, orderBy } from 'firebase/firestore';
import { CircularProgress } from '@mui/material';

type Props = {};

const DashboardPage = (props: Props) => {
  const router = useRouter();
  const {
    numMessages,
    setNumMessages,
    messages,
    setMessages,
    userMessage,
    setUserMessage,
    handleSendMessage,
    userName,
    messagesRef,
    docMessages,
    setDocMessages,
    messageLoading,
  } = useBeeawareHook();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push('/auth/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const currUser = user?.displayName || userName;
    const docUser = 'Perpetual ObuAmu' || 'Olayode Ibukun' || 'Onyah Nwakaego';
    const queryMessages = query(
      messagesRef,
      where('user', '==', currUser),
      orderBy('createdAt')
    );
    const queryDocMessages = query(
      messagesRef,
      where('user', '==', 'Onyah Nwakaego'),
      orderBy('createdAt')
    );
    const unsubscribe = onSnapshot(queryMessages, snapshot => {
      let newMessages = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        if (typeof data === 'object' && data !== null) {
          newMessages.push({ ...data, id: doc.id });
        } else {
          console.error('Data is not an object:', data);
        }
        setMessages(newMessages);
      });
    });

    onSnapshot(queryDocMessages, snapshot => {
      let newDocMessages = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        if (typeof data === 'object' && data !== null) {
          newDocMessages.push({ ...data, id: doc.id });
        } else {
          console.error('Data is not an object:', data);
        }
        setDocMessages(newDocMessages);
      });
    });

    return () => unsubscribe();
  }, [messagesRef, setDocMessages, setMessages, user?.displayName, userName]);

  let lastSender: string | null = null;

  return user ? (
    <div>
      {numMessages ? (
        <>
          <div className="px-5 lg:px-20 3xl:px-40 sm:hidden md:block">
            <MessagesBreadcrumbComponent />
            <div className="pt-5 flex justify-between">
              <div className="h-[80vh] pt-5 w-[30%]">
                <h1 className="sm:hidden md:flex text-headerThree font-ba_normal pb-5 px-5">
                  Messages
                </h1>
                <div className="flex items-center gap-3 bg-baAccent dark:bg-baSubtle cursor-pointer transition-all transform hover:scale-105 duration-300 py-3 pl-5 pr-10 rounded-sm">
                  <Avatar className="bg-baAccent">
                    <AvatarImage src="/Profile.png" alt="Profile Image" />
                    <AvatarFallback className="dark:text-baSecondary font-ba_medium p-2 rounded-full bg-baSecondary text-baLight dark:bg-baAccent">
                      NW
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-headerSix text-baDark font-ba_normal">
                      Nwakaego Onyah
                    </h3>
                    <span className="block text-baBody">
                      Quick Doctor Consultation
                    </span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="p-2 rounded-full cursor-pointer hover:bg-baPrimary/20">
                        <EllipsisVertical />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="mt-2 rounded-lg border-none bg-baLight dark:baSubtle dark:border dark:border-slate-800 w-fit"
                    >
                      <DropdownMenuItem
                        className="px-4 py-2 space-x-2 hover:bg-baPrimary/50 dark:hover:bg-baBody dark:hover:rounded-lg text-baError font-ba_normal"
                        onClick={() =>
                          setNumMessages((prev: number) => prev - 1)
                        }
                      >
                        <Trash2 />
                        Delete Chat
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="w-[65%] relative">
                <div className="flex items-center gap-3 py-3 pl-5 w-full rounded-sm">
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
                <span className="text-baSubtle text-smallSize block text-center">
                  Today
                </span>
                <div className="absolute block w-full bottom-7 space-y-5">
                  {/* Render user messages */}
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
                  <form
                    className="sm:hidden md:block w-full relative"
                    onSubmit={handleSendMessage}
                  >
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
                      onKeyDown={(
                        e: React.KeyboardEvent<HTMLTextAreaElement>
                      ) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault(); // Prevent newline in textarea
                          handleSendMessage(e);
                        }
                      }}
                    />
                    <Button
                      variant="primary"
                      className={`absolute bottom-4 right-4 flex items-center transition transform duration-700 hover:scale-110 gap-2 ease-in-out hover:gap-4 3xl:text-headerFour 3xl:h-14 w-fit h-fit px-3 py-4`}
                      // onClick={handleSendMessage}
                    >
                      {messageLoading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <SendHorizontal />
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <MobileMessageComponent />
        </>
      ) : (
        <>
          <div className="mx-5 lg:mx-20 3xl:mx-40 bg-baAccent h-fit py-5 rounded-[20px] mb-14 lg:mb-24">
            <h1 className="sm:text-headerFive lg:text-headerThree sm:font-ba_normal lg:font-ba_medium text-baPrimary text-center mx-auto w-[80%] pb-3">
              Upgrade Your Plan to Enjoy More Benefits During Consultation
            </h1>
            <div className="flex justify-center">
              <ButtonComponent
                btnText={'Upgrade Now'}
                width={'w-[220px] 3xl:w-[300px]'}
                variant="primary"
              />
            </div>
          </div>
          <div className="flex items-center flex-col h-[80vh]">
            <div className="pb-9">
              <Image
                src="/empty.svg"
                alt="empty state"
                width={133}
                height={235}
              />
            </div>
            <h3 className="font-ba_normal text-headerFive text-baSubtle w-[80%] lg:w-[30%] text-center pb-4">
              You have no open consultations. Book one now!
            </h3>
            <ButtonComponent
              btnText={'Book Consultation'}
              width={'w-[220px] 3xl:w-[300px]'}
              variant="primary"
              onClick={() => router.push('/dashboard/consult')}
            />
          </div>
        </>
      )}
    </div>
  ) : null;
};

export default DashboardPage;
