"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Users,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowLeft,
  Calendar,
  Clock,
  Car,
  Wifi,
  Sparkles,
  Maximize2,
} from "lucide-react";
import { RoomCategory, hotelConfig } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";
import { LightboxModal } from "@/components/ui/LightboxModal";

interface Props {
  room: RoomCategory;
}

export function RoomDetailClient({ room }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryItems = room.gallery.map((src, i) => ({
    src,
    title: `${room.name} - Photo ${i + 1}`,
    category: "Verified Room Photography",
  }));

  return (
    <div className="pt-20 pb-20 bg-[#101114]">
      {/* Breadcrumb / Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#F6F2E9]/70 hover:text-[#C8A24A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Rooms</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Section */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-1.5">
            {room.badge && (
              <span className="px-2 py-0.5 bg-[#C8A24A]/15 border border-[#C8A24A]/40 text-[9px] uppercase font-bold tracking-wider text-[#C8A24A]">
                {room.badge}
              </span>
            )}
            <span className="text-[11px] uppercase tracking-wider text-[#A6A6A6]">
              {room.view}
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
            {room.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#C8A24A] font-medium mt-1">
            {room.subtitle}
          </p>
        </div>

        {/* Room Gallery Grid (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-10">
          <div
            onClick={() => {
              setActiveImageIndex(0);
              setLightboxOpen(true);
            }}
            className="md:col-span-8 relative aspect-[16/10] overflow-hidden bg-black cursor-pointer group border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-colors"
          >
            <Image
              src={room.gallery[0] || room.image}
              alt={room.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-white flex items-center gap-1.5">
              <Maximize2 className="w-3 h-3 text-[#C8A24A]" />
              <span>Click to Enlarge</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            {room.gallery.slice(1, 3).map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveImageIndex(i + 1);
                  setLightboxOpen(true);
                }}
                className="relative aspect-[16/9] flex-1 overflow-hidden bg-black cursor-pointer group border border-[#C8A24A]/15 hover:border-[#C8A24A]/40 transition-colors"
              >
                <Image
                  src={img}
                  alt={`${room.name} detail view ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-md border border-white/10 text-[9px] text-[#C8A24A]">
                  View {i + 2}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content & Sticky Booking Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 bg-[#191A1E] border border-white/8 text-xs">
              <div className="flex items-center gap-2 text-[#F6F2E9]/80">
                <Bed className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-[#A6A6A6]">Bedding</div>
                  <div className="font-medium text-white truncate">{room.bedConfig}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#F6F2E9]/80">
                <Users className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-[#A6A6A6]">Guests</div>
                  <div className="font-medium text-white">{room.maxOccupancy}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#F6F2E9]/80">
                <Clock className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-[#A6A6A6]">Check-in/out</div>
                  <div className="font-medium text-white">12:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#F6F2E9]/80">
                <Wifi className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-[#A6A6A6]">Wi-Fi</div>
                  <div className="font-medium text-white">Included</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h2 className="font-serif text-xl text-white font-medium">Room Overview</h2>
              <p className="text-sm text-[#F6F2E9]/80 font-light leading-relaxed">
                {room.longDescription}
              </p>
            </div>

            {/* Verified Features */}
            <div className="space-y-3">
              <h2 className="font-serif text-xl text-white font-medium">Room Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F6F2E9]/80">
                {room.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#191A1E] border border-white/6">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Compact Booking Card */}
          <div className="lg:col-span-4 sticky top-20">
            <div className="p-5 bg-[#191A1E] border border-[#C8A24A]/30 shadow-xl space-y-4">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A24A] block">
                  Reserve This Suite
                </span>
                <h3 className="font-serif text-lg text-white font-medium mt-0.5">
                  {room.name}
                </h3>
                <p className="text-[11px] text-[#A6A6A6] mt-1 leading-relaxed">
                  Select your preferred platform or book directly with reception.
                </p>
              </div>

              <div className="space-y-2 pt-1 border-t border-white/8">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Choose Where to Book</span>
                </button>

                <a
                  href={`https://wa.me/${hotelConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Hello V City Lodge, I would like to reserve the ${room.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-black py-2.5 px-4 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Front Desk</span>
                </a>

                <a
                  href={hotelConfig.contact.telLink}
                  className="w-full bg-white/6 hover:bg-white/10 border border-white/12 text-white py-2 px-4 text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-3 h-3 text-[#C8A24A]" />
                  <span>{hotelConfig.contact.primaryPhone}</span>
                </a>
              </div>

              <div className="p-2.5 bg-[#101114] border border-white/6 text-[10px] text-[#A6A6A6] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <span>Zero reservation fees when booking direct.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingOptionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedRoomName={room.name}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryItems}
        currentIndex={activeImageIndex}
        onNext={() =>
          setActiveImageIndex((prev) => (prev + 1) % galleryItems.length)
        }
        onPrev={() =>
          setActiveImageIndex((prev) =>
            prev === 0 ? galleryItems.length - 1 : prev - 1
          )
        }
      />
    </div>
  );
}
