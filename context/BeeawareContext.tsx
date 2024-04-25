'use client';

import { ChangeEvent, createContext, useEffect, useState } from 'react';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import { auth, db } from '../app/firebase/config';
import { GoogleAuthProvider, User, signInWithPopup, confirmPasswordReset, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { loginFormSchema, signupFormSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { resetPasswordMail, sendMail } from '@/helpers/sendMail';
import { generateRandomNumberWithExpiry, isNumberExpired } from '@/lib/utils';

export const BeeawareContext = createContext<any>({});

export default function BeeawareContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [forgotPasswordLoading, setForgotPasswordLoading] =
    useState<boolean>(false);
  const [resetPasswordLoading, setResetPasswordLoading] =
    useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  const [forgotPasswordEmailNotExist, setForgotPasswordEmailNotExist] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>('');
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [forgotPasswordDialog, setForgotPasswordDialog] = useState<boolean>(false);
  const [resetPasswordDialog, setResetPasswordDialog] = useState<boolean>(false);
  const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState<boolean>(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState<boolean>(false);
  const [fiveDigitPin, setFiveDigitPin] = useState<number>(12345);
  const [numMessages, setNumMessages] = useState<number>(1);
  const router = useRouter();

  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null);
    });

    return () => unsubscribe();
  }, [setUser]);

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const validateEmail = (email: string) => {
    const emailValidate = /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;
    return emailValidate.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    return passwordValidate.test(password);
  }

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    setLoading(true);
    try {
      const validateName = (value: string) => {
        const valueValidate = /^[A-Za-z\s]*$/;
        return valueValidate.test(value);
      };

      if (!validateName(values.name)) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description:
            'Please input only letters in the name field (e.g. John Nolan), no numbers allowed (e.g. John1234)',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return;
      }

      const q = query(
        collection(db, 'users'),
        where('email', '==', values.email)
      );
      const querySnapshot = await getDocs(q);
      let accountExists = false; // Flag variable to track if account exists

      querySnapshot.forEach(doc => {
        if (doc.exists()) {
          accountExists = true;
        }
      });

      if (accountExists) {
        toast({
          variant: 'destructive',
          title: 'Account Already Exists!',
          description:
            'This account already exists. Kindly log in to your account',
          action: (
            <ToastAction
              altText="Log in"
              onClick={() => router.push('/auth/login')}
            >
              Log in
            </ToastAction>
          ),
        });
        return; // Return early if account exists
      }

      const digits = generateRandomNumberWithExpiry(600);
      setIsExpired(isNumberExpired(digits));
      setFiveDigitPin(digits?.number);

      await createUserWithEmailAndPassword(values.email, values.password);
      await addDoc(collection(db, 'users'), {
        name: values.name,
        email: values.email,
        digits: digits?.number,
      });

      const userDetails = {
        userName: values.name,
        userEmail: values.email,
        digit: digits?.number,
        expiry: digits?.expiry,
      };
      sessionStorage.setItem('user', JSON.stringify(userDetails));
      await sendMail({
        userName: values?.name,
        email: values?.email,
        digit: digits?.number,
      });
      form.reset();
      setLoading(false);
      toast({
        title: 'Sign Up Successful... 🎉',
        description: 'Please verify your account with BeeAware.',
        action: (
          <ToastAction
            altText="verify email"
            onClick={() => router.push('/auth/signup/verify-email')}
          >
            Verify Email
          </ToastAction>
        ),
        className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
      });
      router.push('/auth/signup/verify-email');
    } catch (e) {
      console.error('Error adding document: ', e, error);
      setLoading(false);
    }
  }

  async function resendMail() {
    setLoading(true);
    try {
      const digits = generateRandomNumberWithExpiry(600);
      await sendMail({
        userName: user?.displayName,
        email: user?.email,
        digit: digits?.number,
      });
      setLoading(false);
      toast({
        title: 'Pin Resent Successfully... 🎉',
        description: 'Verify Your Account.',
        className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  async function handleLoginSubmit(values: z.infer<typeof loginFormSchema>) {
    setLoginLoading(true);
    try {
      const q = query(
        collection(db, 'users'),
        where('email', '==', values.email)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        toast({
          variant: 'destructive',
          title: 'Account Does Not Exist!',
          description:
            'An account with this email does not exist. Kindly create an account to have access to BeeAware dashboard.',
          action: (
            <ToastAction
              altText="Sign up"
              onClick={() => router.push('/auth/signup')}
            >
              Sign up
            </ToastAction>
          ),
        });
        return;
      } else {
        const res = await signInWithEmailAndPassword(
          values?.email,
          values?.password
        );
        if (res === undefined) {
          setPasswordIncorrect(true);
          return;
        }
        toast({
          title: 'Log in Successful... 🎉',
          description:
            'Kindly head over to your dashboard to explore your BeeAware features.',
          action: (
            <ToastAction
              altText="Dashboard"
              onClick={() => router.push('/dashboard')}
            >
              Dashboard
            </ToastAction>
          ),
          className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
        });
        router.push('/dashboard');
      }
      loginForm.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleGoogleAuth() {
    setLoginLoading(true);
    setLoading(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    try {
      // Sign in the user with Google popup
      const result = await signInWithPopup(auth, provider);

      // Retrieve the signed-in user
      const user = result.user;

      // Check if the user exists in the database
      const q = query(
        collection(db, 'users'),
        where('email', '==', user.email)
      );
      const querySnapshot = await getDocs(q);

      // If user does not exist in the database, add the user
      if (querySnapshot.empty) {
        await addDoc(collection(db, 'users'), {
          name: user.displayName,
          email: user.email,
        });

        // Toast and route to the dashboard
        toast({
          title: 'Account Created Successfully... 🎉',
          description:
            'Kindly head over to your dashboard to explore your BeeAware features.',
          action: (
            <ToastAction
              altText="Dashboard"
              onClick={() => router.push('/dashboard')}
            >
              Dashboard
            </ToastAction>
          ),
          className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
        });
        router.push('/dashboard');
      } else {
        // User exists in the database, log in the user
        toast({
          title: 'Log in Successful... 🎉',
          description:
            'Kindly head over to your dashboard to explore your BeeAware features.',
          action: (
            <ToastAction
              altText="Dashboard"
              onClick={() => router.push('/dashboard')}
            >
              Dashboard
            </ToastAction>
          ),
          className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
        });
        router.push('/dashboard');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoginLoading(false);
    }
  }

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    const newMail = e.target.value;
    if (!validateEmail(newMail)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
    setForgotPasswordEmail(newMail);
  }

  async function handleForgotPassword() {
    setForgotPasswordLoading(true);
    try {
      const q = query(
        collection(db, 'users'),
        where('email', '==', forgotPasswordEmail)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setForgotPasswordEmailNotExist(true);
        return;
      }
      setForgotPasswordEmailNotExist(false);
      querySnapshot.forEach(async doc => {
        // console.log(doc.id, ' => ', doc.data());
        // await resetPasswordMail({ email: forgotPasswordEmail, userId: doc.id })
        sendPasswordResetEmail(auth, forgotPasswordEmail)
      });
      setForgotPasswordDialog(true);
      toast({
        title: 'Password Reset Sent Successfully... 🎉',
        description:
          'Kindly check your mail for details on how to reset your password.',
        action: (
          <ToastAction
            altText="Reset Password"
            onClick={() => router.push('/auth/login/forgot-password')}
            >
            Cancel
          </ToastAction>
        ),
        className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
      });
    } catch (error) {
      console.error(error)
    } finally {
      setForgotPasswordLoading(false);
      setForgotPasswordEmail('');
    }
  }

  function handleNewPassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    if (!validatePassword(password)) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
    setNewPassword(password);
  }

  function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    if (!validatePassword(password)) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
    setConfirmPassword(password);
  }

  async function handleResetPassword() {
    setResetPasswordLoading(true);
    try {
      if (newPassword !== confirmPassword) {
        setPasswordDoesNotMatch(true)
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      const oobCode = urlParams.get('oobCode') as string;

      await confirmPasswordReset(auth, oobCode, confirmPassword)
      setResetPasswordDialog(true);
      toast({
        title: 'Password Has been Reset Successfully... 🎉',
        description:
          'You can now log into your account with the new password.',
        action: (
          <ToastAction
            altText="Log in"
            onClick={() => router.push('/auth/login')}
            >
            Log in
          </ToastAction>
        ),
        className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
      });
    } catch (error) {
      console.error(error)
    } finally {
      setResetPasswordLoading(false);
      setPasswordDoesNotMatch(false);
      setNewPassword('')
      setConfirmPassword('')
    }

  }

  async function signOutUser() {
    try {
      await signOut(auth);
      toast({
        title: 'You have signed out of your account.',
        description:
          'You have signed out of your account. Log into your account to access your BeeAware dashboard.',
        action: (
          <ToastAction
            altText="Log in"
            onClick={() => router.push('/auth/login')}
            >
            Log in
          </ToastAction>
        ),
        className: 'bg-baSecondary dark:bg-baLight dark:text-baBody',
      });
      router.push('/auth/login')
      console.log('Signed out user');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <BeeawareContext.Provider
      value={{
        user,
        onSubmit,
        handleGoogleAuth,
        form,
        loginForm,
        loading,
        loginLoading,
        forgotPasswordLoading,
        isExpired,
        fiveDigitPin,
        resendMail,
        handleLoginSubmit,
        passwordIncorrect,
        forgotPasswordEmail,
        handleEmail,
        invalidEmail,
        handleForgotPassword,
        forgotPasswordDialog,
        forgotPasswordEmailNotExist,
        newPassword,
        confirmPassword,
        handleNewPassword,
        handleConfirmPassword,
        invalidPassword,
        passwordDoesNotMatch,
        resetPasswordLoading,
        handleResetPassword,
        resetPasswordDialog,
        numMessages,
        setNumMessages,
        signOutUser
      }}
    >
      {children}
    </BeeawareContext.Provider>
  );
}
