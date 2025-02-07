// "use client"
// import { Definition } from "@/components/definition"
// import { Button } from "@/components/ui/button"
// import { Inter } from "next/font/google"
// import Markdown from "react-markdown"
// import { useState } from "react"
// import { Progress } from "@/components/ui/progress"
// import Image from "next/image"
// import Allergies from "@/components/allergies"
// import Safety from "@/components/safety"
// import Video from "next-video"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Doubloons Explained",
//   imageUrl: "/doubloons-cover.jpg",
// }


"use client"

const slides = [
  {
    title: (
      <>
        Doubloons Explained{" "}
        <Image
          className="inline"
          src="https://highseas.hackclub.com/doubloon.svg"
          width={40}
          height={40}
          alt="Doubloon"
        />
      </>
    ),
    description: `Welcome! This is an interactive website on doubloons. In this website you'll:
* Learn What Doubloons Are.
* Learn how can you earn Doubloons.
* What are pro's and con's of creating a project.
* Does more time equals more Doubloons ?.
* And more!

**Press the Start button to begin!**`,
    component: (
      <div className="dark:bg-white p-10 rounded-lg">
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Text that says 'Doubloons Explained' and under it a copyright for OC 2024"
        className="motion-preset-blur-right motion-duration-1000"
      />
      </div>
    ),
  },
  {
    title: "Definition",
    description: `Let's first start by defining what a Doubloon is. 
* In simple terms, a doubloon is a gold coin which was used for payment in the Spanish Empire.
* But why is it used in high seas (hackclub event) ?
* And how can you earn it?
* Let's find out!`,
    component: (
      <Definition
        term="Doubloons"
        definition=" The doubloon was a two-escudo Spanish gold coin worth approximately $4  or 32 reales, and weighing 6.766 grams of 22-karat gold. "
      />
    ),
  },
  {
    title: "Using Doubloons in High Seas",
    description: `At the start of the [High Seas](https://highseas.hackclub.com), we started looking for some digital currency to pay for our projects. 
* As the complete high seas is **Pirate themed** as we sail ships and get paid, we thought that a coin would be a good idea.
  * Then as a result we started looking for a something that can be used.  
* If you have seen the [Pirates of the Caribbean](https://en.wikipedia.org/wiki/Pirates_of_the_Caribbean_(film_series)) Gold Coins (Doubloons then) were used. 
  * The currency that was used is Doubloons and we started using it in High Seas.`,
    component: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ORnJFIxEeHQ?autoplay=1&controls=0&disablekb=1&fs=0&color=white&modestbranding=1"
        allow="autoplay; encrypted-media"
        className="rounded-lg motion-preset-blur-right motion-duration-1000"
      />
    ),
  },
  {
    title: "A little info about Doubloons",                            
    description: `You can read more about the image [by clicking here](https://www.vocabulary.com/dictionary/doubloon).

**So how can you earn them in high seas?**`,
    component: (
      <Image
        src="/info.png"
        width={700}
        height={600}
        alt="Text that says 'information about doubloons' and under it a copyright for OC 2024"
        className="rounded-lg motion-preset-blur-right motion-duration-1000"
      />
    ),
  },
  {
    title: "How to earn Doubloons in High ? ",
    description: `To earn doubloons the rule is simple **Create and Ship projects**.

* You need to code something awesome while tracking the time you spend coding.
* After that ship it on the [High Seas website](https://highseas.hackclub.com). 
* Your project then will go into battles and peers will vote for or against it.
* Your project will get doubloons based on the votes it gets ranging from **5 to 27 doubloons per hour of your work**.

***So does more hours  equals more doubloons ?***`,
    component: (
      <Image
        src="/ship.png"
        width={600}
        height={600}
        alt="Text that says 'information about doubloons' and under it a copyright for OC 2024"
        className="rounded-3xl motion-preset-blur-right motion-duration-1000"
      />
    ),
  },
  {
    title: "Does more hours equals more Doubloons ?",
    description: `Now you know how you get doubloons you might think that more hours equals more doubloons. 
    
Here's **a little proof of why that is not true**.
  
    Let's say you spend 10 hours coding but the tracker only tracked
    for 5 hours of your work. So now your project will go in the 
    wonderdome and it will go against project with similar time. Next
    as peers will start voting for your project our project will 
    perform well than other projects.

    So in this case you will get more doubloons than you would have 
    due to the positive numbers of votes your project has got.

Is the condition also true for reverse situations?`,
    component: <Safety />,
  },
  {
    title: "Is the condition also true for reverse situations?",
    description: `Yes, It is also true for reverse situations.
    
    Let's say you spend 5 hours coding but you have additionally selected 
    another project you have worked on before. So the total time you have 
    for the project is 10 hours (while you have only spent 5 hours). 
    
    Now as your project will go into the wonderdome it will get fewer 
    votes as it will be against the project with 10 hours of coding and
    your project only has 5 hours of codework. 
    
    This will result in less votes for your project and as a result 
    less doubloons. 

Beside is a image of doubloons [Hridya Agrawal](https://github.com/hridaya423) got for 2 of his projects! `,
    component: (
      <Image
        src="/reward.png"
        width={600}
        height={600}
        alt="Text that says 'information about doubloons' and under it a copyright for OC 2024"
        className="rounded-lg motion-preset-blur-right motion-duration-1000"
      />
    ),
  },
  {
    title: "Then how the hell I can earn the maximum amount of doubloons?",
    description: `Well **if more hours != more doubloons** there is one thing if you got it more then you will get more doubloons.

- More votes definitely means more doubloons.

**You can get more votes by making cool and useful projects** at the same time. 

Need some tricks to earn even more ? `,
    component: <Allergies />,
  },
  {
    title: "Some tricks to earn more doubloons.",
    description: `Well as making projects matters voting properly in the [Wonderdome](https://highseas.hackclub.com/wonderdome) is also important.

I should not tell you the following things but I think this will help you get the pirate's blessing to boost your payout by 20%.

Various things are send to database when you are voting some of them are: 
  - If you have opened the demo link, the github repository and read the readme file or not.
  - If you are just writing some thing based on the readme file or the demo link chances are you might not get the pirate's blessing.

**So you should check all of the things before writing your vote**, and I am not bluffing. [This is the link to the pr that does this](https://github.com/hackclub/high-seas/issues/243)

Else **if you get the pirate's curse you are done as your payout will be reduced by 50%!**
    `,
    component: (
      <Image
        src="/voting.jpg"
        width={600}
        height={600}
        alt="Text that says 'information about doubloons' and under it a copyright for OC 2024"
        className=" motion-preset-blur-right motion-duration-1000"
        style={{ clipPath: "inset(4%)" }}
      />
    ),
  },
  {
    title: "Conclusion",
    description: `Thanks for reading this interactive lesson on Doubloons.

**Now go and make some super cool projects!**
`,
    component: <Video loop src="/video/Meme.mp4" autoPlay />,
  },
];


