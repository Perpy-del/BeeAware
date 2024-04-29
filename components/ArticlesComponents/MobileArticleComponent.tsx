import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import ArticleCardComponent from './ArticleCardComponent';
import ArticleInterface from '@/interfaces/ArticleInterface';
import { articlesData } from '@/data';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { convertArticleDate } from '@/lib/utils';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';

type Props = {
  latestArticles: boolean;
  popularArticles: boolean;
};

const MobileArticleComponent = (props: Props) => {
  const { allArticles } = useBeeawareHook();

  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="sm:flex flex-col lg:hidden">
      {props.popularArticles && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
            {allArticles
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
          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
              {allArticles
                .slice(4)
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
          )}
          {showMore ? (
            <ButtonComponent
              variant={'primary'}
              btnText="Show Less"
              width="w-[170px]"
              onClick={() => setShowMore(false)}
            />
          ) : (
            <ButtonComponent
              variant={'primary'}
              btnText="Show More"
              width="w-[170px]"
              onClick={() => setShowMore(true)}
            />
          )}
        </>
      )}
      {props.latestArticles && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
            {allArticles
              .slice(-4)
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
          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
              {allArticles
                .slice(0, allArticles?.length - 4)
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
          )}
          {showMore ? (
            <ButtonComponent
              variant={'primary'}
              btnText="Show Less"
              width="w-[170px]"
              onClick={() => setShowMore(false)}
            />
          ) : (
            <ButtonComponent
              variant={'primary'}
              btnText="Show More"
              width="w-[170px]"
              onClick={() => setShowMore(true)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MobileArticleComponent;
