import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {};

const MessagesBreadcrumbComponent = (props: Props) => {
  return (
    <Breadcrumb className="sm:hidden lg:flex">
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
        {/* <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem> */}
        {/* <BreadcrumbSeparator /> */}
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator /> */}
        <BreadcrumbItem className="text-headerFive">
          <BreadcrumbLink
            href="/dashboard/consult"
            className="font-ba_normal text-baSubtle hover:text-baSecondary"
          >
            Get a Consultation
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-baSecondary" />
        <BreadcrumbItem className="text-headerFive">
          <BreadcrumbPage className="text-baSecondary font-ba_normal">
            Messages
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MessagesBreadcrumbComponent;
