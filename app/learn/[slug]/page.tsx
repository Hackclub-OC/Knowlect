import { notFound } from "next/navigation"
import { getCourses } from "@/lib/courses"
import dynamic from "next/dynamic"
import { AnimatePresence } from "motion/react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const courses = getCourses()
  const course = courses.find((c) => c.slug === params.slug)
  if (!course) return {}

  return {
    title: `${course.title} | Your Platform Name`,
    description: `Learn about ${course.title} in this interactive course.`,
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const courses = getCourses()
  const course = courses.find((c) => c.slug === params.slug)

  if (!course) {
    notFound()
  }

  const CourseComponent = dynamic(() => import(`../courses/${params.slug}`), {
    loading: () => <p>Loading course content...</p>,
  })

  return (
    <AnimatePresence>
        <CourseComponent />
        </AnimatePresence>
  )
}

export async function generateStaticParams() {
  const courses = getCourses()
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

