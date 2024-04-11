import { articlesData } from '@/data';
import ArticleInterface from '@/interfaces/ArticleInterface';
import ArticleCardComponent from './ArticleCardComponent';

type Props = {};

const PopularMainArticles = (props: Props) => {
  return (
    <>
      {/* Tablet */}
      <div className="md:grid grid-cols-2 sm:hidden lg:hidden gap-4 sm:mx-5 lg:mx-20">
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
      {/* Desktop */}
      <div className="sm:flex lg:flex sm:flex-col 3xl:hidden md:hidden lg:flex-row gap-4 sm:mx-5 lg:mx-20">
        {articlesData
          .slice(0, 3)
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
      {/* Screens larger than 2559px */}
      <div className="sm:hidden 3xl:flex gap-4 sm:mx-5 lg:mx-20 3xl:mx-40">
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
    </>
  );
};

export default PopularMainArticles;
