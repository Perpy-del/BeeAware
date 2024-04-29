import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/ui/breadcrumb';

const ArticleBreadcrumbComponent = ({title}: {title: string}) => {
  return (
    <Breadcrumb className='sm:hidden lg:flex'>
      <BreadcrumbList>
        <BreadcrumbItem className="text-headerFive">
          <BreadcrumbLink
            href="/articles"
            className="font-ba_normal text-baSubtle hover:text-baSecondary"
          >
            Articles
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-baSecondary" />
        <BreadcrumbItem className="text-headerFive">
          <BreadcrumbPage className="text-baSecondary font-ba_normal">
            {title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default ArticleBreadcrumbComponent