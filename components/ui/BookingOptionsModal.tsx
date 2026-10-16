"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, MessageSquare } from "lucide-react";
import { hotelConfig, BookingPlatform } from "@/data/hotel-config";

interface BookingOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomName?: string;
}

export function BookingOptionsModal({
  isOpen,
  onClose,
  selectedRoomName,
}: BookingOptionsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] bg-[#191A1E] border border-[#C8A24A]/30 p-5 shadow-2xl shadow-black/80 rounded-none text-left"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 p-1 text-[#A6A6A6] hover:text-white transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#C8A24A]"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="pr-6">
              <div className="flex items-center gap-1.5 mb-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C8A24A]">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Reservation</span>
              </div>
              <h2
                id="booking-modal-title"
                className="font-serif text-lg text-white font-medium tracking-tight"
              >
                Choose Where to Book
              </h2>
              <p className="text-[12px] text-[#A6A6A6] mt-0.5 leading-snug">
                Continue to your preferred booking platform.
              </p>
            </div>

            {/* Optional Room Context */}
            {selectedRoomName && (
              <div className="mt-3 py-1.5 px-2.5 bg-[#101114] border border-white/8 text-[11px] text-[#F6F2E9]/80 flex items-center justify-between">
                <span className="text-[#A6A6A6]">Room:</span>
                <span className="font-medium text-[#C8A24A] truncate max-w-[210px]">
                  {selectedRoomName}
                </span>
              </div>
            )}

            {/* Platform List */}
            <div className="mt-3.5 divide-y divide-white/6 border-t border-b border-white/6">
              {hotelConfig.bookingPlatforms.map((platform: BookingPlatform) => {
                const isDirect = platform.isDirect;
                return (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className={`group flex items-center justify-between py-2.5 px-2 text-xs transition-colors hover:bg-white/4 ${
                      isDirect
                        ? "text-[#C8A24A] hover:text-[#d4b464] font-medium"
                        : "text-[#F6F2E9]/90 hover:text-white font-normal"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {isDirect ? (
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A24A]/60 group-hover:bg-[#C8A24A] shrink-0" />
                      )}
                      <span className="truncate">{platform.name}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {platform.badge && (
                        <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 bg-[#C8A24A]/15 text-[#C8A24A] border border-[#C8A24A]/30 font-semibold">
                          {platform.badge}
                        </span>
                      )}
                      <ExternalLink className="w-3 h-3 text-[#A6A6A6] group-hover:text-[#C8A24A] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Direct Telephone Option */}
            <div className="mt-3 text-center text-[11px] text-[#A6A6A6] flex items-center justify-center gap-1.5 flex-wrap">
              <span>Or call:</span>
              <a
                href={hotelConfig.contact.telLink}
                className="text-white hover:text-[#C8A24A] font-medium underline underline-offset-2 transition-colors"
              >
                {hotelConfig.contact.primaryPhone}
              </a>
              <span>/</span>
              <a
                href={hotelConfig.contact.secondaryTelLink}
                className="text-white hover:text-[#C8A24A] font-medium underline underline-offset-2 transition-colors"
              >
                {hotelConfig.contact.secondaryPhone}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
