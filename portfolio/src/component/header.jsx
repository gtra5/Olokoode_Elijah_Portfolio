import React, { useState, useEffect } from "react";
import { navLinks } from "../data/cardsData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Add a subtle backdrop when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Track active section with Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Close hit area */}
        <button
          className="absolute inset-0 w-full h-full cursor-default"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={-1}
        />

        <nav className="relative z-10 flex flex-col items-center gap-6">
          {navLinks.map(({ href, label }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-200 ${
                activeSection === href.slice(1)
                  ? "opacity-100 text-[#562fb1]"
                  : "opacity-80 hover:opacity-100 hover:text-[#562fb1]"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                opacity: menuOpen ? 1 : 0,
                transition:
                  "transform 0.4s ease, opacity 0.4s ease, color 0.2s",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-sm px-7 py-3 rounded-full bg-[#562fb1] text-white tracking-wide hover:bg-[#6d3fd4] transition-colors"
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              opacity: menuOpen ? 1 : 0,
              transition: "transform 0.4s ease, opacity 0.4s ease",
            }}
          >
            Hire me
          </a>
        </nav>
      </div>

      {/* ── Header bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/70 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "py-5 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-bold tracking-[0.14em] uppercase hover:opacity-80 transition-opacity"
          >
            Elijah<span className="text-[#562fb1]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className={`relative text-xs uppercase tracking-[0.15em] transition-opacity group ${
                  activeSection === href.slice(1)
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                {label}
                {/* Underline - full width when active, on hover otherwise */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#562fb1] transition-all duration-300 ${
                    activeSection === href.slice(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right side — CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-xs px-5 py-2.5 rounded-full bg-[#562fb1] text-white hover:bg-[#6d3fd4] transition-colors tracking-wide"
            >
              Hire me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden relative flex flex-col justify-center items-center w-9 h-9 focus:outline-none"
            >
              <span
                className="absolute block h-[1.5px] bg-current rounded-full transition-all duration-300"
                style={{
                  width: "22px",
                  transform: menuOpen ? "rotate(45deg)" : "translateY(-5px)",
                }}
              />
              <span
                className="absolute block h-[1.5px] bg-current rounded-full transition-all duration-300"
                style={{
                  width: "22px",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="absolute block h-[1.5px] bg-current rounded-full transition-all duration-300"
                style={{
                  width: "22px",
                  transform: menuOpen ? "rotate(-45deg)" : "translateY(5px)",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so content below doesn't hide behind fixed header */}
      <div className="h-[72px] sm:h-[80px]" />
    </>
  );
}
