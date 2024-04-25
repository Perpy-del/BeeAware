'use client';

import { dashboardNavData, navData, navDataTwo } from '@/data';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { AlignJustify, XCircle } from 'lucide-react';
import NavDataInterface from '@/interfaces/NavDataInterface';
import { MobileModeDropdown } from '../NavBarComponents/ModeDropdownComponent';
import { MobileServicesDropdown } from '../NavBarComponents/ServicesDropdown';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Bell } from 'lucide-react';
import { FaRegUser } from 'react-icons/fa6';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { TbLogout2 } from 'react-icons/tb';

type Props = {};

const DashboardMobileNav = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      className={`py-5 lg:hidden ${
        showNav ? 'fixed h-screen w-screen z-50' : 'relative'
      } px-5`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/dashboard">
          <Image
            src="/bee_aware.svg"
            width={130}
            height={33}
            alt="beeaware logo"
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
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="text-baSecondary font-ba_medium border border-baPrimary dark:border-none">
                  CN
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-headerFive text-baLight font-ba_normal">
                  Catherine Nath
                </h3>
                <h5 className="font-ba_normal text-baSubtle">
                  catherinenath@gmail.com
                </h5>
              </div>
            </div>
            <div>
              <div className="pb-2 pt-4 flex items-center gap-3 text-baLight font-ba_normal">
                <div className="text-baPrimary p-2 bg-baAccent rounded-full">
                  <Bell size={17} />
                </div>
                Notifications
              </div>
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
              <div className="py-2 flex items-center gap-3 text-baError font-ba_normal">
                <div className="text-baError border border-baError p-2 bg-none rounded-full">
                  <TbLogout2 />
                </div>
                Log Out
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-10 items-center pt-8 pb-10">
            {dashboardNavData.map((data: NavDataInterface) => (
              <>
                {(pathname === data?.link || pathname.startsWith(data?.link)) ? (
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
