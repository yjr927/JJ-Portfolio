import SkillsBasedHiringDetail from "../../../SKills Based Hiring Project detail/src/app/App";

interface SkillsBasedHiringPageProps {
  onBack: () => void;
}

export function SkillsBasedHiringPage({ onBack }: SkillsBasedHiringPageProps) {
  return (
    <div className="relative">
      <button
        onClick={onBack}
        className="fixed left-5 top-20 z-[70] bg-white/90 px-4 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-colors hover:text-[#b87870]"
        style={{
          border: "1px solid rgba(29,26,22,0.08)",
          borderRadius: "3px",
          fontFamily: "'Caveat', cursive",
          fontSize: "17px",
          color: "#4a443e",
        }}
      >
        ← Back to Work
      </button>
      <SkillsBasedHiringDetail />
    </div>
  );
}
