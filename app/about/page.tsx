import React from "react";
import ButtonComponent from "../../components/ButtonComponent";

type Props = {};

const about = (props: Props) => {
  return (
    <>
    <div className="flex justify-center bg-no-repeat bg-[url('/aboutimg.jpg')] mx-8">
      <div className="w-[1280px] h-[576px] top-[111px] left-[1345px] rounded-[30px] ">
        <div className="w-[343px] h-[70px] top-[88px] left-[64px] ">
          <h1 className="font-work-sans font-extrabold text-4xl text-[50px] leading-[70px] tracking-[0.25px] text-white m-8 mt-16">
            ABOUT US
          </h1>
        </div>

        <div className="w-[876px] h-[144px] top-[327px] left-[129px] m-8">
          <h4 className="font-work-sans font-bold text-lg leading-[36px] text-white">
            BeeAware is a Nigerian healthcare company dedicated to modernizing
            healthcare access through innovative digital solutions. We provide a
            seamless and reliable Service that empowers individuals to take
            control of their well-being.
          </h4>
          <ButtonComponent
            btnText={"Explore Communities"}
            width="w-[214px]"
            variant={"primary"}
          />
        </div>
      </div>
      </div>

      <div className="flex justify-around top-768px  mx-10 my-20">
        <div>
          <h1 className="">3K+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <div>
          <h1>150+</h1>
          <p>PROFESSIONAL DOCTORS</p>
        </div>
        <div>
          <h1>15K+</h1>
          <p>INFORMATIVE ARTICLES</p>
        </div>
      </div>


      
      <div className="flex w-1440px h-832px top-995px bg-baAccent">
        <div className="m-10 bg-[url('/aboutpic.jpg')]"></div>
        <div>
          <div>
            <p className="text-black">Pioneering Digital Healthcare Solutions for Sexual Wellness</p>
          </div>
          <div>
            <p className="text-black">A Leading Force In Championing Sexual Healthcare In Nigeria.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
