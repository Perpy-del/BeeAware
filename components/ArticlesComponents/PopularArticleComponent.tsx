import React from 'react';
import ArticleCardComponent from './ArticleCardComponent';
import { articlesData } from '@/data';
import ArticleInterface from '@/interfaces/ArticleInterface';
import Image from 'next/image';

type Props = {};

const PopularArticleComponent = (props: Props) => {
  const lastArticle: ArticleInterface = articlesData[articlesData.length - 1];

  return (
    <div className="sm:pb-14 lg:pb-24">
      <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5 sm:mx-5 lg:mx-20">
        Popular Articles
      </h1>
      <div className="flex sm:flex-col lg:flex-row sm:gap-3 lg:gap-10 sm:mx-5 lg:mx-20 pb-10">
        <Image
          src={lastArticle?.image}
          width={400}
          height={300}
          alt="Article Image"
          className="object-center object-cover rounded-xl"
          loading="lazy"
        />
        <div>
          <div className="flex gap-1 pb-3 pt-2">
            <h4 className="font-ba_normal text-baPrimary">
              {lastArticle?.focus}
            </h4>
            <span className="font-ba_normal text-baSubtle">
              | {lastArticle.date}
            </span>
          </div>
          <h1 className="text-headerFour font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline">
            {lastArticle.topic}
          </h1>
          <p className="text-smallSize font-ba_normal text-baBody dark:text-baLight leading-[22px]">
            The number of cases of sexually transmitted diseases (STDs) — now
            more commonly referred to as sexually transmitted infections (STIs)
            — in the United States hit an all-time high in 2019, according to
            data released on April 13, 2021, by the Centers for Disease Control
            and Prevention (CDC).{' '}
            <a
              href="https://www.cdc.gov/std/statistics/default.htm"
              className="text-baSecondary hover:underline"
            >
              The CDC&apos;s surveillance report
            </a>{' '}
            shows that nearly 2.5 million new cases of{' '}
            <a
              href="https://www.everydayhealth.com/gonorrhea/guide"
              className="text-baSecondary hover:underline"
            >
              gonorrhea
            </a>
            ,{' '}
            <a
              href="https://www.everydayhealth.com/syphilis/guide"
              className="text-baSecondary hover:underline"
            >
              syphilis
            </a>
            , and{' '}
            <a
              href="https://www.everydayhealth.com/chlamydia/guide"
              className="text-baSecondary hover:underline"
            >
              chlamydia
            </a>{' '}
            were reported that year .Virtually all STDs can be transmitted
            through anal, vaginal, or oral sex. In addition, some STDs can also
            be transmitted through close skin-to-skin contact, even if no
            intercourse occurs. HPV, for example, can be spread through
            skin-to-skin touching. In addition,{' '}
            <a
              href="https://www.everydayhealth.com/molluscum-contagiosum/guide/"
              className="text-baSecondary hover:underline"
            >
              “Molluscum contagiosum
            </a>
            , a viral skin disease, can be spread through sexual or casual
            contact, as can{' '}
            <a
              href="https://www.everydayhealth.com/infectious-diseases/symptoms/how-know-those-bites-are-scabies/"
              className="text-baSecondary hover:underline"
            >
              scabies
            </a>
            , an itchy skin condition caused by a mite infestation. Read More...
          </p>
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row gap-4 sm:mx-5 lg:mx-20">
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
    </div>
  );
};

export default PopularArticleComponent;
