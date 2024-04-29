import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import ArticleCardComponent from '../ArticlesComponents/ArticleCardComponent';
import Image from 'next/image';
import Link from 'next/link';
import { CircularProgress } from '@mui/material';
import { convertArticleDate } from '@/lib/utils';

type Props = {};

const DashboardPopularArticles = (props: Props) => {
  const { allArticles } = useBeeawareHook();

  const lastArticle: ArticleDataInterface = allArticles[allArticles.length - 1];

  return (
    <div className="sm:pb-4 md:pb-14 lg:pb-24">
      <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20 3xl:px-20">
        Popular Articles
      </h1>
      <div className="lg:flex sm:hidden lg:flex-row sm:mx-5 lg:mx-20 3xl:mx-40 pb-10 3xl:pb-20 lg:items-center">
        <div className="h-full lg:w-[60%] 3xl:w-[25%]">
          {lastArticle?.mainImage && (
            <Image
              src={lastArticle?.mainImage}
              width={400}
              height={300}
              alt="Article Image"
              className="object-center object-cover rounded-xl"
              loading="lazy"
            />
          )}
        </div>
        <div className="w-[100%]">
          <div className="flex gap-1 pb-3 pt-2">
            <h4 className="font-ba_normal text-baPrimary 3xl:text-headerFive">
              {lastArticle?.focus}
            </h4>
            {lastArticle && (
              <span className="font-ba_normal text-baSubtle 3xl:text-headerFive">
                | {convertArticleDate(lastArticle?._createdAt)}
              </span>
            )}
          </div>
          <Link
            href={`/dashboard/articles/${lastArticle?.slug.current}`}
            className="text-headerFour 3xl:text-headerTwo font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline"
          >
            {lastArticle?.title}
          </Link>
          {lastArticle && (
            <p className="text-smallSize 3xl:text-headerFour font-ba_normal text-baBody dark:text-baLight leading-[22px] 3xl:leading-9 z-0">
              {lastArticle?.overview}.{' '}
              <Link
                href={`/dashboard/articles/${lastArticle?.slug.current}`}
                className="text-baSecondary font-ba_medium hover:underline"
              >
                Read More...
              </Link>
            </p>
          )}
        </div>
      </div>
      <>
        {/* Tablet */}
        {allArticles.length === 0 && (
          <div className="h-screen mx-auto flex justify-center z-50">
            <CircularProgress size={50} />
          </div>
        )}
        <div className="md:grid grid-cols-2 gap-5 pb-5 sm:hidden lg:hidden mx-5 lg:mx-20">
          {allArticles.length !== 0 &&
            allArticles
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
                    slug={`/dashboard/articles/${article?.slug.current}`}
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
                  slug={`/dashboard/articles/${article?.slug.current}`}
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
                  slug={`/dashboard/articles/${article?.slug.current}`}
                />
              );
            })}
        </div>
      </>
    </div>
  );
};

export default DashboardPopularArticles;
