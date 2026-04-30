import { useState } from "react";
import type { Project } from "./project-card";

interface CaseStudyPageProps {
  project: Project;
  onBack: () => void;
}

// ── Mini TV ────────────────────────────────────────────────────────────────────
function MiniTV({ url, color }: { url: string; color: string }) {
  const [loadError, setLoadError] = useState(false);

  return (
    <div className="flex flex-col items-center mb-14">
      {/* Antennas */}
      <div
        className="flex items-end justify-center"
        style={{ gap: "56px", height: "44px", marginBottom: "-3px" }}
      >
        <div
          style={{
            width: "3px",
            height: "40px",
            background: "linear-gradient(to top, #8a837b, #4a443e)",
            transform: "rotate(-15deg)",
            transformOrigin: "bottom center",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            width: "3px",
            height: "40px",
            background: "linear-gradient(to top, #8a837b, #4a443e)",
            transform: "rotate(15deg)",
            transformOrigin: "bottom center",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* TV body */}
      <div
        style={{
          background: "linear-gradient(160deg, #f5f0e6 0%, #ede8db 100%)",
          border: "2px solid rgba(74,68,62,0.18)",
          borderRadius: "18px",
          padding: "14px 16px 14px",
          boxShadow:
            "0px 10px 36px rgba(28,26,23,0.13), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(74,68,62,0.06)",
          width: "100%",
          maxWidth: "740px",
          position: "relative",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            padding: "0 2px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            {/* Pulsing indicator */}
            <div style={{ position: "relative", width: "9px", height: "9px" }}>
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: color,
                  opacity: 0.85,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: color,
                  opacity: 0.3,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  animation: "tvPulse 2s ease-in-out infinite",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "13px",
                color: "#8a837b",
                letterSpacing: "0.12em",
              }}
            >
              LIVE PREVIEW
            </span>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "12px",
              color: color,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              opacity: 0.85,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
          >
            open in new tab ↗
          </a>
        </div>

        {/* Screen bezel */}
        <div
          style={{
            background: "#28231e",
            borderRadius: "10px",
            padding: "7px",
            boxShadow:
              "inset 0 3px 10px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.12)",
          }}
        >
          {/* Screen */}
          <div
            style={{
              borderRadius: "6px",
              overflow: "hidden",
              height: "430px",
              position: "relative",
              background: "#1c1a16",
            }}
          >
            {loadError ? (
              /* Fallback when iframe is blocked */
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  background: "linear-gradient(135deg, #1c1a16, #2d2820)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "32px",
                    color: "#8a837b",
                    opacity: 0.7,
                  }}
                >
                  📺
                </div>
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px",
                    color: "#8a837b",
                    textAlign: "center",
                    lineHeight: 1.7,
                    maxWidth: "280px",
                    opacity: 0.8,
                  }}
                >
                  This page can't be embedded.
                  <br />
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color, textDecoration: "underline" }}
                  >
                    Open it directly ↗
                  </a>
                </p>
              </div>
            ) : (
              <iframe
                src={url}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
                title="Live Preview"
                onError={() => setLoadError(true)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-modals"
                allow="fullscreen"
              />
            )}

            {/* CRT scanline overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px)",
                pointerEvents: "none",
                borderRadius: "6px",
              }}
            />
            {/* Screen corner glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
                pointerEvents: "none",
                borderRadius: "6px",
              }}
            />
          </div>
        </div>

        {/* Bottom controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "11px",
            padding: "0 4px",
          }}
        >
          {/* Speaker grille */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            {[0, 1, 2].map((row) => (
              <div key={row} style={{ display: "flex", gap: "4px" }}>
                {[0, 1, 2, 3, 4].map((col) => (
                  <div
                    key={col}
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "rgba(74,68,62,0.22)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Channel badge */}
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "13px",
              color: "#8a837b",
              letterSpacing: "0.06em",
            }}
          >
            CH · 01
          </span>

          {/* Knob cluster */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 40% 35%, #f0ebe0, #ddd8cc)",
                border: "1.5px solid rgba(74,68,62,0.22)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: `radial-gradient(circle at 40% 35%, ${color}55, ${color}22)`,
                border: `1.5px solid ${color}70`,
                boxShadow: `inset 0 1px 2px rgba(0,0,0,0.08), 0 0 6px ${color}20`,
              }}
            />
          </div>
        </div>
      </div>

      {/* TV stand */}
      <div
        style={{
          width: "88px",
          height: "11px",
          background: "linear-gradient(to bottom, #ddd8cc, #ccc8be)",
          borderRadius: "0 0 5px 5px",
          border: "1.5px solid rgba(74,68,62,0.15)",
          borderTop: "none",
        }}
      />
      <div
        style={{
          width: "58px",
          height: "5px",
          background: "#c8c4bc",
          borderRadius: "0 0 4px 4px",
          border: "1px solid rgba(74,68,62,0.12)",
          borderTop: "none",
        }}
      />

      <style>{`
        @keyframes tvPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ── Case Study Page ────────────────────────────────────────────────────────────
export function CaseStudyPage({ project, onBack }: CaseStudyPageProps) {
  const linePositions = Array.from({ length: 80 }, (_, i) => 40 + i * 40);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#ede8dc" }}
    >
      {/* Notebook lines */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {linePositions.map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0 h-px"
            style={{ top: `${top}px`, backgroundColor: "rgba(29,26,22,0.07)" }}
          />
        ))}
        {/* Margin line */}
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: "56px", backgroundColor: "rgba(192,128,119,0.28)" }}
        />
        {/* Binder holes */}
        {Array.from({ length: 60 }, (_, i) => 80 + i * 60).map((top) => (
          <div
            key={top}
            className="absolute rounded-full"
            style={{
              left: "18px",
              top: `${top}px`,
              width: "10px",
              height: "10px",
              backgroundColor: "rgba(29,26,22,0.09)",
            }}
          />
        ))}
      </div>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 w-full z-40 flex items-center justify-between px-8 md:px-16 h-16"
        style={{
          backgroundColor: "rgba(237,232,220,0.92)",
          backdropFilter: "blur(8px)",
        }}
      >
        <button
          onClick={onBack}
          className="font-['Caveat',cursive] font-bold text-[#1c1a16]"
          style={{ fontSize: "16px", lineHeight: "normal" }}
        >
          <span className="font-normal">Jinru's Design Journal</span>
        </button>
        <div className="flex items-center gap-5">
          <button
            onClick={onBack}
            className="font-['Caveat',cursive] font-normal text-[#8a837b] transition-colors hover:text-[#b87870]"
            style={{ fontSize: "16px", lineHeight: "normal" }}
          >
            Work
          </button>
          <span
            className="font-['Caveat',cursive] text-[#8a837b]"
            style={{ fontSize: "16px" }}
          >
            ·
          </span>
          <button
            onClick={onBack}
            className="font-['Caveat',cursive] font-normal text-[#8a837b] transition-colors hover:text-[#b87870]"
            style={{ fontSize: "16px", lineHeight: "normal" }}
          >
            About
          </button>
          <span
            className="font-['Caveat',cursive] text-[#8a837b]"
            style={{ fontSize: "16px" }}
          >
            ·
          </span>
          <div className="relative group">
            <button
              className="font-['Caveat',cursive] font-normal text-[#8a837b] transition-colors hover:text-[#b87870]"
              style={{ fontSize: "16px", lineHeight: "normal" }}
            >
              Contact
            </button>
            <div
              className="absolute right-0 top-[calc(100%+8px)] hidden group-hover:flex flex-col gap-0 pointer-events-auto"
              style={{
                backgroundColor: "#faf7f0",
                border: "1px solid rgba(184,120,112,0.18)",
                boxShadow: "0px 8px 24px rgba(28,26,23,0.10)",
                borderRadius: "3px",
                minWidth: "180px",
                zIndex: 50,
              }}
            >
              <div
                style={{
                  height: "3px",
                  background:
                    "repeating-linear-gradient(90deg, #b8787044 0px, #b8787044 6px, transparent 6px, transparent 12px)",
                  borderRadius: "3px 3px 0 0",
                }}
              />
              <a
                href="mailto:yjr927@gmail.com"
                className="font-['Georgia',serif] font-normal text-[#4a443e] hover:text-[#b87870] hover:bg-[rgba(184,120,112,0.06)] transition-colors flex items-center gap-2"
                style={{
                  fontSize: "15px",
                  padding: "10px 16px",
                  lineHeight: "normal",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "13px" }}>✉</span> email
              </a>
              <div style={{ borderTop: "1px solid rgba(29,26,22,0.06)" }} />
              <a
                href="https://linkedin.com/in/jinruyang"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Georgia',serif] font-normal text-[#4a443e] hover:text-[#b87870] hover:bg-[rgba(184,120,112,0.06)] transition-colors flex items-center gap-2"
                style={{
                  fontSize: "15px",
                  padding: "10px 16px",
                  lineHeight: "normal",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "13px" }}>in</span> LinkedIn
              </a>
              <div style={{ borderTop: "1px solid rgba(29,26,22,0.06)" }} />
              <div
                className="font-['Georgia',serif] font-normal text-[#4a443e] flex items-center gap-2"
                style={{ fontSize: "15px", padding: "10px 16px", lineHeight: "normal" }}
              >
                <span style={{ fontSize: "13px" }}>💬</span>
                <span>
                  WeChat:{" "}
                  <span style={{ color: "#b87870" }}>Yadue0pb</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Content ── */}
      <div
        className="relative z-10 px-8 md:px-16 lg:px-24 pt-24 pb-28 mx-auto"
        style={{ maxWidth: "860px" }}
      >
        {/* ── HERO SECTION ── */}

        {/* Category tag */}
        <p
          className="font-['Georgia',serif] font-normal mb-3"
          style={{ fontSize: "15px", color: project.color, lineHeight: "normal" }}
        >
          ✦ {project.categoryLine}
        </p>

        {/* Title */}
        <h1
          className="font-['Caveat',cursive] font-bold text-[#1c1a16]"
          style={{
            fontSize: "clamp(44px, 8vw, 70px)",
            lineHeight: 1.05,
            marginBottom: "16px",
          }}
        >
          {project.title}
        </h1>

        {/* Subtitle */}
        <p
          className="font-['Georgia',serif] font-normal text-[#4a443e]"
          style={{
            fontSize: "17px",
            lineHeight: "1.9",
            maxWidth: "708px",
            marginBottom: "32px",
          }}
        >
          {project.subtitle}
        </p>

        {/* Meta cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { label: "role", value: project.role },
            { label: "timeline", value: project.timeline },
            { label: "tools", value: project.tools },
            { label: "impact", value: project.impact },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-[3px] flex flex-col"
              style={{
                gap: "6px",
                padding: "13px 17px 12px",
                border: "1px solid rgba(29,26,22,0.08)",
                boxShadow:
                  "0px 1px 3px rgba(0,0,0,0.10), 0px 1px 2px rgba(0,0,0,0.06)",
              }}
            >
              <p
                className="font-['Georgia',serif] font-normal text-[#8a837b]"
                style={{ fontSize: "11px", lineHeight: "normal" }}
              >
                {item.label}
              </p>
              <p
                className="font-['Georgia',serif] font-bold text-[#1c1a16]"
                style={{ fontSize: "15px", lineHeight: "1.3" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── MINI TV (only when liveUrl is set) ── */}
        {project.liveUrl && (
          <MiniTV url={project.liveUrl} color={project.color} />
        )}

        {/* Dashed divider */}
        <div
          className="mb-14"
          style={{ borderTop: "1px dashed rgba(29,26,22,0.15)" }}
        />

        {/* ── CHAPTERS ── */}
        {project.chapters.map((chapter, idx) => (
          <div key={chapter.number} className="mb-14">
            {/* Chapter header */}
            <div className="flex flex-col mb-6" style={{ gap: "8px" }}>
              <p
                className="font-['Georgia',serif] font-normal text-[#8a837b]"
                style={{
                  fontSize: "13px",
                  lineHeight: "normal",
                  letterSpacing: "0.08em",
                }}
              >
                chapter {chapter.number}
              </p>
              <h2
                className="font-['Caveat',cursive] font-bold text-[#1c1a16]"
                style={{
                  fontSize: "clamp(34px, 5vw, 52px)",
                  lineHeight: "1.15",
                }}
              >
                {chapter.title}
              </h2>
              {/* Rose accent bar */}
              <div
                style={{
                  width: "120px",
                  height: "3px",
                  backgroundColor: project.color,
                  opacity: 0.7,
                  borderRadius: "6px",
                }}
              />
            </div>

            {/* Body text */}
            <div
              className="font-['Georgia',serif] font-normal text-[#4a443e]"
              style={{
                fontSize: "17px",
                lineHeight: "1.9",
                maxWidth: "708px",
              }}
            >
              {chapter.content.split("\n\n").map((para, i) => (
                <p key={i} className={i > 0 ? "mt-5" : ""}>
                  {para}
                </p>
              ))}
            </div>

            {/* Block quote */}
            {chapter.quote && (
              <div
                className="my-8 py-2"
                style={{
                  borderLeft: `3px solid ${project.color}`,
                  paddingLeft: "27px",
                }}
              >
                <p
                  className="font-['Georgia',serif] italic text-[#4a443e]"
                  style={{ fontSize: "18px", lineHeight: "1.85" }}
                >
                  "{chapter.quote.text}"
                </p>
                <p
                  className="font-['Georgia',serif] font-normal text-[#8a837b] mt-2"
                  style={{ fontSize: "13px", lineHeight: "normal" }}
                >
                  — {chapter.quote.attribution}
                </p>
              </div>
            )}

            {/* Section divider (between chapters) */}
            {idx < project.chapters.length - 1 && (
              <div
                className="mt-12"
                style={{ borderTop: "1px dashed rgba(29,26,22,0.12)" }}
              />
            )}
          </div>
        ))}

        {/* Back button */}
        <div className="mt-4 mb-6">
          <button
            onClick={onBack}
            className="font-['Caveat',cursive] font-normal text-[#8a837b] hover:text-[#b87870] transition-colors flex items-center gap-2"
            style={{ fontSize: "17px", lineHeight: "normal" }}
          >
            <span>←</span>
            <span>Back to Work</span>
          </button>
        </div>
      </div>
    </div>
  );
}
