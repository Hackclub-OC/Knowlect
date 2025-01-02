// // // // // 'use client'

// // // // // import { useState } from 'react'
// // // // // import Image from 'next/image'
// // // // // import { Button } from "@/components/ui/button"
// // // // // import {
// // // // //   DropdownMenu,
// // // // //   DropdownMenuContent,
// // // // //   DropdownMenuItem,
// // // // //   DropdownMenuTrigger,
// // // // // } from "@/components/ui/dropdown-menu"
// // // // // import { LayoutGrid, List } from 'lucide-react'


// // // // // export default function LearningPage() {
// // // // //   const [view, setView] = useState<'grid' | 'list'>('grid')

// // // // //   const courses = [
// // // // //     { title: "AI Fundamentals", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/0rectangle_5__1_.png" },
// // // // //     { title: "Agentic Workflows", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/1rectangle_5.png" },
// // // // //     { title: "Machine Learning", imageUrl: "/placeholder.svg?height=400&width=400" },
// // // // //   ]

// // // // //   return (
// // // // //     <div className="min-h-screen bg-background">
// // // // //       <Header userName="Soham" onViewChange={setView} />
// // // // //       <main className="container mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-16 sm:mb-20 md:mb-24 lg:mb-32">
// // // // //           Get ahead in AI and Agentic Workflow
// // // // //         </h2>
// // // // //         <div className={`grid gap-8 ${
// // // // //           view === 'grid' 
// // // // //             ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
// // // // //             : 'grid-cols-1'
// // // // //         }`}>
// // // // //           {courses.map((course, index) => (
// // // // //             <CourseCard key={index} title={course.title} imageUrl={course.imageUrl} view={view} />
// // // // //           ))}
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   )
// // // // // }



// // // // // interface HeaderProps {
// // // // //   userName: string
// // // // //   onViewChange: (view: 'grid' | 'list') => void
// // // // // }

// // // // // export function Header({ userName, onViewChange }: HeaderProps) {
// // // // //   const [view, setView] = useState<'grid' | 'list'>('grid')

// // // // //   const toggleView = () => {
// // // // //     const newView = view === 'grid' ? 'list' : 'grid'
// // // // //     setView(newView)
// // // // //     onViewChange(newView)
// // // // //   }

// // // // //   return (
// // // // //     <header className="flex justify-between items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-[#DCD9FF]">
// // // // //       <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Hello, {userName}!</h1>
// // // // //       <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
// // // // //         <Button variant="ghost" size="sm" onClick={toggleView}>
// // // // //           {view === 'grid' ? <LayoutGrid size={24} /> : <List size={24} />}
// // // // //         </Button>
// // // // //         <DropdownMenu>
// // // // //           <DropdownMenuTrigger asChild>
// // // // //             <Button variant="ghost" className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full">
// // // // //               <Image
// // // // //                 src="/placeholder.svg?height=56&width=56"
// // // // //                 alt="Profile picture"
// // // // //                 className="rounded-full"
// // // // //                 width={56}
// // // // //                 height={56}
// // // // //               />
// // // // //             </Button>
// // // // //           </DropdownMenuTrigger>
// // // // //           <DropdownMenuContent align="end" className="w-48 sm:w-56 md:w-64">
// // // // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Profile</DropdownMenuItem>
// // // // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Settings</DropdownMenuItem>
// // // // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Logout</DropdownMenuItem>
// // // // //           </DropdownMenuContent>
// // // // //         </DropdownMenu>
// // // // //       </div>
// // // // //     </header>
// // // // //   )
// // // // // }


// // // // // interface CourseCardProps {
// // // // //   title: string
// // // // //   imageUrl: string
// // // // //   view: 'grid' | 'list'
// // // // // }

