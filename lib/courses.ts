  'use server'
import { readdir } from 'fs/promises'
import path from "path"

export interface Course {
  title: string
  imageUrl: string
  slug: string
}

export async function getCourses(): Promise<Course[]> {
  // Mark as server-side code

  
  const coursesDir = path.join(process.cwd(), "app/learn/courses")
  const courseFiles = await readdir(coursesDir)

  const courses = await Promise.all(
    courseFiles.map(async (file) => {
      const slug = path.parse(file).name
      const { title, imageUrl } = await import(`../app/learn/courses/${file}`).then(m => m.metadata)

      return {
        title,
        imageUrl,
        slug,
      }
    })
  )

  return courses
}