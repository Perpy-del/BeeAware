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
    <div>
      <div className="rounded-xl">
        <Image
          width={400}
          height={300}
          src={props.image}
          alt="Article Image"
          className="object-center object-cover rounded-xl"
          loading='lazy'
        />
      </div>
      <div className="flex gap-1 pb-3 pt-2">
        <h4 className="font-ba_normal text-baPrimary">{props.focus}</h4>
        <span className="font-ba_normal text-baSubtle">| {props.date}</span>
      </div>
      <h1 className="text-headerFour font-ba_normal leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline">
        {props.topic}
      </h1>
      <p className="text-smallSize font-ba_normal leading-4 text-baBody dark:text-baLight">
        {props.sub}
      </p>
    </div>
  );
};

export default ArticleCardComponent;
