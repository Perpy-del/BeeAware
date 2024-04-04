'use client';

import DesktopNav from './NavBarComponents/DesktopNav';
import MobileNav from './NavBarComponents/MobileNav';

type Props = {};

const Navbar = (props: Props) => {

  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

export default Navbar;
