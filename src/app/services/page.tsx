import { Car, Users, ShieldCheck, Check, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "transportation",
    title: "Employee Transportation Services",
    shortTitle: "Transportation",
    tagline: "GPS-Tracked · Verified Drivers · 24/7 Coverage",
    description:
      "Hi Blue Solutions is one of Bangalore's premier pick-and-drop service providers. Our experienced, verified drivers operate GPS-tracked fleets to ensure every employee — from IT engineers to BPO staff — commutes safely, comfortably, and on time.",
    image: "/images/service-transportation.jpg",
    icon: Car,
    features: [
      "MNC (IT & BPO) end-to-end transportation",
      "Local Transportation across Bangalore",
      "Package Trips & Tours / Travels",
      "Includes Fleets, Software & Support Staff",
      "GPS tracking & route optimization",
      "Night-shift and odd-hour coverage",
      "Female employee safety protocols",
      "Dedicated fleet coordinator",
    ],
    cta: "Book Transportation",
    stat: { value: "500+", label: "Vehicles Managed" },
    color: "from-blue-600 to-blue-900",
  },
  {
    id: "manpower",
    title: "Manpower & Facility Management",
    shortTitle: "Manpower",
    tagline: "Trained Staff · Scalable Workforce · All Domains",
    description:
      "We provide highly trained, industry-certified manpower for a wide spectrum of facility needs. From cafeteria management to electrical maintenance, our staff integrate seamlessly into your operations — reducing your vendor count and costs in one move.",
    image: "/images/service-manpower.jpg",
    icon: Users,
    features: [
      "Facility Management Services",
      "Cafeteria & Pantry Management",
      "Housekeeping & Soft Services",
      "Electrical & MEP Services",
      "Industrial Casual Labour",
      "Staffing & Workforce Solutions",
      "Network / IT support staff",
      "Rapid deployment within 48 hours",
    ],
    cta: "Request Manpower Quote",
    stat: { value: "300+", label: "Staff Deployed" },
    color: "from-indigo-600 to-indigo-900",
  },
  {
    id: "security",
    title: "Corporate Security Guard Services",
    shortTitle: "Security",
    tagline: "Trained Guards · Industrial Security · Zero Incidents",
    description:
      "Security and surveillance are non-negotiable for any reputed business. Our highly trained security personnel — including ex-servicemen — provide robust perimeter protection, access control, and 24/7 surveillance for corporate campuses and industrial facilities across Bangalore.",
    image: "/images/service-security.jpg",
    icon: ShieldCheck,
    features: [
      "Corporate & Industrial Security",
      "Ex-servicemen & trained guards",
      "CCTV surveillance management",
      "Access control & visitor management",
      "Emergency response protocols",
      "Uniform & equipment provided",
      "Regular training & audits",
      "Compliance with security regulations",
    ],
    cta: "Hire Security Personnel",
    stat: { value: "50+", label: "Locations Secured" },
    color: "from-slate-700 to-slate-900",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ── Page Hero ── */}
      <div className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,112,185,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(1,112,185,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0170B9]/10 to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#38bdf8] font-bold tracking-widest uppercase text-xs mb-4">
              Our Services
            </p>
            <h1
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              
            >
              A Single Window for All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#0170B9]">
                Support Functions
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Reduce organizational risk, time, and cost by consolidating transportation,
              manpower, and security under one trusted partner.
            </p>

            {/* Quick Nav */}
            <div className="flex flex-wrap gap-3 mt-8">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-[#0170B9] hover:border-[#0170B9] transition-all"
                >
                  <s.icon size={15} />
                  {s.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Objective Banner ── */}
      <div className="bg-blue-50 border-y border-blue-100 py-8">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#0170B9]">Our Objective:</strong> Hi Blue Solution&apos;s objective
            is to reduce the organization&apos;s risk, time &amp; cost in onboarding multiple
            suppliers for their support functions — housekeeping, facility, cafeteria,
            electrical, network, transportation &amp; security — all under one roof.
          </p>
        </div>
      </div>

      {/* ── Service Sections ── */}
      <div className="container mx-auto px-4 md:px-8 py-16 space-y-32">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          const isEven = i % 2 === 0;
          return (
            <div
              key={svc.id}
              id={svc.id}
              className={`scroll-mt-28 flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative group">
                {/* Decorative background blob */}
                <div
                  className={`absolute inset-0 ${
                    isEven
                      ? "bg-blue-50 translate-x-4 translate-y-4"
                      : "bg-slate-100 -translate-x-4 translate-y-4"
                  } rounded-3xl -z-10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6`}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl"
                />
                {/* Stat Badge */}
                <div className="absolute -bottom-6 left-6 bg-[#0170B9] text-white rounded-2xl px-6 py-4 shadow-xl shadow-blue-200">
                  <div
                    className="text-2xl font-black"
                    
                  >
                    {svc.stat.value}
                  </div>
                  <div className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                    {svc.stat.label}
                  </div>
                </div>
                {/* Icon pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <Icon className="text-[#0170B9]" size={28} />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 pt-8 lg:pt-0">
                <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
                  {svc.tagline}
                </p>
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight"
                  
                >
                  {svc.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {svc.description}
                </p>

                {/* Features Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-700 text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="text-[#0170B9]" size={12} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#0170B9] text-white px-8 py-4 rounded-full font-bold hover:bg-[#015a9a] transition-all shadow-lg shadow-blue-200 group"
                  >
                    {svc.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:9902035353"
                    className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-[#0170B9] hover:text-[#0170B9] transition-colors"
                  >
                    <Phone size={16} />
                    Quick Enquiry
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-slate-950 py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
            
          >
            Ready to consolidate your support functions?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Get a customized proposal with transparent pricing for your organization&apos;s specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#0170B9] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#015a9a] transition shadow-[0_0_30px_rgba(1,112,185,0.4)] flex items-center justify-center gap-2 group"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:9902035353"
              className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition flex items-center justify-center gap-2"
            >
              <Phone size={18} /> +91 9902035353
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
