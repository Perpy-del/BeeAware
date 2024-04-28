import Image from 'next/image';

type Props = {
  focus: string;
  date: string;
  topic: string;
  sub: string;
  image: string;
};

const ArticleCardComponent = (props: Props) => {
  return (
    <div className='lg:w-[35%]'>
      <div className="rounded-xl lg:w-[350px] lg:h-[250px] mb-2">
        <Image
          width={350}
          height={250}
          src={props.image}
          alt="Article Image"
          className="object-center object-cover rounded-xl"
          loading='lazy'
        />
      </div>
      <div className="flex gap-1 pb-3 pt-2">
        <h4 className="font-ba_normal text-baPrimary 3xl:text-headerFive">{props.focus}</h4>
        <span className="font-ba_normal text-baSubtle 3xl:text-headerFive">| {props.date}</span>
      </div>
      <h1 className="text-headerFive 3xl:text-headerTwo font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline">
        {props.topic}
      </h1>
      <p className="text-smallSize 3xl:text-headerFour font-ba_normal leading-4 text-baBody dark:text-baLight 3xl:leading-9">
        {props.sub}
      </p>
    </div>
  );
};

export default ArticleCardComponent;
