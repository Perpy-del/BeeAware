import React from 'react';
import ButtonComponent from './ButtonComponent';

type Props = {};

const CommunitySection = (props: Props) => {
  return (
    <div className="sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40">
      <div className="bg-baAccent sm:px-5 sm:py-10 lg:p-14 sm:rounded-[10px] lg:rounded-[20px] flex sm:flex-col lg:flex-row justify-between items-center sm:gap-5 lg:gap-20">
        <h1 className="sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:text-center lg:text-left sm:font-ba_medium lg:font-ba_large lg:leading-[48px] 3xl:leading-[60px] text-baPrimary font-ba_large">
          Join Our Community
        </h1>
        <div>
          <h3 className='sm:text-smallSize lg:text-headerFour font-ba_normal text-baPrimary lg:leading-9 sm:text-center lg:text-left pb-7'>
            Join our anonymous community and embark on a journey of empowerment
            through knowledge, support, and proactive sexual health education.
          </h3>
          <ButtonComponent
            btnText={'Join Our Community'}
            width={'w-[250px] 3xl:w-[340px]'}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
