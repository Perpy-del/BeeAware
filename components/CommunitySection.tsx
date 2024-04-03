import React from 'react';
import ButtonComponent from './ButtonComponent';

type Props = {};

const CommunitySection = (props: Props) => {
  return (
    <div className="px-20 pb-28">
      <div className="bg-baAccent p-14 rounded-[20px] flex justify-between items-center gap-20">
        <h1 className="text-headerTwo leading-[48px] text-baPrimary font-ba_large">
          Join Our Community
        </h1>
        <div>
          <h3 className='text-headerFour font-ba_normal text-baPrimary leading-9 pb-7'>
            Join our anonymous community and embark on a journey of empowerment
            through knowledge, support, and proactive sexual health education.
          </h3>
          <ButtonComponent
            btnText={'Join Our Community'}
            width={'w-[250px]'}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
