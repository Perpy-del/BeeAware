import PopularArticleComponent from '@/components/ArticlesComponents/PopularArticleComponent';
import SearchArticleComponent from '@/components/ArticlesComponents/SearchArticleComponent';

type Props = {};

const ArticlesPage = (props: Props) => {

  return (
    <div>
      <SearchArticleComponent />
      <PopularArticleComponent />
    </div>
  );
};

export default ArticlesPage;
