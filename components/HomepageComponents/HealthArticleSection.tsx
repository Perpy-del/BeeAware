'use client';

import React, { useState } from 'react';
// import { articlesData } from '@/data';
import MobileArticleComponent from '../ArticlesComponents/MobileArticleComponent';
import DesktopArticleComponent from '../ArticlesComponents/DesktopArticleComponent';
import ArticleCountComponent from '../ArticlesComponents/ArticleCountComponent';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';

type Props = {};

const HealthArticleSection = (props: Props) => {
  const {allArticles} = useBeeawareHook();

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
  const slicedArticles: Array<ArticleDataInterface> = allArticles.slice(
    startIndex,
    endIndex
  );
  const latestSlicedArticles: Array<ArticleDataInterface> = allArticles.reverse().slice(
    startIndex,
    endIndex
  );

  const totalPages = Math.ceil(allArticles.length / numOfItemsPerPage);

  return (
    <div className="sm:pb-20 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40">
      <h1 className="sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large sm:leading-normal sm:text-center lg:text-left dark:text-baSubtle">
        Health Article
      </h1>
      <p className="sm:text-bodySize sm:text-center lg:text-left lg:text-headerSix xl:text-headerFive 3xl:text-headerThree pb-7">
        Insights and information about STIs and Sexual Health
      </p>
      <ArticleCountComponent
        popularArticles={popularArticles}
        latestArticles={latestArticles}
        totalPages={totalPages}
        currPage={currPage}
        handlePopularArticlesClick={handlePopularArticlesClick}
        handleLatestArticlesClick={handleLatestArticlesClick}
        onPageClick={handlePageClick}
      />
      <DesktopArticleComponent
        latestArticles={latestArticles}
        popularArticles={popularArticles}
        slicedArticles={slicedArticles}
        latestSlicedArticles={latestSlicedArticles}
      />
      <MobileArticleComponent
        latestArticles={latestArticles}
        popularArticles={popularArticles}
      />
    </div>
  );
};

export default HealthArticleSection;
