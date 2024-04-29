'use client';

import ArticleCardComponent from '@/components/ArticlesComponents/ArticleCardComponent';
import PopularArticleComponent from '@/components/ArticlesComponents/PopularArticleComponent';
import PopularTopics from '@/components/ArticlesComponents/PopularTopics';
import RecommendedArticles from '@/components/ArticlesComponents/RecommendedArticles';
import SearchArticleComponent from '@/components/ArticlesComponents/SearchArticleComponent';
import ScrollButton from '@/components/ScrollButton';
// import { articlesData } from '@/data';
import { useState } from 'react';
import { ArrowLeftToLine } from 'lucide-react';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';

export const revalidate = 60;

type Props = {};

const ArticlesPage = (props: Props) => {
  const {allArticles} = useBeeawareHook();

  const [query, setQuery] = useState('');

  const filteredData = query
    ? allArticles.filter((data: ArticleDataInterface) =>
        data.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];


  return (
    <>
      <div id="articles">
        <SearchArticleComponent query={query} setQuery={setQuery} />
        {query && filteredData.length === 0 && (
          <>
          <div
              className="sm:mx-10 lg:mx-28 3xl:mx-44 pb-10 lg:text-headerFive 3xl:text-headerThree hover:text-baSecondary flex items-center gap-2 transition-all transform duration-300 hover:scale-105 hover:font-ba_medium cursor-pointer"
              onClick={() => setQuery('')}
            >
              <ArrowLeftToLine />
              Back to Articles
            </div>
            <h1 className='text-headerThree font-ba_medium mx-auto text-center pb-3'>🙁😦😦</h1>
            <span className='block italic sm:text-headerSix lg:text-headerFour text-center pb-10'>There are currently no articles on this topic &apos;{query}&apos;</span>
          </>
        )}
        {query && filteredData.length !== 0 && (
          <>
            <div
              className="sm:mx-10 lg:mx-28 3xl:mx-44 pb-10 lg:text-headerFive 3xl:text-headerThree hover:text-baSecondary flex items-center gap-2 transition-all transform duration-300 hover:scale-105 hover:font-ba_medium cursor-pointer"
              onClick={() => setQuery('')}
            >
              <ArrowLeftToLine />
              Back to Articles
            </div>
            <h1 className='italic sm:text-headerSix lg:text-headerFour text-center pb-10'>Articles on &apos;{query}&apos;</h1>
            <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-8 sm:mx-5 lg:mx-20 3xl:mx-40 pb-5 justify-center">
              {filteredData.map((article: ArticleDataInterface, index: number) => {
                return (
                  <div
                    key={index}
                    className="pb-5"
                  >
                    <ArticleCardComponent
                      focus={article?.focus}
                      date={article?._createdAt}
                      topic={article?.title}
                      sub={article?.overview}
                      image={article?.mainImage}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
        <PopularArticleComponent />
        {/* Popular Topic Section */}
        <div className="sm:pb-6 md:pb-14 lg:pb-24">
          <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20 3xl:mx-40">
            Popular Topics
          </h1>
          <PopularTopics />
        </div>
        <RecommendedArticles />
      </div>
      <ScrollButton sectionId={'articles'} />
    </>
  );
};

export default ArticlesPage;
