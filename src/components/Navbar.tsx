"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Employee Transportation", href: "/services#transportation" },
      { label: "Manpower & Facility", href: "/services#manpower" },
      { label: "Corporate Security", href: "/services#security" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 md:px-8 text-xs font-medium hidden md:flex justify-between items-center">
        <div className="flex gap-6">
          <a
            href="mailto:info@hibluesolutions.in"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} />
            info@hibluesolutions.in
          </a>
          <a
            href="tel:9902035353"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={13} />
            +91 9902035353
          </a>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
          Available 24/7 · Trusted by 100+ Corporates in Bangalore
        </div>
      </div>

      {/* ── Main Nav ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 py-2"
            : "bg-white py-3"
        }`}
      >
        <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo & Mobile Brand Text */}
          <Link href="/" className="flex items-center gap-3 z-50 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hibluesolutions.in/wp-content/uploads/2022/12/HBS.png"
              alt="Hi Blue Solutions"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-10 lg:h-20" : "h-12 lg:h-24"
              }`}
            />
            <span 
              className="lg:hidden text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hi Blue Solutions
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#0170B9] transition-colors group">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden min-w-56">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 px-5 py-3.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-[#0170B9] transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0170B9] shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#0170B9] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#0170B9] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </Link>
              )
            )}

            <Link
              href="/contact"
              className="relative ml-4 bg-[#0170B9] text-white px-6 py-2.5 rounded-full hover:bg-[#015a9a] transition-all shadow-md hover:shadow-lg hover:shadow-blue-200 flex items-center gap-2 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#015a9a] to-[#0170B9] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-slate-800 rounded-lg hover:bg-slate-100 transition focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blur Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        {/* Slide Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hibluesolutions.in/wp-content/uploads/2022/12/HBS.png"
              alt="Hi Blue Solutions"
              className="h-10 w-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 transition"
              aria-label="Close menu"
            >
              <X size={22} className="text-slate-600" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col p-6 gap-1 flex-grow">
            {navLinks.map((link, i) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold text-base hover:bg-blue-50 hover:text-[#0170B9] transition-colors"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0170B9]" />
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:text-[#0170B9] hover:bg-blue-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Panel Footer */}
          <div className="p-6 border-t border-slate-100 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0170B9] text-white px-6 py-3.5 rounded-full font-bold w-full hover:bg-[#015a9a] transition shadow-lg"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <a
              href="tel:9902035353"
              className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-6 py-3.5 rounded-full font-semibold w-full hover:bg-slate-50 transition"
            >
              <Phone size={18} /> +91 9902035353
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
