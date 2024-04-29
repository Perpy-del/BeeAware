import Image from 'next/image';
// import { lastArticle } from './PopularArticleComponent';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import Link from 'next/link';
import { convertArticleDate } from '@/lib/utils';

type Props = {};

const ArticleReadMoreComponent = (props: Props) => {
  const { allArticles } = useBeeawareHook();

  const lastArticle: ArticleDataInterface = allArticles[allArticles.length - 1];

  return (
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
          <span className="font-ba_normal text-baSubtle 3xl:text-headerFive">
            | {convertArticleDate(lastArticle?._createdAt)}
          </span>
        </div>
        <h1 className="text-headerFour 3xl:text-headerTwo font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline">
          {lastArticle?.title}
        </h1>
        <p className="text-smallSize 3xl:text-headerFour font-ba_normal text-baBody dark:text-baLight leading-[22px] 3xl:leading-9">
          {lastArticle?.overview}.{' '}
          <Link
            href={`/articles/${lastArticle?.slug.current}`}
            className="text-baSecondary font-ba_medium hover:underline"
          >
            Read More...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ArticleReadMoreComponent;
