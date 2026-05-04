import type { ReactNode } from "react";
import web3Cover from "../../imports/portfolio/web3-cover.png";
import duneMain from "../../imports/portfolio/dune-main-page.png";
import duneData from "../../imports/portfolio/dune-data-page.png";
import etherscan from "../../imports/portfolio/etherscan-page.png";
import glassnode from "../../imports/portfolio/glassnode-page.png";
import nansen from "../../imports/portfolio/nansen-page.png";
import aiSignal from "../../imports/portfolio/ai-signal.png";
import insightBefore from "../../imports/portfolio/insight-page-before.png";
import detailedInsights from "../../imports/portfolio/detailed-insights-page.png";
import communityAfter from "../../imports/portfolio/community-after.png";

const Georgia = "'Georgia', serif";
const Caveat = "'Caveat', cursive";
const accent = "#5fb7e6";

const chapters = [
  { id: "context", number: "01", title: "Context", color: "#9fb5c8" },
  { id: "problem", number: "02", title: "Core Problem", color: "#8cb1c9" },
  { id: "analysis", number: "03", title: "Competitive Analysis", color: "#7aa9c9" },
  { id: "strategy", number: "04", title: "Design Strategy", color: "#68a2c8" },
  { id: "solution", number: "05", title: "System Design", color: "#5fb7e6" },
  { id: "impact", number: "06", title: "Impact", color: "#4a95bd" },
];

function ChapterHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <span style={{ fontFamily: Georgia, fontSize: "13px", color: "#8a837b", letterSpacing: "0.08em" }}>
        chapter {number}
      </span>
      <h2 style={{ fontFamily: Caveat, fontSize: "clamp(38px, 5vw, 52px)", fontWeight: 700, color: "#1c1a16", lineHeight: 1.15 }}>
        {title}
      </h2>
      <div style={{ height: "3px", width: "120px", backgroundColor: accent, opacity: 0.75, borderRadius: "6px" }} />
    </div>
  );
}

function BodyP({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontFamily: Georgia, fontSize: "17px", color: "#4a443e", lineHeight: 1.9 }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ borderTop: "1px dashed rgba(29,26,22,0.15)", margin: "12px 0" }} />;
}

