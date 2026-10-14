import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4 bg-[#080B12]">
      <div className="max-w-md w-full text-center border border-[#C4993A]/30 bg-[#0E1320] p-8 sm:p-12 shadow-2xl space-y-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#C4993A] mx-auto bg-black">
          <Image
            src={hotelConfig.branding.logoUrl}
            alt="V City Lodge Crest"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C4993A] block mb-1">
            404 • Page Not Found
          </span>
          <h1 className="font-serif text-3xl text-white font-medium">
            Page Not Located
          </h1>
          <p className="mt-2 text-xs text-[#EDE8DC]/70 leading-relaxed font-light">
            The page you requested could not be found. Explore our rooms or return to our homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full bg-[#C4993A] hover:bg-[#D4B25E] text-[#080B12] py-3.5 px-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/rooms"
            className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-4 text-xs font-medium uppercase tracking-widest transition-all"
          >
            Browse Rooms & Suites
          </Link>
        </div>

        <div className="pt-4 border-t border-white/10 text-xs text-white/50">
          Front Desk Assistance:{" "}
          <a
            href={hotelConfig.contact.telLink}
            className="text-[#D4B25E] hover:underline"
          >
            {hotelConfig.contact.primaryPhone}
          </a>
        </div>
      </div>
    </div>
  );
}
