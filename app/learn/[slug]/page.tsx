"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Markdown from "react-markdown"
import { Inter } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export default function CourseContent({ metadata, slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background"
      >
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
          {metadata.title} is not optimized for mobile. Please view on a desktop. (sorry it{"'"}s inconvenient but I
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
                {currentSlide !== 0 && (
                  <Button
                    onClick={prevSlide}
                    className="w-20 bg-white dark:bg-black text-slate-700 dark:text-slate-200 border border-slate-700 hover:bg-slate-300"
                  >
                    Back
                  </Button>
                )}
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
      </motion.div>
    </AnimatePresence>
  )
}

