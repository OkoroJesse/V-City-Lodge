"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const facilitySpotlights = [
  {
    id: "pool",
    title: "Outdoor Swimming Pool",
    subtitle: "Terrace seating · Safety rails · Shade umbrellas",
    image: "/images/hotel/pool-outdoor.jpg",
    alt: "V City Lodge outdoor swimming pool with terrace dining",
  },
  {
    id: "fitness",
    title: "Fitness Centre & Gym",
    subtitle: "Treadmills · Cable rigs · Punching bag · Spin bike",
    image: "/images/hotel/fitness-center-treadmills.jpg",
    alt: "V City Lodge fitness centre with treadmills and equipment",
  },
  {
    id: "games",
    title: "Games Lounge & Foosball",
    subtitle: "Table tennis · Foosball · Chesterfield seating · TV wall",
    image: "/images/hotel/games-lounge-foosball.jpg",
    alt: "V City Lodge games lounge with foosball table and chesterfield sofas",
  },
];

const serviceAmenities = [
  "24-Hour Front Desk",
  "Free On-Site Self-Parking",
  "Complimentary Wi-Fi",
  "Private Balconies",
  "Rooftop Terrace Patio",
  "Morning Breakfast",
  "Laundry & Luggage Storage",
];

export function AmenitiesSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#0D0F13]" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header (Compact) */}
        <div className="max-w-xl mb-10">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-px w-6 bg-[#C8A24A]" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
              Facilities & Leisure
            </span>
          </div>
          <h2
            id="amenities-heading"
            className="font-serif font-normal text-white leading-tight"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
          >
            Verified Hotel Amenities
          </h2>
          <p className="mt-1.5 text-xs sm:text-[13px] text-[#A6A6A6] font-light leading-relaxed">
            Every amenity listed below has been confirmed through authentic property photography.
          </p>
        </div>

        {/* ─── Three facility spotlights (Compact 16:10 aspect ratio) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {facilitySpotlights.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all duration-300 bg-[#191A1E]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1 text-[9px] text-[#C8A24A] bg-black/70 backdrop-blur-sm border border-[#C8A24A]/30 px-2 py-0.5">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
              <div className="p-3.5 sm:p-4">
                <h3 className="font-serif text-base text-white font-medium">{facility.title}</h3>
                <p className="text-[11px] text-[#A6A6A6] mt-0.5">{facility.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Service amenities as compact pill list ─── */}
        <div className="bg-[#191A1E] border border-white/8 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C8A24A] mr-2">
                Services:
              </span>
              {serviceAmenities.map((item) => (
                <span
                  key={item}
                  className="text-[11px] text-[#F6F2E9]/80 border border-white/10 px-2.5 py-1 bg-white/4"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/experience"
              className="group inline-flex items-center gap-1 text-[#C8A24A] hover:text-[#d4b464] text-[11px] uppercase tracking-wider font-semibold transition-colors shrink-0 pt-1 sm:pt-0"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
