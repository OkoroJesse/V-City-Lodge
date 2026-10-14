"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export function AboutSection() {
  const stats = [
    { value: "~40", label: "Rooms" },
    { value: "6", label: "Suites" },
    { value: "24h", label: "Reception" },
    { value: "100%", label: "Free Parking" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#101114]" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ─── Left: Photography (Compact Aspect Ratio) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#C8A24A]/20 bg-black group">
              <Image
                src="/images/hotel/exterior-facade.jpg"
                alt="V City Lodge Hotel multi-storey exterior facade with balconies in Kubwa, Abuja"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-[center_35%] group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-[#C8A24A]" />
            </div>

            {/* Stat bar (Compact) */}
            <div className="grid grid-cols-4 gap-px bg-[#C8A24A]/20">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#191A1E] py-2.5 px-1.5 text-center"
                >
                  <div className="font-serif text-lg sm:text-xl text-[#C8A24A] font-normal leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-[#A6A6A6] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Copy (Compact & Clean) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#C8A24A]" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
                The Hotel Story
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
            >
              A Contemporary Haven in Chikakore, Kubwa
            </h2>

            <p className="text-[#F6F2E9]/75 font-light leading-relaxed text-xs sm:text-sm">
              {hotelConfig.aboutIntro}
            </p>

            <p className="text-[#F6F2E9]/60 font-light leading-relaxed text-xs sm:text-[13px]">
              {hotelConfig.aboutStory}
            </p>

            {/* Verified badges (Compact) */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Outdoor Pool", "Fitness Centre", "Games Lounge", "Rooftop Terrace", "Private Balconies", "24h Desk"].map((badge) => (
                <span
                  key={badge}
                  className="text-[9px] uppercase font-semibold tracking-wider text-[#C8A24A] border border-[#C8A24A]/25 px-2 py-0.5 bg-[#C8A24A]/5"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-white hover:text-[#C8A24A] text-[11px] uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Read Full Background</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
