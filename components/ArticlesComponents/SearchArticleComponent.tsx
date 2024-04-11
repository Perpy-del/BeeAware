import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchArticleComponent = (props: Props) => {
  const [search, setSearch] = useState("")

  function handleSearchQuery (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleSubmitQuery (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    props.setQuery(search)
    setSearch("");
  }

  return (
    <div className="bg-baAccent flex flex-col justify-center items-center sm:py-[30px] sm:px-4 lg:px-[60px] 3xl:px-56 3xl:mx-40 sm:rounded-[15px] lg:rounded-[40px] sm:h-fit lg:h-[520px] 3xl:h-[600px] sm:mx-5 lg:mx-20 lg:mt-7 sm:mb-[60px] lg:mb-[100px] space-y-8">
      <h1 className="sm:text-headerThree lg:text-headerOne sm:font-ba_medium lg:font-ba_large text-baDark lg:leading-[43px] text-center">
        Find Articles On Sexual Health Education
      </h1>
      <p className="sm:text-bodySize lg:text-headerFive 3xl:text-headerThree font-ba_normal text-center text-baSubtle">
        Explore a wealth of informative articles curated by experts, empowering
        you to make informed decisions and take control of your sexual health
        journey.
      </p>
      <form className="flex sm:flex-col lg:flex-row items-center w-full gap-3 3xl:gap-10" onSubmit={handleSubmitQuery}>
        <div className="w-full bg-baLight flex items-center gap-3 pl-4 3xl:pl-8 rounded-[20px]">
          <Search color="#404040" size={20} />
          <input
            type="text"
            className="articles-input bg-baLight py-3 3xl:py-3 w-full outline-none border-none text-baDark rounded-tr-[20px] rounded-br-[20px] 3xl:text-headerThree"
            placeholder="Search for sexual health topics"
            value={search}
            onChange={handleSearchQuery}
          />
        </div>
        <Button
          type='submit'
          variant="primary"
          className="w-[158px] 3xl:w-[250px] 3xl:h-[70px] 3xl:text-headerFour"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchArticleComponent;
