import Image from 'next/image';
import Link from 'next/link';

type Props = {
  focus: string;
  date: string;
  topic: string;
  sub: string;
  image: string;
  slug: string;
};

const ArticleCardComponent = (props: Props) => {
  return (
    <div className='sm:pb-10 md:pb-0'>
      <div className="rounded-xl mb-2">
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
        <h4 className="font-ba_normal text-baPrimary 3xl:text-headerFive z-0">{props.focus}</h4>
        <span className="font-ba_normal text-baSubtle 3xl:text-headerFive z-0">| {props.date}</span>
      </div>
      <Link href={props.slug} className="text-headerFive 3xl:text-headerTwo font-ba_normal md:leading-9 pb-2 text-baDark dark:text-baSubtle cursor-pointer hover:underline lg:w-[95%] line-clamp-2">
        {props.topic}...
      </Link>
      <p className="text-smallSize 3xl:text-headerFour font-ba_normal leading-4 text-baBody dark:text-baLight 3xl:leading-9 md:w-[95%] line-clamp-6">
        {props.sub}...
      </p>
    </div>
  );
};

export default ArticleCardComponent;
