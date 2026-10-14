"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bed, Users, ShieldCheck, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";

export function RoomsCatalogClient() {
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<string | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-8 sm:space-y-10">
          {hotelConfig.rooms.map((room, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-[#191A1E] border border-[#C8A24A]/20 overflow-hidden shadow-xl shadow-black/50 flex flex-col lg:grid lg:grid-cols-12 group hover:border-[#C8A24A]/50 transition-colors"
              >
                {/* Photo Column — Compact Height */}
                <div
                  className={`lg:col-span-7 relative min-h-[250px] sm:min-h-[320px] bg-black ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191A1E] via-transparent to-black/30 lg:hidden" />

                  {room.badge && (
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-[#C8A24A]/40 px-2.5 py-1">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-[#C8A24A]">
                        {room.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Column — Compact Padding (p-5 sm:p-6 lg:p-7) */}
                <div
                  className={`lg:col-span-5 p-5 sm:p-6 lg:p-7 flex flex-col justify-between ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-3.5">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#C8A24A] font-semibold block mb-0.5">
                        {room.view}
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl text-white font-medium">
                        {room.name}
                      </h2>
                      <p className="text-[11px] text-[#C8A24A] font-medium mt-0.5">
                        {room.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#F6F2E9]/75 font-light leading-relaxed">
                      {room.description}
                    </p>

                    {/* Room Specs — Compact Grid */}
                    <div className="p-3 bg-[#101114] border border-white/8 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-white/50 block">
                          Bed Type
                        </span>
                        <span className="text-white font-medium text-xs">{room.bedConfig}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-white/50 block">
                          Capacity
                        </span>
                        <span className="text-white font-medium text-xs">{room.maxOccupancy}</span>
                      </div>
                    </div>

                    {/* Key features bullets */}
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C8A24A] font-semibold block mb-1.5">
                        Key Features
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#F6F2E9]/75">
                        {room.features.slice(0, 4).map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#C8A24A] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions — Compact 36px Height */}
                  <div className="pt-4 mt-4 border-t border-white/8 flex items-center gap-2.5">
                    <button
                      onClick={() => setSelectedRoomForModal(room.name)}
                      className="flex-1 bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] py-2.5 px-4 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Room</span>
                    </button>

                    <Link
                      href={`/rooms/${room.slug}`}
                      className="py-2.5 px-4 bg-white/6 hover:bg-white/12 border border-white/12 text-white text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 text-[#C8A24A]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Policies banner */}
        <div className="mt-10 p-4 sm:p-5 bg-[#191A1E] border border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F6F2E9]/70">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C8A24A] shrink-0" />
            <div>
              <p className="text-white font-medium text-xs">Verified Hospitality Standards</p>
              <p className="text-[11px] text-[#A6A6A6]">Check-in & Check-out at 12:00 PM (Noon). 24-hour reception available.</p>
            </div>
          </div>
          <a
            href={hotelConfig.contact.telLink}
            className="text-[#C8A24A] hover:underline uppercase tracking-wider font-semibold text-xs shrink-0"
          >
            Front Desk: {hotelConfig.contact.primaryPhone}
          </a>
        </div>
      </div>

      <BookingOptionsModal
        isOpen={Boolean(selectedRoomForModal)}
        onClose={() => setSelectedRoomForModal(null)}
        selectedRoomName={selectedRoomForModal || undefined}
      />
    </>
  );
}
