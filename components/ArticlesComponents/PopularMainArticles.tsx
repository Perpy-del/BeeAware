import { articlesData } from '@/data';
import ArticleInterface from '@/interfaces/ArticleInterface';
import ArticleCardComponent from './ArticleCardComponent';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { convertArticleDate } from '@/lib/utils';

type Props = {};

const PopularMainArticles = (props: Props) => {
  const {allArticles} = useBeeawareHook();

  return (
    <>
      {/* Tablet */}
      <div className="md:grid grid-cols-2 gap-5 pb-5 sm:hidden lg:hidden mx-5 lg:mx-20">
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
      {/* Desktop/Mobile */}
      <div className="sm:flex lg:grid sm:flex-col 3xl:hidden md:hidden lg:grid-cols-3 gap-4 sm:mx-5 lg:mx-20">
        {allArticles
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
    </>
  );
};

export default PopularMainArticles;
