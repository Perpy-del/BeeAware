import { articlesData } from '@/data';
import ArticleInterface from '@/interfaces/ArticleInterface';
import ArticleReadMoreComponent from './ArticleReadMoreComponent';
import PopularMainArticles from './PopularMainArticles';

type Props = {};

export const lastArticle: ArticleInterface = articlesData[articlesData.length - 1];

const PopularArticleComponent = (props: Props) => {

  return (
    <div className="sm:pb-14 lg:pb-24">
      <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20 3xl:px-20">
        Popular Articles
      </h1>
      <ArticleReadMoreComponent />
      <PopularMainArticles />
    </div>
  );
};

export default PopularArticleComponent;
