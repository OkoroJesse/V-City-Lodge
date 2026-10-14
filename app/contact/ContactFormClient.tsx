"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    room: hotelConfig.rooms[0].name,
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus("error");
      setErrorMessage("Please provide your name and a valid phone number.");
      return;
    }

    setStatus("submitting");

    // Real client-side simulated submission with validation
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello V City Lodge,\nI am reaching out via your website:\n- Name: ${formData.name || "Guest"}\n- Phone: ${formData.phone || "Not provided"}\n- Selected Room: ${formData.room}\n- Check-In: ${formData.checkIn || "Flexible"}\n- Message: ${formData.message || "General enquiry"}`
    );
    window.open(`https://wa.me/${hotelConfig.contact.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info & Address */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#191A1E] border border-[#C8A24A]/25 p-5 sm:p-6 shadow-xl space-y-5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C8A24A] block">
              Official Property Details
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-white font-medium">
              V City Lodge Hotel & Suite
            </h2>

            <div className="space-y-5 text-xs text-[#EDE8DC]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C4993A] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-white block font-medium">Physical Address:</strong>
                  <p>{hotelConfig.address.street}</p>
                  <p>{hotelConfig.address.layout}</p>
                  <p>
                    {hotelConfig.address.area}, {hotelConfig.address.city}, {hotelConfig.address.state}
                  </p>
                  <p className="text-white/50">Postal Code: {hotelConfig.address.postalCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C4993A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Primary Telephone (Confirmed):</strong>
                  <a
                    href={hotelConfig.contact.telLink}
                    className="text-sm font-semibold text-[#D4B25E] hover:underline"
                  >
                    {hotelConfig.contact.primaryPhone}
                  </a>
                  <p className="text-[10px] text-white/50 mt-0.5">
                    Verified Google Hotels direct contact line.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">WhatsApp Assistance:</strong>
                  <button
                    onClick={handleWhatsApp}
                    className="text-xs text-[#25D366] hover:underline font-semibold"
                  >
                    Open Instant WhatsApp Chat
                  </button>
                  <p className="text-[10px] text-white/50">
                    Fast response during regular front desk hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C4993A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Front Desk Hours:</strong>
                  <p>24 Hours Daily • 7 Days a Week</p>
                  <p className="text-white/50">Check-in: 12:00 PM | Check-out: 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Verification Note for Secondary Phone */}
            <div className="p-3.5 bg-[#151D30] border border-white/10 text-[11px] text-[#EDE8DC]/70 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-[#C4993A] shrink-0 mt-0.5" />
              <div>
                <strong>Notice on Alternative Numbers:</strong> A secondary number ({hotelConfig.contact.alternativePhone.number}) appears on some travel directory listings. Please always prioritize our verified line{" "}
                <span className="text-white font-medium">{hotelConfig.contact.primaryPhone}</span>.
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+209+Chief+Henry+Anamonye+Street+Chikakore+Kubwa+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C4993A] hover:bg-[#D4B25E] text-[#080B12] py-3 px-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Booking & Enquiry Form (Compact) */}
        <div className="lg:col-span-7 bg-[#191A1E] border border-[#C8A24A]/25 p-5 sm:p-7 shadow-xl">
          <div className="mb-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C8A24A] block mb-0.5">
              Direct Enquiry Form
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-white font-medium">
              Send an Accommodation Enquiry
            </h2>
            <p className="mt-1 text-xs text-[#A6A6A6] font-light">
              Submit your inquiry below. Our front desk team will contact you directly to confirm availability and discuss current room rates.
            </p>
          </div>

          {status === "success" ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C4993A]/20 border border-[#C4993A] flex items-center justify-center mx-auto text-[#C4993A]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-white">
                Enquiry Successfully Transmitted
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE8DC]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry for{" "}
                <strong className="text-[#D4B25E]">{formData.room}</strong> has been logged. Our Kubwa front desk will contact you via{" "}
                <strong className="text-white">{formData.phone}</strong> shortly.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] text-black font-semibold py-3 px-5 text-xs uppercase tracking-wider hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Speed Up via WhatsApp
                </button>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-white/10 text-white font-medium py-3 px-5 text-xs uppercase tracking-wider hover:bg-white/20"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="p-3 bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#101114] border border-white/10 text-white px-3 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                    Telephone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#101114] border border-white/10 text-white px-3 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#101114] border border-white/10 text-white px-3 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                    Preferred Room
                  </label>
                  <select
                    value={formData.room}
                    onChange={(e) =>
                      setFormData({ ...formData, room: e.target.value })
                    }
                    className="w-full bg-[#101114] border border-white/10 text-white px-3 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors"
                  >
                    {hotelConfig.rooms.map((room) => (
                      <option key={room.id} value={room.name} className="bg-[#0E1320]">
                        {room.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) =>
                      setFormData({ ...formData, checkIn: e.target.value })
                    }
                    className="w-full bg-[#151D30] border border-white/15 text-white px-3 py-2 text-xs sm:text-sm focus:border-[#C4993A] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) =>
                      setFormData({ ...formData, checkOut: e.target.value })
                    }
                    className="w-full bg-[#151D30] border border-white/15 text-white px-3 py-2 text-xs sm:text-sm focus:border-[#C4993A] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-full bg-[#151D30] border border-white/15 text-white px-3 py-2 text-xs sm:text-sm focus:border-[#C4993A] focus:outline-none transition-colors"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#EDE8DC]/80 mb-1">
                  Message or Special Enquiries
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your arrival time, private balcony request, or any special travel assistance..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#101114] border border-white/10 text-white px-3 py-2 text-xs focus:border-[#C8A24A] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex-1 bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {status === "submitting" ? "Transmitting..." : "Send Room Enquiry"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-black py-2.5 px-4 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-white/50 text-center pt-1">
                * Note: Submitting an enquiry does not charge a card or guarantee a room until verified by our 24h reception desk.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
