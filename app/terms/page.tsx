import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck, Car } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export const metadata: Metadata = {
  title: "Reservation & Stay Policies",
  description:
    "Check-in, check-out, and reservation enquiry policies at V City Lodge Hotel & Suite Ltd, Kubwa, Abuja.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-24 bg-[#080B12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#EDE8DC]/70 hover:text-[#D4B25E] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <div className="border border-[#C4993A]/30 bg-[#0E1320] p-8 sm:p-12 shadow-2xl space-y-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C4993A] block mb-1">
              Guest Guidelines & Stay Information
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Reservation & Stay Policies
            </h1>
            <p className="mt-2 text-xs text-white/50">
              V City Lodge Hotel & Suite Ltd • Kubwa, Abuja
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#EDE8DC]/80 font-light leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                1. Check-In & Check-Out Times
              </h2>
              <p>
                Standard check-in begins at <strong>12:00 PM (Noon)</strong>. Standard check-out is at <strong>12:00 PM (Noon)</strong>. If you require early check-in or late departure, please notify our 24-hour reception desk in advance so we can assist based on availability.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                2. Nature of Website Enquiries
              </h2>
              <p>
                Submitting an enquiry via this website does not constitute an immediate confirmed booking or automated credit card charge. All reservations are verified and finalized directly with our front desk team to ensure accurate room rates and availability.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                3. On-Site Parking & Security
              </h2>
              <p>
                Complimentary self-parking is available within our gated perimeter on Plot 209, Chief Henry Anamonye Street. While on-site security personnel monitor the grounds 24 hours daily, guests are reminded to lock their vehicles and keep personal valuables secure.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                4. Questions & Direct Inquiries
              </h2>
              <p>
                For any questions regarding property policies or special corporate bookings, please contact our front desk at{" "}
                <a
                  href={hotelConfig.contact.telLink}
                  className="text-[#D4B25E] underline"
                >
                  {hotelConfig.contact.primaryPhone}
                </a>{" "}
                or message us via WhatsApp.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
