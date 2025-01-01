"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const useCheckoutNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoaded, isSignedIn } = useUser();

  const courseId = searchParams.get("id") ?? "";
  const checkoutStep = parseInt(searchParams.get("step") ?? "1", 10);

  const navigateToStep = useCallback(
    (step: number) => {
      const newStep = Math.min(Math.max(1, step), 3);
      const showSignUp = isSignedIn ? "true" : "false";

      router.push(
        `/checkout?step=${newStep}&id=${courseId}&showSignUp=${showSignUp}`, // obtain user's sign in state
        {
          scroll: false,
        }
      );
    },
    [courseId , isSignedIn, router]
  );

  // navigate user to step
  useEffect(() => {
    if (isLoaded && !isSignedIn && checkoutStep > 1) { // check if user is loaded & signed in
      navigateToStep(1);
    }
  }, [isLoaded, isSignedIn, checkoutStep, navigateToStep]);

  return { checkoutStep, navigateToStep };
};
