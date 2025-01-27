export interface Course {
  slug: string
  title: string
  description: string
  imageUrl: string
}

// Instead of reading from filesystem, we'll maintain a registry of courses
const courseRegistry = {
  doubloons: () => import("../app/learn/courses/doubloons"),
  // "ai-agents": () => import("../app/learn/courses/ai-agents"),
  // "rag-workflows": () => import("../app/learn/courses/rag-workflows"),
}

export async function getCourses(): Promise<Course[]> {
  const courses: Course[] = []

  for (const [slug, importFn] of Object.entries(courseRegistry)) {
    try {
      const module = await importFn()
      const { metadata } = module

      courses.push({
        slug,
        title: metadata.title,
        description: metadata.description,
        imageUrl: metadata.imageUrl,
      })
    } catch (error) {
      console.error(`Error loading course ${slug}:`, error)
    }
  }

  return courses
}

export async function getCourse(slug: string) {
  const importFn = courseRegistry[slug]
  if (!importFn) return null

  try {
    const module = await importFn()
    return module
  } catch (error) {
    console.error(`Error loading course ${slug}:`, error)
    return null
  }
}

