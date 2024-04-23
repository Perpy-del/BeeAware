import Link from 'next/link';
import React from 'react';

type Props = {};

const DashboardFooter = (props: Props) => {
  return (
    <div className="h-[64px] py-5 flex items-center justify-center gap-10 text-baLight sm:text-smallSize lg:text-bodySize">
      <span>© 2023 BeeAware. All Rights Reserved.</span>
      <Link href="#">Privacy Policy</Link>
    </div>
  );
};

export default DashboardFooter;
