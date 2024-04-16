'use client';

import ArticleCardComponent from '@/components/ArticlesComponents/ArticleCardComponent';
import PopularArticleComponent from '@/components/ArticlesComponents/PopularArticleComponent';
import PopularTopics from '@/components/ArticlesComponents/PopularTopics';
import RecommendedArticles from '@/components/ArticlesComponents/RecommendedArticles';
import SearchArticleComponent from '@/components/ArticlesComponents/SearchArticleComponent';
import ScrollButton from '@/components/ScrollButton';
import { articlesData } from '@/data';
import { useEffect, useState } from 'react';
import { ArrowLeftToLine } from 'lucide-react';
// import { getArticles } from '@/lib/apiLibrary';
import { getAllData } from '@/lib/apiLibrary';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';

export const revalidate = 60;

type Props = {};

const ArticlesPage = (props: Props) => {
  const [query, setQuery] = useState('');
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const resData = getAllData();
    resData.then(data => {
      setArticleData(data);
    });
  }, []);

  const filteredData = query
    ? articlesData.filter(data =>
        data.topic.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <div id="articles">
        <SearchArticleComponent query={query} setQuery={setQuery} />
        {filteredData.length === 0 ? (
          <PopularArticleComponent />
        ) : (
          <>
            <div
              className="sm:mx-10 lg:mx-28 3xl:mx-44 pb-10 lg:text-headerFive 3xl:text-headerThree hover:text-baSecondary flex items-center gap-2 transition-all transform duration-300 hover:scale-105 hover:font-ba_medium cursor-pointer"
              onClick={() => setQuery('')}
            >
              <ArrowLeftToLine />
              Back to Articles
            </div>
            <div className="flex flex-wrap gap-8  sm:mx-5 lg:mx-20 3xl:mx-40 pb-5 justify-center">
              {filteredData.map((article, index) => {
                return (
                  <div
                    key={index}
                    className="pb-5 w-[400px] md:w-[340px] lg:w-[400px]"
                  >
                    <ArticleCardComponent
                      focus={article?.focus}
                      date={article?.date}
                      topic={article?.topic}
                      sub={article?.sub}
                      image={article?.image}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Popular Topic Section */}
        <div className="sm:pb-14 lg:pb-24">
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
