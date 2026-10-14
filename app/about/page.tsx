import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Clock,
  Car,
  Sun,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export const metadata: Metadata = {
  title: "About V City Lodge Hotel & Suite Ltd",
  description:
    "Learn about V City Lodge Hotel & Suite Ltd in Chikakore, Kubwa, Abuja. Modern architecture, approximately 40 guestrooms, private balconies, and dedicated 24-hour hospitality.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-[#101114]">
      {/* Compact Page Header */}
      <section className="py-12 bg-gradient-to-b from-[#191A1E] to-[#101114] border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-[#C8A24A]" />
            <span className="text-[10px] uppercase font-semibold tracking-[0.24em] text-[#C8A24A]">
              Our Identity & Philosophy
            </span>
            <span className="h-px w-6 bg-[#C8A24A]" />
          </div>
          <h1
            className="font-serif font-normal text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
          >
            About V City Lodge
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#F6F2E9]/75 font-light max-w-xl mx-auto leading-relaxed">
            A contemporary hotel and suite in Kubwa, Abuja, built around the philosophy of tranquil comfort, attentive service, and restful accommodation.
          </p>
        </div>
      </section>

      {/* Main Story & Photography (Compact) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-[#C8A24A]/25 shadow-xl">
              <Image
                src={hotelConfig.branding.exteriorHero}
                alt="V City Lodge Facade Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 p-4 bg-[#191A1E] border border-[#C8A24A]/30 shadow-lg hidden sm:block max-w-[220px]">
              <span className="text-[9px] uppercase tracking-wider font-semibold text-[#C8A24A] block">
                Kubwa Location
              </span>
              <p className="text-[11px] text-white font-medium mt-0.5">
                Chikakore Layout, off Champion Road
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#C8A24A]" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#C8A24A]">
                The Vision
              </span>
            </div>

            <h2
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}
            >
              Thoughtfully Curated Spaces in the Federal Capital Territory
            </h2>

            <p className="text-xs sm:text-[13px] text-[#F6F2E9]/80 font-light leading-relaxed">
              {hotelConfig.aboutIntro}
            </p>

            <p className="text-xs sm:text-[13px] text-[#A6A6A6] font-light leading-relaxed">
              {hotelConfig.aboutStory}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#F6F2E9]/80">
              <div className="flex items-center gap-2 p-2 bg-[#191A1E] border border-white/6">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                <span>Gated Perimeter Wall</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#191A1E] border border-white/6">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                <span>24-Hour Reception Desk</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#191A1E] border border-white/6">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                <span>Private Guest Balconies</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#191A1E] border border-white/6">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                <span>Outdoor Pool & Fitness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Facts Banner (Compact) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-5 sm:p-7 bg-[#191A1E] border border-[#C8A24A]/25 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#C8A24A] font-semibold block mb-0.5">
              Guest Capacity
            </span>
            <div className="font-serif text-2xl text-white font-medium">
              ~40 Rooms
            </div>
            <p className="text-[10px] text-[#A6A6A6] mt-0.5">
              Spacious accommodation
            </p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#C8A24A] font-semibold block mb-0.5">
              Reception Desk
            </span>
            <div className="font-serif text-2xl text-white font-medium">
              24 Hours
            </div>
            <p className="text-[10px] text-[#A6A6A6] mt-0.5">
              Continuous on-site service
            </p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#C8A24A] font-semibold block mb-0.5">
              Check-In / Out
            </span>
            <div className="font-serif text-2xl text-white font-medium">
              12:00 Noon
            </div>
            <p className="text-[10px] text-[#A6A6A6] mt-0.5">
              Standard hospitality schedule
            </p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#C8A24A] font-semibold block mb-0.5">
              Self-Parking
            </span>
            <div className="font-serif text-2xl text-white font-medium">
              Free & Secure
            </div>
            <p className="text-[10px] text-[#A6A6A6] mt-0.5">
              Gated perimeter wall
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
