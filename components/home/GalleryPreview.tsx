"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { LightboxModal } from "@/components/ui/LightboxModal";

const previewImages = [
  {
    src: "/images/hotel/exterior-facade.jpg",
    title: "Hotel Facade",
    span: "md:col-span-2 md:row-span-2",
    categoryLabel: "Architecture",
  },
  {
    src: "/images/hotel/pool-outdoor.jpg",
    title: "Outdoor Pool",
    span: "md:col-span-2",
    categoryLabel: "Swimming Pool",
  },
  {
    src: "/images/hotel/delicacy-bar-lounge.jpg",
    title: "Signature Cocktail Bar",
    span: "md:col-span-2",
    categoryLabel: "Bar & Lounge",
  },
  {
    src: "/images/hotel/terrace-lounge-patio.jpg",
    title: "Rooftop Terrace Patio",
    span: "md:col-span-2",
    categoryLabel: "Terrace Dining",
  },
  {
    src: "/images/hotel/room-royal-diamond.jpg",
    title: "Royal Diamond Suite",
    span: "md:col-span-2",
    categoryLabel: "Signature Suite",
  },
  {
    src: "/images/hotel/delicacy-suya-rice-platter.jpg",
    title: "Chicken Suya & Rice Platter",
    span: "md:col-span-2",
    categoryLabel: "Delicacies",
  },
];

export function GalleryPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#0D0F13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="h-px w-6 bg-[#C8A24A]" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
                Visual Showcase
              </span>
            </div>
            <h2
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
            >
              Inside V City Lodge
            </h2>
            <p className="mt-1 text-xs text-[#A6A6A6] font-light">
              Suites, outdoor pool, rooftop patio, and signature delicacies — all authentic photography.
            </p>
          </div>

          <Link
            href="/gallery"
            className="flex items-center gap-1.5 text-[#C8A24A] hover:text-[#d4b464] text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap shrink-0 transition-colors group"
          >
            <span>Full Gallery (23 Photos)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Compact Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[160px] sm:auto-rows-[190px]">
          {previewImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleOpen(idx)}
              className={`relative overflow-hidden cursor-pointer group border border-[#C8A24A]/20 bg-black hover:border-[#C8A24A]/50 transition-colors ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] uppercase tracking-widest font-semibold text-[#C8A24A] block">
                  {image.categoryLabel}
                </span>
                <span className="font-serif text-sm sm:text-base text-white font-medium">
                  {image.title}
                </span>
              </div>

              <div className="absolute top-2.5 right-2.5 p-1.5 bg-black/60 backdrop-blur-md text-white/70 group-hover:bg-[#C8A24A] group-hover:text-black rounded-full transition-all">
                <Maximize2 className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={previewImages}
        currentIndex={currentIndex}
        onNext={() =>
          setCurrentIndex((prev) => (prev + 1) % previewImages.length)
        }
        onPrev={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? previewImages.length - 1 : prev - 1
          )
        }
      />
    </section>
  );
}
