"use client";

import CoursePreview from "@/src/components/CoursePreview";
import Loading from "@/src/components/Loading";
import SignInComponent from "@/src/components/SignIn";
import SignUpComponent from "@/src/components/SignUp";
import { useCurrentCourse } from "@/src/hooks/useCurrentCourse";
import { useSearchParams } from "next/navigation"
import React from 'react'

const CheckoutDetailsPage = () => {
    const {course: selectedCourse, isLoading, isError} = useCurrentCourse();
    const searchParam = useSearchParams();
    const showSignUp = searchParam.get("showSignUp") === "true";

    if (isLoading) return <Loading />;
    if (isError) return <div>Failed to fetch data</div>
    if (!selectedCourse) return <div>Course not found</div>

  return (
    <div className="checkout-details">
        <div className="checkout-details__container">
          <div className="checkout-details__preview">
            <CoursePreview course={selectedCourse} />
          </div>

          <div className="checkout-details__auth">
            { showSignUp ? <SignUpComponent /> : <SignInComponent />}
        </div>
        
        </div>

    </div>
  )
}

export default CheckoutDetailsPage;