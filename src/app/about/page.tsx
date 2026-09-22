import Link from "next/link";
import { Target, Heart, Award, CheckCircle2, ArrowRight, Phone, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = [
  {
    icon: Target,
    title: "Our Objective",
    desc: "To reduce organizational risk, time & cost by providing a single-window solution for all support function requirements — transportation, manpower, and security.",
    color: "bg-blue-50",
    iconColor: "text-[#0170B9]",
  },
  {
    icon: Heart,
    title: "Our Motto",
    desc: "We will serve our valuable customers by delivering the highest quality services and strive to attain total customer satisfaction through performance, hospitality, integrity, and honesty.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Award,
    title: "Our Promise",
    desc: "End-to-end services with professional ethics, strict integrity, and absolute confidentiality. Our clients trust us with their most critical operations.",
    color: "bg-slate-50",
    iconColor: "text-slate-700",
  },
];

const timeline = [
  { year: "2012", title: "Founded", desc: "Hi Blue Solutions established in Bangalore with a vision for ethical corporate services." },
  { year: "2015", title: "100+ Clients", desc: "Crossed 100 corporate clients across Bangalore's IT parks and BPO corridors." },
  { year: "2018", title: "Full-Stack Services", desc: "Expanded to complete facility management, adding manpower and security verticals." },
  { year: "2022", title: "Technology Upgrade", desc: "Integrated advanced GPS tracking and digital operations platform for all services." },
  { year: "Now", title: "Growing Strong", desc: "Serving 100+ MNCs with 600+ completed projects and zero-compromise service standards." },
];

const stats = [
  { target: 600, suffix: "+", label: "Projects Completed" },
  { target: 100, suffix: "+", label: "Corporate Clients" },
  { target: 10, suffix: "+", label: "Years of Experience" },
  { target: 500, suffix: "+", label: "Staff Deployed" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ── Page Hero ── */}
      <div className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,112,185,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(1,112,185,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#0170B9]/10 to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#38bdf8] font-bold tracking-widest uppercase text-xs mb-4">
              About Hi Blue Solutions
            </p>
            <h1
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              
            >
              A Decade of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#0170B9]">
                Ethics &amp; Excellence
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Driven by values and powered by technology, Hi Blue Solutions has been
              the most trusted corporate services partner in Bangalore for over 10 years.
            </p>
          </div>
        </div>
      </div>

      {/* ── Story Section ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-transparent rounded-[3rem] -z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-team.jpg"
                alt="Hi Blue Solutions Corporate Fleet"
                className="w-full rounded-[2.5rem] shadow-2xl aspect-[4/3] object-cover"
              />

              {/* Stats Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#0170B9] text-white rounded-2xl px-6 py-5 shadow-xl shadow-blue-200">
                <div className="text-3xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                  <AnimatedCounter target={600} suffix="+" />
                </div>
                <div className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
                Our Story
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
                
              >
                Built on trust, <br /> grown by results.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Hi Blue Solutions was founded in Bangalore with a simple but powerful belief —
                that corporate support services should be delivered with the same professionalism
                as any core business function.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Today, we are a full-spectrum integrated services partner for MNCs, IT parks,
                and BPOs across Bangalore — managing employee transportation, facility teams,
                and security personnel with zero compromise on quality.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Serving MNCs, IT & BPO companies since 2012",
                  "Technology-integrated GPS fleet management",
                  "100% verified & trained personnel",
                  "Strict ethical standards & confidentiality",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-[#0170B9]" size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0170B9] text-white px-8 py-4 rounded-full font-bold hover:bg-[#015a9a] transition-all shadow-lg shadow-blue-200 group"
              >
                Work With Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter ── */}
      <section className="py-20 bg-[#0170B9]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-4xl md:text-5xl font-black text-white mb-2"
                  
                >
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
              Our Principles
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
              
            >
              What drives us every day
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group card-hover">
                  <div className={`${v.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className={v.iconColor} />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-4"
                    
                  >
                    {v.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Company Timeline ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#0170B9] font-bold tracking-widest uppercase text-xs mb-3">
              Our Journey
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
              
            >
              A decade of milestones
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0170B9] to-slate-200 -translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-7 md:left-1/2 w-5 h-5 rounded-full bg-[#0170B9] border-4 border-white shadow-md -translate-x-2.5 mt-1 shrink-0 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <span className="inline-block bg-[#0170B9]/10 text-[#0170B9] font-bold text-sm px-3 py-1 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-bold text-slate-900 text-lg mb-1" >
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0170B9] to-[#015a9a] rounded-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <TrendingUp className="text-white/20 mx-auto mb-4" size={60} />
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-6"
              
            >
              Ready to elevate your operations?
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
              Our professional team is ready to provide a tailored proposal for your organization&apos;s exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#0170B9] px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-xl flex items-center justify-center gap-2 group"
              >
                Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:9902035353"
                className="bg-white/15 border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/25 transition flex items-center justify-center gap-2"
              >
                <Phone size={18} /> +91 9902035353
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
