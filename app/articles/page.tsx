'use client';

import PopularArticleComponent from '@/components/ArticlesComponents/PopularArticleComponent';
import PopularTopics from '@/components/ArticlesComponents/PopularTopics';
import RecommendedArticles from '@/components/ArticlesComponents/RecommendedArticles';
import SearchArticleComponent from '@/components/ArticlesComponents/SearchArticleComponent';

type Props = {};

const ArticlesPage = (props: Props) => {
  return (
    <div id='articles'>
      <SearchArticleComponent />
      <PopularArticleComponent />

      {/* Popular Topic Section */}
      <div className="sm:pb-14 lg:pb-24">
        <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20 3xl:mx-40">
          Popular Topics
        </h1>
        <PopularTopics />
      </div>
      <RecommendedArticles />

      {/* TODO: add scroll button */}
    </div>
  );
};

export default ArticlesPage;