function CaseSection({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-24 scroll-mt-24" style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}>
      {children}
    </section>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-7">
      <div className="overflow-hidden rounded-sm bg-white shadow-sm" style={{ border: "1px solid rgba(29,26,22,0.08)" }}>
        <img src={src} alt={alt} className="w-full object-cover" loading="lazy" decoding="async" />
      </div>
      {caption && (
        <figcaption className="mt-2" style={{ fontFamily: Georgia, fontSize: "12px", color: "#8a837b", lineHeight: 1.6 }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[3px] bg-white px-4 py-3 shadow-sm" style={{ border: "1px solid rgba(29,26,22,0.08)", minWidth: "140px" }}>
      <p style={{ fontFamily: Georgia, fontSize: "11px", color: "#8a837b", marginBottom: "6px" }}>{label}</p>
      <p style={{ fontFamily: Georgia, fontSize: "15px", fontWeight: 700, color: "#1c1a16", lineHeight: 1.3 }}>{value}</p>
    </div>
  );
}

function InsightBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[3px] bg-white p-5 shadow-sm" style={{ border: "1px solid rgba(29,26,22,0.08)" }}>
      <p className="mb-3 uppercase" style={{ fontFamily: Georgia, fontSize: "11px", fontWeight: 700, color: accent, letterSpacing: "0.1em" }}>
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function CompetitiveCard({
  title,
  problem,
  insight,
  opportunity,
}: {
  title: string;
  problem: string;
  insight: string;
  opportunity: string;
}) {
  return (
    <div className="rounded-[3px] bg-white p-5 shadow-sm" style={{ border: "1px solid rgba(29,26,22,0.08)" }}>
      <h3 style={{ fontFamily: Caveat, fontSize: "31px", fontWeight: 700, color: "#1c1a16", lineHeight: 1.1 }}>{title}</h3>
      <div className="mt-4 space-y-4">
        <div>
          <p className="mb-1 uppercase" style={{ fontFamily: Georgia, fontSize: "11px", fontWeight: 700, color: "#b87870", letterSpacing: "0.1em" }}>Problem</p>
          <p style={{ fontFamily: Georgia, fontSize: "15px", color: "#4a443e", lineHeight: 1.75 }}>{problem}</p>
        </div>
        <div>
          <p className="mb-1 uppercase" style={{ fontFamily: Georgia, fontSize: "11px", fontWeight: 700, color: accent, letterSpacing: "0.1em" }}>Insight</p>
          <p style={{ fontFamily: Georgia, fontSize: "15px", color: "#4a443e", lineHeight: 1.75 }}>{insight}</p>
        </div>
        <div>
          <p className="mb-1 uppercase" style={{ fontFamily: Georgia, fontSize: "11px", fontWeight: 700, color: "#7bb59b", letterSpacing: "0.1em" }}>Opportunity</p>
          <p style={{ fontFamily: Georgia, fontSize: "15px", color: "#4a443e", lineHeight: 1.75 }}>{opportunity}</p>
        </div>
      </div>
    </div>
  );
}

function ChapterNav() {
  const rotations = [-2.3, 1.5, -1.2, 2, -1.8, 1.1];

  return (
    <nav className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <p className="mb-3 pl-1 uppercase tracking-widest" style={{ fontFamily: Caveat, fontSize: "11px", color: "#9a9088" }}>
        Contents
      </p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4">
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            onClick={() => document.getElementById(chapter.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="focus:outline-none"
            style={{ transform: `rotate(${rotations[index]}deg)`, transition: "transform 0.25s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${rotations[index]}deg)`)}
          >
            <div className="bg-white" style={{ width: "82px", padding: "4px 4px 0", boxShadow: "0 3px 10px rgba(0,0,0,0.16)" }}>
              <div className="flex items-center justify-center" style={{ width: "74px", height: "60px", backgroundColor: `${chapter.color}22` }}>
                <span style={{ fontFamily: Caveat, fontSize: "36px", fontWeight: 700, color: chapter.color, opacity: 0.75, lineHeight: 1 }}>
                  {chapter.number}
                </span>
              </div>
              <div className="flex items-center justify-center" style={{ height: "30px", padding: "0 2px" }}>
                <p className="text-center leading-tight" style={{ fontFamily: Caveat, fontSize: "10.5px", color: "#6b625a" }}>
                  {chapter.title}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}

export function Web3AnalyticsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#ede8dc]" style={{ scrollBehavior: "smooth" }}>
      <header
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 md:px-16"
        style={{ height: "64px", backgroundColor: "rgba(237,232,220,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(29,26,22,0.07)" }}
      >
        <button onClick={onBack} style={{ fontFamily: Caveat, fontSize: "17px", color: "#1c1a16" }}>Jinru's Design Journal</button>
        <button onClick={onBack} style={{ fontFamily: Caveat, fontSize: "16px", color: "#8a837b" }}>Back to Work</button>
      </header>

      <ChapterNav />

      <main className="pt-[64px] lg:ml-[240px]">
        <div className="mx-auto max-w-[820px] px-6 py-16 md:px-10 lg:px-14">
          <section className="mb-24">
            <p className="mb-3" style={{ fontFamily: Georgia, fontSize: "15px", color: accent }}>✦ Web3 Data Products · UI/UX Internship</p>
            <h1 className="mb-6" style={{ fontFamily: Caveat, fontSize: "clamp(48px, 7vw, 70px)", fontWeight: 700, color: "#1c1a16", lineHeight: 1.1 }}>
              Web3 Analytics Dashboard
            </h1>
            <div className="mb-8 space-y-6">
              <BodyP>
                This project was completed during a 4-week UI/UX internship focused on Web3 data products. The core problem was clear: emerging Web3 investors and product managers struggle to interpret complex blockchain data and turn it into actionable decisions.
              </BodyP>
              <BodyP>
                I approached this as a full product problem, not just a UI problem, designing a system that translates complex blockchain data into clear, structured, and actionable insights.
              </BodyP>
            </div>
            <div className="mb-10 flex flex-wrap gap-3">
              <InfoCard label="role" value="Sole UI/UX Designer" />
              <InfoCard label="timeline" value="4-week internship" />
              <InfoCard label="tools" value="Figma · Claude · Codex" />
              <InfoCard label="impact" value="Data display → decision support" />
            </div>
            <Figure src={web3Cover} alt="Web3 analytics dashboard cover" caption="Final dashboard direction: an insight-first Web3 analytics system." />
          </section>

          <CaseSection id="context">
            <ChapterHeader number="01" title="Context & Goal" />
            <div className="space-y-6">
              <BodyP>
                Most existing Web3 tools expose large amounts of data, but fail to support understanding or decision-making. The goal was to help users move from "seeing data" to "making decisions."
              </BodyP>
              <BodyP>
                I designed a Web3 analytics dashboard that helps users understand network behavior, wallet activity, capital flow, and ecosystem health. Rather than building data infrastructure, the focus was on transforming existing data into meaningful, decision-oriented experiences.
              </BodyP>
              <InsightBox title="Final deliverables">
                <BodyP>Problem framing, research synthesis, competitive analysis, personas, information architecture, user flows, wireframes, high-fidelity UI, interactive prototype, usability insights, and design rationale.</BodyP>
              </InsightBox>
            </div>
            <Divider />
          </CaseSection>

          <CaseSection id="problem">
            <ChapterHeader number="02" title="Core Problem" />
            <div className="space-y-6">
              <BodyP>
                Across Web3 analytics tools, the issue is not lack of data. It is lack of understanding. Users are trying to answer questions like: Is this network growing? Where is capital flowing? What signals risk or opportunity?
              </BodyP>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InsightBox title="Data without context"><BodyP>Metrics are shown, but not explained, so users do not know what they mean.</BodyP></InsightBox>
                <InsightBox title="High cognitive load"><BodyP>Too many charts, terms, and dimensions overwhelm non-expert users.</BodyP></InsightBox>
                <InsightBox title="Poor information structure"><BodyP>No clear hierarchy or narrative makes it hard to know where to focus.</BodyP></InsightBox>
                <InsightBox title="Misleading mental models"><BodyP>Traditional finance dashboard patterns can create incorrect assumptions about Web3 data.</BodyP></InsightBox>
              </div>
            </div>
            <Divider />
          </CaseSection>

          <CaseSection id="analysis">
            <ChapterHeader number="03" title="Competitive Analysis" />
            <div className="space-y-6">
              <BodyP>
                I compared major Web3 analytics products through a problem → insight → opportunity lens. Across all platforms, the pattern was consistent: they prioritize data access over user understanding.
              </BodyP>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <CompetitiveCard title="Dune" problem="Requires SQL and technical knowledge. Dashboards lack consistency." insight="The platform is optimized for data creation, not consumption." opportunity="Standardize dashboard structure, reduce technical barriers, and add an interpretation layer." />
                <CompetitiveCard title="Etherscan" problem="Raw transaction-level data only, with no visualization or summarization." insight="High transparency, but little support for understanding patterns." opportunity="Introduce visual abstraction and transform raw logs into trends and insights." />
                <CompetitiveCard title="Nansen" problem="Uses stock-market UI patterns and overemphasizes price metrics." insight="False familiarity can make users misinterpret Web3 dynamics." opportunity="Focus on wallet behavior and capital flow, clearly separating Web3 logic from traditional finance." />
                <CompetitiveCard title="Glassnode" problem="Aggregated indicators can feel like a black box. The interface remains complex." insight="Strong at interpretation, but weaker in transparency and clarity." opportunity="Explain how metrics are derived and build a clear overview → detail narrative." />
              </div>
              <Figure src={duneMain} alt="Dune dashboard discovery page" caption="Dune: strong creation ecosystem, but discovery and consumption remain structurally heavy." />
              <Figure src={duneData} alt="Dune data page" caption="Dune data page: powerful metrics, but high cognitive load for non-technical users." />
              <Figure src={etherscan} alt="Etherscan homepage" caption="Etherscan: transparent transaction infrastructure, but raw logs do not become decision-ready insight." />
              <Figure src={nansen} alt="Nansen homepage" caption="Nansen: trading-centered interface creates a different mental model from insight-first analysis." />
              <Figure src={glassnode} alt="Glassnode dashboard" caption="Glassnode: interpretation exists, but the dense dashboard structure can still feel difficult to parse." />
            </div>
            <Divider />
          </CaseSection>

          <CaseSection id="strategy">
            <ChapterHeader number="04" title="Insight-First Strategy" />
            <div className="space-y-6">
              <BodyP>
                To address the gap, I introduced an Insight-First Design Framework. Instead of asking users to interpret data, the system explains what is happening first, then supports it with data.
              </BodyP>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InsightBox title="Insight before data"><BodyP>Reduce interpretation effort by leading with meaning.</BodyP></InsightBox>
                <InsightBox title="Structure by user goals"><BodyP>Organize by decisions users need to make, not technical metric categories.</BodyP></InsightBox>
                <InsightBox title="Progressive disclosure"><BodyP>Move from overview to deeper exploration without overwhelming the first screen.</BodyP></InsightBox>
                <InsightBox title="Stable hierarchy"><BodyP>Use consistent layouts to build reliable mental models across pages.</BodyP></InsightBox>
              </div>
              <Figure src={insightBefore} alt="Insight page before redesign" caption="Before: insight content existed, but hierarchy and structure were not doing enough decision-support work." />
            </div>
            <Divider />
          </CaseSection>

          <CaseSection id="solution">
            <ChapterHeader number="05" title="Solution: System Design" />
            <div className="space-y-6">
              <BodyP>
                The dashboard follows a repeatable structure: AI Signal, Insight Summary, Key Metrics, Visualizations, and an Insight Layer that combines AI-generated analysis with expert perspectives.
              </BodyP>
              <Figure src={aiSignal} alt="AI signal component" caption="AI Signal: a concise top-layer summary of current market behavior." />
              <Figure src={detailedInsights} alt="Detailed insights page" caption="Detailed Insight: plain-language explanations, key signals, and expert perspective reduce interpretation burden." />
              <Figure src={communityAfter} alt="Community and external news page" caption="Community layer: external news and community observations support multiple perspectives." />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InsightBox title="Hover microinteractions"><BodyP>Reveal details without adding visual clutter to the base dashboard.</BodyP></InsightBox>
                <InsightBox title="AI + expert insight"><BodyP>Balance automated synthesis with human interpretation to improve trust.</BodyP></InsightBox>
                <InsightBox title="Structured layout system"><BodyP>Keep navigation, controls, and cards consistent across pages.</BodyP></InsightBox>
                <InsightBox title="Community insight layer"><BodyP>Support exploration of external signals and multiple viewpoints.</BodyP></InsightBox>
              </div>
            </div>
            <Divider />
          </CaseSection>

          <CaseSection id="impact">
            <ChapterHeader number="06" title="Design Impact" />
            <div className="space-y-6">
              <BodyP>
                This design shifts the burden from the user to the system. Users can understand trends faster, navigate information more easily, and make decisions with more confidence.
              </BodyP>
              <BodyP>
                From a product perspective, the redesign reduces the learning curve, expands accessibility to non-technical users, and better supports real-world decision-making.
              </BodyP>
              <InsightBox title="My role">
                <BodyP>
                  I was the sole designer responsible for the full design lifecycle: problem framing, product direction, information architecture, flows, low- and high-fidelity designs, design system, and interactive prototype. Most importantly, I reframed the product from a data display tool into a decision-support system.
                </BodyP>
              </InsightBox>
            </div>
            <Divider />
          </CaseSection>
        </div>
      </main>
    </div>
  );
}
