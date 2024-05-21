"use server"
import { getServerSession } from "next-auth";
import {signOut} from 'next-auth/react'
import NavBar from "./navbar";

const Page = async () => {

  const session = await getServerSession()
  console.log(session.user['image']);


  return (
    <>
      <NavBar 
      userName={session.user['name']}
      userEmail={session.user['email']}
      userImg={session.user['image']}
      // signOut={signOut}
      />
    </>
  );
}

export default Page;
