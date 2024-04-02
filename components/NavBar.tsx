'use client';

import { navData } from '@/data';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Search, Moon, Sun, ArrowRightToLine } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ButtonComponent from './ButtonComponent';

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  return (
    <nav className="flex justify-between h-[100px] items-center px-20">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-headerThree cursor-pointer text-baSecondary font-[800]">LOGO</h1>
      </Link>

      {/* Menu */}
      <ul className="flex gap-10 items-center">
        {navData.map(data => (
          <>
            {pathname === data?.link ? (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baPrimary dark:text-baSecondary font-[600] text-headerFive">
                  {data?.name}
                </li>
              </Link>
            ) : (
              <Link href={data?.link} key={data?.name}>
                <li className="text-baBody dark:text-baLight font-ba_normal text-headerSix transition transform duration-200 hover:scale-105">
                  {data?.name}
                </li>
              </Link>
            )}
          </>
        ))}
      </ul>

      {/* Sign up */}
      <div className='flex items-center gap-8'>
        <ButtonComponent btnText='Sign up' width='w-[170px]' />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
