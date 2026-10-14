"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hotelConfig } from "@/data/hotel-config";
import { ArrowRight, Wine, Flame, Sun } from "lucide-react";

const categoryIcon: Record<string, React.ReactNode> = {
  bar: <Wine className="w-3.5 h-3.5 text-[#C8A24A]" />,
  cocktail: <Wine className="w-3.5 h-3.5 text-[#C8A24A]" />,
  delicacy: <Flame className="w-3.5 h-3.5 text-[#C8A24A]" />,
};

const categoryLabel: Record<string, string> = {
  bar: "Bar & Lounge",
  cocktail: "Cocktails",
  delicacy: "Nigerian & Continental",
};

export function DiningSection() {
  const { dining } = hotelConfig;

  return (
    <section id="dining" className="py-14 sm:py-20 bg-[#101114]" aria-labelledby="dining-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header (Compact) */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="h-px w-6 bg-[#C8A24A]" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
                Bar & Restaurant
              </span>
            </div>
            <h2
              id="dining-heading"
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
            >
              Dining & Delicacies at V City Lodge
            </h2>
            <p className="mt-1.5 text-xs sm:text-[13px] text-[#A6A6A6] font-light max-w-lg leading-relaxed">
              Curated spirits, rooftop patio drinks, grilled suya platters, and authentic local cuisine prepared on-site.
            </p>
          </div>
          <Link
            href="/experience"
            className="group inline-flex items-center gap-1.5 text-[#C8A24A] hover:text-[#d4b464] text-[11px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap transition-colors shrink-0"
          >
            <span>Full Dining Directory</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ─── Compact Editorial Grid ─── */}
        {/* Row 1: Signature Bar (60%) + Rooftop Patio (40%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          {/* Bar Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 group relative overflow-hidden border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all duration-300 bg-black"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={dining[0].image}
                alt={dining[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/75 backdrop-blur-sm border border-[#C8A24A]/30 text-[9px] uppercase tracking-wider font-semibold text-[#C8A24A]">
                {categoryIcon[dining[0].category]}
                <span>{categoryLabel[dining[0].category]}</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium leading-snug">
                  {dining[0].title}
                </h3>
                <p className="text-[11px] text-[#C8A24A] font-medium mt-0.5">{dining[0].subtitle}</p>
                <p className="mt-1 text-xs text-[#F6F2E9]/75 font-light line-clamp-2 leading-relaxed max-w-lg">
                  {dining[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terrace Patio Lounge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 group relative overflow-hidden border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all duration-300 bg-black"
          >
            <div className="relative h-full min-h-[220px] aspect-[16/10] md:aspect-auto overflow-hidden">
              <Image
                src={dining[1].image}
                alt={dining[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/75 backdrop-blur-sm border border-[#C8A24A]/30 text-[9px] uppercase tracking-wider font-semibold text-[#C8A24A]">
                <Sun className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>Rooftop Terrace</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium leading-snug">
                  {dining[1].title}
                </h3>
                <p className="text-[11px] text-[#C8A24A] font-medium mt-0.5">{dining[1].subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: 3 Compact Delicacy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[dining[2], dining[3], dining[4]].map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-[#C8A24A]/15 hover:border-[#C8A24A]/45 transition-all bg-[#191A1E]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-sm border border-[#C8A24A]/30 text-[9px] uppercase tracking-wider font-semibold text-[#C8A24A]">
                  {categoryIcon[item.category]}
                  <span>{categoryLabel[item.category]}</span>
                </div>
              </div>
              <div className="p-3.5 sm:p-4">
                <h3 className="font-serif text-[15px] sm:text-base text-white font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#C8A24A] font-medium mt-0.5 line-clamp-1">{item.subtitle}</p>
                <p className="text-[12px] text-[#A6A6A6] font-light mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-[10px] text-[#A6A6A6]/60 text-center max-w-md mx-auto leading-relaxed">
          * Authentic in-property food and beverage photography. Menu items available on order with front desk.
        </p>
      </div>
    </section>
  );
}
