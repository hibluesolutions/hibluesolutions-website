import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hi Blue Solutions | Premier Corporate Services in Bangalore",
  description:
    "Hi Blue Solutions provides world-class Employee Transportation, Facility Management & Manpower, and Corporate Security services for MNCs and BPOs in Bangalore. Trusted by 100+ corporates.",
  keywords:
    "employee transportation Bangalore, corporate cab service, facility management, manpower services, security guards Bangalore, BPO transport",
  openGraph: {
    title: "Hi Blue Solutions | Premier Corporate Services",
    description:
      "Trusted corporate transportation, manpower & security services for MNCs in Bangalore.",
    url: "https://hibluesolutions.in",
    siteName: "Hi Blue Solutions",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body
        className={`${inter.className} bg-white text-slate-900 min-h-screen flex flex-col antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
