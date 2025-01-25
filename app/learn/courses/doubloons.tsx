"use client"
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
  imageUrl: "/doubloons-cover.jpg",
}

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
  // ... (include all the slides from the original file)
]

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

