import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Clock, Car, Wifi, Sun, Coffee, Luggage, Waves, Dumbbell, Gamepad2, Check, Wine, Flame } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export const metadata: Metadata = {
  title: "Guest Experience, Amenities & Dining",
  description:
    "Discover the full guest experience at V City Lodge: outdoor pool, fully-equipped fitness centre, entertainment games lounge, rooftop terrace patio, in-house bar & restaurant, and 24-hour reception.",
};

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-4 h-4 text-[#C8A24A]" />,
  Car: <Car className="w-4 h-4 text-[#C8A24A]" />,
  Wifi: <Wifi className="w-4 h-4 text-[#C8A24A]" />,
  Sun: <Sun className="w-4 h-4 text-[#C8A24A]" />,
  Coffee: <Coffee className="w-4 h-4 text-[#C8A24A]" />,
  Luggage: <Luggage className="w-4 h-4 text-[#C8A24A]" />,
  Waves: <Waves className="w-4 h-4 text-[#C8A24A]" />,
  Dumbbell: <Dumbbell className="w-4 h-4 text-[#C8A24A]" />,
  Gamepad2: <Gamepad2 className="w-4 h-4 text-[#C8A24A]" />,
};

const diningCategoryIcon: Record<string, React.ReactNode> = {
  bar: <Wine className="w-3.5 h-3.5 text-[#C8A24A]" />,
  cocktail: <Wine className="w-3.5 h-3.5 text-[#C8A24A]" />,
  delicacy: <Flame className="w-3.5 h-3.5 text-[#C8A24A]" />,
};

