"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Clock, Car, Waves } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="relative min-h-[92svh] sm:min-h-[95svh] flex flex-col justify-end overflow-hidden"
      aria-label="Hero — V City Lodge Hotel"
    >
      {/* ─── Background: high-res exterior photo with Ken-Burns zoom ─── */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={hotelConfig.branding.exteriorHero}
          alt="V City Lodge Hotel & Suite — multi-storey exterior facade in Kubwa, Abuja"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        {/* Directional gradient: dark at bottom for text, preserves sky and upper architecture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101114]/75 via-[#101114]/20 to-transparent" />
      </motion.div>

      {/* ─── Compact Content ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 pt-24">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-3.5"
          >
            <span className="h-px w-6 bg-[#C8A24A]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
              {hotelConfig.heroEyebrow}
            </span>
          </motion.div>

          {/* Headline (Compact & Balanced: 34px - 50px) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-normal text-white leading-[1.12] tracking-tight"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.15rem)" }}
          >
            Comfort That Feels{" "}
            <br className="hidden sm:block" />
            <em className="not-italic italic text-[#C8A24A]">Like Coming Home.</em>
          </motion.h1>

          {/* Supporting copy (14px - 15px) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3.5 text-sm sm:text-[15px] text-[#F6F2E9]/80 font-light leading-relaxed max-w-lg"
          >
            {hotelConfig.heroSubheadline}
          </motion.p>

          {/* Compact CTAs (Height ~38px) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-7 flex flex-wrap gap-2.5"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2 bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 shadow-md shadow-[#C8A24A]/20 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Your Stay
            </button>

            <Link
              href="/rooms"
              className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-[#C8A24A]/60 text-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore Our Suites
              <ArrowRight className="w-3.5 h-3.5 text-[#C8A24A] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Verified quick stats (Compact) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-7 pt-5 border-t border-white/10 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#F6F2E9]/70"
          >
            {[
              { icon: <Clock className="w-3 h-3 text-[#C8A24A]" />, label: "24h Reception" },
              { icon: <Car className="w-3 h-3 text-[#C8A24A]" />, label: "Free Parking" },
              { icon: <Waves className="w-3 h-3 text-[#C8A24A]" />, label: "Pool & Fitness" },
              { icon: <MapPin className="w-3 h-3 text-[#C8A24A]" />, label: "Chikakore, Kubwa" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <BookingOptionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
