import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCurveB from "../component/AnimatedCurveB";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const rootRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [mode, setMode] = useState("email"); // "email" | "qr"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setStatus("sent");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message.");
      setStatus("idle");
    }
  };

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-contact-reveal]",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative w-full bg-[#141314] text-white px-6 sm:px-12 py-24 overflow-hidden"
    >
      <AnimatedCurveB className="absolute inset-0 w-full h-full text-white pointer-events-none opacity-[0.18]" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* ── Left column ── */}
        <div>
          <p
            data-contact-reveal
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60"
          >
            Contact
          </p>
          <h2
            data-contact-reveal
            className="mt-3 text-[clamp(40px,5vw,64px)] leading-[0.95] tracking-tight"
          >
            Let's build something
            <span className="text-[#562fb1]"> great</span>.
          </h2>
          <p
            data-contact-reveal
            className="mt-6 text-sm sm:text-base text-white/65 leading-relaxed max-w-xl"
          >
            If you have a project in mind (or you just want to connect), send a
            message and I'll reply quickly.
          </p>

          {/* ── Toggle (replaces the two old buttons) ── */}
          <div data-contact-reveal className="mt-8 flex items-center gap-4">
            {/* QR label */}
            <span
              className={`text-xs font-medium transition-colors ${
                mode === "qr" ? "text-white" : "text-white/40"
              }`}
            >
              QR code
            </span>

            {/* Track */}
            <button
              onClick={() => setMode(mode === "email" ? "qr" : "email")}
              aria-label="Toggle between email form and QR code"
              className={`relative w-20 h-10 rounded-full border transition-colors duration-300 focus:outline-none ${
                mode === "email"
                  ? "bg-[#562fb1] border-[#562fb1]"
                  : "bg-white/10 border-white/15"
              }`}
            >
              {/* Thumb */}
              <span
                className={`absolute top-[3px] left-[3px] w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${
                  mode === "email" ? "translate-x-10" : "translate-x-0"
                }`}
              >
                {mode === "email" ? (
                  // Mail icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-[#562fb1]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ) : (
                  // QR icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-black/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <path d="M14 14h.01M18 14h.01M14 18h.01M18 18h.01M14 21h.01M21 14h.01M21 18h.01M21 21h.01" />
                  </svg>
                )}
              </span>
            </button>

            {/* Email label */}
            <span
              className={`text-xs font-medium transition-colors ${
                mode === "email" ? "text-white" : "text-white/40"
              }`}
            >
              Email form
            </span>
          </div>
        </div>

        {/* ── Right column — swaps between form and QR ── */}
        <div
          data-contact-reveal
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-6 min-h-[360px] flex flex-col"
        >
          {mode === "email" ? (
            /* ── Email form ── */
            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Name
                  </span>
                  <input
                    name="name"
                    className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                    placeholder="you@domain.com"
                  />
                </label>
              </div>

              <label className="block mt-4">
                <span className="text-xs uppercase tracking-[0.18em] text-white/55">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25 resize-none"
                  placeholder="Tell me what you're building…"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`mt-5 w-full rounded-xl bg-white text-black py-3 text-sm font-medium hover:bg-[#562fb1] hover:text-white transition-colors ${
                  status === "sending" ? "cursor-wait" : ""
                }`}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Sent!"}
              </button>
            </form>
          ) : (
            <>
{/* ── QR code panel ── */}
<div className="flex flex-col flex-1 items-center justify-center gap-6 py-4">

  <div>
    <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/50 text-center mb-4">
      Scan to save my contact
    </p>
    <div className="rounded-2xl bg-white p-4">
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
          "BEGIN:VCARD\nVERSION:3.0\nFN:Elijah Olokode\nTITLE:Frontend Developer\nTEL;TYPE=CELL:+2349018006888\nEMAIL:elijaholokode@gmail.com\nURL:https://github.com/elijaholokode\nURL:https://linkedin.com/in/elijaholokode\nEND:VCARD"
        )}`}
        alt="vCard QR code for Elijah Olokode"
        width={220}
        height={200}
        className="block"
      />
    </div>
  </div>

  <a
    href={`data:text/vcard;charset=utf-8,${encodeURIComponent(
      "BEGIN:VCARD\nVERSION:3.0\nFN:Elijah Olokode\nTITLE:Frontend Developer\nTEL;TYPE=CELL:+2349018006888\nEMAIL:elijaholokode@gmail.com\nURL:https://github.com/elijaholokode\nURL:https://linkedin.com/in/elijaholokode\nEND:VCARD"
    )}`}
    download="elijah-olokode.vcf"
    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs px-5 py-2.5 hover:bg-[#562fb1] hover:border-[#562fb1] hover:text-white transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    Save contact (.vcf)
  </a>

</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
