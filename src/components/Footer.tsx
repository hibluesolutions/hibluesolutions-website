import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Employee Transportation", href: "/services#transportation" },
  { label: "Man Power Services", href: "/services#manpower" },
  { label: "Corporate Security", href: "/services#security" },
  { label: "Facility Management", href: "/services#manpower" },
  { label: "Tours & Travels", href: "/services#transportation" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.08C5.12 19.54 12 19.54 12 19.54s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon fill="white" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialLinks = [
  { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { Icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* ── Top Accent Bar ── */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0170B9] via-[#38bdf8] to-[#0170B9]" />

      <div className="container mx-auto px-4 md:px-8 pt-16 pb-10">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 – Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-white.png"
              alt="Hi Blue Solutions"
              className="h-14 lg:h-28 w-auto mb-6 brightness-200 object-contain"
            />
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              A single-window corporate solutions provider delivering efficient, safe,
              and reliable Employee Transportation, Facility Management, and Security
              services to MNCs and BPOs across Bangalore.
            </p>

            {/* Badges */}
            <div className="flex gap-3 flex-wrap mb-6">
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-semibold text-slate-300 border border-slate-700">
                ISO Certified
              </span>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-semibold text-slate-300 border border-slate-700">
                10+ Years
              </span>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-semibold text-slate-300 border border-slate-700">
                24/7 Support
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#0170B9] border border-slate-700 hover:border-[#0170B9] flex items-center justify-center transition-all duration-200 text-slate-400 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0170B9] group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0170B9] group-hover:w-3 transition-all duration-200" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wider uppercase">
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="text-[#0170B9]" size={16} />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  # 293, Bekkarle Complex, 1st Floor, 6th Main, 11th Block,
                  Nagarabhavi 2nd Stage, Bengaluru, Karnataka 560072.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="text-[#0170B9]" size={16} />
                </div>
                <a
                  href="mailto:info@hibluesolutions.in"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  info@hibluesolutions.in
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="text-[#0170B9]" size={16} />
                </div>
                <a
                  href="tel:9902035353"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  +91 9902035353
                </a>
              </li>
            </ul>

            {/* Quick CTA */}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#0170B9] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#015a9a] transition-all shadow-lg shadow-blue-900/30"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            Copyright &copy; {new Date().getFullYear()} Hi Blue Solutions. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Maintained by{" "}
            <span className="text-[#38bdf8] font-semibold">
              Thosho Tech
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
