import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Modal({ project, onClose }) {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  // Exit animation then call onClose
  function closeWithAnimation() {
    gsap.to(cardRef.current, {
      y: 20,
      opacity: 0,
      scale: 0.96,
      duration: 0.22,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: onClose,
    });
  }

  // Keyboard close
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && closeWithAnimation();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, []);

  // Entrance animation
  useGSAP(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" },
    );
    gsap.fromTo(
      cardRef.current,
      { y: 28, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.4)" },
    );
  });

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === e.currentTarget && closeWithAnimation()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10, 5, 30, 0.65)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <div
        ref={cardRef}
        style={{
          background: "#fff",
          borderRadius: "20px",
          maxWidth: "480px",
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(86,47,177,0.25)",
        }}
      >
        {/* Image banner */}
        <div
          style={{
            width: "100%",
            height: "200px",
            background: project.gradient,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "40px", fontWeight: 900, color: project.logoColor, letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif" }}>
                {project.logoText}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 28px" }}>
          <span style={{ display: "inline-block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: project.tagBg, color: project.tagColor, marginBottom: "10px" }}>
            {project.tag}
          </span>
          <h3 style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.025em", color: "#0f0a1e", marginBottom: "10px", fontFamily: "'Syne', sans-serif" }}>
            {project.name}
          </h3>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.75, marginBottom: "24px" }}>
            {project.desc}
          </p>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#562fb1", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "10px 20px", borderRadius: "10px", textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#3f1f8a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#562fb1")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Visit site
            </a>
            <button
              onClick={closeWithAnimation}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent", color: "#888", fontSize: "13px", fontWeight: 600, padding: "10px 16px", borderRadius: "10px", border: "1px solid #e0e0e0", cursor: "pointer", transition: "background 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              ✕ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}