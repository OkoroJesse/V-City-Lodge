import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickCheckinWidget } from "@/components/home/QuickCheckinWidget";
import { AboutSection } from "@/components/home/AboutSection";
import { RoomsShowcase } from "@/components/home/RoomsShowcase";
import { AmenitiesSection } from "@/components/home/AmenitiesSection";
import { DiningSection } from "@/components/home/DiningSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationSection } from "@/components/home/LocationSection";
import { BookingCtaSection } from "@/components/home/BookingCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickCheckinWidget />
      <AboutSection />
      <RoomsShowcase />
      <AmenitiesSection />
      <DiningSection />
      <GalleryPreview />
      <LocationSection />
      <BookingCtaSection />
    </>
  );
}
