"use client";

import { SignUp, useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import React from "react";

const SignUpComponent = () => {
  const searchParams = useSearchParams();
  const { user } = useUser();
  const isCheckoutPage = searchParams.get("showSignUp") !== null; //not at checkout when != null
  const courseId = searchParams.get("id");

  // case 1
  const signInUrl = isCheckoutPage
    ? `/checkout?step=1&id=${courseId}&showSignUp=flase`
    : "/signup";

  // case 2
  const getRedirectUrl = () => {
    if (isCheckoutPage) {
      return `/checkout?step=2&id=${courseId}&showSignUp=flase`;
    }

    const userType = user?.publicMetadata?.userType as string;
    if (userType == "teacher") {
      return `/teacher/courses`;
    }
    return `/user/courses`;
  };

  return (
    <SignUp
      appearance={{
        elements: {
            // change button color to purple
          formButtonPrimary:
            "bg-primary-700 text-white-100 hover:bg-primary-600 !shadow-none",
        },
      }}
      signInUrl={signInUrl}
      forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl="/" // after sign out will just be landing page
    />
  );
};

export default SignUpComponent;
