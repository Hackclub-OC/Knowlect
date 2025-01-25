import { notFound } from "next/navigation"
import { getCourses } from "@/lib/courses"
import dynamic from "next/dynamic"

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
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <CourseComponent />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const courses = getCourses()
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

