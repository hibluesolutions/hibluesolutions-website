import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Car,
  Star,
  Phone,
  MapPin,
  Zap,
  Clock,
  Award,
  HeadphonesIcon,
  TrendingUp,
  Lock,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const services = [
  {
    id: "transportation",
    title: "Employee Transportation",
    subtitle: "GPS-Tracked Corporate Cabs",
    description:
      "End-to-end pick & drop services for MNCs, IT parks, and BPOs. Our verified drivers operate GPS-tracked fleets ensuring your employees reach safely — day or night.",
    image: "/hibluesolutions-website/images/service-transportation.jpg",
    href: "/services#transportation",
    features: [
      "GPS-tracked fleet 24/7",
      "Verified & uniformed drivers",
      "Route optimization software",
      "Night-shift & odd-hour coverage",
    ],
    icon: Car,
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "manpower",
    title: "Manpower & Facility",
    subtitle: "Complete Facility Management",
    description:
      "Expert staffing solutions for facility management, cafeteria operations, electrical maintenance, and housekeeping — all trained, certified, and ready to deploy.",
    image: "/hibluesolutions-website/images/service-manpower.jpg",
    href: "/services#manpower",
    features: [
      "Trained & certified personnel",
      "Cafeteria & housekeeping",
      "Electrical & soft services",
      "Scalable workforce solutions",
    ],
    icon: Users,
    color: "from-indigo-600 to-indigo-800",
  },
  {
    id: "security",
    title: "Corporate Security",
    subtitle: "Elite Security Personnel",
    description:
      "Highly trained security guards providing 24/7 surveillance, access control, and complete perimeter protection for corporate campuses and industrial facilities.",
    image: "/hibluesolutions-website/images/service-security.jpg",
    href: "/services#security",
    features: [
      "Ex-servicemen & trained guards",
      "CCTV & access control",
      "Industrial security specialists",
      "Zero-incident track record",
    ],
    icon: ShieldCheck,
    color: "from-slate-700 to-slate-900",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "GPS-Powered Transport",
    desc: "Real-time fleet tracking cuts costs and ensures employee safety on every route.",
  },
  {
    icon: Users,
    title: "Single Point of Contact",
    desc: "One account manager for transportation, manpower, and security — zero friction.",
  },
  {
    icon: Award,
    title: "10+ Years of Trust",
    desc: "Over a decade of serving MNCs, IT parks, and BPOs with consistent excellence.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Round-the-clock operations team for immediate response to any situation.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    desc: "Advanced route analytics and utilization reports reduce your transport overheads.",
  },
  {
    icon: Lock,
    title: "Strict Confidentiality",
    desc: "Professional ethics and strict confidentiality with every client engagement.",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Understand your specific requirements and current pain points." },
  { step: "02", title: "Tailored Proposal", desc: "Customized service plan with transparent pricing and SLAs." },
  { step: "03", title: "Swift Deployment", desc: "Rapid onboarding with zero disruption to your operations." },
  { step: "04", title: "Ongoing Support", desc: "Continuous monitoring, reporting, and dedicated account management." },
];

const stats = [
  { target: 600, suffix: "+", label: "Projects Completed", icon: Award },
  { target: 10, suffix: "+", label: "Years of Excellence", icon: Clock },
  { target: 100, suffix: "+", label: "Corporate Clients", icon: Users },
  { target: 24, suffix: "/7", label: "Support Available", icon: HeadphonesIcon },
];

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════
          §1  HERO — Full-Viewport Split Layout
      ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hibluesolutions-website/images/hero-bg.jpg"
            alt="Hi Blue Solutions Corporate Fleet"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Subtle animated grid overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,112,185,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(1,112,185,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0170B9]/15 border border-[#0170B9]/30 text-blue-300 font-semibold text-sm mb-8 backdrop-blur-sm animate-fade-in-up">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              #1 Corporate Services Provider in Bangalore
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight animate-fade-in-up delay-100"
              
            >
              Corporate Services{" "}
              <br className="hidden md:block" />
              <span className="inline-block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#0170B9] to-[#38bdf8] animate-gradient">
                Built for MNCs.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              Trusted by 100+ corporates across Bangalore — we provide premium
              Employee Transportation, Facility Manpower, and Corporate Security
              so your team can focus on what matters most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link
                href="/contact"
                className="relative bg-[#0170B9] text-white px-9 py-4 rounded-full font-bold text-lg hover:bg-[#015a9a] transition-all shadow-[0_0_30px_rgba(1,112,185,0.45)] flex items-center justify-center gap-2 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-9 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Inline Trust Signals */}
            <div className="mt-12 flex flex-wrap gap-6 animate-fade-in-up delay-400">
              {[
                "GPS-Tracked Fleets",
                "Verified Personnel",
                "24/7 Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle2 size={16} className="text-[#38bdf8]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Stats Pill — Desktop */}
        <div className="hidden lg:flex absolute bottom-0 right-0 z-20 bg-white rounded-tl-3xl shadow-2xl">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-10 py-7 flex flex-col items-center ${
                i < stats.length - 1 ? "border-r border-slate-100" : ""
              }`}
            >
              <div className="text-3xl font-black text-slate-900 mb-0.5">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          §2  SERVICES — Image Cards with Hover Zoom
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
              What We Do
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5"
              
            >
              Integrated Support Functions
            </h2>
            <p className="text-lg text-slate-600">
              A single-window solution to reduce organizational risk, time, and
              cost in managing multiple support suppliers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover bg-white"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle dark gradient at bottom for text readability, no color tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    {/* Icon Pill */}
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <p className="text-[#0170B9] text-xs font-bold tracking-widest uppercase mb-1">
                      {svc.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3" >
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {svc.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0170B9] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-[#0170B9] font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          §3  ABOUT / WHY US — Split Section
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left – Image */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-transparent rounded-[3rem] -z-10" />
              <div className="absolute top-8 -left-8 w-32 h-32 bg-[#0170B9] rounded-2xl opacity-10 -z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hibluesolutions-website/images/about-team.jpg"
                alt="Hi Blue Solutions Leadership Team"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#0170B9] text-white rounded-2xl px-6 py-4 shadow-xl shadow-blue-200">
                <div className="text-3xl font-black">10+</div>
                <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                  Years of Service
                </div>
              </div>
            </div>

            {/* Right – Content */}
            <div className="lg:w-1/2">
              <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
                About Hi Blue Solutions
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
                
              >
                Driven by ethics &amp; values for over a decade.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Hi Blue Solutions is a Bangalore-based integrated corporate services company
                trusted by 100+ MNCs and BPOs. We combine technology, trained people,
                and ethical operations to deliver seamless support functions.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  {
                    title: "Technology-Driven Operations",
                    desc: "Advanced GPS tracking, route analytics, and digital workforce management for peak efficiency.",
                  },
                  {
                    title: "Single Window — Zero Hassle",
                    desc: "Consolidate all support functions under one trusted partner. One invoice, one point of contact.",
                  },
                  {
                    title: "Ethics & Integrity First",
                    desc: "Every employee is verified, trained, and operates under strict professional ethics.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-full shrink-0 mt-0.5">
                      <CheckCircle2 className="text-[#0170B9]" size={18} />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">{item.title}</strong>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors"
                >
                  Our Full Story <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:9902035353"
                  className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-[#0170B9] hover:text-[#0170B9] transition-colors"
                >
                  <Phone size={18} /> Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          §4  WHY CHOOSE US — Dark Feature Grid
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0170B9] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38bdf8] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#38bdf8] font-bold tracking-widest uppercase text-xs mb-3">
              Why Choose Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-5"
              
            >
              The Hi Blue Solutions Difference
            </h2>
            <p className="text-slate-400 text-lg">
              We go beyond basic services — we become your long-term operations partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-slate-900/60 border border-slate-800 rounded-2xl p-7 hover:border-[#0170B9]/50 hover:bg-slate-900 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0170B9]/10 border border-[#0170B9]/20 flex items-center justify-center mb-5 group-hover:bg-[#0170B9] group-hover:border-[#0170B9] transition-all duration-300">
                    <Icon size={22} className="text-[#38bdf8] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2" >
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          §5  PROCESS TIMELINE — 4 Steps
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
              How It Works
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
              
            >
              From Inquiry to Operations in Days
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0170B9] via-[#38bdf8] to-[#0170B9] z-0" />

            {processSteps.map((step, i) => (
              <div key={step.step} className="relative z-10 text-center group">
                {/* Step Number Circle */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#0170B9] flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 group-hover:shadow-blue-100 group-hover:shadow-xl">
                  <span
                    className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0170B9] to-[#38bdf8]"
                    
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2" >
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          §6  STATS COUNTER — Animated Numbers
      ════════════════════════════════════════════ */}
      <section className="py-20 bg-[#0170B9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-white/80" />
                  </div>
                  <div
                    className="text-4xl md:text-5xl font-black text-white mb-2"
                    
                  >
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          §7  TESTIMONIALS CAROUSEL
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
              Client Testimonials
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
              
            >
              Trusted by Industry Leaders
            </h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          §8  CTA BANNER — Full Width Premium
      ════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0170B9]/20 via-transparent to-[#38bdf8]/10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,112,185,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(1,112,185,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#38bdf8] font-bold tracking-widest uppercase text-xs mb-4">
              Ready to Get Started?
            </p>
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              
            >
              Looking for trusted corporate <br className="hidden md:block" />
              services in Bangalore?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Let our team manage your transportation, manpower, and security — so you
              can focus 100% on your core business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#0170B9] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#015a9a] transition-all shadow-[0_0_40px_rgba(1,112,185,0.4)] flex items-center justify-center gap-2 group"
              >
                Schedule a Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:9902035353"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                +91 9902035353
              </a>
            </div>

            {/* Trust Line */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
              {[
                { icon: MapPin, text: "Headquartered in Bengaluru" },
                { icon: CheckCircle2, text: "ISO Certified Operations" },
                { icon: Star, text: "5-Star Client Satisfaction" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={16} className="text-[#38bdf8]" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
