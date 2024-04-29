import React, { useState } from 'react';
import SearchArticleComponent from '../ArticlesComponents/SearchArticleComponent';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { ArrowLeftToLine } from 'lucide-react';
import ArticleCardComponent from '../ArticlesComponents/ArticleCardComponent';

type Props = {};

const DashboardQueryComponent = (props: Props) => {
  const [query, setQuery] = useState('');
  const { allArticles } = useBeeawareHook();

  const filteredData = query
    ? allArticles.filter((data: ArticleDataInterface) =>
        data.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
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
          <h1 className="text-headerThree font-ba_medium mx-auto text-center pb-3">
            🙁😦😦
          </h1>
          <span className="block italic sm:text-headerSix lg:text-headerFour text-center pb-10">
            There are currently no articles on this topic &apos;{query}&apos;
          </span>
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
          <h1 className="italic sm:text-headerSix lg:text-headerFour text-center pb-10">
            Articles on &apos;{query}&apos;
          </h1>
          <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-8 sm:mx-5 lg:mx-20 3xl:mx-40 pb-5 justify-center">
            {filteredData.map(
              (article: ArticleDataInterface, index: number) => {
                return (
                  <div key={index} className="pb-5">
                    <ArticleCardComponent
                      focus={article?.focus}
                      date={article?._createdAt}
                      topic={article?.title}
                      sub={article?.overview}
                      image={article?.mainImage}
                      slug={`/dashboard/articles/${article?.slug.current}`}
                    />
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </>
  );
};

export default DashboardQueryComponent;