// // // // // export function CourseCard({ title, imageUrl, view }: CourseCardProps) {
// // // // //   return (
// // // // //     <div className={`relative overflow-hidden rounded-3xl shadow-lg ${
// // // // //       view === 'grid' 
// // // // //         ? 'w-full aspect-square' 
// // // // //         : 'h-28 sm:h-32 md:h-36 lg:mx-10 '
// // // // //     }`}>
// // // // //       <img
// // // // //         src={imageUrl}
// // // // //         alt={title}
// // // // //         layout="fill"
// // // // //         objectFit="fit"
// // // // //         className="transition-transform duration-300 hover:scale-110"
// // // // //       />
// // // // //       <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex ${
// // // // //         view === 'list' ? 'flex-row items-center justify-between' : 'flex-col justify-between'
// // // // //       } p-4 sm:p-6`}>
// // // // //         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">{title}</h3>
// // // // //         <Button 
// // // // //           className={`rounded-full bg-[#EEEEEE] text-foreground hover:bg-[#EEEEEE]/90 text-lg sm:text-xl md:text-2xl lg:text-3xl px-6 sm:px-8 border-2 border-black
// // // // //             ${view === 'grid' ? 'py-3 sm:py-4 mt-3 sm:mt-4' : 'py-2 sm:py-3'} h-auto w-auto`}
// // // // //         >
// // // // //           Start
// // // // //         </Button>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // 'use client'

// // // // import { useState } from 'react'
// // // // import Image from 'next/image'
// // // // import { Button } from "@/components/ui/button"
// // // // import {
// // // //   DropdownMenu,
// // // //   DropdownMenuContent,
// // // //   DropdownMenuItem,
// // // //   DropdownMenuTrigger,
// // // // } from "@/components/ui/dropdown-menu"
// // // // import { LayoutGrid, List } from 'lucide-react'

// // // // export default function LearningPage() {
// // // //   const [view, setView] = useState<'grid' | 'list'>('grid')

// // // //   const courses = [
// // // //     { title: "AI Fundamentals", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/0rectangle_5__1_.png" },
// // // //     { title: "Agentic Workflows", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/1rectangle_5.png" },
// // // //     { title: "Machine Learning", imageUrl: "/placeholder.svg?height=400&width=400" },
// // // //   ]

// // // //   return (
// // // //     <div className="min-h-screen bg-background">
// // // //       <Header userName="Soham" onViewChange={setView} />
// // // //       <main className="container mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20">
// // // //           Get ahead in AI and Agentic Workflow
// // // //         </h2>
// // // //         <div className={`grid gap-6 sm:gap-8 ${
// // // //           view === 'grid' 
// // // //             ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
// // // //             : 'grid-cols-1'
// // // //         }`}>
// // // //           {courses.map((course, index) => (
// // // //             <CourseCard key={index} title={course.title} imageUrl={course.imageUrl} view={view} />
// // // //           ))}
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   )
// // // // }

// // // // interface HeaderProps {
// // // //   userName: string
// // // //   onViewChange: (view: 'grid' | 'list') => void
// // // // }

// // // // export function Header({ userName, onViewChange }: HeaderProps) {
// // // //   const [view, setView] = useState<'grid' | 'list'>('grid')

// // // //   const toggleView = () => {
// // // //     const newView = view === 'grid' ? 'list' : 'grid'
// // // //     setView(newView)
// // // //     onViewChange(newView)
// // // //   }

// // // //   return (
// // // //     <header className="flex justify-between items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
// // // //       <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Hello, {userName}!</h1>
// // // //       <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
// // // //         <Button variant="ghost" size="sm" onClick={toggleView}>
// // // //           {view === 'grid' ? <LayoutGrid size={24} /> : <List size={24} />}
// // // //         </Button>
// // // //         <DropdownMenu>
// // // //           <DropdownMenuTrigger asChild>
// // // //             <Button variant="ghost" className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full">
// // // //               <Image
// // // //                 src="/placeholder.svg?height=56&width=56"
// // // //                 alt="Profile picture"
// // // //                 className="rounded-full"
// // // //                 width={56}
// // // //                 height={56}
// // // //               />
// // // //             </Button>
// // // //           </DropdownMenuTrigger>
// // // //           <DropdownMenuContent align="end" className="w-48 sm:w-56 md:w-64">
// // // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Profile</DropdownMenuItem>
// // // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Settings</DropdownMenuItem>
// // // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Logout</DropdownMenuItem>
// // // //           </DropdownMenuContent>
// // // //         </DropdownMenu>
// // // //       </div>
// // // //     </header>
// // // //   )
// // // // }

