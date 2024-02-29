"use client";

import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import  TypewriterLoop  from "@/components/ui/typewriterloop";
import { useEffect, useRef } from "react"

import CanvasEffect from "./canvas"

export default function useModeResolver() {

  const { resolvedTheme } = useTheme();
  
  return (
    <div className=" h-[65rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="absolute z-10">
          <div className="relative pointer-events-none inset-0 flex items-center justify-center"></div>
          <div className="px-12">
            <h1 className="md:text-6xl text-2xl lg:text-5xl font-regular text-center relative z-20 mt-[-5rem]">
              <span style={{ color: '#007EFC' }} className="text-blue-500">
                Sites That
              </span>
            </h1>
            <h1 className="mt-4"></h1>
            <div>
              <TypewriterLoop />
            </div>
          </div>

          </div>
          <CanvasEffect />
      </div>
  )
}