"use client";

import { ClerkProvider, SignIn, SignOutButton } from "@clerk/nextjs";
import { JSX } from "react";

const Page = (): JSX.Element => {
  // const { signOut } = useClerk();
  // useEffect(() => {
  //   signOut();
  // }, [signOut]);

  return (
    <ClerkProvider>
      <div className="w-full min-h-screen flex items-center justify-center">
        <SignIn />
        <SignOutButton />
      </div>
    </ClerkProvider>
  );
};
export default Page;
