import React from 'react';
import ArticleCardComponent from './ArticleCardComponent';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { convertArticleDate } from '@/lib/utils';

type Props = {
  popularArticles: boolean;
  latestArticles: boolean;
  slicedArticles: Array<ArticleDataInterface>;
};

const DesktopArticleComponent = (props: Props) => {
  return (
    <div className="sm:hidden lg:flex">
      {props.popularArticles && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between lg:gap-10 3xl:gap-14 pt-8">
          {props.slicedArticles.map(
            (article: ArticleDataInterface, index: number) => {
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
            }
          )}
        </div>
      )}
      {props.latestArticles && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 lg:gap-10 3xl:gap-14 pt-8">
          {props.slicedArticles.map(
            (article: ArticleDataInterface, index: number) => {
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
            }
          )}
        </div>
      )}
    </div>
  );
};

export default DesktopArticleComponent;
