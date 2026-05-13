import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedCurveB from "../component/AnimatedCurveB";

const skills = [
  { label: "HTML5", category: "Front-End" },
  { label: "CSS3", category: "Front-End" },
  { label: "JavaScript ES6+", category: "Front-End" },
  { label: "React.js", category: "Frameworks" },
  { label: "Next.js", category: "Frameworks" },
  { label: "Tailwind CSS", category: "Styling" },
  { label: "CSS Modules", category: "Styling" },
  { label: "Responsive Design", category: "Styling" },
  { label: "Git", category: "Tools" },
  { label: "GitHub", category: "Tools" },
  { label: "Vercel", category: "Tools" },
  { label: "Vite", category: "Tools" },
];

const categoryColor = {
  "Front-End": { dot: "bg-[#562fb1]", badge: "bg-[#562fb1]/15 text-[#a78bfa]" },
  Frameworks: { dot: "bg-[#FF4C60]", badge: "bg-[#FF4C60]/15 text-[#ff8a96]" },
  Styling: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-500/15 text-emerald-400",
  },
  Tools: { dot: "bg-amber-400", badge: "bg-amber-400/15 text-amber-300" },
};

// Duplicate for seamless loop
const ticker = [...skills, ...skills];

function TickerRow({ items, direction = "ltr", duration = 25 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Width of ONE set (half of the duplicated track)
    const totalWidth = track.scrollWidth / 2;

    // Start position depends on direction
    const from = direction === "ltr" ? 0 : -totalWidth;
    const to = direction === "ltr" ? -totalWidth : 0;

    gsap.set(track, { x: from });

    const tween = gsap.to(track, {
      x: to,
      duration,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover for nicer UX
    const pause = () => tween.pause();
    const play = () => tween.play();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, [direction, duration]);

  return (
    <div className="relative z-10 overflow-hidden">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#141314] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#141314] to-transparent" />

      <div ref={trackRef} className="flex w-max gap-3 will-change-transform">
        {items.map((s, i) => {
          const colors = categoryColor[s.category];
          return (
            <span
              key={i}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium ${colors.badge}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
              {s.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <div
      id="stack"
      className="relative w-full overflow-hidden bg-white px-6 py-24 text-white sm:px-12"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#141314] p-10 text-center text-white">
        <AnimatedCurveB className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-[0.18]" />

        {/* Header */}
        <div className="relative z-10 mb-10">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
            Tech Stack
          </p>
          <h1 className="text-[clamp(28px,4vw,48px)] font-semibold leading-tight tracking-tight">
            How can I help you?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/55">
            Partner with me to turn your ideas into digital reality.
          </p>
        </div>

        {/* Legend */}
        <div className="relative z-10 mb-8 flex flex-wrap justify-center gap-4">
          {Object.entries(categoryColor).map(([cat, { dot }]) => (
            <span
              key={cat}
              className="flex items-center gap-1.5 text-xs text-white/50"
            >
              <span className={`h-2 w-2 rounded-full ${dot}`} />
              {cat}
            </span>
          ))}
        </div>

        {/* Two GSAP-driven ticker rows */}
        <div className="space-y-3">
          <TickerRow items={ticker} direction="ltr" duration={28} />
          <TickerRow
            items={[...ticker].reverse()}
            direction="rtl"
            duration={28}
          />
        </div>
      </div>
    </div>
  );
}
