"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Users, Home, ArrowRight, ChevronDown } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";

export function QuickCheckinWidget() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(hotelConfig.rooms[0].name);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [dateError, setDateError] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
    setMinDate(today);
    setCheckInDate(today);
    setCheckOutDate(tomorrow);
  }, []);

  const handleCheckOut = (value: string) => {
    setCheckOutDate(value);
    if (checkInDate && value && value <= checkInDate) {
      setDateError("Check-out must be after check-in.");
    } else {
      setDateError("");
    }
  };

  const handleCheckIn = (value: string) => {
    setCheckInDate(value);
    if (checkOutDate && value >= checkOutDate) {
      const next = new Date(value);
      next.setDate(next.getDate() + 1);
      setCheckOutDate(next.toISOString().split("T")[0]);
      setDateError("");
    }
  };

  const handleCheckAvailability = () => {
    if (dateError) return;
    setModalOpen(true);
  };

  return (
    <>
      {/* Docked below hero — compact, refined padding */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-7">
        <div className="bg-[#191A1E] border border-[#C8A24A]/25 shadow-xl shadow-black/60">
          <div className="p-3.5 sm:p-4 lg:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
              {/* Room Type */}
              <div className="lg:col-span-2">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1 flex items-center gap-1.5">
                  <Home className="w-3 h-3 text-[#C8A24A]" />
                  Room / Suite
                </label>
                <div className="relative">
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full appearance-none bg-[#101114] border border-white/10 text-white px-3 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors pr-8 cursor-pointer hover:border-white/20"
                  >
                    {hotelConfig.rooms.map((room) => (
                      <option key={room.id} value={room.name} className="bg-[#191A1E]">
                        {room.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-[#A6A6A6] pointer-events-none" />
                </div>
              </div>

              {/* Check-In */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#C8A24A]" />
                  Check-In
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => handleCheckIn(e.target.value)}
                  min={minDate || undefined}
                  className="w-full bg-[#101114] border border-white/10 text-white px-3 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors hover:border-white/20 [color-scheme:dark]"
                />
              </div>

              {/* Check-Out */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#C8A24A]" />
                  Check-Out
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => handleCheckOut(e.target.value)}
                  min={checkInDate || minDate || undefined}
                  className={`w-full bg-[#101114] border text-white px-3 py-2 text-xs focus:outline-none transition-colors hover:border-white/20 [color-scheme:dark] ${
                    dateError ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-[#C8A24A]"
                  }`}
                />
                {dateError && (
                  <p className="text-[9px] text-red-400 mt-0.5">{dateError}</p>
                )}
              </div>

              {/* Guests + Compact Check Availability */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1 flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-[#C8A24A]" />
                  Guests
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full appearance-none bg-[#101114] border border-white/10 text-white px-2.5 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors pr-6 cursor-pointer hover:border-white/20"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4+ Guests</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#A6A6A6] pointer-events-none" />
                  </div>
                  <button
                    onClick={handleCheckAvailability}
                    disabled={!!dateError}
                    className="shrink-0 bg-[#C8A24A] hover:bg-[#d4b464] disabled:opacity-50 disabled:cursor-not-allowed text-[#101114] px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-1 shadow-sm"
                  >
                    <span>Check</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingOptionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedRoomName={selectedRoom}
      />
    </>
  );
}
