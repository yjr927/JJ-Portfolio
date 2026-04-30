import { motion } from "motion/react";

export interface Project {
  id: string;
  shortName: string;
  title: string;
  subtitle: string;
  tags: string[];
  color: string;
  categoryLine: string;
  role: string;
  timeline: string;
  tools: string;
  impact: string;
  chapters: Chapter[];
  category: "uiux" | "gamification";
  liveUrl?: string; // GitHub Pages or any live URL — shows the mini TV in the case study
  detailType?: "skillsBasedHiring";
}

export interface Chapter {
  number: string;
  title: string;
  content: string;
  quote?: { text: string; attribution: string };
}

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

// Per-card idle tilt — feels like cards scattered on a desk
const idleTilts: Record<string, number> = {
  "01": -1.6,
  "02":  1.3,
  "03": -0.9,
  "04":  2.0,
  "05": -1.4,
  "06":  0.7,
  "07": -1.8,
  "08":  1.5,
};

function WashiTape({ color }: { color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "72px",
        height: "18px",
        borderRadius: "2px",
        background: `repeating-linear-gradient(
          45deg,
          ${color}55 0px,
          ${color}55 4px,
          ${color}33 4px,
          ${color}33 8px
        )`,
        zIndex: 2,
      }}
    />
  );
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const tilt = idleTilts[project.id] ?? 0;

  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ paddingTop: "14px" }}
      onClick={() => onOpen(project)}
      initial={{ rotate: tilt }}
      animate={{ rotate: tilt }}
      whileHover={{
        rotate: 0,
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      whileTap={{
        scale: 0.97,
        y: -4,
        rotate: 0,
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
    >
      {/* Shadow layer — deepens on hover separately via CSS */}
      <motion.div
        className="relative bg-white rounded-[2px] overflow-visible"
        initial={{ boxShadow: "0px 4px 18px rgba(28,26,23,0.10)" }}
        whileHover={{ boxShadow: "0px 18px 48px rgba(28,26,23,0.20)" }}
        whileTap={{ boxShadow: "0px 6px 20px rgba(28,26,23,0.14)" }}
        transition={{ duration: 0.22 }}
        style={{ padding: "12px 12px 20px" }}
      >
        {/* Washi tape */}
        <WashiTape color={project.color} />

        {/* Image area */}
        <div
          className="relative w-full overflow-hidden rounded-[1px] mb-4"
          style={{ aspectRatio: "4/3", backgroundColor: "#ddd8cc" }}
        >
          {/* Zoom layer */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ backgroundColor: "#ddd8cc" }}
          />

          {/* Color wash overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: `${project.color}18`, mixBlendMode: "multiply" }}
          />

          {/* Short name label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="font-['Caveat',cursive] font-normal text-[#4a443e] px-4 py-1.5 rounded-[2px] border border-[rgba(74,68,62,0.3)] bg-[rgba(248,247,244,0.7)]"
              style={{ fontSize: "16px", lineHeight: "normal" }}
              initial={{ opacity: 0.75 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {project.shortName}
            </motion.span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-['Caveat',cursive] font-normal text-[#8a837b] border border-[rgba(138,131,123,0.4)] rounded-full"
              style={{ fontSize: "12px", padding: "1px 10px", lineHeight: "normal" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <motion.p
          className="font-['Caveat',cursive] font-bold text-[#1c1a16] mb-2"
          style={{ fontSize: "22px", lineHeight: 1.2 }}
          initial={{ color: "#1c1a16" }}
          whileHover={{ color: project.color }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.p>

        {/* Read more — arrow slides right on hover */}
        <div className="flex items-center gap-1 overflow-hidden">
          <motion.p
            className="font-['Caveat',cursive] font-normal"
            style={{ fontSize: "14px", color: project.color, lineHeight: "normal" }}
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Read more →
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
