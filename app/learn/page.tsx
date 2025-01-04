import Image from "next/image";
import { Button } from "@/components/ui/button";
import {Button as AuthLinkButton} from "@/components/core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink, LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function LearningPage() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();


  const user = await getUser();

  const courses = [
    {
      title: "AI Agents ",
      imageUrl:
        "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/0rectangle_5__1_.png",
    },
    {
      title: "RAG Workflows",
      imageUrl:
        "https://cloud-29vkp3oc1-hack-club-bot.vercel.app/1rectangle_5.png",
    },  ];

  if (isUserAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Header userName={user.given_name ?? "Learner" } />
          <main className="mt-12">
            <h2 className="text-xl md:text-3xl mb-24">
              Get ahead in AI and Agentic Workflow
            </h2>
            <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto">
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
    );
  } else {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h2 className="mt-6 text-3xl text-primary">
            Authentication Required
          </h2>
          <p className="mt-2 text-2xl italic text-muted-foreground">
            Please Log In or Sign Up to access the learning content.
          </p>
          <div className="mt-6 space-y-4">
            <LoginLink className="">
              <AuthLinkButton size="large" variant="outline" className="w-[200px] ">Log In</AuthLinkButton>
            </LoginLink>
            <RegisterLink className="">
              <AuthLinkButton size="large" variant="gradient" className="w-[200px] sm:ml-10 mt-10">Sign Up</AuthLinkButton>
            </RegisterLink>
          </div>
        </div>
      </div>
    );
  }
}


interface HeaderProps {
  userName: string;
}

function Header({ userName }: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl">Hello, {userName}!</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="active:border-blue-500 relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 rounded-xl shadow-blue-400/20 sm:w-56"
        >
          <DropdownMenuItem>
            <LogoutLink className="inline">
              <LogOut
                size={16}
                strokeWidth={2}
                className="opacity-60 inline mr-2"
                aria-hidden="true"
              />
              Log Out
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

interface CourseCardProps {
  title: string;
  imageUrl: string;
}

function CourseCard({ title, imageUrl }: CourseCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg w-full max-w-[350px] aspect-square">
      <div className="h-full w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-between p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-primary z-10">
          {title}
        </h3>
        <Button className="w-full rounded-full bg-[#EEEEEE] text-foreground hover:bg-[#EEEEEE]/90 active:ring-2 active:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg md:text-xl lg:text-3xl px-4 sm:px-6 py-2 sm:py-3 h-auto z-10">
          Start
        </Button>
      </div>
    </div>
  );
}
