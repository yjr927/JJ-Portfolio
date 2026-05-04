import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NotebookBackground } from "./components/notebook-bg";
import { ProjectCard } from "./components/project-card";
import type { Project } from "./components/project-card";
import { CaseStudyPage } from "./components/case-study-page";
import { SkillsBasedHiringPage } from "./components/skills-based-hiring-page";
import { Web3AnalyticsPage } from "./components/web3-analytics-page";
import photo from "../imports/photo.png";
import catGif from "../imports/j2672_minimal_hand-drawn_blue_tabby_cat_character_illustratio_be17ee9e-090d-4e6f-97da-e2e0e83fc8f4_0.gif";
import selfPortrait from "../imports/j2672_httpss.mj.runS8Tcoj2kWyc_minimal_hand-drawn_female_char_25075b54-371e-41d1-a281-b6f4b2d8aa9c_3.png";
import nyuMetierCover from "../imports/portfolio/nyu-metier-cover.png";
import web3Cover from "../imports/portfolio/web3-cover.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: "01",
    shortName: "Skills-Based Hiring",
    title: "Skills-Based Hiring Platform",
    subtitle:
      "A web-based platform that helps NYU graduate students navigate the job search through skills-based hiring, transparent opportunities, and community support.",
    tags: ["UI/UX Design", "UX Research"],
    color: "#b87870",
    categoryLine: "UI/UX Design · UX Research",
    role: "UI/UX Designer & Product Manager",
    timeline: "Oct.30 – Dec 18",
    tools: "Figma",
    impact: "40% ↑ New Hire Retention",
    category: "uiux",
    liveUrl: "https://yjr927.github.io/NYU-Metier/",
    coverImage: nyuMetierCover,
    detailType: "skillsBasedHiring",
    chapters: [
      {
        number: "01",
        title: "Project Overview",
        content:
          "Placeholder text for the Skills-Based Hiring case study. Replace this later with your final writing.",
      },
      {
        number: "02",
        title: "Challenge",
        content: "Placeholder text for the challenge section.",
      },
    ],
  },
  {
    id: "02",
    shortName: "Web3 Analytics",
    title: "Designing an Insight-First Web3 Analytics Dashboard",
    subtitle:
      "A decision-support dashboard that turns complex blockchain data into clear, structured, and actionable insights for emerging Web3 investors and product managers.",
    tags: ["Web3", "Data UX"],
    color: "#5fb7e6",
    categoryLine: "Web3 Data Products · UI/UX Internship",
    role: "Sole UI/UX Designer",
    timeline: "4 Weeks · 2026",
    tools: "Figma · Claude · Codex",
    impact: "Data Display → Decision Support",
    category: "uiux",
    coverImage: web3Cover,
    detailType: "web3Analytics",
    liveUrl: "https://yjr927.github.io/web3-analytics-dashboard-design/",
    chapters: [
      {
        number: "01",
        title: "Context",
        content:
          "This project was completed during a 4-week UI/UX internship focused on Web3 data products.",
      },
      {
        number: "02",
        title: "Design Strategy",
        content:
          "The dashboard reframes blockchain analytics from data display into decision support.",
      },
    ],
  },
  {
    id: "05",
    shortName: "Driver's Game",
    title: "Ride Share Sandbox: A Policy & Market Game",
    subtitle:
      "A web-based simulation where players act as New York City rideshare drivers, responding to policy news, market shifts, platform incentives, and resource constraints.",
    tags: ["Game for Learning", "Economics"],
    color: "#7b9ab5",
    categoryLine: "Game for Learning · Economics Simulation",
    role: "Learning Game Designer",
    timeline: "Final Report · 2026",
    tools: "Simulation Design · Learning Theory · Prototype",
    impact: "Policy + Market Reasoning",
    category: "gamification",
    liveUrl: "https://yjr927.github.io/Drivers-Game/",
    chapters: [
      {
        number: "01",
        title: "Project Overview",
        content:
          "Ride Share Sandbox is a web-based learning simulation where players act as rideshare drivers operating in New York City. The market changes dynamically through news updates, policy alerts, platform incentives, fuel costs, passenger demand, and unexpected events.\n\nInstead of teaching economics through formulas first, the game places players inside a changing system. They learn by making decisions, watching outcomes, and connecting their choices to concepts like supply, demand, opportunity cost, externalities, and market constraints.",
        quote: {
          text: "Ride Share Sandbox creates an environment in which participants learn from experience by making connections between their actions and the result.",
          attribution: "Final Report",
        },
      },
      {
        number: "02",
        title: "Learning Goals",
        content:
          "The game is designed to help players understand how supply and demand affect markets and prices, how external factors influence economic systems, how strategic decisions happen under restriction and uncertainty, and how players balance short-term gains against efficient resource management.\n\nUsing Bloom's Taxonomy, the learning path moves from understanding policies, to applying heat maps and news signals, to analyzing platform differences, and finally evaluating whether a route or platform choice was worth the opportunity cost.",
      },
      {
        number: "03",
        title: "Core Game Loop",
        content:
          "Each round begins with a market briefing. Players read concise news, trends, and hints about the day's conditions, then enter the driving stage on a grid-based map. Every movement costs time and fuel, so players must decide whether to explore for better opportunities or act efficiently.\n\nPlayers also choose between platforms such as Uber, Lyft, and Taxi. Each platform has its own incentives and limitations, turning platform choice into an economic strategy rather than a cosmetic option.",
      },
      {
        number: "04",
        title: "Decision Pressure",
        content:
          "The task-trigger system gives players a concrete daily goal, such as completing a set number of passenger requests. Success is not just maximizing revenue. Players need to respond to changing conditions while managing limited time, fuel, and platform constraints.\n\nUnexpected events like passenger cancellations, congestion, policy changes, or rainy-day surcharges create uncertainty. These events turn abstract economic ideas into felt friction inside the game.",
      },
      {
        number: "05",
        title: "Reflection & Evaluation",
        content:
          "After the driving stage, players receive a report showing earnings, rank, and feedback. The reflection stage asks them to revisit earlier choices in light of the signals they saw and the outcomes they produced.\n\nThis closes the learning loop: players can ask whether poor income came from policy conditions, inefficient route planning, platform choice, or resource management. The game uses experiential learning, self-determination theory, and flow theory to make economic reasoning active, adaptive, and memorable.",
      },
    ],
  },
  {
    id: "06",
    shortName: "Salem Witch Trials",
    title: "Women, Power, and Fear: The Salem Witch Trials",
    subtitle:
      "An interactive narrative website game exploring how gender, power, fear, and public judgment shaped one of history's most haunting injustices.",
    tags: ["Narrative Game", "History"],
    color: "#9b7bb5",
    categoryLine: "Interactive Storytelling · History Education",
    role: "Narrative Learning Designer",
    timeline: "2026",
    tools: "Interactive Website · Narrative Design",
    impact: "Historical Empathy Through Perspective",
    category: "gamification",
    liveUrl: "https://yjr927.github.io/-Salem-Witch-Trials-Project-Final-Ver./",
    chapters: [
      {
        number: "01",
        title: "Context",
        content:
          "Women, Power, and Fear is an interactive narrative website game about the Salem Witch Trials. The project explores the relationship between women, power, and fear through a historical event where accusation, rumor, and authority turned into real violence.\n\nThe experience is designed for high school and college students studying history, gender, social justice, and historical empathy.",
      },
      {
        number: "02",
        title: "Learning Goals",
        content:
          "The project teaches students to understand the events and timeline of the Salem Witch Trials, recognize gendered patterns in accusation, analyze how power structures shape justice, and connect historical fear-based systems to modern examples.\n\nRather than presenting Salem as a distant tragedy, the design asks students to notice how social pressure, institutional authority, and public judgment still operate today.",
      },
      {
        number: "03",
        title: "Interaction Model",
        content:
          "The core gameplay is built around four actions: read an accusation, hear testimonies, switch perspectives, and make a decision. Players move through branching choices, text-based consequences, emotional feedback, and perspective shifts.\n\nThe interaction model makes students active participants instead of passive readers. They must make decisions under incomplete information, social pressure, and emotional discomfort.",
      },
      {
        number: "04",
        title: "Narrative Design",
        content:
          "The story uses multiple roles to reveal different kinds of power. The Court Clerk represents institutional authority. The Accused Woman represents fear, isolation, and powerlessness. The Jury represents public judgment and social bias.\n\nBy switching perspectives, students see that history is not a single clean story. It is made of competing voices, unequal risks, and decisions shaped by systems.",
      },
      {
        number: "05",
        title: "Why Salem Matters",
        content:
          "More than 200 people were accused during the Salem Witch Trials, and 19 were executed. The project frames this not as an isolated anomaly, but as a pattern shaped by gender, property, social disruption, and fear.\n\nWomen, especially those who lived alone, owned property, or defied expectations, were especially vulnerable to accusation.",
        quote: {
          text: "History is perspective. Fear is a tool. Injustice is not inevitable.",
          attribution: "Final Presentation",
        },
      },
      {
        number: "06",
        title: "Design Philosophy",
        content:
          "The design is guided by empathy through embodiment, ambiguity over easy answers, emotional resonance as pedagogy, and multiple truths within one history.\n\nThe goal is not to make students comfortable. The goal is to use discomfort carefully, so students can think critically about how fear becomes power and how justice can fail when systems reward accusation over truth.",
      },
    ],
  },
];

