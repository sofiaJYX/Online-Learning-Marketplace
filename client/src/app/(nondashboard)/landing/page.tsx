"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "@/src/hooks/useCarousel";
import { Skeleton } from "@/src/components/ui/skeleton";
import { useGetCoursesQuery } from "@/src/state/api";
import { useRouter } from "next/navigation";
import CourseCardSearch from "@/src/components/CourseCardSearch";
import { useUser } from "@clerk/nextjs";

const LoadingSkeleton = () => {
    return (
        <div className="landing-skeleton">
            <div className="landing-skeleton__hero">
                <div className="landing-skeleton__hero-content">
                    <Skeleton className="landing-skeleton__title" />
                    <Skeleton className="landing-skeleton__subtitle" />
                    <Skeleton className="landing-skeleton__subtitle-secondary" />
                    <Skeleton className="landing-skeleton__button" />
                </div>
                <Skeleton className="landing-skeleton__hero-image" />
            </div>

            <div className="landing-skeleton__featured">
                <Skeleton className="landing-skeleton__featured-title" />
                <Skeleton className="landing-skeleton__featured-description" />

                <div className="landing-skeleton__tags">
                    {[1,2,3,4,5].map((_, index) => (
                        <Skeleton key={index} className="landing-skeleton__tag" />
                    ))}
                </div>

                <div className="landing-skeleton__courses">
                    {[1,2,3,4,5].map((_, index) => (
                        <Skeleton key={index} className="landing-skeleton__course-card" />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Landing = () => {
  const { user } = useUser();
  const router = useRouter();
  const currentImage = useCarousel({ totalImages: 3 });
  const {data: courses, isLoading, isError } = useGetCoursesQuery({});
  
  console.log(courses);

  const handleCourseClick = (courseId: string) => {
    router.push(`/search?id=${courseId}`, {
      scroll: false,
    })
  }
  


  if (isLoading) return <LoadingSkeleton />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__titiel">Courses</h1>
          <p className="landing__description">
            This is the list of courses you can enroll.
            <br />
            Courses when you need them and want them.
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Search for Courses</div>
            </Link>
          </div>
        </div>

        <div className="landing__hero-images">
          {/* map out the image */}
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
              className={`landing__hero-image ${
                index === currentImage ? "landing__hero-image--active" : ""
              }`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__featured"
      >
        <h2 className="landing__featured-title">Featured Courses</h2>
        <p className="landing__featured-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>

        <div className="landing__tags">
          {[
            "web development",
            "cloud computing",
            "java backend",
            "information retrieval",
          ].map((tag, index) => (
            <span key={index} className="landing__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="landing__courses">
            {/* courses here */}
            {courses &&
              courses.slice(0, 4).map((course, index) => (
                <motion.div
                key={course.courseId}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <CourseCardSearch
                    course={course}
                    onClick={() => handleCourseClick(course.courseId) }
                  />
                </motion.div>
              ))

            }
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
