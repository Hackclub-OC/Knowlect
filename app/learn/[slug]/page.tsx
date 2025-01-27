import { notFound } from "next/navigation"
import { getCourse, getCourses } from "@/lib/courses"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const course = await getCourse(params.slug)

    if (!course) {
      return {
        title: "Course Not Found",
        description: "The requested course could not be found.",
      }
    }

    return {
      title: `${course.metadata.title} | Your Platform Name`,
      description: course.metadata.description,
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Error",
      description: "An error occurred while loading the course.",
    }
  }
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourse(params.slug)

  if (!course) {
    notFound()
  }

  const { default: CourseContent, metadata, slides } = course

  return <CourseContent metadata={metadata} slides={slides} />
}

export async function generateStaticParams() {
  const courses = await getCourses()
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