const facilitySpotlights = [
  {
    title: "Outdoor Swimming Pool",
    tagline: "Poolside relaxation with terrace dining",
    description:
      "V City Lodge features an outdoor swimming pool with stainless steel entry rails, poolside safety rings, parasol shade umbrellas, and an adjacent terrace furnished with dining tables and chairs.",
    heroImage: "/images/hotel/pool-outdoor.jpg",
    alt: "V City Lodge Outdoor Swimming Pool with terrace dining area",
  },
  {
    title: "Rooftop Terrace Patio & Bar",
    tagline: "Open-air patio dining & lounge seating",
    description:
      "Breezy open-air terrace patio featuring woven wicker armchairs, glass tables, vibrant red cushions, drinks cooler, and leafy garden trellis for relaxed al fresco evenings.",
    heroImage: "/images/hotel/terrace-lounge-patio.jpg",
    alt: "V City Lodge Rooftop Terrace Patio Lounge with woven wicker seating",
  },
  {
    title: "Fitness Centre & Gym",
    tagline: "Professional-grade training equipment",
    description:
      "Our fitness facility is equipped with treadmills, elliptical cross-trainers, cable weight machines, a boxing heavy bag, spin bike, weight bench, and large timber windows for natural ventilation.",
    heroImage: "/images/hotel/fitness-center-treadmills.jpg",
    secondaryImage: "/images/hotel/fitness-center-1.jpg",
    alt: "V City Lodge Fitness Centre with treadmills and cable machines",
  },
  {
    title: "Games Lounge & Foosball",
    tagline: "Foosball, table tennis, TV entertainment & lounge seating",
    description:
      "Unwind in our recreational games lounge featuring a foosball table, competition-grade blue table tennis table, plush button-tufted chesterfield sofas, and a large-screen entertainment wall.",
    heroImage: "/images/hotel/games-lounge-foosball.jpg",
    secondaryImage: "/images/hotel/games-lounge-tv.jpg",
    alt: "V City Lodge Games Lounge with foosball and chesterfield sofas",
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-20 pb-20 bg-[#0D0F13]">

      {/* ── Compact Header ── */}
      <section className="py-12 bg-gradient-to-b from-[#191A1E] to-[#0D0F13] border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-[#C8A24A]" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
              Hospitality & Leisure
            </span>
          </div>
          <h1
            className="font-serif font-normal text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
          >
            The Guest Experience
          </h1>
          <p className="mt-2 text-[#A6A6A6] font-light max-w-xl text-xs sm:text-sm leading-relaxed">
            From our outdoor pool and rooftop terrace patio to professional fitness equipment, games lounge, and curated Nigerian delicacies.
          </p>
        </div>
      </section>

      {/* ── Compact Facility Spotlights ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {facilitySpotlights.map((facility, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center`}
            >
              {/* Image block */}
              <div className={`lg:col-span-7 space-y-2 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative aspect-[16/10] overflow-hidden border border-[#C8A24A]/20 shadow-lg shadow-black/50 group bg-black">
                  <Image
                    src={facility.heroImage}
                    alt={facility.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                {facility.secondaryImage && (
                  <div className="relative aspect-[16/6] overflow-hidden border border-[#C8A24A]/15 bg-black group">
                    <Image
                      src={facility.secondaryImage}
                      alt={`${facility.title} secondary view`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-3 text-[9px] uppercase font-semibold tracking-wider text-[#C8A24A] bg-black/70 backdrop-blur-sm px-2 py-0.5 border border-[#C8A24A]/25">
                      Additional Angle
                    </div>
                  </div>
                )}
              </div>

              {/* Text block */}
              <div className={`lg:col-span-5 space-y-3 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-2">
                  <span className="h-px w-5 bg-[#C8A24A]" />
                  <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-[#C8A24A]">
                    Verified On-Site
                  </span>
                </div>
                <h2
                  className="font-serif font-normal text-white leading-snug"
                  style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
                >
                  {facility.title}
                </h2>
                <p className="text-[11px] font-semibold text-[#C8A24A] tracking-wider uppercase">
                  {facility.tagline}
                </p>
                <p className="text-xs text-[#A6A6A6] font-light leading-relaxed">
                  {facility.description}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#C8A24A] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Photo-verified property feature</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Dining & Delicacies Grid (Compact) ── */}
      <section className="bg-[#101114] border-t border-white/6 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-[#C8A24A]" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
              Culinary & Beverage
            </span>
          </div>
          <h2
            className="font-serif font-normal text-white leading-tight mb-8"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
          >
            In-House Dining & Cocktail Offerings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotelConfig.dining.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden border border-[#C8A24A]/15 hover:border-[#C8A24A]/45 transition-all bg-[#191A1E]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-black/75 backdrop-blur-sm border border-[#C8A24A]/30 px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-[#C8A24A]">
                    {diningCategoryIcon[item.category]}
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="p-3.5 space-y-1">
                  <h3 className="font-serif text-[15px] text-white font-medium leading-snug">{item.title}</h3>
                  <p className="text-[11px] text-[#C8A24A] font-medium truncate">{item.subtitle}</p>
                  <p className="text-[11px] text-[#A6A6A6] font-light leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Complete Amenities Directory ── */}
      <section className="bg-[#0D0F13] border-t border-white/6 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-[#C8A24A]" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
              Directory
            </span>
          </div>
          <h2
            className="font-serif font-normal text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            All Verified Amenities & Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hotelConfig.amenities.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3.5 bg-[#191A1E] border border-white/8 hover:border-[#C8A24A]/30 transition-colors"
              >
                <div className="w-8 h-8 border border-[#C8A24A]/25 flex items-center justify-center shrink-0">
                  {iconMap[item.icon] || <Check className="w-4 h-4 text-[#C8A24A]" />}
                </div>
                <div>
                  <h3 className="text-xs font-medium text-white">{item.title}</h3>
                  <p className="text-[11px] text-[#A6A6A6] font-light mt-0.5 leading-snug">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (Compact) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#191A1E] border border-[#C8A24A]/25 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
              Ready to Experience V City Lodge?
            </h3>
            <p className="text-xs text-[#A6A6A6] font-light mt-0.5">
              24-hour reception desk ready to assist with reservations and enquiries.
            </p>
          </div>
          <div className="flex gap-2.5 shrink-0">
            <Link
              href="/contact"
              className="bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Book Stay
            </Link>
            <a
              href={hotelConfig.contact.telLink}
              className="bg-white/6 hover:bg-white/12 border border-white/15 text-white px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-all"
            >
              {hotelConfig.contact.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
