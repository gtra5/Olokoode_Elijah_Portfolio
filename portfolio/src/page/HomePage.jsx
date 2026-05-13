import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";

const Blob = lazy(() => import("../component/models/Blob"));
import { OrbitControls, Center, Bounds, Environment } from "@react-three/drei";
import AnimatedCurveB from "../component/AnimatedCurveB";
import Header from "../component/header";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const rootRef = useRef(null);
  const [mountWebGL, setMountWebGL] = useState(false);

  // Defer WebGL until after first paint / idle so hero text and CSS are not competing with GLB + shader compile.
  useEffect(() => {
    let cancelled = false;
    const start = () => {
      if (!cancelled) setMountWebGL(true);
    };
    if (typeof window !== "undefined" && typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }
    const t = window.setTimeout(start, 200);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        "[data-hero-badge]",
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      )
        .fromTo(
          "[data-hero-title]",
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          "[data-hero-name]",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          "[data-hero-desc]",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          "[data-hero-divider]",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          "[data-hero-stat]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.1 },
          "-=0.4",
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative h-screen w-full overflow-hidden">

      {/* Canvas: mounted after idle so initial load stays responsive; dpr capped to limit GPU fill cost */}
      {mountWebGL && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="!fixed inset-0 !z-0"
          dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment preset="city" />
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <Suspense fallback={null}>
                <Blob />
              </Suspense>
            </Center>
          </Bounds>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      )}

      <AnimatedCurveB className="absolute inset-0 z-[-1] w-full h-full text-black pointer-events-none opacity-30" />

      <Header />

      {/* Constrained layout shell */}
      <div className="absolute inset-0 z-10 flex flex-col w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-12">
        <div className="flex flex-col justify-end flex-1 pb-8 sm:pb-10 lg:pb-12">

          {/* Badge */}
          <div data-hero-badge className="flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-50">
              Available for work
            </span>
          </div>

          {/* Headline */}
          <h1
            data-hero-title
            className="text-[clamp(42px,9vw,100px)] font-bold leading-[0.9] tracking-tight"
          >
            Frontend
            <br />
            <span className="text-[#562fb1]">Developer</span>
          </h1>

          {/* Name + description */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
            <div data-hero-name>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] opacity-40 mb-1">
                Based in Nigeria
              </p>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                Olokode Elijah
              </h2>
            </div>

            <div data-hero-desc className="hidden sm:block max-w-[280px] lg:max-w-xs text-right">
              <p className="text-xs sm:text-sm font-light leading-relaxed opacity-60">
                Crafting beautiful, functional interfaces with React, Three.js,
                and modern web technologies. Always chasing the next challenge.
              </p>
              <div className="mt-3 flex items-center justify-end gap-1 opacity-40 text-[10px] tracking-widest uppercase">
                <span>Scroll</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path
                    d="M6 1v10M6 11l-3-3M6 11l3-3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            data-hero-divider
            className="mt-6 sm:mt-8 h-px w-full bg-black/10"
          />

          {/* Stats */}
          <div className="mt-5 sm:mt-6 flex items-center gap-6 sm:gap-10 lg:gap-12">
            {[
              { value: "3+",  label: "Years exp."    },
              { value: "20+", label: "Projects"      },
              { value: "10+", label: "Happy clients" },
            ].map((stat, i, arr) => (
              <>
                <div key={stat.label} data-hero-stat>
                  <p className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] opacity-40 mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div
                    key={`div-${i}`}
                    className="h-7 sm:h-8 w-px bg-black/10 shrink-0"
                  />
                )}
              </>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}