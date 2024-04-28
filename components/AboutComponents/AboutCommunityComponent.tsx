import ButtonComponent from '../ButtonComponent';
import { useRouter } from 'next/navigation';

type Props = {};

const AboutCommunityComponent = (props: Props) => {
  const router = useRouter();

  return (
    <div className="sm:py-14 lg:py-24 3xl:py-36 sm:px-5 lg:px-20" id='about-community'>
      <h1 className="sm:text-headerThree lg:text-headerTwo 3xl:text-headerOne text-baPrimary sm:font-ba_medium sm:leading-9 lg:leading-normal lg:font-ba_large text-center dark:text-baSecondary sm:pb-5 lg:pb-2">
        Join Our Community
      </h1>
      <p className="sm:text-headerSix lg:text-headerFive 3xl:text-headerThree font-ba_normal text-baBody dark:text-baLight text-center pb-5">
        Join the thousands of users who rely on BeeAware for accurate sexual
        health information.
      </p>
      <div className="flex justify-center">
        <ButtonComponent
          btnText={'Get Started for Free'}
          width={'sm:w-[250px] lg:w-[300px] 3xl:w-[375px]'}
          variant={'primary'}
          onClick={() => router.push('/auth/login')}
        />
      </div>
    </div>
  );
};

export default AboutCommunityComponent;
