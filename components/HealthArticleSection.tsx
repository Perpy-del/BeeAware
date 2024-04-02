'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { articlesData } from '@/data';
import ArticleInterface from '@/interfaces/ArticleInterface';
import Image from 'next/image';

type Props = {};

const HealthArticleSection = (props: Props) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [popularArticles, setPopularArticles] = useState<boolean>(true);
  const [latestArticles, setLatestArticles] = useState<boolean>(false);

  const numOfItemsPerPage = 3;

  const handlePageClick = (page: number) => {
    setCurrPage(page);
  };

  const handlePopularArticlesClick = () => {
    setPopularArticles(true);
    setLatestArticles(false);
  };

  const handleLatestArticlesClick = () => {
    setLatestArticles(true);
    setPopularArticles(false);
  };

  const startIndex: number = (currPage - 1) * numOfItemsPerPage;
  const endIndex: number = startIndex + numOfItemsPerPage;
  const slicedArticles: Array<ArticleInterface> = articlesData.slice(
    startIndex,
    endIndex
  );

  const totalPages = Math.ceil(articlesData.length / numOfItemsPerPage);

  return (
    <div className="px-20 pb-28">
      <h1 className="text-headerTwo font-ba_large dark:text-baSubtle">
        Health Article
      </h1>
      <p className="text-headerFive pb-7">
        Insights and infromation about STIs and Sexual Health
      </p>
      <div className="flex justify-between">
        <div className="grid w-1/3 grid-cols-2 gap-4">
          <h3
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${
              popularArticles
                ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
                : 'bg-none text-baDark dark:text-baLight'
            }`}
            onClick={handlePopularArticlesClick}
          >
            Popular Articles
          </h3>
          <h3
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${
              latestArticles
                ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
                : 'bg-none text-baDark dark:text-baLight'
            }`}
            onClick={handleLatestArticlesClick}
          >
            Latest Articles
          </h3>
        </div>
        <div>
          <div className="w-full flex gap-3">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber: number, i: number) => (
                <div
                  key={i}
                  className={`${
                    currPage === pageNumber
                      ? 'border-[0.5px] border-baSubtle inline-flex h-fit justify-center items-center text-baBody bg-baAccent'
                      : 'border-[0.5px] border-baSubtle hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50'
                  } cursor-pointer rounded-full p-2 w-fit px-4`}
                  onClick={() => handlePageClick(pageNumber)}
                >
                  {pageNumber}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <>
        {popularArticles && (
          <div className="flex justify-between gap-10 pt-8">
            {slicedArticles.map((article: ArticleInterface, index: number) => {
              return (
                <div key={index}>
                  <div>
                    <Image
                      width={400}
                      height={300}
                      src="/article_image.jpg"
                      alt="Article Image"
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="flex gap-1 pb-3 pt-2">
                    <h4 className="font-ba_normal text-baPrimary">
                      {article.focus}
                    </h4>
                    <span className="font-ba_normal text-baSubtle">
                      | {article.date}
                    </span>
                  </div>
                  <h1 className="text-headerFour font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline">
                    {article.topic}
                  </h1>
                  <p className="text-smallSize font-ba_normal leading-4 text-baBody dark:text-baLight">
                    {article.sub}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {latestArticles && (
          <div className="flex justify-between gap-10 pt-8">
            {slicedArticles.map((article: ArticleInterface, index: number) => {
              return (
                <div key={index}>
                  <div>
                    <Image
                      width={400}
                      height={300}
                      src="/article_image.jpg"
                      alt="Article Image"
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="flex gap-1 pb-3 pt-2">
                    <h4 className="font-ba_normal text-baPrimary">
                      {article.focus}
                    </h4>
                    <span className="font-ba_normal text-baSubtle">
                      | {article.date}
                    </span>
                  </div>
                  <h1 className="text-headerFour font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline">
                    {article.topic}
                  </h1>
                  <p className="text-smallSize font-ba_normal leading-4 text-baBody dark:text-baLight">
                    {article.sub}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </>
    </div>
  );
};

export default HealthArticleSection;
