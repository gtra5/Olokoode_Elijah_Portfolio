import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../component/projectCard";
import Modal from "../component/modals";
import { projects } from "../data/cardsData";


gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);
  const rootRef = useRef(null);

  useGSAP(
    () => {
      // Header reveal
      gsap.fromTo(
        "[data-work-reveal]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );

      // Cards stagger
      gsap.fromTo(
        "[data-work-card]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: "[data-work-grid]", start: "top 85%" },
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap"
      />

      <section
        id="work"
        ref={rootRef}
        style={{
          position: "relative",
          width: "100%",
          background: "#F6F4FF",
          padding: "80px 24px",
          overflow: "hidden",
        }}
      >
        {/* Decorative orb */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(86,47,177,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
       

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
           
          {/* Header */}
          <div className="max-w-6xl mx-auto">
            <div
              data-work-reveal
              className="flex items-end justify-between gap-8 flex-wrap"
            >
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#562fb1]">
                  Selected work
                </p>
                <h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                  Projects &
                  <br />
                  <span className="bg-[#562fb1] px-2 text-white">
                    Experiments
                  </span>
                </h2>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-black/65 leading-relaxed">
                A showcase of frontend excellence focused on building scalable
                web applications with clean, modular code, ensuring peak
                performance, accessibility, and robust integration while
                maintaining a sharp eye for sophisticated aesthetic detail.
              </p>
            </div>
          </div>

          <br />

          {/* Cards grid */}
          <div data-work-grid className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={project.id} data-work-card>
                <ProjectCard
                  project={project}
                  onClick={setActiveProject}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}