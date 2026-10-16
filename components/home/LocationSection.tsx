"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, ArrowUpRight, Car } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export function LocationSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Plot+209+Chief+Henry+Anamonye+Street+Chikakore+Kubwa+Abuja";

  return (
    <section className="py-14 sm:py-20 bg-[#101114] relative" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-10">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-px w-6 bg-[#C8A24A]" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
              Location & Access
            </span>
          </div>
          <h2
            id="location-heading"
            className="font-serif font-normal text-white leading-tight"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
          >
            Finding V City Lodge in Kubwa
          </h2>
          <p className="mt-1.5 text-xs sm:text-[13px] text-[#A6A6A6] font-light leading-relaxed">
            A quiet residential enclave in Chikakore Layout off Champion Road, away from expressway noise while conveniently close to Kubwa central.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Address & Contact Card (Compact) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#191A1E] border border-[#C8A24A]/25 p-5 sm:p-6 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#101114] border border-white/10 text-[10px] text-[#C8A24A]">
                <MapPin className="w-3 h-3 text-[#C8A24A]" />
                <span>Verified Abuja Address</span>
              </div>

              <div>
                <h3 className="font-serif text-lg text-white font-medium mb-1.5">
                  Physical Location
                </h3>
                <div className="text-xs text-[#F6F2E9]/80 space-y-0.5 font-light leading-relaxed">
                  <p className="text-white font-medium">
                    {hotelConfig.address.street}
                  </p>
                  <p>{hotelConfig.address.layout}</p>
                  <p>
                    {hotelConfig.address.area}, {hotelConfig.address.city}
                  </p>
                  <p>
                    {hotelConfig.address.state}, {hotelConfig.address.country},{" "}
                    {hotelConfig.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/8 space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5 text-[#F6F2E9]/80">
                  <Phone className="w-3.5 h-3.5 text-[#C8A24A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-[#A6A6A6] block">
                      Direct Front Desk:
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <a
                        href={hotelConfig.contact.telLink}
                        className="text-[#C8A24A] hover:underline text-xs font-semibold"
                      >
                        {hotelConfig.contact.primaryPhone}
                      </a>
                      <span className="text-white/30 text-[11px]">•</span>
                      <a
                        href={hotelConfig.contact.secondaryTelLink}
                        className="text-[#C8A24A] hover:underline text-xs font-semibold"
                      >
                        {hotelConfig.contact.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-[#F6F2E9]/80">
                  <Clock className="w-3.5 h-3.5 text-[#C8A24A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-[#A6A6A6] block">Check-in / Check-out:</span>
                    <span className="text-xs">12:00 PM (Noon) • Reception Open 24h</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-[#F6F2E9]/80">
                  <Car className="w-3.5 h-3.5 text-[#C8A24A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-[#A6A6A6] block">Self-Parking:</span>
                    <span className="text-xs">Free secure on-site parking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] py-2.5 px-4 text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Map Visual (Compact) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#191A1E] border border-[#C8A24A]/20 relative min-h-[280px] sm:min-h-[320px] overflow-hidden flex flex-col"
          >
            <iframe
              title="V City Lodge Kubwa Location Map"
              src="https://maps.google.com/maps?q=Plot+209+Chief+Henry+Anamonye+Street+Chikakore+Kubwa+Abuja&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="flex-1 w-full min-h-[250px] border-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <div className="p-3 bg-[#101114] border-t border-white/8 flex items-center justify-between text-xs text-[#F6F2E9]/70">
              <span className="text-[11px]">Chikakore Layout, Kubwa, Abuja</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A24A] hover:underline flex items-center gap-1 text-[11px] font-medium"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
