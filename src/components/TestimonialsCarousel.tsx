"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    title: "Head of Administration",
    company: "Leading IT Park, Bangalore",
    rating: 5,
    text: "Hi Blue Solutions has been managing our 200+ employee transportation for 3 years now. The professionalism, punctuality, and GPS tracking system is exceptional. Our employees feel safe and valued. Highly recommended for any MNC in Bangalore.",
    initials: "RS",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Priya Nair",
    title: "Facilities Manager",
    company: "Fortune 500 BPO Company",
    rating: 5,
    text: "We outsourced our entire facility management — cafeteria, housekeeping, and electrical maintenance — to Hi Blue Solutions. The team is highly trained, responsive, and consistently maintains the highest standards. Best decision we made.",
    initials: "PN",
    color: "bg-indigo-600",
  },
  {
    id: 3,
    name: "Anand Krishnamurthy",
    title: "VP Operations",
    company: "Global Tech Corporation",
    rating: 5,
    text: "The corporate security services provided by Hi Blue Solutions are top-notch. Trained personnel, proper documentation, and zero incidents in 2 years of service. They are truly a single-window solution for all our support function needs.",
    initials: "AK",
    color: "bg-teal-600",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Quote Icon */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 rounded-full bg-[#0170B9]/10 flex items-center justify-center">
          <Quote className="text-[#0170B9]" size={32} />
        </div>
      </div>

      {/* Testimonial Card */}
      <div
        className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 transition-all duration-300 ${
          isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-slate-700 text-lg md:text-xl leading-relaxed text-center mb-8 italic">
          &ldquo;{t.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center justify-center gap-4">
          <div className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
            {t.initials}
          </div>
          <div className="text-left">
            <div className="font-bold text-slate-900 text-lg">{t.name}</div>
            <div className="text-slate-500 text-sm">{t.title}</div>
            <div className="text-[#0170B9] text-sm font-semibold">{t.company}</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center hover:bg-[#0170B9] hover:text-white hover:border-[#0170B9] transition-all group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-slate-600 group-hover:text-white" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#0170B9]" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center hover:bg-[#0170B9] hover:text-white hover:border-[#0170B9] transition-all group"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-slate-600 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
