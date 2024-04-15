'use client';

import { navData, navDataTwo } from '@/data';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonComponent from '../ButtonComponent';
import NavDataInterface from '@/interfaces/NavDataInterface';
import { ModeDropdownComponent } from './ModeDropdownComponent';
import ServicesDropdown from './ServicesDropdown';

type Props = {};

const DesktopNav = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="sm:hidden lg:flex justify-between h-[100px] items-center lg:px-14 xl:px-20 3xl:px-40">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-headerThree cursor-pointer text-baSecondary font-[800]">
          LOGO
        </h1>
      </Link>

      {/* Menu */}
      <ul className="flex lg:gap-8 xl:gap-10 items-center">
        {navData.map((data: NavDataInterface, index: number) => (
          <React.Fragment key={index}>
            {pathname === data?.link ? (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baPrimary dark:text-baSecondary font-[600] text-headerFive 3xl:text-headerThree">
                  {data?.name}
                </li>
              </Link>
            ) : (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baBody dark:text-baLight font-ba_normal text-headerSix transition transform duration-200 hover:scale-105 3xl:text-headerFour">
                  {data?.name}
                </li>
              </Link>
            )}
          </React.Fragment>
        ))}

        {pathname === '/services' ? (
          <div className='flex items-center gap-2'>
            <Link href="/services">
              <li className="text-baPrimary dark:text-baSecondary font-[600] text-headerFive 3xl:text-headerThree">
                Services
              </li>
            </Link>
            <ServicesDropdown />
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <Link href="/services">
              <li className="text-baBody dark:text-baLight font-ba_normal text-headerSix transition transform duration-200 hover:scale-105 3xl:text-headerFour">
                Services
              </li>
            </Link>
            <ServicesDropdown />
          </div>
        )}

        {navDataTwo.map((data: NavDataInterface, index: number) => (
          <React.Fragment key={index}>
            {pathname === data?.link ? (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baPrimary dark:text-baSecondary font-[600] text-headerFive 3xl:text-headerThree">
                  {data?.name}
                </li>
              </Link>
            ) : (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baBody dark:text-baLight font-ba_normal text-headerSix transition transform duration-200 hover:scale-105 3xl:text-headerFour">
                  {data?.name}
                </li>
              </Link>
            )}
          </React.Fragment>
        ))}
      </ul>

      {/* Sign up */}
      <div className="flex items-center gap-8">
        <ButtonComponent
          btnText="Sign up"
          width="w-[170px] 3xl:w-[250px]"
          variant="primary"
        />
        {/* Change mode dropdown */}
        <ModeDropdownComponent />
      </div>
    </nav>
  );
};

export default DesktopNav;