// // // // interface CourseCardProps {
// // // //   title: string
// // // //   imageUrl: string
// // // //   view: 'grid' | 'list'
// // // // }

// // // // export function CourseCard({ title, imageUrl, view }: CourseCardProps) {
// // // //   return (
// // // //     <div className={`relative overflow-hidden rounded-3xl shadow-lg ${
// // // //       view === 'grid' 
// // // //         ? 'w-full aspect-square max-w-sm mx-auto' 
// // // //         : 'h-24 sm:h-28 md:h-32'
// // // //     }`}>
// // // //       <div className="absolute inset-0">
// // // //         <Image
// // // //           src={imageUrl}
// // // //           alt={title}
// // // //           layout="fill"
// // // //           objectFit="cover"
// // // //           className={`transition-transform duration-300 ${
// // // //             view === 'grid' ? 'scale-[3.5] origin-top' : ''
// // // //           }`}
// // // //         />
// // // //       </div>
// // // //       <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex ${
// // // //         view === 'list' ? 'flex-row items-center justify-between' : 'flex-col justify-between'
// // // //       } p-4`}>
// // // //         <h3 className="text-lg sm:text-xl md:text-2xl text-primary z-10">{title}</h3>
// // // //         <Button 
// // // //           className={`rounded-full bg-[#EEEEEE] text-foreground hover:bg-[#EEEEEE]/90 text-sm sm:text-base md:text-lg px-4 sm:px-6
// // // //             ${view === 'grid' ? 'py-2 sm:py-3' : 'py-1 sm:py-2'} h-auto w-auto z-10`}
// // // //         >
// // // //           Start
// // // //         </Button>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // 'use client'

// // // import { useState } from 'react'
// // // import Image from 'next/image'
// // // import { Button } from "@/components/ui/button"
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu"
// // // import { LayoutGrid, List } from 'lucide-react'

// // // export default function LearningPage() {
// // //   // const [view, setView] = useState<'grid' | 'list'>('grid')

// // //   const courses = [
// // //     { title: "AI Fundamentals", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/0rectangle_5__1_.png" },
// // //     { title: "Agentic Workflows", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/1rectangle_5.png" },
// // //     { title: "Machine Learning", imageUrl: "/placeholder.svg?height=400&width=400" },
// // //   ]

// // //   return (
// // //     <div className="min-h-screen bg-background">
// // //       <Header userName="Soham" />
// // //       <main className="container mx-auto px-4 sm:px-6 lg:px-8">
// // //         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20">
// // //           Get ahead in AI and Agentic Workflow
// // //         </h2>
// // //         <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
// // //           {courses.map((course, index) => (
// // //             <CourseCard key={index} title={course.title} imageUrl={course.imageUrl} />
// // //           ))}
// // //         </div>
// // //       </main>
// // //     </div>
// // //   )
// // // }

// // // interface HeaderProps {
// // //   userName: string
// // //   // onViewChange: (view: 'grid' | 'list') => void
// // // }

// // // export function Header({ userName }: HeaderProps) {
// // //   // const [view, setView] = useState<'grid' | 'list'>('grid')

// // //   // const toggleView = () => {
// // //   //   const newView = view === 'grid' ? 'list' : 'grid'
// // //   //   setView(newView)
// // //   //   onViewChange(newView)
// // //   // }