// export default function DoubloonsExplained() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   return (
//     <>
//       <div className="relative">
//         <a href="https://hackclub.com" target="_blank" rel="noreferrer">
//           <Image
//             src="/hc-flag.png"
//             width={200}
//             height={200}
//             alt="HC Flag"
//             className="absolute top-0 left-5 w-36 h-20 hover:animate-[wave-flag_0.5s_linear_infinite_alternate]"
//           />
//         </a>
//       </div>
//       <div className={`lg:hidden flex items-center justify-center h-screen text-center ${inter.className}`}>
//         Doubloons Explained is not optimized for mobile. Please view on a desktop. (sorry it{"'"}s inconvenient but I
//         promise it{"'"}s worth it!)!
//       </div>
//       <div className={`hidden lg:block p-20 ${inter.className}`}>
//         <div className="flex gap-4">
//           <div className="prose dark:prose-invert flex-1 rounded-xl p-5 h-24 md:h-48 lg:h-[35rem] flex flex-col justify-center relative">
//             <Progress value={(currentSlide / (slides.length - 1)) * 100} className="w-24 h-1" />
//             <h1 className="font-bold text-xl pt-5">{slides[currentSlide].title}</h1>
//             <div className="pb-5">
//               <Markdown>{slides[currentSlide].description}</Markdown>
//             </div>
//             <div>
//               {currentSlide !== 0 ? (
//                 <Button
//                   onClick={() => setCurrentSlide((prev) => prev - 1)}
//                   className="w-20 bg-white dark:bg-black  text-slate-700 dark:text-slate-200 border border-slate-700 hover:bg-slate-300"
//                 >
//                   Back
//                 </Button>
//               ) : null}
//               <span className="px-2" />
//               {currentSlide !== slides.length - 1 && (
//                 <Button onClick={nextSlide} className="w-20">
//                   {currentSlide === 0 ? "Start" : "Next"}
//                 </Button>
//               )}
//             </div>
//           </div>
//           <div className="flex-1 bg-slate-50 dark:bg-black rounded-xl p-5 flex justify-center items-center">
//             {slides[currentSlide].component}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

import { Definition } from "@/components/definition"
import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google"
import Markdown from "react-markdown"
import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Allergies from "@/components/allergies"
import Safety from "@/components/safety"
import Video from "next-video"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Doubloons Explained",
  description: "Learn about Doubloons and how to earn them in High Seas",
  imageUrl: "/doubloons-cover.jpg",
}

export default function DoubloonsExplained() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <>
      <div className="relative">
        <a href="https://hackclub.com" target="_blank" rel="noreferrer">
          <Image
            src="/hc-flag.png"
            width={200}
            height={200}
            alt="HC Flag"
            className="absolute top-0 left-5 w-36 h-20 hover:animate-[wave-flag_0.5s_linear_infinite_alternate]"
          />
        </a>
      </div>
      <div className={`lg:hidden flex items-center justify-center h-screen text-center ${inter.className}`}>
        Doubloons Explained is not optimized for mobile. Please view on a desktop. (sorry it{"'"}s inconvenient but I
        promise it{"'"}s worth it!)!
      </div>
      <div className={`hidden lg:block p-20 ${inter.className}`}>
        <div className="flex gap-4">
          <div className="prose dark:prose-invert flex-1 rounded-xl p-5 h-24 md:h-48 lg:h-[35rem] flex flex-col justify-center relative">
            <Progress value={(currentSlide / (slides.length - 1)) * 100} className="w-24 h-1" />
            <h1 className="font-bold text-xl pt-5">{slides[currentSlide].title}</h1>
            <div className="pb-5">
              <Markdown>{slides[currentSlide].description}</Markdown>
            </div>
            <div>
              {currentSlide !== 0 ? (
                <Button
                  onClick={() => setCurrentSlide((prev) => prev - 1)}
                  className="w-20 bg-white dark:bg-black  text-slate-700 dark:text-slate-200 border border-slate-700 hover:bg-slate-300"
                >
                  Back
                </Button>
              ) : null}
              <span className="px-2" />
              {currentSlide !== slides.length - 1 && (
                <Button onClick={nextSlide} className="w-20">
                  {currentSlide === 0 ? "Start" : "Next"}
                </Button>
              )}
            </div>
          </div>
          <div className="flex-1 bg-slate-50 dark:bg-black rounded-xl p-5 flex justify-center items-center">
            {slides[currentSlide].component}
          </div>
        </div>
      </div>
    </>
  )
}

