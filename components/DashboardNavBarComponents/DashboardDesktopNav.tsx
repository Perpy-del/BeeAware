'use client';

import { dashboardNavData } from '@/data';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bell } from 'lucide-react';
import NavDataInterface from '@/interfaces/NavDataInterface';
import Image from 'next/image';
import { ModeDropdownComponent } from '../NavBarComponents/ModeDropdownComponent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaRegUser } from 'react-icons/fa6';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { TbLogout2 } from 'react-icons/tb';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

type Props = {};

const DashboardDesktopNav = (props: Props) => {
  const pathname = usePathname();
  const {user, signOutUser} = useBeeawareHook();

  const currUser = cookies.get('user');

  const profileImage = user && user?.photoURL ? user?.photoURL : "https://github.com/shadcn.png"
  const userName = user?.displayName || currUser?.userName || user?.email.split("@")[0]
  const userFallBack = userName?.slice(0, 2).toUpperCase();

  return (
    <nav className="sm:hidden lg:flex justify-between h-[100px] items-center lg:px-14 xl:px-20 3xl:px-40">
      {/* Logo */}
      <Link href="/dashboard">
        <Image
          src="/bee_aware.svg"
          width={150}
          height={33}
          alt="beeaware logo"
          loading="lazy"
          className="object-center object-cover"
        />
      </Link>

      {/* Menu */}
      <ul className="flex lg:gap-5 xl:gap-10 items-center">
        {dashboardNavData.map((data: NavDataInterface, index: number) => (
          <React.Fragment key={index}>
            {pathname === data?.link ? (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baPrimary dark:text-baSecondary font-[600] lg:text-headerSix xl:text-headerFive 3xl:text-headerThree">
                  {data?.name}
                </li>
              </Link>
            ) : (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baBody dark:text-baLight font-ba_normal lg:text-[18px] xl:text-headerSix transition transform duration-200 hover:scale-105 3xl:text-headerFour">
                  {data?.name}
                </li>
              </Link>
            )}
          </React.Fragment>
        ))}
      </ul>

      {/* Sign up */}
      <div className="flex items-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="text-baPrimary p-2 bg-baAccent rounded-full cursor-pointer relative transition-all transform hover:scale-105">
              <Bell />
              <div className="absolute h-2 w-2 bg-baError rounded-full right-3 top-2"></div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="mt-2 rounded-[20px] border-none dark:border dark:border-slate-800 w-[400px]"
          >
            <DropdownMenuItem className="flex gap-1 p-4 cursor-pointer hover:bg-none hover:rounded-tl-[20px] hover:rounded-tr-[20px] border-b border-baPrimary/20">
              <h1 className="text-headerSix font-ba_normal">Notifications</h1>
              <sup className="text-baLight bg-baError px-[6px] py-2 rounded-full">
                1
              </sup>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center pl-6 py-4 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal border-b border-baPrimary/20">
              <div>
                <h4 className="w-[85%] pb-1">
                  Your have four new likes on your comment
                </h4>
                <h6 className="text-baSubtle text-[12px]">2h ago</h6>
              </div>
              <div className="h-2 w-2 bg-baError rounded-full"></div>
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-6 py-4 flex items-center gap-3 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal border-b border-baPrimary/20">
              <div>
                <h4 className="w-[85%] pb-1">
                  A doctor is waiting for you in the consultation group
                </h4>
                <h6 className="text-baSubtle text-[12px]">3h ago</h6>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-6 py-4 flex items-center gap-3 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal border-b border-baPrimary/20">
              <div>
                <h4 className="w-[85%] pb-1">
                  A doctor is waiting for you in the consultation group
                </h4>
                <h6 className="text-baSubtle text-[12px]">5h ago</h6>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="bg-baAccent cursor-pointer transition-all transform hover:scale-105">
              <AvatarImage src={profileImage} alt="Profile Image" />
              <AvatarFallback className="text-baSecondary font-ba_medium border border-baPrimary dark:border-none">
                {userFallBack}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="mt-2 rounded-[20px] border-none dark:border dark:border-slate-800 w-fit"
          >
            <DropdownMenuItem className="flex items-center gap-3 p-4 cursor-default hover:bg-none hover:rounded-tl-[20px] hover:rounded-tr-[20px] border-b border-baPrimary/20">
              <Avatar className="bg-baAccent">
                <AvatarImage
                  src={profileImage}
                  alt="Profile Image"
                />
                <AvatarFallback className="dark:text-baSecondary font-ba_medium p-2 rounded-full bg-baSecondary text-baLight dark:bg-baAccent">
                  {userFallBack}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-headerFive font-ba_normal">
                  {userName}
                </h3>
                <h5 className="font-ba_normal text-baSubtle">
                  {user?.email}
                </h5>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-6 py-4 flex items-center gap-3 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal">
              <FaRegUser />
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-6 py-4 flex items-center gap-3 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal">
              <IoMdHelpCircleOutline />
              Help Center
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-6 py-4 flex items-center gap-3 hover:bg-baPrimary/50 hover:rounded-bl-[20px] hover:rounded-br-[20px] dark:hover:bg-baBody dark:hover:rounded-bl-[20px] dark:hover:rounded-br-[20px] text-baError font-ba_normal" onClick={signOutUser}>
              <TbLogout2 />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Change mode dropdown */}
        <ModeDropdownComponent />
      </div>
    </nav>
  );
};

export default DashboardDesktopNav;