// // //   return (
// // //     <header className="flex justify-between items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
// // //       <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Hello, {userName}!</h1>
// // //       <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
// // //         {/* <Button variant="ghost" size="sm" onClick={toggleView}>
// // //           {view === 'grid' ? <LayoutGrid size={24} /> : <List size={24} />}
// // //         </Button> */}
// // //         <DropdownMenu>
// // //           <DropdownMenuTrigger asChild>
// // //             <Button variant="ghost" className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full">
// // //               <Image
// // //                 src="/placeholder.svg?height=56&width=56"
// // //                 alt="Profile picture"
// // //                 className="rounded-full"
// // //                 width={56}
// // //                 height={56}
// // //               />
// // //             </Button>
// // //           </DropdownMenuTrigger>
// // //           <DropdownMenuContent align="end" className="w-48 sm:w-56 md:w-64">
// // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Profile</DropdownMenuItem>
// // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Settings</DropdownMenuItem>
// // //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Logout</DropdownMenuItem>
// // //           </DropdownMenuContent>
// // //         </DropdownMenu>
// // //       </div>
// // //     </header>
// // //   )
// // // }

// // // interface CourseCardProps {
// // //   title: string
// // //   imageUrl: string
// // //   // view: 'grid' | 'list'
// // // }

// // // export function CourseCard({ title, imageUrl }: CourseCardProps) {
// // //   return (
// // //     <div className="relative overflow-hidden rounded-3xl shadow-lg w-full aspect-square max-w-sm mx-auto">
// // //       <div className="absolute inset-0">
// // //         <Image
// // //           src={imageUrl}
// // //           alt={title}
// // //           layout="fill"
// // //           objectFit="cover"
// // //           className={`transition-transform duration-300 scale-[3.5] origin-top`}
// // //         />
// // //       </div>
// // //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-between p-4">
// // //         <h3 className="text-lg sm:text-xl md:text-2xl text-primary z-10">{title}</h3>
// // //         <Button 
// // //           className="rounded-full bg-[#EEEEEE] text-foreground hover:bg-[#EEEEEE]/90 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 h-auto w-auto z-10"
// // //         >
// // //           Start
// // //         </Button>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // 'use client'

// // import { useState } from 'react'
// // import Image from 'next/image'
// // import { Button } from "@/components/ui/button"
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"
// // import { LayoutGrid, List } from 'lucide-react'

// // export default function LearningPage() {
// //   const courses = [
// //     { title: "AI Fundamentals", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/0rectangle_5__1_.png" },
// //     { title: "Agentic Workflows", imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/1rectangle_5.png" },
// //     { title: "Machine Learning", imageUrl: "/placeholder.svg?height=400&width=400" },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-background">
// //       <Header userName="Soham" />
// //       <main className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20">
// //           Get ahead in AI and Agentic Workflow
// //         </h2>
// //         <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
// //           {courses.map((course, index) => (
// //             <CourseCard key={index} title={course.title} imageUrl={course.imageUrl} />
// //           ))}
// //         </div>
// //       </main>
// //     </div>
// //   )
// // }

// // interface HeaderProps {
// //   userName: string
// // }

// // export function Header({ userName }: HeaderProps) {
// //   return (
// //     <header className="flex justify-between items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
// //       <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Hello, {userName}!</h1>
// //       <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
// //         <DropdownMenu>
// //           <DropdownMenuTrigger asChild>
// //             <Button variant="ghost" className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full">
// //               <Image
// //                 src="/placeholder.svg?height=56&width=56"
// //                 alt="Profile picture"
// //                 className="rounded-full"
// //                 width={56}
// //                 height={56}
// //               />
// //             </Button>
// //           </DropdownMenuTrigger>
// //           <DropdownMenuContent align="end" className="w-48 sm:w-56 md:w-64">
// //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Profile</DropdownMenuItem>
// //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Settings</DropdownMenuItem>
// //             <DropdownMenuItem className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Logout</DropdownMenuItem>
// //           </DropdownMenuContent>
// //         </DropdownMenu>
// //       </div>
// //     </header>
// //   )
// // }

// // interface CourseCardProps {
// //   title: string
// //   imageUrl: string
// // }

