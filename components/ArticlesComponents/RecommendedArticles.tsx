import { articlesData } from '@/data';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import ArticleInterface from '@/interfaces/ArticleInterface';
import { convertArticleDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const RecommendedArticles = (props: Props) => {
  const {allArticles} = useBeeawareHook();

  return (
    <div className='sm:pb-14 lg:pb-24'>
      <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20 3xl:mx-40">
        Recommended Articles
      </h1>
      <div className="sm:mx-5 lg:mx-20 3xl:mx-40 grid sm:grid-cols-1 xl:grid-cols-2 gap-7">
        {allArticles
          .slice(0, 4)
          .map((article: ArticleDataInterface, index: number) => {
            return (
              <div
                key={index}
                className="flex sm:flex-col md:flex-row items-center gap-3 lg:gap-10 xl:gap-3"
              >
                <div className="rounded-xl md:w-[30%]">
                  <Image
                    width={400}
                    height={300}
                    src={article?.mainImage}
                    alt="Article Image"
                    className="object-center object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className='md:w-[65%]'>
                  <div className="flex gap-1 pb-3 pt-2">
                    <h4 className="font-ba_normal text-baPrimary 3xl:text-headerFive">
                      {article?.focus}
                    </h4>
                    <span className="font-ba_normal text-baSubtle 3xl:text-headerFive">
                      | {convertArticleDate(article?._createdAt)}
                    </span>
                  </div>
                  <h1 className="text-headerFive line-clamp-2 3xl:text-headerTwo font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline">
                    {article.title}...
                  </h1>
                  <Link
                    href={`/articles/${article?.slug.current}`}
                    className="text-baSecondary hover:font-ba_medium font-ba_normal"
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RecommendedArticles;
