import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, ArrowUpRight } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export function Footer() {
  return (
    <footer className="bg-[#0A0B0E] border-t border-[#C8A24A]/20 text-[#F6F2E9]/75 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 pb-8 border-b border-white/8">
          {/* Brand Column (Compact) */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#C8A24A]/50 bg-black">
                <Image
                  src={hotelConfig.branding.logoUrl}
                  alt="V City Lodge Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-base tracking-wide text-white font-medium block leading-tight">
                  V City Lodge
                </span>
                <span className="text-[9px] tracking-[0.18em] text-[#C8A24A] uppercase block">
                  Hotel & Suite Ltd
                </span>
              </div>
            </Link>

            <p className="text-[11px] text-[#A6A6A6] leading-relaxed">
              Modern hospitality and peaceful accommodation in Chikakore, Kubwa, Abuja. Featuring approximately 40 guestrooms, private balconies, 24-hour reception, and secure on-site parking.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#191A1E] border border-white/8 text-[10px] text-[#C8A24A]">
                <ShieldCheck className="w-3 h-3 text-[#C8A24A]" />
                <span>Verified Abuja Property</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A24A]">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/#dining" className="hover:text-white transition-colors">
                  Dining & Bar
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Amenities & Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Property Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About V City Lodge
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A24A]">
              Contact Desk
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A24A] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a
                    href={hotelConfig.contact.telLink}
                    className="hover:text-[#C8A24A] font-medium text-white transition-colors block text-xs"
                  >
                    {hotelConfig.contact.primaryPhone}
                  </a>
                  <a
                    href={hotelConfig.contact.secondaryTelLink}
                    className="hover:text-[#C8A24A] font-medium text-white transition-colors block text-xs"
                  >
                    {hotelConfig.contact.secondaryPhone}
                  </a>
                  <span className="text-[9px] text-[#A6A6A6] block">
                    Direct reception & enquiries
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={hotelConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors text-white text-xs block"
                  >
                    WhatsApp Reception
                  </a>
                  <span className="text-[9px] text-[#A6A6A6]">
                    Instant response
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C8A24A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white text-xs">24-Hour Front Desk</span>
                  <span className="text-[9px] text-[#A6A6A6] block">
                    Check-in / Check-out: 12:00 PM
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Location & Directions */}
          <div className="space-y-2.5">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A24A]">
              Location
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C8A24A] shrink-0 mt-0.5" />
              <div className="leading-snug text-[#A6A6A6] text-[11px]">
                <p className="text-white font-medium">Plot 209, Chief Henry Anamonye St</p>
                <p>Chikakore Layout, off Champion Road</p>
                <p>Kubwa, Abuja, FCT, Nigeria, 901101</p>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+209+Chief+Henry+Anamonye+Street+Chikakore+Kubwa+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#C8A24A] hover:text-white transition-colors font-medium"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Compact) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#A6A6A6] gap-3">
          <p>
            &copy; 2026 {hotelConfig.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Policies
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
