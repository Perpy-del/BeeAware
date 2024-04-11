import React from 'react';
import ArticleCardComponent from './ArticleCardComponent';
import ArticleInterface from '@/interfaces/ArticleInterface';

type Props = {
  popularArticles: boolean;
  latestArticles: boolean;
  slicedArticles: Array<ArticleInterface>;
};

const DesktopArticleComponent = (props: Props) => {
  return (
    <div className="sm:hidden lg:flex">
      {props.popularArticles && (
        <div className="flex justify-between gap-10 3xl:gap-14 pt-8">
          {props.slicedArticles.map(
            (article: ArticleInterface, index: number) => {
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
            }
          )}
        </div>
      )}
      {props.latestArticles && (
        <div className="flex justify-between gap-10 pt-8">
          {props.slicedArticles.map(
            (article: ArticleInterface, index: number) => {
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
            }
          )}
        </div>
      )}
    </div>
  );
};

export default DesktopArticleComponent;
