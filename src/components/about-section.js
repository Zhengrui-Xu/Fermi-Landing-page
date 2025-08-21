"use client";

import React from "react";
import { motion } from "framer-motion";

/* -------------------- Reusable Problem Block (static text) -------------------- */
function ProblemBlock({ eyebrow = "The Problem", title, imageSrc }) {
  const splitAt = title.indexOf(". ") >= 0 ? title.indexOf(". ") + 1 : -1;
  const line1 = splitAt > 0 ? title.slice(0, splitAt) : title;
  const line2 = splitAt > 0 ? title.slice(splitAt + 1) : "";

  return (
    <div
      className="
        grid items-center
        gap-10 md:gap-14
        md:grid-cols-[minmax(320px,48ch)_minmax(300px,560px)]
      "
    >
      {/* LEFT: Static text */}
      <div className="relative">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          {eyebrow}
        </p>

        <div className="relative">
          {/* (removed the decorative vertical accent line) */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#0A3161]">
            <span>{line1}</span>
            {line2 && (
              <>
                <br />
                <span>{line2}</span>
              </>
            )}
          </h2>
        </div>

        {/* Underline */}
        <span className="mt-3 block h-[3px] w-full bg-[#0B1220]/80 rounded-full" />
      </div>

      {/* RIGHT: Image */}
      <div className="relative">
        <div className="inline-block rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white">
          <img
            src={imageSrc}
            alt="Problem visual"
            className="block max-w-[560px] w-full h-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------- Main About Section -------------------- */
export default function AboutSection() {
  const PROBLEM =
    "The U.S. relies on imported cathode active material (CAM). Domestic CAM production remains limited, expensive, and energy-intensive";

  return (
    <main id="about" className="bg-white text-[#0B1220]">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/battery.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl md:text-6xl font-semibold"
            >
              Powering the Future with Advanced Cathodes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg md:text-2xl text-gray-200"
            >
              High performance. Built in the U.S. Designed for energy independence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SINGLE PROBLEM SECTION */}
      <section className="relative w-full bg-white">
        {/* Reduced side padding */}
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
          <ProblemBlock title={PROBLEM} imageSrc="/about/problem_1.png" />
        </div>
      </section>
    </main>
  );
}
