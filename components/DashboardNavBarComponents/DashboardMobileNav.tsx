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
import Image from 'next/image';

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
        <Link href="/">
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
          <ul className="flex flex-col gap-10 items-center pt-14 pb-10">
            {dashboardNavData.map((data: NavDataInterface) => (
              <>
                {pathname === data?.link ? (
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

          {/* Sign up */}
          <div className="flex justify-center">
            {(pathname === '/' || pathname === '/auth/login') && (
              <Button
                className="bg-baSubtle text-baPrimary w-44 rounded-3xl font-ba_medium h-12"
                onClick={() => {
                  router.push('/auth/signup');
                  setShowNav(false);
                }}
              >
                Sign up
              </Button>
            )}
            {pathname === '/auth/signup' && (
              <Button
                className="bg-baSubtle text-baPrimary w-44 rounded-3xl font-ba_medium h-12"
                onClick={() => {
                  router.push('/auth/login');
                  setShowNav(false);
                }}
              >
                Log in
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardMobileNav;
