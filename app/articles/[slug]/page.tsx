import { PortableText } from '@portabletext/react';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanityImageUrl';
import { getSlugData } from '@/lib/apiLibrary';
import { useEffect } from 'react';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

const Article = ({ params }: { params: { slug: string } }) => {

  useEffect(() => {
    getSlugData(params.slug);
  });

  const portableTextComponent = {
    types: {
        image: ({value}: {value: any}) => {
            <Image src={urlFor(value).url()} alt='Article Image' width={520} height={520} className='object-cover object-center' />
        }
    }
  }

  return <div>Article</div>;
};

export default Article;
