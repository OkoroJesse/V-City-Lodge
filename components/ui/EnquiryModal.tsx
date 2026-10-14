"use client";

import React from "react";
import { BookingOptionsModal } from "./BookingOptionsModal";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

/**
 * Re-exporting unified compact BookingOptionsModal as EnquiryModal
 * to ensure 100% backward compatibility with all existing booking buttons.
 */
export function EnquiryModal({
  isOpen,
  onClose,
  preselectedRoom,
}: EnquiryModalProps) {
  return (
    <BookingOptionsModal
      isOpen={isOpen}
      onClose={onClose}
      selectedRoomName={preselectedRoom}
    />
  );
}
