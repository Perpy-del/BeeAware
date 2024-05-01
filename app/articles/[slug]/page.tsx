'use client';

import ArticleBreadcrumbComponent from '@/components/BreadcrumbComponents/ArticleBreadcrumbComponent';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import { urlFor } from '@/lib/sanityImageUrl';
import { convertArticleDate } from '@/lib/utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaHeart, FaCommentDots, FaPlay } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import { CircularProgress } from '@mui/material';

type Props = {};

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  const { getSlugArticleData, allArticles } = useBeeawareHook();
  const [articleSlug, setArticleSlug] = useState<ArticleDataInterface[] | null>(
    null
  );
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCoverClick = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    getSlugArticleData(params.slug).then((data: any) =>
      setArticleSlug([...data])
    );
  }, [getSlugArticleData, params.slug]);

  const PortableTextComponent: any = {
    types: {
      image: ({ value }: { value: any }) => {
        <Image
          src={urlFor(value).url()}
          alt="Article Image"
          width={400}
          height={300}
          loading="lazy"
          className="object-cover object-center rounded-xl"
        />;
      },
    },
  };

  return (
    <div>
      {!articleSlug && (
        <div className="h-screen mx-auto flex justify-center">
          <CircularProgress size={50} />
        </div>
      )}
      {articleSlug && (
        <>
          <div className="px-5 lg:px-20 3xl:px-40">
            <div className="pb-7">
              <Image
                src={articleSlug[0]?.mainScreenImage}
                alt="Article Image"
                width={1280}
                height={520}
                className="object-center object-cover rounded-[40px]"
              />
            </div>
            <ArticleBreadcrumbComponent title={articleSlug[0]?.title} />
            <div className="md:pt-5">
              <h1 className="sm:text-headerFive lg:text-headerOne lg:leading-[50px] sm:font-ba_medium lg:font-ba_large pb-3">
                {articleSlug[0]?.title}
              </h1>
              <div className="flex justify-between pb-8 sm:flex-col md:flex-row">
                <div className="flex item-center sm:gap-5 lg:gap-20">
                  <div className="flex gap-1">
                    <h4 className="font-ba_normal sm:text-[12px] md:text-bodySize text-baPrimary dark:text-baSecondary 3xl:text-headerFive">
                      {articleSlug[0]?.focus}
                    </h4>
                    <span className="font-ba_normal sm:text-[12px] md:text-bodySize text-baSubtle 3xl:text-headerFive">
                      | {convertArticleDate(articleSlug[0]?._createdAt)}
                    </span>
                  </div>
                  <span className="font-ba_normal sm:hidden md:flex md:text-bodySize text-baSubtle 3xl:text-headerFive">
                    5 min read
                  </span>
                  <div className="flex items-center gap-5">
                      <div className="cursor-pointer hover:scale-125 ease-in-out duration-300 text-baError transition transform" onClick={() => setShowDialog(true)}>
                        <FaHeart />
                      </div>
                      <div className="cursor-pointer hover:scale-125 ease-in-out duration-300 text-baDark dark:text-baLight transition transform" onClick={() => setShowDialog(true)}>
                        <FaCommentDots />
                      </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-smallSize md:text-bodySize sm:pt-4 md:pt-0">
                  <span>Share:</span>
                    <span className="cursor-pointer hover:scale-125 ease-in-out duration-300 transition transform" onClick={() => setShowDialog(true)}>
                      <FiLink />
                    </span>
                    <span className="cursor-pointer hover:scale-125 ease-in-out duration-300 transition transform" onClick={() => setShowDialog(true)}>
                      <RiTwitterXFill />
                    </span>
                    <span className="cursor-pointer hover:scale-125 ease-in-out duration-300 transition transform" onClick={() => setShowDialog(true)}>
                      <FaFacebookF />
                    </span>
                </div>
              </div>
              <div className="flex items-center justify-between flex-col xl:flex-row gap-10 lg:gap-20 pb-8">
                <div className="">
                  <h1 className="font-ba_normal sm:text-headerSix md:text-headerFour pb-3">
                    Key Facts
                  </h1>
                  <ul className="list-decimal space-y-1 pl-6 md:text-justify">
                    {articleSlug[0]?.keyfacts.map(
                      (keyfact: string, index: number) => (
                        <li className="md:text-[18px]" key={index}>
                          {keyfact}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <div className="relative">
                    <div className="relative lg:w-[400px] lg:h-[300px]">
                      <Image
                        src={articleSlug[0]?.mainImage}
                        alt="Cover"
                        onClick={handleCoverClick}
                        className="cursor-pointer rounded-xl"
                        width={400}
                        height={300}
                      />
                      <div className='w-[400px] h-[300px] z-10 rounded-xl bg-baDark/70 absolute top-0 left-0'></div>
                      {!showVideo && (
                        <div
                          className="absolute inset-0 flex z-20 items-center justify-center md:right-[40%] lg:right-0 cursor-pointer hover:scale-125 transition transform duration-300 ease-in-out"
                          onClick={handleCoverClick}
                        >
                          <FaPlay color="#0524C9" size={40} />
                        </div>
                      )}
                    </div>
                    {showVideo && (
                      <video
                        width="400"
                        height="600"
                        autoPlay={false}
                        controls
                        className="absolute top-0 left-0 z-20 bottom-0 h-full"
                      >
                        <source
                          src={`${articleSlug[0]?.mainVideo}`}
                          type="video/mp4"
                        />
                      </video>
                    )}
                  </div>
                  <span className="pt-2 italic block md:pb-4">
                    Video By: {articleSlug[0]?.videoAuthor}
                  </span>
                  <h1 className="sm:text-[18px] md:text-headerFive md:w-[60%] w-full xl:w-full font-ba_normal">
                    {articleSlug[0]?.title}
                  </h1>
                </div>
              </div>
              <div className="pb-8">
                <h1 className="font-ba_normal sm:text-headerSix md:text-headerFour pb-3">
                  Overview
                </h1>
                <p className="md:text-[18px] md:font-ba_normal md:text-justify">
                  {articleSlug[0]?.overview}
                </p>
              </div>
              <div className="pb-8">
                <h1 className="font-ba_normal sm:text-headerSix md:text-headerFour pb-3">
                  Scope of the Problem
                </h1>
                <div className="md:text-[18px] md:font-ba_normal md:text-justify">
                  <PortableText
                    value={articleSlug[0]?.scope}
                    components={PortableTextComponent}
                  />
                </div>
              </div>
              <div className="pb-8">
                <h1 className="font-ba_normal sm:text-headerSix md:text-headerFour pb-3">
                  Main Content
                </h1>
                <div className="md:text-[18px] md:font-ba_normal md:text-justify">
                  <PortableText
                    value={articleSlug[0]?.content}
                    components={PortableTextComponent}
                  />
                </div>
              </div>
              <div className="sm:pb-6 md:pb-14">
                <h1 className="font-ba_normal sm:text-headerSix md:text-headerFour pb-3">
                  Conclusion
                </h1>
                <p className="md:text-[18px] md:font-ba_normal md:text-justify">
                  {articleSlug[0]?.conclusion}
                </p>
              </div>
              <div className="flex justify-between sm:pb-9 md:pb-14">
                <div className="flex item-center gap-20">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2  text-baDark dark:text-baLight ">
                      <FaHeart /> <span className="text-baDark dark:text-baLight">42</span>
                    </div>
                    <div className="flex items-center gap-2  text-baDark dark:text-baLight ">
                      <FaCommentDots /> <span className="text-baDark dark:text-baLight">33</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span>Share:</span>
                    <span className="cursor-pointer hover:scale-125 ease-in-out duration-300 transition transform" onClick={() => setShowDialog(true)}>
                      <FiLink />
                    </span>
                    <span className="cursor-pointer hover:scale-125 ease-in-out duration-300 transition transform" onClick={() => setShowDialog(true)}>
                      <RiTwitterXFill />
                    </span>
                    <span className="cursor-pointer hover:scale-125 ease-in-out duration-300 transition transform" onClick={() => setShowDialog(true)}>
                      <FaFacebookF />
                    </span>
                </div>
              </div>
              <div className="sm:pb-14 lg:pb-24">
                <h1 className="sm:text-headerFour lg:text-headerTwo sm:font-ba_normal lg:font-ba_large sm:pb-6 lg:pb-5">
                  Recommended Articles
                </h1>
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-7">
                  {allArticles
                    .slice(0, 2)
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
                          <div className="md:w-[65%]">
                            <div className="flex gap-1 pb-3 pt-2">
                              <h4 className="font-ba_normal text-baPrimary 3xl:text-headerFive">
                                {article?.focus}
                              </h4>
                              <span className="font-ba_normal text-baSubtle 3xl:text-headerFive">
                                | {convertArticleDate(article?._createdAt)}
                              </span>
                            </div>
                            <Link
                              href={`/articles/${article?.slug.current}`}
                              className="text-headerFive line-clamp-2 3xl:text-headerTwo font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline"
                            >
                              {article.title}...
                            </Link>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticlePage;
