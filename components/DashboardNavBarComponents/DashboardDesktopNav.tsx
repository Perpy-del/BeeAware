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

type Props = {};

const DashboardDesktopNav = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sm:hidden lg:flex justify-between h-[100px] items-center lg:px-14 xl:px-20 3xl:px-40">
      {/* Logo */}
      <Link href="/">
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
      <div className="flex items-center gap-8">
        <div className="text-baPrimary p-2 bg-baAccent rounded-full cursor-pointer">
          <Bell />
        </div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='bg-baSecondary dark:bg-baLight cursor-pointer'>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className='text-baLight dark:text-baSecondary font-ba_medium'>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className='flex items-center gap-1'>
          <div>
            <h2 className='text-baLight dark:text-baSecondary font-ba_medium '>CN</h2>
          </div>
          <div>
            <h3>Catherine Nath</h3>
            <h5>catherinenath@gmail.com</h5>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem>
          System
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
