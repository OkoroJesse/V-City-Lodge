import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { hotelConfig } from "@/data/hotel-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy commitments and guest data handling at V City Lodge Hotel & Suite Ltd.",
};

export default function PrivacyPage() {
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
              Guest Data Handling
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Privacy Statement
            </h1>
            <p className="mt-2 text-xs text-white/50">
              V City Lodge Hotel & Suite Ltd • Kubwa, Abuja
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#EDE8DC]/80 font-light leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                1. Information We Collect
              </h2>
              <p>
                When you make an accommodation enquiry or reservation request through our website, we collect only the personal information necessary to assist you. This includes your name, telephone number, email address (if provided), requested check-in and check-out dates, and any special stay preferences.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                2. Use of Your Information
              </h2>
              <p>
                Your contact details are used strictly by our 24-hour reception desk to communicate room availability, confirm seasonal pricing, answer queries, and coordinate your arrival at Plot 209, Chief Henry Anamonye Street, Chikakore Layout, Kubwa, Abuja.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                3. Third-Party Sharing
              </h2>
              <p>
                V City Lodge Hotel & Suite Ltd does not sell, trade, or distribute your personal contact information to third-party marketing services or advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-white font-medium">
                4. Contacting Management
              </h2>
              <p>
                If you have questions regarding your information or wish to update your contact details, please contact our front desk at{" "}
                <a
                  href={hotelConfig.contact.telLink}
                  className="text-[#D4B25E] underline"
                >
                  {hotelConfig.contact.primaryPhone}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
