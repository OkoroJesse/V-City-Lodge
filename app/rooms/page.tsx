import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bed, Users, Eye, Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomsCatalogClient } from "./RoomsCatalogClient";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore guestrooms and suites at V City Lodge Hotel & Suite Ltd in Kubwa, Abuja. Featuring private balconies, king beds, whisper-quiet AC, and dedicated hospitality.",
};

export default function RoomsPage() {
  return (
    <div className="pt-24 pb-24 bg-[#080B12]">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#0E1320] to-[#080B12] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C4993A]" />
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-[#C4993A]">
              Accommodation Catalog
            </span>
            <span className="h-px w-6 bg-[#C4993A]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
            Rooms & Suites
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE8DC]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Discover verified room categories designed for rest and productivity in Kubwa, Abuja. Each room features authentic property photography and verified amenities.
          </p>
        </div>
      </section>

      {/* Interactive Catalog */}
      <RoomsCatalogClient />
    </div>
  );
}
