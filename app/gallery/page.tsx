import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Property Gallery",
  description:
    "View authentic photos of V City Lodge Hotel & Suite Ltd in Kubwa, Abuja. Outdoor pool, fully-equipped fitness centre, games lounge, private balconies, and luxury suite interiors — all at 2560px high resolution.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-24 bg-[#080B12]">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#0E1320] to-[#080B12] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C4993A]" />
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-[#C4993A]">
              Visual Showcase
            </span>
            <span className="h-px w-6 bg-[#C4993A]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
            Property Photo Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE8DC]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Authentic photographs of V City Lodge Hotel & Suite Ltd. Click any image to open the high-definition interactive lightbox with keyboard controls.
          </p>
        </div>
      </section>

      {/* Interactive Gallery */}
      <GalleryClient />
    </div>
  );
}
