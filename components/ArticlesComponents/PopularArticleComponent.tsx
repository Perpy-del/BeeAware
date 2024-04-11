import ArticleCardComponent from './ArticleCardComponent';
import { articlesData } from '@/data';
import ArticleInterface from '@/interfaces/ArticleInterface';
import Image from 'next/image';
import ArticleReadMoreComponent from './ArticleReadMoreComponent';

type Props = {};

export const lastArticle: ArticleInterface = articlesData[articlesData.length - 1];

const PopularArticleComponent = (props: Props) => {

  return (
    <div className="sm:pb-14 lg:pb-24 3xl:px-20">
      <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20">
        Popular Articles
      </h1>
      <ArticleReadMoreComponent />
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
      <div className="sm:hidden 3xl:flex gap-4 sm:mx-5 lg:mx-20">
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
    </div>
  );
};

export default PopularArticleComponent;
