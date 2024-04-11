import SearchArticleComponent from '@/components/ArticlesComponents/SearchArticleComponent';

type Props = {};

const ArticlesPage = (props: Props) => {
  return (
    <div>
      <SearchArticleComponent />
      <div>
        <h1>Popular Articles</h1>
      </div>
    </div>
  );
};

export default ArticlesPage;
