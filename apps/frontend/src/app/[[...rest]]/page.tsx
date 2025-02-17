import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <SignedIn>
        <SignOutButton />
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Home;
