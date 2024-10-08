"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import Link from "next/link";

const words = [
  {
    text: "European",
  },
  {
    text: "Design",
  },
  {
    text: "Solutions",
  },
  {
    text: "for",
  },
  {
    text: "the",
  },
  {
    text: "Steel",
    className: "text-yesil dark:text-yesil",
  },
  {
    text: "Industry.",
    className: "text-yesil dark:text-yesil",
  },
];

export default function Home() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} />
        </div>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          This site aims to simplify steel structure design with European
          profiles. Inspired by the AISC Design Manual, it provides quick and
          accurate calculations for widely used wide-flange steel sections,
          ensuring compliance with the Turkish Structural Steel Code.
        </p>
        <div className="justify-center pt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Link href="/tables">
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
              Let&apos;s Calculate!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
