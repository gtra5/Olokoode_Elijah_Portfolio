import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCurveB from "../component/AnimatedCurveB";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const currentRef = useRef(null);

  useGSAP(
    () => {
      // About section
      gsap.fromTo(
        "[data-about-reveal]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
        },
      );

      // Cards
      gsap.fromTo(
        "[data-about-card]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: "[data-about-grid]", start: "top 82%" },
        },
      );
    },
    { scope: aboutRef },
  );

  useGSAP(
    () => {
      // "Currently" heading
      gsap.fromTo(
        "[data-current-reveal]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: currentRef.current, start: "top 82%" },
        },
      );

      // Currently cards
      gsap.fromTo(
        "[data-current-card]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "[data-current-grid]", start: "top 88%" },
        },
      );
    },
    { scope: currentRef },
  );

  return (
    <>
      {/* ── About section ── */}
      <section
        id="about"
        ref={aboutRef}
        className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-12"
      >
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-6xl">
          <h2
            data-about-reveal
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#562FB1]"
          >
            ✱ who i am
          </h2>
          <h2
            data-about-reveal
            className="text-3xl font-black uppercase tracking-tight text-[#141314] sm:text-5xl md:text-6xl"
          >
            About Me
          </h2>
        </div>

        {/* Two-column grid */}
        <div
          data-about-grid
          className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-2"
        >
          {/* LEFT — Bio card */}
          <div
            data-about-card
            className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl bg-gray-100 p-4 md:p-8 "
          >
            <AnimatedCurveB className="pointer-events-none absolute inset-0 h-full w-full text-black opacity-30" />
            <p className="relative z-10 text-[15px] leading-[1.75] text-gray-600">
              I'm a dedicated{" "}
              <span className="inline rounded bg-[#1a1a1a] px-1.5 text-[13px] font-semibold text-white">
                Frontend Developer
              </span>{" "}
              passionate about bridging the gap between complex logic and
              intuitive user interfaces. With a strong foundation in{" "}
              <span className="inline rounded bg-[#562fb1] px-1.5 text-[13px] font-semibold text-white">
                React.js, Next.js &amp; Tailwind CSS
              </span>
              , I build scalable web and mobile applications that prioritize
              performance and seamless user experiences.
            </p>
            <p className="relative z-10 text-[15px] leading-[1.75] text-gray-600">
              My approach combines technical precision with creative
              problem-solving — whether implementing Redux for state management
              or integrating 3D models to bring web projects to life. I refine
              my craft through{" "}
              <span className="inline rounded bg-[#562fb1] px-1.5 text-[13px] font-semibold text-white">
                NIIT
              </span>{" "}
              and{" "}
              <span className="inline rounded bg-[#562fb1] px-1.5 text-[13px] font-semibold text-white">
                Mastermind Series
              </span>
              , and stay active in the open-source community.
            </p>
          </div>

          {/* RIGHT — CTA card */}
          <div
            data-about-card
            className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-[#562fb1] p-4 md:p-8"
          >
            <AnimatedCurveB className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-30" />
            <div className="relative z-10">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Ready to collaborate
              </p>
              <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl">
                See what I bring to the table
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/70">
                My CV outlines the projects I've shipped, the tools I rely on,
                and the impact I've made. If you're looking for someone who
                moves fast and cares about quality — let's talk.
              </p>
              <div className="my-6 h-px w-10 rounded-full bg-white/20" />
            </div>
            <div className="relative z-10 mt-6">
              <a
                href="/Olokode_Elijah_Resume1.docx"
                download="Olokode_Elijah_Resume.docx"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#e63950] sm:w-auto sm:min-w-[240px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v12m0 0-4-4m4 4 4-4M4 20h16" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Currently section ── */}
      <section
        ref={currentRef}
        className="relative z-[5] w-full bg-[#141314] px-6 py-16 text-white sm:px-12 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p
            data-current-reveal
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40"
          >
            ✱ Currently
          </p>
          <h2
            data-current-reveal
            className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Building{" "}
            <span className="bg-[#562fb1] px-2">
              interactive 3D experiences
            </span>
            , shipping fast UIs, and obsessing over{" "}
            <span className="italic font-light">the details</span>.
          </h2>

          <div
            data-current-grid
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { tag: "Reading", val: "Refactoring UI" },
              { tag: "Listening", val: "Lo-fi & Afrobeats" },
              { tag: "Learning", val: "WebGPU shaders" },
            ].map((c) => (
              <div
                key={c.tag}
                data-current-card
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  {c.tag}
                </div>
                <div className="mt-1 text-lg font-semibold">{c.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
