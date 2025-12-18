"use client";

import React, { useState } from "react";

// simple data for each full-screen section
const SLIDES = [
  {
    label: "STORE OVERSIZED",
    title: "Oversized Comfort.",
    subtitle: "Curated Crocs & Birkenstock in bigger, comfier fits.",
    img: "/hero1.jpg",
  },
  {
    label: "CROCS SELECTION",
    title: "Classic & Mega Crush",
    subtitle: "From clean white classics to chunky platforms.",
    img: "/hero2.jpg",
  },
  {
    label: "BIRKENSTOCK LINEUP",
    title: "Arizona & Boston Essentials",
    subtitle: "Neutral suede, soft footbeds, everyday comfort.",
    img: "/hero3.jpg",
  },
  {
    label: "LAST PAIRS",
    title: "Final Sizes. Don’t Sleep.",
    subtitle: "End-of-run sizes and pre-loved steals, updated weekly.",
    img: "/birken1.jpg",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#2e2a24] bg-[#050505]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* LOGO */}
          <div className="text-xl md:text-2xl tracking-[0.25em] font-light whitespace-nowrap">
            STORE OVERSIZED
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#F5E9D3] font-medium"
            >
              Home
            </a>
            <a
              href="/crocs"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Crocs
            </a>
            <a
              href="/birkenstock"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Birkenstock
            </a>

            {/* ✅ SIZE LINK */}
            <a
              href="/size"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Size
            </a>

            <a
              href="/authenticity"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Authenticity
            </a>
            <a
              href="/contact"
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Contact
            </a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <button className="hidden text-xs uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3] md:inline-block">
              Cart (0)
            </button>

            <button
              className="md:hidden text-[#F5E9D3]"
              onClick={() => setIsMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <span className="block h-[2px] w-5 bg-[#F5E9D3]" />
                <span className="block h-[2px] w-5 bg-[#F5E9D3]" />
                <span className="block h-[2px] w-5 bg-[#F5E9D3]" />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#2e2a24] bg-[#050505]">
            <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#F5E9D3]"
              >
                Home
              </a>
              <a
                href="/crocs"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Crocs
              </a>
              <a
                href="/birkenstock"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Birkenstock
              </a>

              {/* ✅ SIZE LINK */}
              <a
                href="/size"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Size
              </a>

              <a
                href="/authenticity"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Authenticity
              </a>
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Contact
              </a>
              <button className="mt-2 text-left text-xs uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]">
                Cart (0)
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* FULLSCREEN SECTIONS */}
      <main className="bg-[#050505]">
        {SLIDES.map((slide, i) => (
          <section
            key={i}
            className="relative flex min-h-screen w-full items-end overflow-hidden"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,233,211,0.18),_transparent_55%)] mix-blend-soft-light" />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-24">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#C8B79A]">
                <span>{slide.label}</span>
                <span className="h-px w-10 bg-[#C8B79A]" />
                <span>
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              <h1 className="mt-4 text-3xl md:text-6xl font-light text-[#F5E9D3]">
                {slide.title}
              </h1>

              <p className="mt-3 max-w-xl text-sm md:text-base text-[#E8DCC2]">
                {slide.subtitle}
              </p>
            </div>
          </section>
        ))}

        <footer className="border-t border-[#2e2a24] bg-[#050505] py-10">
          <div className="mx-auto max-w-6xl px-4 text-sm text-[#C8B79A]">
            © {new Date().getFullYear()} STORE OVERSIZED
          </div>
        </footer>
      </main>
    </div>
  );
}
