'use client';

import { dashboardNavData } from '@/data';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AlignJustify, XCircle } from 'lucide-react';
import NavDataInterface from '@/interfaces/NavDataInterface';
import { MobileModeDropdown } from '../NavBarComponents/ModeDropdownComponent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Bell } from 'lucide-react';
import { FaRegUser } from 'react-icons/fa6';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { TbLogout2 } from 'react-icons/tb';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import Cookies from 'universal-cookie';
import { capitalizeFirstLetterOfEachWord } from '@/lib/utils';

const cookies = new Cookies();

type Props = {};

const DashboardMobileNav = (props: Props) => {
  const pathname = usePathname();
  const { user, userName, signOutUser } = useBeeawareHook();

  const [showNav, setShowNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const currUser = cookies.get('userName');

  const profileImage = user && user?.photoURL ? user?.photoURL : "https://github.com/shadcn.png"
  const currentUserName = capitalizeFirstLetterOfEachWord(user?.displayName || currUser || userName || user?.email.split("@")[0])
  const userFallBack = currentUserName?.slice(0, 2).toUpperCase();

  return (
    <nav
      className={`py-5 lg:hidden ${
        showNav ? 'fixed h-screen w-screen z-50' : 'relative'
      } px-5`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="dark:hidden">
          <Image
            src="/bee_aware.svg"
            width={130}
            height={33}
            alt="BeeAware Logo"
            loading="lazy"
            className="object-center object-cover"
          />
        </Link>
        <Link href="/" className="hidden dark:flex">
          <Image
            src="/beeaware_logo.svg"
            width={130}
            height={33}
            alt="BeeAware Logo"
            loading="lazy"
            className="object-center object-cover"
          />
        </Link>
        <div className="flex items-center gap-3">
          <span onClick={() => setShowNav(true)}>
            <AlignJustify />
          </span>
          <MobileModeDropdown />
        </div>
      </div>
      {/* Menu */}
      {showNav && (
        <div className="bg-baPrimary flex flex-col h-screen absolute top-0 right-0 left-0 w-screen overflow-hidden">
          <span
            className="absolute right-4 top-4 text-baLight"
            onClick={() => setShowNav(false)}
          >
            <XCircle />
          </span>
          <div className="flex flex-col items-center pt-14">
            <div className="flex items-center gap-3">
              <Avatar className="bg-baAccent">
                <AvatarImage
                  src={profileImage}
                  alt="@shadcn"
                />
                <AvatarFallback className="text-baSecondary font-ba_medium border border-baPrimary dark:border-none">
                  {userFallBack}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-headerFive text-baLight font-ba_normal">
                  {currentUserName}
                </h3>
                <h5 className="font-ba_normal text-baSubtle">
                  {user?.email}
                </h5>
              </div>
            </div>
            <div>
              <div
                className="pb-2 pt-4 flex items-center gap-3 text-baLight font-ba_normal"
                onClick={() => setShowNotifications(true)}
              >
                <div className="relative text-baPrimary p-2 bg-baAccent rounded-full">
                  <Bell size={17} />
                  <div className="absolute h-1 w-1 bg-baError rounded-full right-3 top-2"></div>
                </div>
                Notifications
              </div>

              {showNotifications && (
                <div className="pt-7 px-5 fixed right-0 left-0 top-0 bottom-0 h-screen bg-baPrimary z-10">
                  <>
                    <div className="flex gap-1 p-4 border-b border-baSubtle">
                      <h1 className="text-headerSix font-ba_normal">
                        Notifications
                      </h1>
                      <sup className="text-baLight bg-baError p-2 h-fit rounded-full">
                        1
                      </sup>
                    </div>
                    <span
                      className="absolute right-4 top-4 text-baLight"
                      onClick={() => setShowNotifications(false)}
                    >
                      <XCircle />
                    </span>
                  </>
                  <div className="flex items-center justify-between pl-6 md:px-6 py-4 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal border-b border-baSubtle">
                    <div>
                      <h4 className="pb-1">
                        Your have four new likes on your comment
                      </h4>
                      <h6 className="text-baSubtle text-[12px]">2h ago</h6>
                    </div>
                    <div className="h-2 w-2 bg-baError rounded-full"></div>
                  </div>
                  <div className="pl-6 py-4 flex items-center gap-3 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal border-b border-baSubtle">
                    <div>
                      <h4 className="pb-1">
                        A doctor is waiting for you in the consultation group
                      </h4>
                      <h6 className="text-baSubtle text-[12px]">3h ago</h6>
                    </div>
                  </div>
                  <div className="pl-6 py-4 flex items-center gap-3 hover:bg-baPrimary/50 dark:hover:bg-baBody text-baDark dark:text-baLight font-ba_normal border-b border-baPrimary/20">
                    <div>
                      <h4 className="pb-1">
                        A doctor is waiting for you in the consultation group
                      </h4>
                      <h6 className="text-baSubtle text-[12px]">5h ago</h6>
                    </div>
                  </div>
                </div>
              )}
              <div className="py-2 flex items-center gap-3 text-baLight font-ba_normal">
                <div className="text-baPrimary p-2 bg-baAccent rounded-full">
                  <FaRegUser />
                </div>
                Profile Settings
              </div>
              <div className="py-2 flex items-center gap-3 text-baLight font-ba_normal">
                <div className="text-baPrimary p-2 bg-baAccent rounded-full">
                  <IoMdHelpCircleOutline />
                </div>
                Help Center
              </div>
              <div className="py-2 flex items-center gap-3 text-baWarning font-ba_normal" onClick={() => {
                    setShowNav(false);
                    signOutUser();
                  }}>
                <div
                  className="text-baWarning border border-baWarning p-2 bg-none rounded-full">
                  <TbLogout2 />
                </div>
                Log Out
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-7 items-center pt-8 pb-10">
            {dashboardNavData.map((data: NavDataInterface) => (
              <>
                {pathname === data?.link || pathname.startsWith(data?.link) ? (
                  <Link href={data?.link} key={data?.name}>
                    <li
                      className="text-baSubtle font-ba_large text-headerFive"
                      onClick={() => setShowNav(false)}
                    >
                      {data?.name}
                    </li>
                  </Link>
                ) : (
                  <Link href={data?.link} key={data?.name}>
                    <li
                      className="text-baLight font-ba_normal text-headerSix transition transform duration-200 hover:scale-105"
                      onClick={() => setShowNav(false)}
                    >
                      {data?.name}
                    </li>
                  </Link>
                )}
              </>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default DashboardMobileNav;
