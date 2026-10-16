"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Calendar, ChevronRight, MessageSquare } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";
import { BookingOptionsModal } from "@/components/ui/BookingOptionsModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Dining", href: "/#dining" },
    { name: "Experience", href: "/experience" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-[#101114]/95 backdrop-blur-md border-b border-[#C8A24A]/20 py-2 sm:py-2.5 shadow-lg shadow-black/50"
            : "bg-gradient-to-b from-black/85 via-black/35 to-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity (Compact) */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="V City Lodge Hotel & Suite Home"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#C8A24A]/50 bg-black/60 shadow-sm group-hover:border-[#C8A24A] transition-colors shrink-0">
                <Image
                  src={hotelConfig.branding.logoUrl}
                  alt="V City Lodge Gold Crest"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg tracking-wide text-white uppercase group-hover:text-[#C8A24A] transition-colors font-semibold leading-tight">
                  V City Lodge
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#C8A24A] uppercase font-medium">
                  Hotel & Suite • Abuja
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Compact & Refined) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[11px] uppercase tracking-[0.16em] font-medium transition-all py-1 ${
                      isActive
                        ? "text-[#C8A24A] font-semibold"
                        : "text-[#F6F2E9]/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C8A24A]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons (Compact height ~36px) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={hotelConfig.contact.telLink}
                className="hidden xl:flex items-center gap-1.5 text-[11px] tracking-wider text-[#F6F2E9]/80 hover:text-[#C8A24A] transition-colors px-2 py-1"
                title="Call front desk"
              >
                <Phone className="w-3 h-3 text-[#C8A24A]" />
                <span>{hotelConfig.contact.displayPhone}</span>
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#C8A24A] hover:bg-[#d4b464] text-[#101114] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Stay</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsModalOpen(true)}
                className="sm:hidden bg-[#C8A24A] text-[#101114] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-white hover:text-[#C8A24A] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#C8A24A]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Compact) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-[280px] bg-[#191A1E] border-l border-[#C8A24A]/30 h-full p-5 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#C8A24A]">
                    <Image
                      src={hotelConfig.branding.logoUrl}
                      alt="V City Lodge Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-serif text-white font-medium text-sm">V City Lodge</div>
                    <div className="text-[9px] uppercase tracking-widest text-[#C8A24A]">
                      Kubwa, Abuja
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white p-1"
                  aria-label="Close menu drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="py-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center justify-between py-1.5 text-xs uppercase tracking-wider transition-colors ${
                        isActive
                          ? "text-[#C8A24A] font-semibold"
                          : "text-[#F6F2E9]/80 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C8A24A]/50" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-[#C8A24A] text-[#101114] py-2.5 text-[11px] uppercase font-bold tracking-wider hover:bg-[#d4b464] transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Stay</span>
              </button>

              <a
                href={hotelConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 py-2 text-[11px] uppercase font-semibold tracking-wider hover:bg-[#25D366] hover:text-black transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Front Desk</span>
              </a>

              <div className="flex flex-col gap-1.5 pt-1">
                <a
                  href={hotelConfig.contact.telLink}
                  className="flex items-center gap-2 text-[11px] text-[#F6F2E9]/80 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
                  <span>{hotelConfig.contact.primaryPhone}</span>
                </a>
                <a
                  href={hotelConfig.contact.secondaryTelLink}
                  className="flex items-center gap-2 text-[11px] text-[#F6F2E9]/80 hover:text-white pl-5.5"
                >
                  <span>{hotelConfig.contact.secondaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Booking Options Modal */}
      <BookingOptionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
