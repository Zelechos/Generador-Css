"use server"
import { getServerSession } from "next-auth";
import NavBar from "./navbar";

const Page = async () => {
  const session = await getServerSession()

  return (
    <>
      <NavBar
        userName={session.user['name']}
        userEmail={session.user['email']}
        userImg={session.user['image']}
      />
    </>
  );
}

export default Page;
