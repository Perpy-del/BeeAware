import React from 'react'
import ArticleCardComponent from './ArticleCardComponent';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { convertArticleDate } from '@/lib/utils';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';

type Props = {}

const PopularPubertyArticles = (props: Props) => {
    const {pubertyArticles} = useBeeawareHook();
    
  return (
    <>
      {/* Tablet */}
      <div className="md:grid grid-cols-2 gap-5 pb-5 sm:hidden lg:hidden mx-5 lg:mx-20">
        {pubertyArticles
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
              />
            );
          })}
      </div>
      {/* Desktop/Mobile */}
      <div className="sm:flex lg:grid sm:flex-col 3xl:hidden md:hidden lg:grid-cols-3 gap-4 sm:mx-5 lg:mx-20">
        {pubertyArticles
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
              />
            );
          })}
      </div>
      {/* Screens larger than 2559px */}
      <div className="sm:hidden 3xl:flex gap-4 sm:mx-5 lg:mx-20 3xl:mx-40">
        {pubertyArticles
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
              />
            );
          })}
      </div>
    </>
  )
}

export default PopularPubertyArticles