"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { LogOut } from "lucide-react"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { NeedAuth } from "@/components/needauth"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { getCourses } from "@/lib/courses"

export default function LearningPage() {
  const { isAuthenticated, user } = useKindeBrowserClient()
  const courses = getCourses()

  if (isAuthenticated) {
    return (
      <>
        <div className="min-h-[calc(100vh-64px)] bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Header userName={user?.given_name != null ? user.given_name : "Learner"} />
            <main className="mt-2">
              <h2 className="text-xl md:text-3xl mb-24">Get ahead in AI and Agentic Workflow</h2>
              <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto">
                {courses.map((course, index) => (
                  <CourseCard key={index} title={course.title} imageUrl={course.imageUrl} slug={course.slug} />
                ))}
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </>
    )
  } else {
    return <NeedAuth />
  }
}

interface HeaderProps {
  userName: string
}

function Header({ userName }: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl">Hello, {userName}!</h1>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="inline-flex items-center justify-center rounded-md text-sm font-medium 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] focus-visible:ring-offset-2"
        >
          <Button
            variant="ghost"
            className="active:border-blue-500 focus:ring-[var(--accent-color)] focus:ring-offset-2 relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-blue-400/20 sm:w-56">
          <DropdownMenuItem>
            <LogoutLink className="w-full cursor-pointer">
              <LogOut size={16} strokeWidth={2} className="opacity-60 inline mr-2" aria-hidden="true" />
              Log Out
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

interface CourseCardProps {
  title: string
  imageUrl: string
  slug: string
}

function CourseCard({ title, imageUrl, slug }: CourseCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg w-full max-w-[350px] aspect-square">
      <div className="h-full w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-between p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-primary z-10">{title}</h3>
        <Link
          href={`/learn/${slug}`}
          className="relative w-full rounded-full bg-[#EEEEEE] dark:bg-neutral-950  text-foreground hover:bg-[#EEEEEE]/90 
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2 
            active:ring-2 active:ring-blue-500 text-lg md:text-xl lg:text-3xl 
            px-4 sm:px-6 py-2 sm:py-3 h-auto z-20 text-center"
        >
          Start
        </Link>
      </div>
    </div>
  )
}

