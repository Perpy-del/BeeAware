import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type Props = {};

const DashboardBreadcrumbComponent = (props: Props) => {
  return (
    <Breadcrumb className='sm:hidden lg:flex'>
      <BreadcrumbList>
        <BreadcrumbItem className="text-headerFive">
          <BreadcrumbLink
            href="/dashboard"
            className="font-ba_normal text-baSubtle hover:text-baSecondary"
          >
            Consultations
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-baSecondary" />
        <BreadcrumbItem className="text-headerFive">
          <BreadcrumbPage className="text-baSecondary font-ba_normal">
            Get a Consultation
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumbComponent;
