import React from 'react';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-{100vh} ">
      <div className="w-96 p-6 border-2">
        <h1 className="text-center text-baPrimary">Welcome Back</h1>
        <p className="text-center text-baPrimary">
          Kindly login to your account to continue.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="Email" className=" block">
              Email
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Email"
              className=""
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              aria-placeholder="********"
              id="password"
              className=""
            />
            <h6>Forgot password?</h6>
          </div>

          <button
            type="submit"
            className="w-full bg-baPrimary text-white py-2 px-4 rounded-md"
          >
            Sign up
          </button>
          <h6>
            Don&apos;t have an account?{' '}
            <span className="text-blue">Create one here</span>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
