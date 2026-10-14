"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare, Calendar } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";

export function BookingCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-14 sm:py-20 bg-[#101114] relative overflow-hidden" aria-label="Book Your Stay">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Copy (Compact) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#C8A24A]" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C8A24A]">
                Reserve Your Stay
              </span>
            </div>

            <h2
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
            >
              Plan Your Visit to V City Lodge
            </h2>

            <p className="text-[#A6A6A6] font-light leading-relaxed text-xs sm:text-sm max-w-md">
              Our 24-hour reception team confirms live room availability and verified pricing directly — or book across major platforms.
            </p>

            {/* Compact Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-[#F6F2E9]/75">
              {[
                "Direct confirmation with hotel",
                "24-hour reception desk",
                "Verified Google Hotels listing",
                "Check-in & out at 12:00 PM",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8A24A]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact actions (Compact ~44px button height) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2.5"
          >
            {/* Primary Booking Trigger */}
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center justify-between w-full bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] px-5 py-3.5 transition-all hover:-translate-y-0.5 active:scale-[0.99] shadow-sm text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#101114]/15 flex items-center justify-center rounded">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.16em]">Choose Where to Book</div>
                  <div className="text-[11px] opacity-80">Book Direct, Agoda, Expedia, Google Hotels</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* WhatsApp */}
            <a
              href={hotelConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-[#191A1E] hover:bg-[#1a2b1e] border border-[#25D366]/20 hover:border-[#25D366]/50 text-white px-5 py-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#25D366]/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Message on WhatsApp</div>
                  <div className="text-[10px] text-[#A6A6A6]">Instant response from reception</div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#25D366]/60 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

            {/* Call */}
            <a
              href={hotelConfig.contact.telLink}
              className="group flex items-center justify-between w-full bg-[#191A1E] hover:bg-[#222530] border border-white/10 hover:border-[#C8A24A]/40 text-white px-5 py-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-white/15 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Call Front Desk Directly</div>
                  <div className="text-xs text-[#C8A24A] font-medium">{hotelConfig.contact.primaryPhone}</div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8A24A]/60 group-hover:text-[#C8A24A] group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          </motion.div>
        </div>
      </div>

      <BookingOptionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
