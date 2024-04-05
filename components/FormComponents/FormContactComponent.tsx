import React, { ChangeEvent, useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import FormContactInputComponent from './FormContactInputComponent';
import FormContactTextAreaComponent from './FormContactTextAreaComponent';

type Props = {};

const FormContactComponent = (props: Props) => {
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

    setFirstName('');
    setLastName('');
    setEmail('');
    setMoreInfo('');
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
    } else {
      localStorage.setItem(
        'userDetails',
        JSON.stringify({
          email,
          firstName,
          lastName,
          moreInfo,
        })
      );
      clearInputs();
    }
  }

  return (
    <form className="sm:w-full lg:w-[55%]" onSubmit={handleSubmitContact}>
      <div className="flex sm:flex-col sm:gap-5 lg:flex-row justify-between lg:gap-10 pb-8">
        <div className="w-full">
          <FormContactInputComponent
          placeholder="First Name"
            value={firstName}
            onChange={handleFirstName}
          />
          {isFirstNameEmpty && (
            <span className="text-baError text-smallSize pt-1 3xl:text-headerFive block">
              First name field is empty
            </span>
          )}
        </div>
        <div className="w-full">
          <FormContactInputComponent
          placeholder="Last Name"
            value={lastName}
            onChange={handleLastName}
          />
          {isLastNameEmpty && (
            <span className="text-baError text-smallSize pt-1 3xl:text-headerFive block">
              Last name field is empty
            </span>
          )}
        </div>
      </div>

      <div>
        <FormContactInputComponent placeholder='Email' value={email} onChange={handleEmail} />
        {isEmailEmpty && (
          <span className="text-baError text-smallSize pt-1 3xl:text-headerFive">
            Email field is empty
          </span>
        )}
        {isEmailNotValid && (
          <span className="text-baError text-smallSize pt-1 3xl:text-headerFive">
            Please input a valid email address e.g. (johndoe@xyz.com)
          </span>
        )}
      </div>

      <FormContactTextAreaComponent
        value={moreInfo}
        onChange={handleMoreInfo}
        isMoreInfoEmpty={isMoreInfoEmpty}
      />
      <div className="flex justify-center">
        <ButtonComponent
          variant="primary"
          btnText={'Send'}
          width={'w-[180px] 3xl:w-[250px]'}
          className="mt-11"
          type="submit"
        />
      </div>
    </form>
  );
};

export default FormContactComponent;
