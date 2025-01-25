import fs from "fs"
import path from "path"

export interface Course {
  title: string
  imageUrl: string
  slug: string
}

export function getCourses(): Course[] {
  const coursesDir = path.join(process.cwd(), "app/learn/courses")
  const courseFiles = fs.readdirSync(coursesDir)

  return courseFiles.map((file) => {
    const slug = path.parse(file).name
    const { title, imageUrl } = require(`../app/learn/courses/${file}`).metadata

    return {
      title,
      imageUrl,
      slug,
    }
  })
}

