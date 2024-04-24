import Link from 'next/link';
import React from 'react';

type Props = {};

const DashboardFooter = (props: Props) => {
  return (
    <div className="h-[48px] lg:h-[62px] py-5 flex items-center justify-center sm:gap-3 smd:gap-10 text-baLight sm:text-[10px] smd:text-smallSize lg:text-bodySize bg-baPrimary">
      <span>© 2023 BeeAware. All Rights Reserved.</span>
      <Link href="#">Privacy Policy</Link>
    </div>
  );
};

export default DashboardFooter;
