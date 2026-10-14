import type { Metadata } from "next";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Contact V City Lodge Hotel & Suite Ltd in Kubwa, Abuja. Reach our 24-hour reception desk at +234 807 984 7797, get driving directions to Chikakore Layout, or send an enquiry.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-[#080B12]">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#0E1320] to-[#080B12] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C4993A]" />
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-[#C4993A]">
              Get In Touch
            </span>
            <span className="h-px w-6 bg-[#C4993A]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
            Contact & Directions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE8DC]/80 font-light max-w-2xl mx-auto leading-relaxed">
            We are here to assist with room enquiries, driving directions, and reservation assistance. Speak directly with our 24-hour front desk team in Kubwa.
          </p>
        </div>
      </section>

      {/* Interactive Contact & Form Layout */}
      <ContactFormClient />
    </div>
  );
}
