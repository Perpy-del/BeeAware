import {useState} from 'react';
import PopularMainArticles from './PopularMainArticles';

type Props = {};

const PopularTopics = (props: Props) => {
  const [STIs, setSTIs] = useState<boolean>(true);
  const [contraception, setContraception] = useState<boolean>(false);
  const [communication, setCommunication] = useState<boolean>(false);
  const [puberty, setPuberty] = useState<boolean>(false);
  const [intimacy, setIntimacy] = useState<boolean>(false);
  const [consent, setConsent] = useState<boolean>(false);

  function handleSTIArticlesClick() {
    setSTIs(true);
    setContraception(false);
    setCommunication(false);
    setPuberty(false);
    setIntimacy(false);
    setConsent(false);
  }

  function handleContraceptionArticlesClick() {
    setSTIs(false);
    setContraception(true);
    setCommunication(false);
    setPuberty(false);
    setIntimacy(false);
    setConsent(false);
  }
  function handleCommunicationArticlesClick() {
    setSTIs(false);
    setContraception(false);
    setCommunication(true);
    setPuberty(false);
    setIntimacy(false);
    setConsent(false);
  }
  function handlePubertyArticlesClick() {
    setSTIs(false);
    setContraception(false);
    setCommunication(false);
    setPuberty(true);
    setIntimacy(false);
    setConsent(false);
  }
  function handleIntimacyArticlesClick() {
    setSTIs(false);
    setContraception(false);
    setCommunication(false);
    setPuberty(false);
    setIntimacy(true);
    setConsent(false);
  }
  function handleConsentArticlesClick() {
    setSTIs(false);
    setContraception(false);
    setCommunication(false);
    setPuberty(false);
    setIntimacy(false);
    setConsent(true);
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 sm:mx-5 lg:mx-20 3xl:mx-40 pb-6">
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            STIs
              ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleSTIArticlesClick}
        >
          STIs
        </h3>
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            contraception
              ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleContraceptionArticlesClick}
        >
          Contraception
        </h3>
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            communication
              ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleCommunicationArticlesClick}
        >
          Communication
        </h3>
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            puberty
              ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handlePubertyArticlesClick}
        >
          Puberty
        </h3>
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            intimacy
              ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleIntimacyArticlesClick}
        >
          Intimacy
        </h3>
        <h3
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-full sm:px-4 lg:px-7 xl:px-10 py-1.5 text-smallSize border-[0.5px] border-baSubtle font-ba_normal transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-fit ${
            consent
              ? 'bg-baAccent text-slate-950 shadow-sm dark:bg-baAccent dark:text-baDark'
              : 'bg-none text-baDark dark:text-baLight'
          }`}
          onClick={handleConsentArticlesClick}
        >
          Consent
        </h3>
      </div>
      <>
        {STIs && (
          <>
            <PopularMainArticles />
          </>
        )}
        {contraception && (
          <>
            <PopularMainArticles />
          </>
        )}
        {communication && (
          <>
            <PopularMainArticles />
          </>
        )}
        {puberty && (
          <>
            <PopularMainArticles />
          </>
        )}
        {intimacy && (
          <>
            <PopularMainArticles />
          </>
        )}
        {consent && (
          <>
            <PopularMainArticles />
          </>
        )}
      </>
    </>
  );
};

export default PopularTopics;
