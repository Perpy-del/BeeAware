'use client';

import ButtonComponent from '@/components/ButtonComponent';
import SocialsComponent from '@/components/SocialsComponent';
import React, { ChangeEvent, useState } from 'react';

type Props = {};

const ContactPage = (props: Props) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [moreInfo, setMoreInfo] = useState<string>('');
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState<boolean>(false);
  const [isLastNameEmpty, setIsLastNameEmpty] = useState<boolean>(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [isEmailNotValid, setIsEmailNotValid] = useState<boolean>(false);
  const [isMoreInfoEmpty, setIsMoreInfoEmpty] = useState<boolean>(false);

  function handleFirstName(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastName(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  const validateEmail = (email: string) => {
    const emailValidate = /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;
    return emailValidate.test(email);
  };

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleMoreInfo(e: ChangeEvent<HTMLTextAreaElement>) {
    setMoreInfo(e.target.value);
  }

  function clearInputs() {
    setIsMoreInfoEmpty(false);
    setIsEmailNotValid(false);
    setIsEmailEmpty(false);
    setIsFirstNameEmpty(false);
    setIsLastNameEmpty(false);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMoreInfo("");
  }

  function handleSubmitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!firstName) {
      setIsFirstNameEmpty(true);
    } else if (firstName && !lastName) {
      setIsLastNameEmpty(true);
      setIsFirstNameEmpty(false);
    } else if (firstName && lastName && !email) {
      setIsEmailEmpty(true);
      setIsFirstNameEmpty(false);
      setIsLastNameEmpty(false);
    } else if (firstName && lastName && email && !validateEmail(email)) {
      setIsEmailNotValid(true);
      setIsEmailEmpty(false);
      setIsFirstNameEmpty(false);
      setIsLastNameEmpty(false);
    } else if (
      firstName &&
      lastName &&
      email &&
      validateEmail(email) &&
      !moreInfo
    ) {
      setIsMoreInfoEmpty(true);
      setIsEmailNotValid(false);
      setIsEmailEmpty(false);
      setIsFirstNameEmpty(false);
      setIsLastNameEmpty(false);
    }

    clearInputs();
    localStorage.setItem(
      'userDetails',
      JSON.stringify({
        email,
        firstName,
        lastName,
        moreInfo,
      })
    );
  }

  return (
    <div className="sm:pt-10 lg:pt-14 sm:pb-14 lg:pb-24 sm:px-5 lg:pr-0 lg:pl-14 xl:pl-20 3xl:pl-40">
      <h1 className="sm:text-headerFoursm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large sm:leading-normal sm:text-center lg:text-left dark:text-baSubtle text-baDark">
        Get in Touch
      </h1>
      <p className="lg:text-headerFive font-ba_normal sm:pb-14 lg:pb-16 text-baBody dark:text-baLight">
        Send us a message! We would love to hear from you.
      </p>
      <div className="flex justify-between items-center">
        <form className="w-[55%]" onSubmit={handleSubmitContact}>
          <div className="flex justify-between gap-10 pb-8">
            <div className='w-full'>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}
                className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full"
              />
              {isFirstNameEmpty && <span className='text-baError text-smallSize pt-1 block'>First name field is empty</span>}
            </div>
            <div className='w-full'>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastName}
                className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full"
              />
              {isLastNameEmpty && <span className='text-baError text-smallSize pt-1 block'>Last name field is empty</span>}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full"
            />
            {isEmailEmpty && <span className='text-baError text-smallSize pt-1'>Email field is empty</span>}
            {isEmailNotValid && <span className='text-baError text-smallSize pt-1'>Please input a valid email address e.g. (johndoe@xyz.com)</span>}
          </div>

          <div>
            <textarea
              placeholder="I want to talk about..."
              value={moreInfo}
              onChange={handleMoreInfo}
              className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full mt-8"
              rows={5}
            />
            {isMoreInfoEmpty && (
              <span className='text-baError text-smallSize pt-1'>Please let us know what you would like</span>
            )}
          </div>
          <div className="flex justify-center">
            <ButtonComponent
              variant="primary"
              btnText={'Send'}
              width={'w-[180px]'}
              className='mt-11'
              type="submit"
            />
          </div>
        </form>

        <aside className="bg-baAccent text-baPrimary w-2/5 text-right py-14 rounded-tl-[20px] rounded-bl-[20px] space-y-10 pr-20 font-ba_normal">
          <h3 className="text-headerSix">CONTACT INFORMATION</h3>
          <h3>Email: info@beeaware.com</h3>
          <h3>Phone: +234 8124 900 0000</h3>
          <h3>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </h3>
          <SocialsComponent
            bgVariant={'bg-baPrimary'}
            color={'white'}
            className="flex justify-end items-center gap-5"
          />
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