const skills = ["UX Research", "Learning Experience Design", "Data Visualization", "Interaction Design", "Figma", "Content Strategy", "Prototyping", "Accessibility"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Washi tape component
function WashiTape({ color }: { color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "-9px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "70px",
        height: "18px",
        borderRadius: "2px",
        background: `repeating-linear-gradient(45deg, ${color}55 0px, ${color}55 4px, ${color}28 4px, ${color}28 8px)`,
        zIndex: 2,
      }}
    />
  );
}

export default function App() {
  const [view, setView] = useState<"home" | "case-study">("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeNav, setActiveNav] = useState("hero");

  useEffect(() => {
    if (view !== "home") return;
    const ids = ["hero", "work", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveNav(e.target.id); }),
      { threshold: 0.35 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [view]);

  function openProject(project: Project) {
    setSelectedProject(project);
    setView("case-study");
    window.scrollTo({ top: 0 });
  }

  function goBack() {
    setView("home");
    setSelectedProject(null);
    setTimeout(() => scrollTo("work"), 80);
  }

  // ── Case Study View ──
  if (view === "case-study" && selectedProject) {
    if (selectedProject.detailType === "skillsBasedHiring") {
      return <SkillsBasedHiringPage onBack={goBack} />;
    }

    if (selectedProject.detailType === "web3Analytics") {
      return <Web3AnalyticsPage onBack={goBack} liveUrl={selectedProject.liveUrl} />;
    }

    return <CaseStudyPage project={selectedProject} onBack={goBack} />;
  }

  // ── Home View ──
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: "#ede8dc" }}>
      {/* Fixed notebook background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <NotebookBackground />
      </div>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 w-full z-40 flex items-center justify-between px-8 md:px-16 h-16"
        style={{ backgroundColor: "rgba(237,232,220,0.92)", backdropFilter: "blur(8px)" }}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="font-['Caveat',cursive] font-bold text-[#1c1a16]"
          style={{ fontSize: "16px", lineHeight: "normal" }}
        ><span className="font-normal">Jinru’s Design Journal</span></button>

        <div className="flex items-center gap-5">

          {/* work */}
          <button
            onClick={() => scrollTo("work")}
            className="font-['Caveat',cursive] font-normal transition-colors hover:text-[#b87870]"
            style={{ fontSize: "16px", color: activeNav === "work" ? "#1c1a16" : "#8a837b", lineHeight: "normal" }}
          >Work</button>

          <span className="font-['Caveat',cursive] text-[#8a837b]" style={{ fontSize: "16px" }}>·</span>

          {/* about */}
          <button
            onClick={() => scrollTo("about")}
            className="font-['Caveat',cursive] font-normal transition-colors hover:text-[#b87870]"
            style={{ fontSize: "16px", color: activeNav === "about" ? "#1c1a16" : "#8a837b", lineHeight: "normal" }}
          ><span className="font-bold">About</span></button>

          <span className="font-['Caveat',cursive] text-[#8a837b]" style={{ fontSize: "16px" }}>·</span>

          {/* contact — hover dropdown */}
          <div className="relative group">
            <button
              onClick={() => scrollTo("contact")}
              className="font-['Caveat',cursive] font-normal transition-colors hover:text-[#b87870]"
              style={{ fontSize: "16px", color: activeNav === "contact" ? "#1c1a16" : "#8a837b", lineHeight: "normal" }}
            ><span className="font-bold">Contact</span></button>
            {/* dropdown */}
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
              {/* washi tape accent at top */}
              <div style={{ height: "3px", background: "repeating-linear-gradient(90deg, #b8787044 0px, #b8787044 6px, transparent 6px, transparent 12px)", borderRadius: "3px 3px 0 0" }} />

              <a
                href="mailto:jinruyang@example.com"
                className="font-['Georgia',serif] font-normal text-[#4a443e] hover:text-[#b87870] hover:bg-[rgba(184,120,112,0.06)] transition-colors flex items-center gap-2"
                style={{ fontSize: "15px", padding: "10px 16px", lineHeight: "normal", textDecoration: "none" }}
              >
                <span style={{ fontSize: "13px" }}>✉</span> email
              </a>
              <div style={{ borderTop: "1px solid rgba(29,26,22,0.06)" }} />

              <a
                href="https://www.linkedin.com/in/jinruyang/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Georgia',serif] font-normal text-[#4a443e] hover:text-[#b87870] hover:bg-[rgba(184,120,112,0.06)] transition-colors flex items-center gap-2"
                style={{ fontSize: "15px", padding: "10px 16px", lineHeight: "normal", textDecoration: "none" }}
              >
                <span style={{ fontSize: "13px" }}>in</span> LinkedIn
              </a>
              <div style={{ borderTop: "1px solid rgba(29,26,22,0.06)" }} />

              <div
                className="font-['Georgia',serif] font-normal text-[#4a443e] flex items-center gap-2"
                style={{ fontSize: "15px", padding: "10px 16px", lineHeight: "normal" }}
              >
                <span style={{ fontSize: "13px" }}>💬</span>
                <span>WeChat: <span style={{ color: "#b87870" }}>jinruyang</span></span>
              </div>
              <div style={{ borderTop: "1px solid rgba(29,26,22,0.06)" }} />

              <div
                className="font-['Georgia',serif] font-normal text-[#4a443e] flex items-center gap-2"
                style={{ fontSize: "15px", padding: "10px 16px", lineHeight: "normal" }}
              >
                <span style={{ fontSize: "13px" }}>🟢</span>
                <span>WeChat QR code</span>
              </div>
            </div>
          </div>

        </div>
      </nav>

      {/* ──────────────────────────────────────────── */}
      {/* HERO                                         */}
      {/* ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-64px)] flex items-center px-8 md:px-16 lg:px-24 py-16"
      >
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">
          {/* ── Text ── */}
          <div className="flex-1 group">
            <style>{`
              @keyframes typeIn {
                0% { opacity: 0 !important; }
                100% { opacity: 1 !important; }
              }
              .group:hover .type-char {
                animation: typeIn 0.01s both;
              }
            `}</style>

            {/* Date */}
            <p
              className="font-['Georgia',serif] font-normal text-[#8a837b] mb-6"
              style={{ fontSize: "14px", lineHeight: "normal" }}
            >
              {"April 2026 ✦".split("").map((char, i) =>
                char === "✦" ? (
                  <motion.span
                    key={i}
                    className="type-char text-[#b87879]"
                    style={{ animationDelay: `${i * 0.015}s`, display: "inline-block" }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  >
                    {char}
                  </motion.span>
                ) : (
                  <span key={i} className="type-char text-[#b87879] font-[Caveat]" style={{ animationDelay: `${i * 0.015}s` }}>
                    {char}
                  </span>
                )
              )}
            </p>

            {/* Hello */}
            <motion.p
              initial="idle"
              whileHover="hover"
              className="font-['Georgia',serif] font-normal text-[#4a443e]"
              style={{ fontSize: "20px", lineHeight: "2.0" }}
            >
              {"Hello, I'm —".split("").map((char, i) => (
                <motion.span className="font-[Caveat]"
                  key={i}
                  variants={{
                    idle: { opacity: 1 },
                    hover: { opacity: [0, 1] },
                  }}
                  transition={{ duration: 0.08, delay: i * 0.03 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            {/* Name */}
            <p
              className="font-['Caveat',cursive] font-bold text-[#1c1a16]"
              style={{ fontSize: "clamp(80px,12vw,120px)", lineHeight: 0.9, marginBottom: "4px" }}
            >
              {"Jinru Yang".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="type-char"
                  initial={{ opacity: 0, y: 14, rotate: -6, scaleX: 0.7 }}
                  animate={{ opacity: 1, y: 0, rotate: 0, scaleX: 1 }}
                  whileHover={{ opacity: [0, 1], y: [6, 0], transition: { duration: 0.15, delay: i * 0.04 } }}
                  transition={{
                    duration: 0.22,
                    delay: 0.3 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline-block", transformOrigin: "bottom left", animationDelay: `${i * 0.03}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </p>

            {/* Underline accent */}
            <div
              style={{
                width: "160px",
                height: "6px",
                backgroundColor: "#b87870",
                borderRadius: "3px",
                margin: "0px 0px 22px 0px",
                opacity: 0.85,
              }}
            />

            {/* Subtitle — rose italic */}
            <p
              className="font-['Caveat',cursive] font-normal"
              style={{
                fontSize: "22px",
                color: "#b87870",
                lineHeight: "2.0",
                fontStyle: "italic",
                marginBottom: "8px",
              }}
            >
              {"UI/UX & Experience Designer".split("").map((char, i) => (
                <span key={i} className="type-char" style={{ animationDelay: `${i * 0.015}s` }}>
                  {char}
                </span>
              ))}
            </p>

            {/* Body — each phrase on its own ruled line */}
            <div style={{ marginBottom: "32px" }}>
              {[
                "I design human-centered experiences and products.",
                "Translating AI capabilities into intuitive interactions.",
                "Rooted in real human needs.",
              ].map((line) => (
                <motion.p
                  key={line}
                  initial="idle"
                  whileHover="hover"
                  className="font-['Metal',sans-serif] font-normal text-[#4a443e] font-[Metal]"
                  style={{ fontSize: "18px", lineHeight: "2.2" }}
                >
                  {line.split("").map((char, i) => (
                    <motion.span className="font-[Georgia]"
                      key={i}
                      variants={{
                        idle: { opacity: 1 },
                        hover: { opacity: [0, 1] }
                      }}
                      transition={{ duration: 0.1, delay: i * 0.03 }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 flex-wrap">
              <motion.button
                onClick={() => scrollTo("work")}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="font-['Caveat',cursive] font-bold text-white bg-[#1c1a16] hover:bg-[#4a443e] transition-colors rounded-[3px]"
                style={{ fontSize: "17px", padding: "10px 28px", lineHeight: "normal" }}
              >View Work</motion.button>
              <motion.button
                onClick={() => scrollTo("about")}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="font-['Caveat',cursive] font-bold text-[#1c1a16] border border-[#1c1a16] hover:bg-[rgba(29,26,22,0.06)] transition-colors rounded-[3px]"
                style={{ fontSize: "17px", padding: "10px 28px", lineHeight: "normal" }}
              >
                About Me
              </motion.button>
            </div>
          </div>

          {/* ── Polaroid Photo ── */}
          <motion.div
            className="relative shrink-0 self-stretch"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            initial="idle"
            whileHover="hovered"
          >
            {/* White polaroid card */}
            <motion.div
              className="relative bg-white"
              variants={{
                idle: {
                  rotate: 1.5,
                  y: 0,
                  boxShadow: "0px 8px 32px rgba(28,26,23,0.14)",
                },
                hovered: {
                  rotate: 4,
                  y: -12,
                  boxShadow: "0px 28px 56px rgba(28,26,23,0.22)",
                },
              }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              style={{
                padding: "12px 12px 48px",
                width: "320px",
              }}
            >
              {/* Washi tape at top */}
              <WashiTape color="#b87870" />

              {/* Photo container — clips the zooming image */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  backgroundColor: "#d9d4ca",
                }}
              >
                <motion.img
                  src={photo}
                  alt="JJ"
                  variants={{
                    idle: {
                      scale: 1,
                      y: 0,
                      filter: "grayscale(20%) brightness(1)",
                    },
                    hovered: {
                      scale: 1.1,
                      y: -10,
                      filter: "grayscale(0%) brightness(1.04)",
                    },
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 28 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    filter: "grayscale(20%) brightness(1)",
                  }}
                />
              </div>

              {/* Caption */}
              <motion.p
                className="font-['Metal',sans-serif] font-normal text-[#8a837b]"
                variants={{
                  idle: { opacity: 0.7 },
                  hovered: { opacity: 1 },
                }}
                transition={{ duration: 0.25 }}
                style={{
                  fontSize: "13px",
                  lineHeight: "normal",
                  position: "absolute",
                  bottom: "14px",
                  left: "12px",
                  right: "12px",
                  textAlign: "center",
                }}
              >Jinru, a designer & storyteller</motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p
            className="font-['Georgia',serif] font-normal text-[#b87870]"
            style={{ fontSize: "12px", lineHeight: "normal" }}
          >
            scroll to explore
          </p>
          {/* Animated scroll line with travelling dot */}
          <div className="relative flex flex-col items-center" style={{ height: "40px", width: "1px" }}>
            <div className="w-px h-full bg-[#b87870] opacity-30" />
            <motion.div
              className="absolute top-0 rounded-full bg-[#b87870]"
              style={{ width: "4px", height: "10px", left: "-1.5px", borderRadius: "2px" }}
              animate={{ y: [0, 26, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ──────────────────────────────────────────── */}
      {/* WORK                                         */}
      {/* ──────────────────────────────────────────── */}
      <section id="work" className="relative px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Eyebrow */}
          <p
            className="font-['Georgia',serif] font-normal mb-3 font-[Caveat]"
            style={{ fontSize: "15px", color: "#b87870", lineHeight: "normal" }}
          >
            ✦ selected work
          </p>

          {/* Section title */}
          <div className="mb-3">
            <p
              className="font-['Caveat',cursive] font-bold text-[#1c1a16]"
              style={{ fontSize: "clamp(44px,7vw,72px)", lineHeight: 1 }}
            >
              Projects &amp;
            </p>
            <p
              className="font-['Caveat',cursive] font-bold"
              style={{ fontSize: "clamp(44px,7vw,72px)", lineHeight: 1, color: "#b87870" }}
            >
              Case Studies
            </p>
          </div>

          {/* Description */}
          <p
            className="font-['Georgia',serif] font-normal text-[#4a443e] mb-12"
            style={{ fontSize: "17px", lineHeight: "2.0", maxWidth: "520px" }}
          >A curated selection of design work spanning learning experience design, UX research, interactive storytelling, and data visualization.</p>

          {/* ── UI/UX Group ── */}
          <div className="mb-16">
            {/* Group label */}
            <div className="flex items-center gap-3 mb-8 bg-[#b8787040]">
              <span
                className="font-['Georgia',serif] font-normal text-[#1c1a16]"
                style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >UI/UX Design</span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(138,131,123,0.25)" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {projects
                .filter((p) => p.category === "uiux")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onOpen={openProject} />
                ))}
            </div>
          </div>

          {/* ── Gamification Group ── */}
          <div>
            {/* Group label */}
            <div className="flex items-center gap-3 mb-8 bg-[#b8787040]">
              <span
                className="font-['Georgia',serif] font-normal text-[#1c1a16]"
                style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                Gamification &amp; Game for Learning
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(138,131,123,0.25)" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {projects
                .filter((p) => p.category === "gamification")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onOpen={openProject} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────── */}
      {/* ABOUT                                        */}
      {/* ──────────────────────────────────────────── */}
      <section id="about" className="relative px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-[1200px] mx-auto">
          <p
            className="font-['Georgia',serif] font-normal mb-3 font-[Caveat]"
            style={{ fontSize: "15px", color: "#b87870", lineHeight: "normal" }}
          >
            ✦ about me
          </p>

          <div className="flex flex-col lg:flex-row gap-14 items-start">
            <div className="flex-1">
              <p
                className="font-['Caveat',cursive] font-bold text-[#1c1a16] mb-6"
                style={{ fontSize: "clamp(36px,5vw,52px)", lineHeight: 1.1 }}
              >
                I turn complexity
                <br />into clarity.
              </p>

              {[
                "With a background spanning UX research, learning experience design,",
                "and data storytelling, I help teams and learners navigate complex",
                "information with confidence.",
                "",
                "I believe the best designs don't just solve problems — they invite",
                "people in, make them feel capable, and leave them wanting to explore.",
              ].map((line, i) => (
                <p
                  key={i}
                  className="font-['Georgia',serif] font-normal text-[#4a443e]"
                  style={{ fontSize: "17px", lineHeight: "2.2" }}
                >
                  {line || "\u00A0"}
                </p>
              ))}

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-['Georgia',serif] font-normal text-[#4a443e] border border-[rgba(74,68,62,0.3)] rounded-full"
                    style={{ fontSize: "14px", padding: "4px 14px", lineHeight: "normal", backgroundColor: "rgba(255,255,255,0.5)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* About polaroid — stacked photo wall */}
            <div className="relative shrink-0" style={{ paddingTop: "10px" }}>
              <div style={{ position: "relative", width: "310px", height: "530px" }}>

                {/* Top card — cat gif */}
                <div
                  className="relative bg-white"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "24px",
                    width: "265px",
                    padding: "12px 12px 52px",
                    boxShadow: "0px 6px 28px rgba(28,26,23,0.13)",
                    transform: "rotate(-3deg)",
                    zIndex: 1,
                  }}
                >
                  <WashiTape color="#b87870" />
                  <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden", backgroundColor: "#d9d4ca" }}>
                    <img
                      src={catGif}
                      alt="cat"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <p
                    className="font-['Georgia',serif] font-normal text-[#8a837b]"
                    style={{ fontSize: "12px", lineHeight: 1.5, position: "absolute", bottom: "12px", left: "12px", right: "12px", textAlign: "center" }}
                  >
                    ✦ always curious
                  </p>
                </div>

                {/* Bottom card — self portrait */}
                <div
                  className="relative bg-white"
                  style={{
                    position: "absolute",
                    top: "240px",
                    left: "0px",
                    width: "272px",
                    padding: "12px 12px 52px",
                    boxShadow: "0px 10px 36px rgba(28,26,23,0.16)",
                    transform: "rotate(2.5deg)",
                    zIndex: 2,
                  }}
                >
                  <WashiTape color="#9fb5a0" />
                  <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden", backgroundColor: "#d9d4ca" }}>
                    <img
                      src={selfPortrait}
                      alt="Jinru"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                    />
                  </div>
                  <p
                    className="font-['Georgia',serif] font-normal text-[#8a837b]"
                    style={{ fontSize: "12px", lineHeight: 1.5, position: "absolute", bottom: "12px", left: "12px", right: "12px", textAlign: "center" }}
                  >
                    Currently exploring AI × Design ✦
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────── */}
      {/* CONTACT                                      */}
      {/* ──────────────────────────────────────────── */}
      <section id="contact" className="relative px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-[640px]">
          <p
            className="font-['Georgia',serif] font-normal mb-3 font-[Caveat]"
            style={{ fontSize: "15px", color: "#b87870", lineHeight: "normal" }}
          >
            ✦ get in touch
          </p>

          <p
            className="font-['Caveat',cursive] font-bold text-[#1c1a16] mb-6"
            style={{ fontSize: "clamp(36px,5vw,52px)", lineHeight: 1.1 }}
          >
            Let's make something
            <br />worth remembering.
          </p>

          {[
            "Whether you have a project in mind, a question about",
            "my work, or just want to say hello — I'd love to hear",
            "from you.",
          ].map((line) => (
            <p
              key={line}
              className="font-['Metal',sans-serif] font-normal text-[#4a443e]"
              style={{ fontSize: "17px", lineHeight: "2.2" }}
            >
              {line}
            </p>
          ))}

          {/* Contact options — interactive selector */}
          <ContactOptions />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="relative px-8 md:px-16 py-10"
        style={{ borderTop: "1px solid rgba(29,26,22,0.08)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-['Caveat',cursive] font-bold text-[#1c1a16]" style={{ fontSize: "16px" }}>
            Jinru's Design Journal
          </p>
          <p className="font-['Georgia',serif] font-normal text-[#8a837b]" style={{ fontSize: "14px" }}>© 2026 —Jinru's Portfolio</p>
          
        </div>
      </footer>
    </div>
  );
}

// ── Contact Options ───────────────────────────────────────────────────────────
type ContactId = "email" | "linkedin" | "github" | "wechat";

const contactData: Record<ContactId, {
  label: string;
  icon: string;
  handle: string;
  hint: string;
  link: string | null;
  accentColor: string;
}> = {
  email: {
    label: "Email",
    icon: "✉",
    handle: "yjr927@gmail.com",
    hint: "Best for project inquiries & collabs",
    link: "mailto:jinruyang@example.com",
    accentColor: "#b87870",
  },
  linkedin: {
    label: "LinkedIn",
    icon: "in",
    handle: "linkedin.com/in/jinruyang",
    hint: "Let's connect professionally",
    link: "https://www.linkedin.com/in/jinruyang/",
    accentColor: "#0a66c2",
  },
  github: {
    label: "GitHub",
    icon: "⌥",
    handle: "github.com/yjr927",
    hint: "See my code & side projects",
    link: "https://github.com/yjr927",
    accentColor: "#4a443e",
  },
  wechat: {
    label: "WeChat",
    icon: "💬",
    handle: "jinruyang",
    hint: "Search my ID or scan the QR",
    link: null,
    accentColor: "#07c160",
  },
};

const contactOrder: ContactId[] = ["email", "linkedin", "github", "wechat"];

function ContactOptions() {
  const [active, setActive] = useState<ContactId | null>(null);

  const data = active ? contactData[active] : null;

  return (
    <>
      {/* Option cards */}
      <div className="mt-10 flex flex-col gap-3">
        {contactOrder.map((id) => {
          const item = contactData[id];
          const isActive = active === id;
          return (
            <motion.button
              key={id}
              onClick={() => setActive(isActive ? null : id)}
              animate={{
                rotate: isActive ? 0 : ({ email: -1.5, linkedin: 0.8, github: -1.2, wechat: 1.4 } as Record<string, number>)[id] ?? 0,
              }}
              whileHover={{ scale: 1.05, rotate: 0, y: -4 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
              className="flex items-center gap-3 text-left w-full"
              style={{
                padding: "11px 18px",
                backgroundColor: isActive ? `${item.accentColor}22` : "rgba(255,255,255,0.5)",
                border: `1.5px solid ${item.accentColor}55`,
                borderRadius: "10px",
                boxShadow: isActive
                  ? `2px 3px 0px ${item.accentColor}44`
                  : `2px 3px 0px ${item.accentColor}28`,
                cursor: "pointer",
                backdropFilter: "blur(4px)",
                transition: "background-color 0.18s",
              }}
            >
              {/* Icon */}
              <span
                style={{
                  fontSize: "17px",
                  color: `${item.accentColor}cc`,
                  fontFamily: "Caveat, cursive",
                  fontWeight: 700,
                  flexShrink: 0,
                  width: "22px",
                  textAlign: "center",
                  transition: "color 0.18s",
                }}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span
                className="font-['Caveat',cursive] font-bold flex-1"
                style={{
                  fontSize: "20px",
                  color: isActive ? item.accentColor : "#4a443e",
                  lineHeight: "normal",
                  transition: "color 0.18s",
                }}
              >
                {item.label}
              </span>

              {/* Active dot */}
              {isActive && (
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: `${item.accentColor}88`, flexShrink: 0 }} />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Slide-in detail panel */}
      <AnimatePresence>
        {active && data && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActive(null)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(28,26,22,0.18)",
                zIndex: 45,
              }}
            />

            {/* Sidebar panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(360px, 90vw)",
                backgroundColor: "#faf7f0",
                zIndex: 46,
                display: "flex",
                flexDirection: "column",
                boxShadow: "-8px 0 40px rgba(28,26,22,0.14)",
              }}
            >
              {/* Ruled lines background inside panel */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(184,120,112,0.12) 31px, rgba(184,120,112,0.12) 32px)",
                  backgroundPosition: "0 48px",
                  pointerEvents: "none",
                }}
              />

              {/* Rose margin line */}
              <div
                style={{
                  position: "absolute",
                  left: "52px",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "rgba(184,120,112,0.25)",
                  pointerEvents: "none",
                }}
              />

              {/* Washi tape accent at top */}
              <div
                style={{
                  height: "5px",
                  background: `repeating-linear-gradient(90deg, ${data.accentColor}55 0px, ${data.accentColor}55 10px, transparent 10px, transparent 20px)`,
                }}
              />

              {/* Panel content */}
              <div style={{ flex: 1, padding: "28px 28px 28px 64px", position: "relative", overflow: "auto" }}>
                {/* Close */}
                <button
                  onClick={() => setActive(null)}
                  className="font-['Caveat',cursive] text-[#8a837b] hover:text-[#b87870] transition-colors"
                  style={{ fontSize: "22px", position: "absolute", top: "20px", right: "20px", lineHeight: 1 }}
                >
                  ✕
                </button>

                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: data.accentColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: "Caveat, cursive",
                    fontWeight: 700,
                  }}
                >
                  {data.icon}
                </div>

                {/* Label */}
                <p
                  className="font-['Caveat',cursive] font-bold text-[#1c1a16]"
                  style={{ fontSize: "32px", lineHeight: 1, marginBottom: "6px" }}
                >
                  {data.label}
                </p>

                {/* Hint */}
                

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "rgba(74,68,62,0.1)", marginBottom: "24px" }} />

                {/* Handle label */}
                <p
                  className="font-['Georgia',serif] font-normal text-[#8a837b]"
                  style={{ fontSize: "12px", lineHeight: "normal", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  {active === "wechat" ? "WeChat ID" : active === "email" ? "Address" : "Profile"}
                </p>

                {/* The handle / "number" */}
                <p
                  className="font-['Georgia',serif] font-bold"
                  style={{ fontSize: "22px", color: data.accentColor, lineHeight: 1.3, marginBottom: "24px", wordBreak: "break-all" }}
                >
                  {active === "email" ? "yjr927@gmail.com" : active === "wechat" ? "Yadue0pb" : data.handle}
                </p>

                {/* WeChat QR placeholder */}
                {active === "wechat" && (
                  null
                )}

                {/* CTA link */}
                {data.link && (
                  <a
                    href={data.link}
                    target={active !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-['Caveat',cursive] font-bold text-white inline-flex items-center gap-2 rounded-[3px] transition-opacity hover:opacity-80"
                    style={{
                      fontSize: "17px",
                      padding: "10px 22px",
                      backgroundColor: data.accentColor,
                      textDecoration: "none",
                      lineHeight: "normal",
                    }}
                  >
                    {active === "email" ? "Send a message" : `Open ${data.label}`} →
                  </a>
                )}
              </div>

              {/* Footer note */}
              <div style={{ padding: "16px 28px 20px 64px", borderTop: "1px solid rgba(74,68,62,0.08)" }}>
                <p className="font-['Georgia',serif] font-normal text-[#8a837b]" style={{ fontSize: "12px", lineHeight: 1.6 }}>
                  ~ I usually respond within 48 hours ✦
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
