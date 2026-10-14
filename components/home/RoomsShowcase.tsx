"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BedDouble, Users, Eye } from "lucide-react";
import { hotelConfig, RoomCategory } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";

export function RoomsShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState("");

  const handleBook = (roomName: string) => {
    setPreselectedRoom(roomName);
    setModalOpen(true);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#0D0F13]" aria-labelledby="rooms-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header (Compact: ~26px - 34px) */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="h-px w-6 bg-[#C8A24A]" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
                Accommodation
              </span>
            </div>
            <h2
              id="rooms-heading"
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
            >
              Rooms & Suites Collection
            </h2>
            <p className="mt-1.5 text-xs sm:text-[13px] text-[#A6A6A6] font-light max-w-lg leading-relaxed">
              Six curated categories featuring private balconies, ambient illumination, executive work desks, and premium en-suite amenities.
            </p>
          </div>
          <Link
            href="/rooms"
            className="group inline-flex items-center gap-1.5 text-[#C8A24A] hover:text-[#d4b464] text-[11px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap transition-colors shrink-0"
          >
            <span>All 6 Categories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ─── Balanced 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hotelConfig.rooms.map((room, idx) => (
            <CompactRoomCard
              key={room.id}
              room={room}
              onBook={handleBook}
              idx={idx}
            />
          ))}
        </div>
      </div>

      <BookingOptionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedRoomName={preselectedRoom}
      />
    </section>
  );
}

function CompactRoomCard({
  room,
  onBook,
  idx,
}: {
  room: RoomCategory;
  onBook: (name: string) => void;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-[#191A1E] border border-[#C8A24A]/15 hover:border-[#C8A24A]/50 transition-all duration-300 shadow-sm"
    >
      {/* Room Photo — Controlled 16:10 Aspect Ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        {/* Badge (Subtle & Compact) */}
        {room.badge && (
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-[#C8A24A]/40 text-[9px] uppercase tracking-wider font-semibold text-[#C8A24A]">
            {room.badge}
          </div>
        )}
      </div>

      {/* Room Content — Tightened internal padding (p-4 sm:p-4.5) */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Room Title: 16–18px */}
          <h3 className="font-serif text-[17px] text-white font-medium leading-snug group-hover:text-[#F6F2E9] transition-colors">
            {room.name}
          </h3>

          {/* Description: 13px, clamped to 2 lines */}
          <p className="mt-1.5 text-[12px] sm:text-[13px] text-[#A6A6A6] font-light leading-relaxed line-clamp-2">
            {room.description}
          </p>

          {/* Metadata: 11px compact row */}
          <div className="mt-3 pt-2.5 border-t border-white/6 flex items-center justify-between text-[11px] text-[#A6A6A6]">
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span className="truncate max-w-[110px]">{room.bedConfig}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>{room.maxOccupancy}</span>
            </span>
          </div>
        </div>

        {/* Action Buttons — Consistent 36px height */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/rooms/${room.slug}`}
            className="text-center bg-white/6 hover:bg-white/12 border border-white/12 hover:border-[#C8A24A]/40 text-white text-[11px] uppercase tracking-wider font-semibold py-2 transition-all flex items-center justify-center"
          >
            Details
          </Link>
          <button
            onClick={() => onBook(room.name)}
            className="bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] text-[11px] uppercase tracking-wider font-bold py-2 transition-all hover:-translate-y-0.5 active:scale-[0.98] shadow-sm flex items-center justify-center"
          >
            Book
          </button>
        </div>
      </div>
    </motion.div>
  );
}
