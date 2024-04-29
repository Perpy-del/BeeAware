'use client';

import ArticleCardComponent from '@/components/ArticlesComponents/ArticleCardComponent';
import { CircularProgress } from '@mui/material';
import PopularTopics from '@/components/ArticlesComponents/PopularTopics';
import RecommendedArticles from '@/components/ArticlesComponents/RecommendedArticles';
import SearchArticleComponent from '@/components/ArticlesComponents/SearchArticleComponent';
import ScrollButton from '@/components/ScrollButton';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeftToLine } from 'lucide-react';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ArticleDataInterface } from '@/interfaces/ArticleDataInterface';
import Link from 'next/link';
import { convertArticleDate } from '@/lib/utils';
import DashboardQueryComponent from '@/components/DashboardComponents/DashboardQueryComponent';
import DashboardPopularArticles from '@/components/DashboardComponents/DashboardPopularArticles';
import DashboardPopularTopics from '@/components/DashboardComponents/DashboardPopularTopics';
import DashboardRecommended from '@/components/DashboardComponents/DashboardRecommended';

export const revalidate = 60;

type Props = {};

const DashboardArticlesPage = (props: Props) => {

  return (
    <>
      <div id="dash-articles">
        <DashboardQueryComponent />
        <DashboardPopularArticles />
        {/* Popular Topic Section */}
        <DashboardPopularTopics />
        <DashboardRecommended />
      </div>
      <ScrollButton sectionId={'dash-articles'} />
    </>
  );
};

export default DashboardArticlesPage;
