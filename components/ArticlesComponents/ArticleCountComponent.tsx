import React from 'react'

type Props = {
    popularArticles: boolean;
    latestArticles: boolean;
    totalPages: number;
    currPage: number;
    handlePopularArticlesClick: () => void;
    handleLatestArticlesClick: () => void;
    onPageClick: (page: number) => void;
}

const ArticleCountComponent = (props: Props) => {
  return (
    <div className="flex justify-between">
        <div className="grid lg:w-1/3 grid-cols-2 gap-4">
          <h3
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${
              props.popularArticles
                ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
                : 'bg-none text-baDark dark:text-baLight'
            }`}
            onClick={props.handlePopularArticlesClick}
          >
            Popular Articles
          </h3>
          <h3
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${
              props.latestArticles
                ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
                : 'bg-none text-baDark dark:text-baLight'
            }`}
            onClick={props.handleLatestArticlesClick}
          >
            Latest Articles
          </h3>
        </div>
        <div className="sm:hidden lg:flex">
          <div className="w-full flex gap-3">
            {Array.from({ length: props.totalPages }, (_, index) => index + 1).map(
              (pageNumber: number, i: number) => (
                <div
                  key={i}
                  className={`${
                    props.currPage === pageNumber
                      ? 'border-[0.5px] border-baSubtle inline-flex h-fit justify-center items-center text-baBody bg-baAccent'
                      : 'border-[0.5px] border-baSubtle hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50'
                  } cursor-pointer rounded-full p-2 w-fit px-4`}
                  onClick={() => props.onPageClick(pageNumber)}
                >
                  {pageNumber}
                </div>
              )
            )}
          </div>
        </div>
      </div>
  )
}

export default ArticleCountComponent