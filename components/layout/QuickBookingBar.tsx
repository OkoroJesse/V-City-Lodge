"use client";

import React, { useState } from "react";
import { Phone, Calendar, MessageSquare } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";

export function QuickBookingBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#101114]/95 backdrop-blur-md border-t border-[#C8A24A]/25 py-2 px-3 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={hotelConfig.contact.telLink}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-[#191A1E] text-[#F6F2E9] border border-white/10 text-[11px] font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
          title="Call Hotel Desk"
        >
          <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
          <span>Call</span>
        </a>

        <a
          href={hotelConfig.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 text-[11px] font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-black transition-colors"
          title="WhatsApp Hotel Desk"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="flex-1.5 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#C8A24A] text-[#101114] text-[11px] font-bold uppercase tracking-wider hover:bg-[#d4b464] transition-colors shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Stay</span>
        </button>
      </div>

      <BookingOptionsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
