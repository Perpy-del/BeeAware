'use client';

import React, { useState } from 'react';
import { articlesData } from '@/data';
import ArticleInterface from '@/interfaces/ArticleInterface';
import MobileArticleComponent from '../ArticlesComponents/MobileArticleComponent';
import DesktopArticleComponent from '../ArticlesComponents/DesktopArticleComponent';
import ArticleCountComponent from '../ArticlesComponents/ArticleCountComponent';

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
    <div className="sm:pb-20 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40">
      <h1 className="sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large sm:leading-normal sm:text-center lg:text-left dark:text-baSubtle">
        Health Article
      </h1>
      <p className="sm:text-bodySize sm:text-center lg:text-left lg:text-headerSix xl:text-headerFive 3xl:text-headerThree pb-7">
        Insights and infromation about STIs and Sexual Health
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
      />
      <MobileArticleComponent
        latestArticles={latestArticles}
        popularArticles={popularArticles}
      />
    </div>
  );
};

export default HealthArticleSection;
