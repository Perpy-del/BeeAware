'use client';

import PopularArticleComponent from '@/components/ArticlesComponents/PopularArticleComponent';
import PopularMainArticles from '@/components/ArticlesComponents/PopularMainArticles';
import PopularTopics from '@/components/ArticlesComponents/PopularTopics';
import SearchArticleComponent from '@/components/ArticlesComponents/SearchArticleComponent';
import { articleTopicsData } from '@/data';
import { useState } from 'react';

type Props = {};

const ArticlesPage = (props: Props) => {
  return (
    <div>
      <SearchArticleComponent />
      <PopularArticleComponent />

      {/* Popular Topic Section */}
      <div className="sm:pb-14 lg:pb-24">
        <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20 3xl:mx-40">
          Popular Topics
        </h1>
        <PopularTopics />
      </div>
    </div>
  );
};

export default ArticlesPage;
