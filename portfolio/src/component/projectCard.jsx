import { useState } from "react";
export default function ProjectCard({ project, onClick, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid rgba(86,47,177,0.12)",

        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 48px rgba(86,47,177,0.18)"
          : "0 2px 12px rgba(86,47,177,0.06)",
        transition:
          "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
        position: "relative",
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Card image */}
      <div
        style={{
          width: "100%",
          height: "200px",
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: "32px",
            fontWeight: 900,
            color: project.logoColor,
            letterSpacing: "-0.03em",
            fontFamily: "'Syne', sans-serif",
            userSelect: "none",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            project.logoText
          )}
        </span>
        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.12)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: hovered ? "scale(1)" : "scale(0.6)",
              transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#562fb1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
      </div>

     {/* Card body */}
<div style={{ padding: "18px 20px 22px" }}>
  <div
    style={{
      fontSize: "19px",
      fontWeight: 800,
      color: "#0f0a1e",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      fontFamily: "'Syne', sans-serif",
      marginBottom: "4px",
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {project.name}
  </div>

  <div
    style={{
      fontSize: "13px",
      color: "#888",
      marginBottom: "12px",
    }}
  >
    {project.type}
  </div>

  {project.stack?.length > 0 && (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {project.stack.map((tech) => (
        <span
          key={tech}
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "20px",
            background: project.tagBg,
            color: project.tagColor,
            whiteSpace: "nowrap",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  )}
</div>
</div>
  );
}
