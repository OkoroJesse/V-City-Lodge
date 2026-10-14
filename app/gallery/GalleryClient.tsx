"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { LightboxModal } from "@/components/ui/LightboxModal";

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: "exterior-1",
      src: "/images/hotel/exterior-facade.jpg",
      title: "V City Lodge Multi-Story Architectural Facade",
      category: "exterior",
      categoryLabel: "Exterior",
      aspect: "col-span-1 md:col-span-2 row-span-2",
      description: "Modern geometric architecture with terracotta and charcoal elevations, glass-railed balconies, and secure red perimeter gates.",
    },
    {
      id: "pool",
      src: "/images/hotel/pool-outdoor.jpg",
      title: "Outdoor Swimming Pool & Terrace Dining",
      category: "facilities",
      categoryLabel: "Pool & Leisure",
      aspect: "col-span-1 md:col-span-2",
      description: "Outdoor swimming pool with stainless steel rails, safety rings, shade umbrellas, and adjacent terrace dining seating.",
    },
    {
      id: "terrace-patio",
      src: "/images/hotel/terrace-lounge-patio.jpg",
      title: "Rooftop Terrace Patio & Outdoor Lounge",
      category: "facilities",
      categoryLabel: "Terrace & Patio",
      aspect: "col-span-1 md:col-span-2",
      description: "Open-air rooftop patio with woven wicker chairs, glass-top tables, vibrant red cushions, beverage cooler, and garden trellis.",
    },
    {
      id: "fitness-treadmills",
      src: "/images/hotel/fitness-center-treadmills.jpg",
      title: "Fitness Centre — Treadmills & Cardio",
      category: "facilities",
      categoryLabel: "Fitness & Gym",
      aspect: "col-span-1 md:col-span-2",
      description: "Dual treadmills, elliptical cross-trainers, cable weight stations, spin bike, and boxing bag.",
    },
    {
      id: "fitness-1",
      src: "/images/hotel/fitness-center-1.jpg",
      title: "Fitness Centre — Cable Rig & Weights",
      category: "facilities",
      categoryLabel: "Fitness & Gym",
      aspect: "col-span-1 md:col-span-2",
      description: "Spacious gym room with natural light, multi-station cable rigs, amber cove lighting, and hardwood flooring.",
    },
    {
      id: "games-foosball",
      src: "/images/hotel/games-lounge-foosball.jpg",
      title: "Games Lounge — Foosball & Chesterfield Sofas",
      category: "facilities",
      categoryLabel: "Games Lounge",
      aspect: "col-span-1 md:col-span-2",
      description: "Foosball table, plush button-tufted chesterfield sofas with teal cushions, round marble table, and gold curtains.",
    },
    {
      id: "games-tv",
      src: "/images/hotel/games-lounge-tv.jpg",
      title: "Games Lounge — Table Tennis & TV Wall",
      category: "facilities",
      categoryLabel: "Games Lounge",
      aspect: "col-span-1 md:col-span-2",
      description: "Competition-grade table tennis table, large TV on black-and-gold marble panel, white floor tiles.",
    },
    {
      id: "games-1",
      src: "/images/hotel/games-lounge-1.jpg",
      title: "Games Lounge — Lounge Seating",
      category: "facilities",
      categoryLabel: "Games Lounge",
      aspect: "col-span-1 md:col-span-2",
      description: "Cream lounge sofas, golden curtain drapes, abstract artwork, and air conditioning.",
    },
    {
      id: "bar-lounge",
      src: "/images/hotel/delicacy-bar-lounge.jpg",
      title: "Signature Cocktail Bar & Lounge",
      category: "dining",
      categoryLabel: "Bar & Drinks",
      aspect: "col-span-1 md:col-span-2 row-span-2",
      description: "Fully stocked back-bar with premium spirits, granite counter, copper pendant lighting, and rich timber panelling.",
    },
    {
      id: "cocktail-dining",
      src: "/images/hotel/delicacy-cocktail-dining.jpg",
      title: "Tropical Cocktails & Skewers Platter",
      category: "dining",
      categoryLabel: "Bar & Cocktails",
      aspect: "col-span-1 md:col-span-2",
      description: "Tropical pineapple cooler cocktail with grilled suya skewer platter at the lounge bar counter.",
    },
    {
      id: "suya-rice-platter",
      src: "/images/hotel/delicacy-suya-rice-platter.jpg",
      title: "Chicken Suya & Savory Rice Platter",
      category: "dining",
      categoryLabel: "Delicacies",
      aspect: "col-span-1 md:col-span-2",
      description: "Skewered spiced chicken suya with seasoned rice dome, carved carrots, and rich pepper gravy.",
    },
    {
      id: "grilled-fish-potatoes",
      src: "/images/hotel/delicacy-grilled-fish-potatoes.jpg",
      title: "Herb-Crusted Grilled Fish & Hasselback Potatoes",
      category: "dining",
      categoryLabel: "Continental Dining",
      aspect: "col-span-1 md:col-span-2",
      description: "Flaky golden fish fillet with fresh dill, sliced crispy roasted hasselback potatoes, and green beans.",
    },
    {
      id: "jollof-peppersoup",
      src: "/images/hotel/delicacy-jollof-peppersoup.jpg",
      title: "Nigerian Fried Rice & Peppersoup",
      category: "dining",
      categoryLabel: "Local Cuisine",
      aspect: "col-span-1 md:col-span-2",
      description: "Generously portioned Nigerian fried rice served with rich assorted meat peppersoup.",
    },
    {
      id: "suya-skewers",
      src: "/images/hotel/delicacy-skewers-suya.jpg",
      title: "Suya Skewers with Salad & Golden Fries",
      category: "dining",
      categoryLabel: "Delicacies",
      aspect: "col-span-1 md:col-span-2",
      description: "Flame-grilled suya skewers, golden fries, garden salad, and tomato dip on a premium plated presentation.",
    },
    {
      id: "peppered-meat",
      src: "/images/hotel/delicacy-peppered-meat.jpg",
      title: "Peppered Assorted Meat Platter",
      category: "dining",
      categoryLabel: "Local Delicacy",
      aspect: "col-span-1 md:col-span-2",
      description: "Richly spiced assorted meat slow-cooked in deep pepper sauce with sweet onion rings.",
    },
    {
      id: "room-royal",
      src: "/images/hotel/room-royal-diamond.jpg",
      title: "Royal Diamond Gold Suite",
      category: "suites",
      categoryLabel: "Suites",
      aspect: "col-span-1 md:col-span-2",
      description: "Signature chevron upholstered headboard, dramatic gold trim, mirrored reflections, and warm luminous sconces.",
    },
    {
      id: "room-deluxe",
      src: "/images/hotel/room-deluxe-balcony.jpg",
      title: "Deluxe Room with Cobalt Velvet Accent & Balcony",
      category: "suites",
      categoryLabel: "Suites",
      aspect: "col-span-1 md:col-span-2",
      description: "Vertical-fluted sapphire velvet wall, gilded circular mirror, armchair, and private balcony doors.",
    },
    {
      id: "room-superior",
      src: "/images/hotel/room-superior-king.jpg",
      title: "Superior King Suite — Floating Bed Halo",
      category: "suites",
      categoryLabel: "Suites",
      aspect: "col-span-1 md:col-span-2",
      description: "Warm floating bed halo illumination, corner wood slat, pendant lamp, and scarlet end-of-bed bench.",
    },
    {
      id: "room-business",
      src: "/images/hotel/room-business-executive.jpg",
      title: "Business Executive Suite",
      category: "suites",
      categoryLabel: "Suites",
      aspect: "col-span-1 md:col-span-2",
      description: "Ergonomic high-back desk chair, executive workspace, crisp linen, and blackout curtains.",
    },
    {
      id: "room-executive",
      src: "/images/hotel/room-executive-suite.jpg",
      title: "Executive Suite — Grid Leather Headboard",
      category: "suites",
      categoryLabel: "Suites",
      aspect: "col-span-1 md:col-span-2",
      description: "Tufted grid leather headboard with warm halo backlighting and dark mahogany detailing.",
    },
    {
      id: "room-ambassador",
      src: "/images/hotel/room-presidential-suite.jpg",
      title: "Ambassador Suite — Timber Slat Panelling",
      category: "suites",
      categoryLabel: "Suites",
      aspect: "col-span-1 md:col-span-2",
      description: "Architectural wood-slat wall, illuminated tray ceiling, tufted bench, and wide-screen TV.",
    },
    {
      id: "suite-foosball",
      src: "/images/hotel/suite-presidential-foosball.jpg",
      title: "Ambassador Suite — Private Foosball & Marble TV Wall",
      category: "suites",
      categoryLabel: "Suites",
      aspect: "col-span-1 md:col-span-2",
      description: "Exclusive suite lounge area with foosball table, yellow marble media wall, flat screen TV, and gold lounge seating.",
    },
    {
      id: "logo-crest",
      src: "/images/hotel/logo-gold.png",
      title: "V City Lodge Official Gold Crest & Brand Identity",
      category: "exterior",
      categoryLabel: "Brand Mark",
      aspect: "col-span-1 md:col-span-2",
      description: "Official gold architectural emblem — the V City Lodge brand mark in Kubwa, Abuja.",
    },
  ];

  const categories = [
    { key: "all", label: `All (${galleryItems.length})` },
    { key: "exterior", label: "Exterior" },
    { key: "facilities", label: `Facilities (${galleryItems.filter(i => i.category === "facilities").length})` },
    { key: "dining", label: `Dining & Bar (${galleryItems.filter(i => i.category === "dining").length})` },
    { key: "suites", label: `Suites & Rooms (${galleryItems.filter(i => i.category === "suites").length})` },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpen = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Compact Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                activeCategory === cat.key
                  ? "bg-[#C8A24A] text-[#101114] shadow-sm"
                  : "bg-[#191A1E] border border-white/10 text-[#F6F2E9]/75 hover:text-white hover:border-[#C8A24A]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Compact Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 auto-rows-[200px] sm:auto-rows-[240px]">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleOpen(idx)}
              className={`relative overflow-hidden cursor-pointer group border border-[#C8A24A]/20 bg-black hover:border-[#C8A24A]/60 transition-colors ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#C8A24A] mb-0.5 block">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-base sm:text-lg text-white font-medium mb-0.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#A6A6A6] line-clamp-1 font-light">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-2.5 right-2.5 p-1.5 bg-black/70 backdrop-blur-md rounded-full text-white/70 group-hover:bg-[#C8A24A] group-hover:text-black transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-[#A6A6A6] max-w-md mx-auto leading-relaxed border-t border-white/8 pt-6">
          <p>
            All {galleryItems.length} photographs represent authentic V City Lodge property assets at 2560px+ resolution.
          </p>
        </div>
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredItems}
        currentIndex={currentIndex}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % filteredItems.length)}
        onPrev={() => setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))}
      />
    </>
  );
}
