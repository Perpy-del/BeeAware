import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { CircularProgress } from '@mui/material';
import React from 'react';
import ArticleCardComponent from '../ArticlesComponents/ArticleCardComponent';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { convertArticleDate } from '@/lib/utils';

type Props = {};

const DashboardStiTopics = (props: Props) => {
  const { stiArticles } = useBeeawareHook();

  return (
    <>
      {/* Tablet */}
      <div className="md:grid grid-cols-2 gap-5 pb-5 sm:hidden lg:hidden mx-5 lg:mx-20">
        {stiArticles
          .slice(0, 4)
          .map((article: ArticleDataInterface, index: number) => {
            return (
              <ArticleCardComponent
                key={index}
                focus={article?.focus}
                date={convertArticleDate(article?._createdAt)}
                topic={article?.title}
                sub={article?.overview}
                image={article?.mainImage}
                slug={`/dashboard/articles/${article?.slug.current}`}
              />
            );
          })}
      </div>
      {/* Desktop/Mobile */}
      <div className="sm:flex lg:grid sm:flex-col 3xl:hidden md:hidden lg:grid-cols-3 gap-4 sm:mx-5 lg:mx-20">
        {stiArticles
          .slice(0, 3)
          .map((article: ArticleDataInterface, index: number) => {
            return (
              <ArticleCardComponent
                key={index}
                focus={article?.focus}
                date={convertArticleDate(article?._createdAt)}
                topic={article?.title}
                sub={article?.overview}
                image={article?.mainImage}
                slug={`/dashboard/articles/${article?.slug.current}`}
              />
            );
          })}
      </div>
      {/* Screens larger than 2559px */}
      <div className="sm:hidden 3xl:flex gap-4 sm:mx-5 lg:mx-20 3xl:mx-40">
        {stiArticles
          .slice(0, 4)
          .map((article: ArticleDataInterface, index: number) => {
            return (
              <ArticleCardComponent
                key={index}
                focus={article?.focus}
                date={convertArticleDate(article?._createdAt)}
                topic={article?.title}
                sub={article?.overview}
                image={article?.mainImage}
                slug={`/dashboard/articles/${article?.slug.current}`}
              />
            );
          })}
      </div>
    </>
  );
};

export default DashboardStiTopics;
