'use client';

import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';
import CommunityTypeComponent from '@/components/CommunityTypeComponent';
import CommunityIntimacyComponent from '@/components/CommunityIntimacyComponent';
import CommunityFollowComponent from '@/components/CommunityFollowComponent';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import CommunityCommentComponent from '@/components/CommunityCommentComponent';

type Props = {};

const DashboardCommunityPage = (props: Props) => {
  const [popular, setPopular] = useState<boolean>(true);
  const [following, setFollowing] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [comments, setComments] = useState<boolean>(false);

  const handlePopularClick = () => {
    setPopular(true);
    setFollowing(false);
    setSaved(false);
    setComments(false);
  };

  const handleFollowingClick = () => {
    setFollowing(true);
    setPopular(false);
    setSaved(false);
    setComments(false);
  };

  const handleSavedClick = () => {
    setSaved(true);
    setFollowing(false);
    setPopular(false);
    setComments(false);
  };

  const handleCommentsClick = () => {
    setComments(true);
    setSaved(false);
    setPopular(false);
    setFollowing(false);
  };

  return (
    <div className="px-5 lg:px-20 3xl:px-40">
      <div className="pt-5 justify-center flex flex-wrap gap-5 pb-10">
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-2.5 text-smallSize 3xl:text-headerFive border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            popular
              ? 'bg-baPrimary text-baLight shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handlePopularClick}
        >
          Popular
        </h3>
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-2.5 text-smallSize 3xl:text-headerFive border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            following
              ? 'bg-baPrimary text-baLight shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleFollowingClick}
        >
          Following
        </h3>
        <h3
          className={`inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-2.5 text-smallSize 3xl:text-headerFive border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            saved
              ? 'bg-baPrimary text-baLight shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleSavedClick}
        >
          <Bookmark size={20} />
          Saved
        </h3>
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:p0: string, { ...props }: Toastops }: ToastmallSize 3xl:text-headerFive border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            comments
              ? 'bg-baPrimary text-baLight shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleCommentsClick}
        >
          My Comments
        </h3>
      </div>
      {popular && (
        <>
          {/* Contraception */}
          <CommunityTypeComponent
            type="Contraception"
            comment="What type of contraceptive do you use and why?"
            handleClickFollow={handleFollowingClick}
          />

          {/* Intimacy */}
          <CommunityIntimacyComponent type="How has your sex life changed after divorce?" />

          {/* Communication */}
          <CommunityTypeComponent
            type="Communication"
            comment="How often do you and your partner communicate?"
            handleClickFollow={handleFollowingClick}
          />
        </>
      )}
      {following && (
        <div className="space-y-10 pb-20">
          <Breadcrumb className="sm:hidden lg:flex">
            <BreadcrumbList>
              <BreadcrumbItem className="text-headerFive">
                <BreadcrumbLink
                  href="/dashboard/community"
                  className="font-ba_normal text-baSubtle hover:text-baSecondary"
                >
                  Community
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-baSecondary" />
              <BreadcrumbItem className="text-headerFive">
                <BreadcrumbPage className="text-baSecondary font-ba_normal">
                  Contraception
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {/* Contraception */}
          <div>
            <div className="pb-5">
              <div className="flex items-center gap-5">
                <h2 className="text-headerSix lg:text-headerFour font-ba_normal">
                  Contraception
                </h2>
                <span className="text-baPrimary dark:text-baSecondary font-ba_normal text-smallSize lg:text-bodySize hover:font-ba_medium flex cursor-pointer">
                  Follow
                </span>
              </div>
            </div>
            <CommunityFollowComponent comment="What type of contraceptive do you use and why?" handleClickComments={handleCommentsClick} />
          </div>
          {/* Contraception */}
          <div>
            <div className="pb-5">
              <div className="flex items-center gap-5">
                <h2 className="text-headerSix lg:text-headerFour font-ba_normal">
                  Contraception
                </h2>
                <span className="text-baPrimary dark:text-baSecondary font-ba_normal text-smallSize lg:text-bodySize hover:font-ba_medium flex cursor-pointer">
                  Follow
                </span>
              </div>
            </div>
            <CommunityFollowComponent comment="What type of contraceptive do you use and why?" handleClickComments={handleCommentsClick} />
          </div>
          {/* Contraception */}
          <div>
            <div className="pb-5">
              <div className="flex items-center gap-5">
                <h2 className="text-headerSix lg:text-headerFour font-ba_normal">
                  Contraception
                </h2>
                <span className="text-baPrimary dark:text-baSecondary font-ba_normal text-smallSize lg:text-bodySize hover:font-ba_medium flex cursor-pointer">
                  Follow
                </span>
              </div>
            </div>
            <CommunityFollowComponent comment="What type of contraceptive do you use and why?" handleClickComments={handleCommentsClick} />
          </div>
        </div>
      )}
      {saved && (
        <>
          <CommunityTypeComponent
            type="Communication"
            comment="How often do you and your partner communicate?"
            handleClickFollow={handleFollowingClick}
          />
          <CommunityTypeComponent
            type="Consent"
            comment="Does your partner seek your consent before sex?"
            handleClickFollow={handleFollowingClick}
          />
          <CommunityTypeComponent
            type="Sexual Health"
            comment="How best do you think one can tell their partner they have STI?"
            handleClickFollow={handleFollowingClick}
          />
        </>
      )}
      {comments && (
        <div className='h-screen pt-10'>
          <CommunityCommentComponent />
        </div>
      )}
    </div>
  );
};

export default DashboardCommunityPage;