// // export function CourseCard({ title, imageUrl }: CourseCardProps) {
// //   return (
// //     <div className="relative overflow-hidden rounded-3xl shadow-lg group">
// //       <div className="aspect-square">
// //         <Image
// //           src={imageUrl}
// //           alt={title}
// //           layout="fill"
// //           objectFit="cover"
// //           className="transition-transform duration-300 group-hover:scale-105"
// //         />
// //       </div>
// //       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-between p-4 sm:p-6">
// //         <h3 className="text-xl sm:text-2xl md:text-3xl text-primary z-10 font-semibold">{title}</h3>
// //         <Button 
// //           className="w-full rounded-full bg-[#EEEEEE] text-foreground hover:bg-[#EEEEEE]/90 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 py-2 sm:py-3 h-auto z-10 transition-transform duration-300 group-hover:scale-105"
// //         >
// //           Start
// //         </Button>
// //       </div>
// //     </div>
// //   )
// // }

// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export default function LearningPage() {
//   const courses = [
//     { 
//       title: "AI Fundamentals", 
//       imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/0rectangle_5__1_.png" 
//     },
//     { 
//       title: "Agentic Workflows", 
//       imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/1rectangle_5.png" 
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <Header userName="Soham" />
//         <main className="mt-12">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12">
//             Get ahead in AI and Agentic Workflow
//           </h2>
//           <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto">
//             {courses.map((course, index) => (
//               <CourseCard key={index} title={course.title} imageUrl={course.imageUrl} />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// interface HeaderProps {
//   userName: string
// }

// export function Header({ userName }: HeaderProps) {
//   return (
//     <header className="flex justify-between items-center">
//       <h1 className="text-2xl sm:text-3xl md:text-4xl">Hello, {userName}!</h1>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-48 sm:w-56">
//           <DropdownMenuItem className="text-sm sm:text-base py-2 sm:py-3">Profile</DropdownMenuItem>
//           <DropdownMenuItem className="text-sm sm:text-base py-2 sm:py-3">Settings</DropdownMenuItem>
//           <DropdownMenuItem className="text-sm sm:text-base py-2 sm:py-3">Logout</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </header>
//   )
// }

// interface CourseCardProps {
//   title: string
//   imageUrl: string
// }

// export function CourseCard({ title, imageUrl }: CourseCardProps) {
//   return (
//     <div className="relative overflow-hidden rounded-3xl shadow-lg group">
//       <div className="aspect-square">
//         <Image
//           src={imageUrl}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-between p-4 sm:p-6">
//         <h3 className="text-xl sm:text-2xl md:text-3xl text-primary z-10">{title}</h3>
//         <Button 
//           className="w-full rounded-full bg-[#EEEEEE] text-foreground hover:bg-[#EEEEEE]/90 text-base sm:text-lg md:text-xl px-4 sm:px-6 py-2 sm:py-3 h-auto z-10 transition-transform duration-300 group-hover:scale-105"
//         >
//           Start
//         </Button>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LearningPage() {
  const courses = [
    { 
      title: "AI Fundamentals", 
      imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/0rectangle_5__1_.png" 
    },
    { 
      title: "Agentic Workflows", 
      imageUrl: "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/1rectangle_5.png" 
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header userName="Soham" />
        <main className="mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-24">
            Get ahead in AI and Agentic Workflow
          </h2>
          <div className="grid gap-16 sm:gap-24 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <CourseCard 
                key={index} 
                title={course.title} 
                imageUrl={course.imageUrl}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

interface HeaderProps {
  userName: string
}

export function Header({ userName }: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl">Hello, {userName}!</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 sm:w-56">
          <DropdownMenuItem className="text-sm sm:text-base py-2 sm:py-3">Profile</DropdownMenuItem>
          <DropdownMenuItem className="text-sm sm:text-base py-2 sm:py-3">Settings</DropdownMenuItem>
          <DropdownMenuItem className="text-sm sm:text-base py-2 sm:py-3">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

interface CourseCardProps {
  title: string
  imageUrl: string
}

export function CourseCard({ title, imageUrl }: CourseCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg group">
      <div className="aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-between p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-primary z-10">{title}</h3>
        <Button 
          className="w-full rounded-full bg-[#EEEEEE] text-foreground hover:bg-[#EEEEEE]/90 text-base sm:text-lg md:text-xl px-4 sm:px-6 py-2 sm:py-3 h-auto z-10 transition-transform duration-300 group-hover:scale-105"
        >
          Start
        </Button>
      </div>
    </div>
  )
}

