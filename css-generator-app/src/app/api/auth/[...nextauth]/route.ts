import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import { signIn } from "next-auth/react";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  pages:{
    signIn: "/pages/login"
  }

});

export { handler as GET, handler as POST };