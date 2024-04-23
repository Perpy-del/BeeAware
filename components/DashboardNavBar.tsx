import React from 'react'
import DashboardMobileNav from './DashboardNavBarComponents/DashboardMobileNav'
import DashboardDesktopNav from './DashboardNavBarComponents/DashboardDesktopNav'

type Props = {}

const DashboardNavBar = (props: Props) => {
  return (
    <>
      <DashboardMobileNav />
      <DashboardDesktopNav />
    </>
  )
}

export default DashboardNavBar