import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickBookingBar } from "@/components/layout/QuickBookingBar";
import { hotelConfig } from "@/data/hotel-config";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | V City Lodge Hotel & Suite Ltd",
    default: "V City Lodge Hotel & Suite Ltd | Kubwa, Abuja, Nigeria",
  },
  description:
    "Experience contemporary hospitality in Chikakore, Kubwa, Abuja. Modern guestrooms with private balconies, 24-hour reception, free secure parking, and tranquil comfort.",
  keywords: [
    "V City Lodge Hotel",
    "V City Lodge Kubwa",
    "Hotels in Kubwa Abuja",
    "Chikakore Layout hotels",
    "Abuja lodging",
    "Hotel and Suite Abuja",
    "Hotels near Champion Road Kubwa",
  ],
  authors: [{ name: "V City Lodge Hotel & Suite Ltd" }],
  creator: "V City Lodge Hotel & Suite Ltd",
  metadataBase: new URL("https://vcitylodge.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://vcitylodge.com",
    title: "V City Lodge Hotel & Suite Ltd | Kubwa, Abuja",
    description:
      "Modern comfort, private balconies, and 24-hour hospitality at Plot 209, Chief Henry Anamonye Street, Chikakore Layout, Kubwa, Abuja.",
    siteName: "V City Lodge Hotel & Suite Ltd",
    images: [
      {
        url: "/images/hotel/exterior-facade.jpg",
        width: 1200,
        height: 800,
        alt: "V City Lodge Hotel & Suite Facade in Kubwa, Abuja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V City Lodge Hotel & Suite Ltd",
    description: "Contemporary hotel and suites in Kubwa, Abuja, Nigeria.",
    images: ["/images/hotel/exterior-facade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080B12] text-[#F7F5EF] font-sans antialiased selection:bg-[#C4993A] selection:text-[#080B12]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickBookingBar />
      </body>
    </html>
  );
}
