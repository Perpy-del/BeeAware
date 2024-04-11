import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import ArticleCardComponent from './ArticleCardComponent';
import ArticleInterface from '@/interfaces/ArticleInterface';
import { articlesData } from '@/data';

type Props = {
  latestArticles: boolean;
  popularArticles: boolean;
};

const MobileArticleComponent = (props: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="sm:flex flex-col lg:hidden">
      {props.popularArticles && (
        <>
          <div className="flex flex-col justify-between gap-10 py-8">
            {articlesData
              .slice(0, 4)
              .map((article: ArticleInterface, index: number) => {
                return (
                  <ArticleCardComponent
                    key={index}
                    focus={article?.focus}
                    date={article?.date}
                    topic={article?.topic}
                    sub={article?.sub}
                    image={article?.image}
                  />
                );
              })}
          </div>
          {showMore && (
            <div className="flex flex-col justify-between gap-10 py-8">
              {articlesData
                .slice(4)
                .map((article: ArticleInterface, index: number) => {
                  return (
                    <ArticleCardComponent
                      key={index}
                      focus={article?.focus}
                      date={article?.date}
                      topic={article?.topic}
                      sub={article?.sub}
                      image={article?.image}
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
          <div className="flex flex-col justify-between gap-10 py-8">
            {articlesData
              .slice(0, 4)
              .map((article: ArticleInterface, index: number) => {
                return (
                  <ArticleCardComponent
                    key={index}
                    focus={article?.focus}
                    date={article?.date}
                    topic={article?.topic}
                    sub={article?.sub}
                    image={article?.image}
                  />
                );
              })}
          </div>
          {showMore && (
            <div className="flex flex-col justify-between gap-10 py-8">
              {articlesData
                .slice(4)
                .map((article: ArticleInterface, index: number) => {
                  return (
                    <ArticleCardComponent
                      key={index}
                      focus={article?.focus}
                      date={article?.date}
                      topic={article?.topic}
                      sub={article?.sub}
                      image={article?.image}
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
