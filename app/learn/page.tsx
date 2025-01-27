import { getCourses } from "@/lib/courses"
import { ClientLearningPage } from "./client-page"

export default async function LearningPage() {
  const courses = await getCourses()

  return <ClientLearningPage initialCourses={courses} />
}

