"use client"
// import { signIn } from 'next-auth/react'
import CreateUser from './createuser';
import LoginButtons from './loginbuttons';
const Page = () => {


  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <a href="https://flowbite.com/" className="flex absolute top-5 left-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="CSS Generator  Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Login</span>
        </a>
        <LoginButtons />
        <CreateUser />
      </div>
    </>
  );
};

export default Page;
