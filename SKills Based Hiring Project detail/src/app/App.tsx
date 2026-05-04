import { ChapterNav } from './components/ChapterNav';
import { MobileNav } from './components/MobileNav';
import { useState, type ReactNode } from 'react';

// ─── All images from Figma ──────────────────────────────────────────────────
import imgHeroScreenshot    from '../imports/J-1/cfe3b35624e72bd48acaf8e83e60f893c888fb5c.png';
import imgImage6            from '../imports/J-1/2be22b8cad02619fbfa2f3b1f308d9140e3a89f4.png';
import imgImage20           from '../imports/J-1/fe5a3d12fdb780290cbf0d3c0c7a24e875695f09.png';
import imgImage10           from '../imports/J-1/5f1df9659e5bc51eb4eddb31c1bcbd4eb4cf8fb7.png';
import imgImage2            from '../imports/J-1/ebc58f991dbd2217dbc650578aa7ccfd1cf1c74d.png';
import imgImage11           from '../imports/J-1/5acd65a280f4a8ccfa9f66de99d7777003fad562.png';
import imgPersona1          from '../imports/J-1/beab5e56a88a7b51391d10ac59fc6ced07cfa286.png';
import imgPersona2          from '../imports/J-1/7cd2b42130e21002ff1c34c0640d8042e7599433.png';
import imgStoryboard        from '../imports/J-1/d555e5d709d6936b450c0efbaf985a1bfbaa7aea.png';
import imgOnboarding        from '../imports/J-1/7507bcc5d2acbdd876655af7850adbdef0a8f6f2.png';
import imgJobFeature1       from '../imports/J-1/92140752291b4b84aab3fef3462ee617f7eae687.png';
import imgJobFeature2       from '../imports/J-1/fb7fe9fa785fa9dfda2b8fffa799620f23c56688.png';
import imgJobFeature3       from '../imports/J-1/346093896afbaf8acee71daed6d76a8c4ca0ab9a.png';
import imgJobBoard          from '../imports/J-1/8285fb9f64a9624387cb3df5c1fa7a14e957c864.png';
import imgCommunity1        from '../imports/J-1/62a4950ca569ae7fac1a563b12ee7528a4ebd339.png';
import imgCommunity2        from '../imports/J-1/5ed64b81852e2aabe737f4f2bc5a1c1c268229c7.png';
import imgCommunity3        from '../imports/J-1/8be96c52710e3e3df011bea109c7926d8fff81b0.png';
import imgCommunity4        from '../imports/J-1/88b6e032277f21144ed567cb05caeb04d8f03d78.png';
import imgCommunity5        from '../imports/J-1/6be4acfedd57457bb63016aed8721b1efe2d382a.png';
import imgCommunity6        from '../imports/J-1/3b6f4515a906ef1d67a5c130cdfba8ec9eb6f267.png';
import imgIteration1        from '../imports/J-1/bf2ef7d9630d50998f5385b27695f457c727267c.png';
import imgIteration2        from '../imports/J-1/ccab770f4e6d24b10ae305175516c596efbc1e4d.png';
import imgIteration3        from '../imports/J-1/195a8ba2b8b2b861bfacc76dd919758372cfc599.png';
import imgIterationOverview from '../imports/J-1/508c35255df57f8e48c60137b15a6d338f427313.png';
import imgDashBefore        from '../imports/J-1/998cf62fdf738c7985aac709f8a779513589a00a.png';
import imgDashAfter         from '../imports/J-1/8550e20720477861c8a573f75cde95d5ab0ce6e1.png';
import imgJobTabBefore      from '../imports/J-1/b7ac94ea3bf80aca2975540ebec29a9c2f9da17f.png';
import imgJobTabAfter       from '../imports/J-1/9d6bc20680e23d546bc088322df7ea47f72a894f.png';
import imgCommunityBefore   from '../imports/J-1/d0f216dd2ba53fe5e31a3bc831eb8c93cecccb37.png';
import imgCommunityAfter    from '../imports/J-1/69a14278b81c0fe0ff0f25344f5c799b737fa4f6.png';
import imgImpact            from '../imports/J-1/09e3ea7dbdf28900760550b70a81f08eaf83ae16.png';

// ─── Shared style helpers ────────────────────────────────────────────────────
const Georgia = "'Georgia', serif";
const Caveat  = "'Caveat', cursive";

const chapterAccent = '#b87870';

// Chapter section header
function ChapterHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <span style={{ fontFamily: Georgia, fontSize: '13px', color: '#8a837b', letterSpacing: '0.08em' }}>
        chapter {number}
      </span>
      <h2 style={{ fontFamily: Caveat, fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 700, color: '#1c1a16', lineHeight: 1.15 }}>
        {title}
      </h2>
      <div style={{ height: '3px', width: '120px', backgroundColor: chapterAccent, opacity: 0.7, borderRadius: '6px' }} />
    </div>
  );
}

// Sub-section heading (for iterations, before/after etc.)
function SubHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-5">
      <p style={{ fontFamily: Georgia, fontSize: '13px', color: '#8a837b', marginBottom: '4px' }}>{label}</p>
      <h3 style={{ fontFamily: Caveat, fontSize: '36px', fontWeight: 700, color: '#1c1a16', lineHeight: 1.2 }}>
        {title}
      </h3>
      <div style={{ height: '3px', width: '120px', backgroundColor: chapterAccent, opacity: 0.7, borderRadius: '6px', marginTop: '6px' }} />
    </div>
  );
}

// Body paragraph
function BodyP({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontFamily: Georgia, fontSize: '17px', color: '#4a443e', lineHeight: 1.9, marginBottom: '0' }}>
      {children}
    </p>
  );
}

// Blockquote / pull-quote
function Blockquote({ children }: { children: ReactNode }) {
  return (
    <div style={{ borderLeft: `3px solid ${chapterAccent}`, paddingLeft: '24px', paddingTop: '8px', paddingBottom: '8px', margin: '8px 0' }}>
      <p style={{ fontFamily: Georgia, fontStyle: 'italic', fontSize: '18px', color: '#4a443e', lineHeight: 1.85 }}>
        {children}
      </p>
    </div>
  );
}

// Section divider
function Divider() {
  return <div style={{ borderTop: '1px dashed rgba(29,26,22,0.15)', margin: '12px 0' }} />;
}

function MiniTV({ url, color }: { url: string; color: string }) {
  const [loadError, setLoadError] = useState(false);
  const previewScale = 0.56;
  const scaledSize = `${100 / previewScale}%`;

  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex items-end justify-center" style={{ gap: '56px', height: '44px', marginBottom: '-3px' }}>
        <div style={{ width: '3px', height: '40px', background: 'linear-gradient(to top, #8a837b, #4a443e)', transform: 'rotate(-15deg)', transformOrigin: 'bottom center', borderRadius: '2px' }} />
        <div style={{ width: '3px', height: '40px', background: 'linear-gradient(to top, #8a837b, #4a443e)', transform: 'rotate(15deg)', transformOrigin: 'bottom center', borderRadius: '2px' }} />
      </div>

      <div
        style={{
          background: 'linear-gradient(160deg, #f5f0e6 0%, #ede8db 100%)',
          border: '2px solid rgba(74,68,62,0.18)',
          borderRadius: '18px',
          padding: '14px 16px 14px',
          boxShadow: '0px 10px 36px rgba(28,26,23,0.13), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(74,68,62,0.06)',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className="flex items-center justify-between mb-3 px-0.5">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-[9px] w-[9px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ backgroundColor: color }} />
              <span className="relative inline-flex h-[9px] w-[9px] rounded-full opacity-90" style={{ backgroundColor: color }} />
            </span>
            <span style={{ fontFamily: Caveat, fontSize: '13px', color: '#8a837b', letterSpacing: '0.12em' }}>
              LIVE PREVIEW
            </span>
          </div>
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: Georgia, fontSize: '12px', color, textDecoration: 'none' }}>
            open in new tab ↗
          </a>
        </div>

        <div style={{ background: '#28231e', borderRadius: '10px', padding: '7px', boxShadow: 'inset 0 3px 10px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.12)' }}>
          <div style={{ borderRadius: '6px', overflow: 'hidden', height: '520px', position: 'relative', background: '#1c1a16' }}>
            {loadError ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center" style={{ background: 'linear-gradient(135deg, #1c1a16, #2d2820)' }}>
                <p style={{ fontFamily: Georgia, fontSize: '14px', color: '#c8c0b3', lineHeight: 1.7 }}>
                  This page cannot be embedded here.
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: Georgia, fontSize: '14px', color, textDecoration: 'underline' }}>
                  Open the live page ↗
                </a>
              </div>
            ) : (
              <iframe
                src={url}
                title="NYU Metier live preview"
                onError={() => setLoadError(true)}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-modals"
                allow="fullscreen"
                style={{
                  width: scaledSize,
                  height: scaledSize,
                  border: 'none',
                  display: 'block',
                  transform: `scale(${previewScale})`,
                  transformOrigin: 'top left',
                }}
              />
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px)', pointerEvents: 'none', borderRadius: '6px' }} />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between px-1">
          <span style={{ fontFamily: Caveat, fontSize: '13px', color: '#8a837b', letterSpacing: '0.06em' }}>CH · 01</span>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border border-[rgba(74,68,62,0.22)] bg-[#ddd8cc]" />
            <span className="h-[22px] w-[22px] rounded-full border" style={{ background: `radial-gradient(circle at 40% 35%, ${color}55, ${color}22)`, borderColor: `${color}70` }} />
          </div>
        </div>
      </div>

      <div style={{ width: '88px', height: '11px', background: 'linear-gradient(to bottom, #ddd8cc, #ccc8be)', borderRadius: '0 0 5px 5px', border: '1.5px solid rgba(74,68,62,0.15)', borderTop: 'none' }} />
      <div style={{ width: '58px', height: '5px', background: '#c8c4bc', borderRadius: '0 0 4px 4px', border: '1px solid rgba(74,68,62,0.12)', borderTop: 'none' }} />
    </div>
  );
}

function CaseSection({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="mb-24 scroll-mt-24"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' }}
    >
      {children}
    </section>
  );
}

// Bullet list section block
function IterationBlock({
  problems, changes, reasons, sources,
}: {
  problems: string[];
  changes: string[];
  reasons: string[];
  sources: string[];
}) {
  const Dot = () => (
    <span className="inline-block rounded-sm mr-2 flex-shrink-0" style={{ width: '5px', height: '5px', backgroundColor: chapterAccent, opacity: 0.8, marginTop: '11px' }} />
  );

  const BulletGroup = ({ label, items }: { label: string; items: string[] }) => (
    <div className="mb-5">
      <p className="uppercase tracking-[0.1em] mb-2" style={{ fontFamily: Georgia, fontWeight: 700, fontSize: '11px', color: chapterAccent }}>
        {label}
      </p>
      <div className="flex flex-col gap-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-0">
            <Dot />
            <p style={{ fontFamily: Georgia, fontSize: '15px', color: '#4a443e', lineHeight: 1.85 }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <BulletGroup label="Problem"        items={problems} />
      <BulletGroup label="Change Made"    items={changes}  />
      <BulletGroup label="Reason"         items={reasons}  />
      <BulletGroup label="Source of Change" items={sources} />
    </div>
  );
}

// Before / After comparison
function BeforeAfter({ redesignNum, title, beforeImg, afterImg }: {
  redesignNum: string;
  title: string;
  beforeImg: string;
  afterImg: string;
}) {
  return (
    <div className="mb-12">
      <SubHeading label={`redesign ${redesignNum}`} title={title} />

      <div className="flex flex-wrap gap-6 mt-6">
        {/* Before */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase"
              style={{ backgroundColor: 'rgba(239,68,68,0.08)', color: '#b91c1c', border: '1px solid rgba(239,68,68,0.2)' }}>
              <span className="inline-block rounded-sm mr-2" style={{ width: '6px', height: '6px', backgroundColor: '#ef4444' }} />
              Before
            </span>
          </div>
          <img loading="lazy" decoding="async" src={beforeImg} alt="Before" className="w-full rounded-sm shadow-sm object-cover" />
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center flex-shrink-0 self-center">
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
            <path d="M1 6H27M27 6L22 2M27 6L22 10" stroke={chapterAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* After */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase"
              style={{ backgroundColor: 'rgba(34,197,94,0.08)', color: '#166534', border: '1px solid rgba(34,197,94,0.2)' }}>
              <span className="inline-block rounded-sm mr-2" style={{ width: '6px', height: '6px', backgroundColor: '#22c55e' }} />
              After
            </span>
          </div>
          <img loading="lazy" decoding="async" src={afterImg} alt="After" className="w-full rounded-sm shadow-sm object-cover" />
        </div>
      </div>

      <Divider />
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#ede8dc]" style={{ scrollBehavior: 'smooth' }}>
      {/* ── Top nav bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16"
        style={{ height: '64px', backgroundColor: 'rgba(237,232,220,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(29,26,22,0.07)' }}>
        <span style={{ fontFamily: Caveat, fontSize: '17px', color: '#1c1a16', fontWeight: 400 }}>
          Jinru's Design Journal
        </span>
        <nav className="hidden sm:flex items-center gap-5">
          {['Work', 'About', 'Contact'].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-5">
              <button style={{ fontFamily: Caveat, fontSize: '16px', color: '#8a837b' }}>{item}</button>
              {i < arr.length - 1 && <span style={{ fontFamily: Caveat, fontSize: '16px', color: '#8a837b' }}>·</span>}
            </span>
          ))}
        </nav>
      </header>

      {/* ── Desktop side nav ── */}
      <ChapterNav />

      {/* ── Mobile nav ── */}
      <MobileNav />

      {/* ── Main content ── */}
      <main className="pt-[64px] lg:ml-[240px]">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-14 py-16">

          {/* ════════════ HERO ════════════ */}
          <section className="mb-24">
            {/* Tag line */}
            <p className="mb-3" style={{ fontFamily: Georgia, fontSize: '15px', color: chapterAccent }}>
              ✦ Learning Design · UX Research
            </p>

            {/* Main title */}
            <h1 className="mb-6" style={{ fontFamily: Caveat, fontSize: 'clamp(48px, 7vw, 70px)', fontWeight: 700, color: '#1c1a16', lineHeight: 1.1 }}>
              Skills-Based Hiring Platform
            </h1>

            {/* Project description */}
            <div className="mb-8">
              <BodyP>
                This project is a web-based platform that helps NYU graduate students navigate the job search through a skills-based hiring approach. While many online job application tools exist, they still rely heavily on static resumes and provide limited support for skill development and networking. Our product is designed to bridge the gap between students who want to apply for jobs and those who do not know where to start, providing structure, guidance, and support throughout the process.
              </BodyP>
            </div>

            {/* Info cards */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { label: 'role',     value: 'UI/UX Designer & Product Manager' },
                { label: 'timeline', value: 'Oct.30 – Dec 18' },
                { label: 'tools',    value: 'Figma' },
                { label: 'impact',   value: '40% ↑ New Hire Retention' },
              ].map(card => (
                <div key={card.label} className="bg-white rounded-[3px] px-4 py-3 shadow-sm" style={{ border: '1px solid rgba(29,26,22,0.08)', minWidth: '140px' }}>
                  <p style={{ fontFamily: Georgia, fontSize: '11px', color: '#8a837b', marginBottom: '6px' }}>{card.label}</p>
                  <p style={{ fontFamily: Georgia, fontSize: '15px', fontWeight: 700, color: '#1c1a16', lineHeight: 1.3 }}>{card.value}</p>
                </div>
              ))}
            </div>

            <MiniTV url="https://yjr927.github.io/NYU-Metier/" color={chapterAccent} />

            <div className="mb-10 -mt-6">
              <a
                href="https://github.com/yjr927/NYU-Metier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#b87870]"
                style={{ fontFamily: Georgia, fontSize: '13px', color: '#8a837b', textDecoration: 'none' }}
              >
                GitHub repository ↗
              </a>
            </div>

            {/* Hero screenshot */}
            <div className="rounded-sm overflow-hidden shadow-md">
              <img loading="lazy" decoding="async" src={imgHeroScreenshot} alt="Platform screenshot" className="w-full object-cover" />
            </div>
          </section>

          {/* ════════════ CH01 PROJECT OVERVIEW ════════════ */}
          <CaseSection id="overview">
            <ChapterHeader number="01" title="Project Overview" />

            <div className="space-y-6">
              <BodyP>
                This project is a web-based platform designed to support skills-based hiring for NYU graduate students.
              </BodyP>
              <BodyP>
                Through research, we found that students often apply for jobs but don't know where to start. Although they are aware of resources like the NYU Wasserman Center, they rarely use them due to fragmented information and lack of clear guidance. Many students also feel they don't have the required skills and understand the importance of networking, but struggle to take action.
              </BodyP>
              <BodyP>
                The platform addresses this gap by helping students discover opportunities based on their skills, connect with mentors and peers, and better understand job expectations through features like response rate transparency. It provides a more structured and guided way for students to move from uncertainty to action in the job search process.
              </BodyP>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ CH02 CHALLENGE ════════════ */}
          <CaseSection id="challenge">
            <ChapterHeader number="02" title="Challenge" />

            <div className="space-y-7">
              <BodyP>
                This project explores how international NYU graduate students navigate skill-building and job searching in the U.S., a process shaped by both personal uncertainty and structural barriers.
              </BodyP>

              <Blockquote>
                At a broader level, the job market is highly competitive and uncertain—{' '}
                <span style={{ color: chapterAccent }}>
                  only about 23% of international master's graduates secure jobs in the U.S.
                </span>{' '}
                Beyond competition, students also face visa constraints and limited transparency in hiring processes.
              </Blockquote>

              <p style={{ fontFamily: Georgia, fontSize: '13px', color: '#8a837b', paddingLeft: '27px' }}>
                — <a href="https://doi.org/10.3386/w30364" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#4a443e]">Bound et al., 2022</a>
              </p>

              {/* System level */}
              <BodyP>
                At the system level, existing platforms such as LinkedIn, Handshake, and university career services are fragmented and not tailored to international students' needs. Although students are aware of these resources, they often do not engage with them, not because of a lack of access, but due to low relevance and usability.
              </BodyP>

              {/* User level blockquote */}
              <Blockquote>
                At the user level, students describe the experience as "throwing applications into the void," receiving little feedback after applying. They struggle with unclear job postings, a lack of response, and difficulty tracking applications. Networking—while critical in the U.S.—is also challenging due to cultural differences, making it difficult for students to take initiative.
              </Blockquote>

              {/* Behavioral level */}
              <BodyP>
                At the behavioral level, students do not engage with campus resources, even though they are aware of them. Our findings show that this gap is not caused by a lack of awareness but by the low relevance, usability, and accessibility of existing tools. Networking also emerged as a critical but under-supported area. Survey results show that connecting with professionals is one of the most valued features, yet many students struggle to initiate networking due to cultural differences and a lack of confidence. As noted by a career services expert, networking is not always part of students' prior experience and requires both trust and guidance to adopt. Together, these insights reveal a fragmented system where a lack of transparency, structure, and support prevents students from effectively taking action.
              </BodyP>

              {/* Core gap pull quote */}
              <div className="pl-6 py-2" style={{ borderLeft: '3px solid rgba(184,120,112,0.35)' }}>
                <p style={{ fontFamily: Georgia, fontStyle: 'italic', fontSize: '17px', color: '#4a443e', lineHeight: 1.9 }}>
                  Overall, this reveals a core gap: students are motivated and aware, but lack clear structure, guidance, and transparency to effectively navigate the hiring process.
                </p>
              </div>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ CH04 ANALYSIS ════════════ */}
          <CaseSection id="analysis">
            <ChapterHeader number="04" title="Analysis" />

            <div className="space-y-6">
              <BodyP>
                To understand the problem space, we conducted interviews with international students and career service professionals, analyzed survey data, and synthesized insights through affinity mapping.
              </BodyP>

              {/* Inline analysis image (overview) */}
              <div>
                <img loading="lazy" decoding="async" src={imgImage11} alt="Affinity mapping / analysis" className="w-full rounded-sm shadow-sm object-cover" />
              </div>

              <BodyP>
                Through interviews, surveys, and data synthesis, several key patterns emerged. First, job searching is perceived as a "black box," where students submit applications but receive little to no feedback—described as "throwing applications into the void". Second, trust in platforms is low due to issues such as ghost job postings and unclear application status. Third, while students are aware of university career resources, they rarely engage with them, indicating a gap in usability and relevance rather than awareness. Finally, networking is both highly valued and highly challenging: survey results show that the most desired feature is the ability to connect with professionals, yet cultural differences make networking uncomfortable and difficult to initiate. These findings highlight a fragmented and opaque system where a lack of transparency, guidance, and trust directly impacts user confidence and decision-making.
              </BodyP>

              <BodyP>
                Across both qualitative and quantitative research, consistent patterns emerged. At the system level, students face a lack of transparency in online job searching. Many reported encountering "ghost jobs" and unclear application status, often submitting multiple applications without receiving responses. This lack of feedback leads to frustration, uncertainty, and reduced trust in the hiring process.
              </BodyP>

              {/* Data images side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src={imgImage20} alt="Survey data chart" className="w-full rounded-sm shadow-sm object-cover" />
                <img loading="lazy" decoding="async" src={imgImage10} alt="Survey data chart" className="w-full rounded-sm shadow-sm object-cover" />
              </div>

              <div>
                <img loading="lazy" decoding="async" src={imgImage2} alt="Analysis findings" className="w-full rounded-sm shadow-sm object-cover" />
              </div>

              <div>
                <img loading="lazy" decoding="async" src={imgImage6} alt="Analysis framework" className="w-full rounded-sm shadow-sm object-cover" />
              </div>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ CH05 BUSINESS GOAL & DESIGN GOAL ════════════ */}
          <CaseSection id="goals">
            <ChapterHeader number="05" title="Business Goal & Design Goal" />

            <div className="space-y-6">
              <BodyP>
                The primary design goal is to improve career outcomes for international students by increasing access to relevant opportunities and support systems. By creating a more structured and transparent experience, the platform aims to increase engagement with existing career resources and improve how effectively university services support students, ultimately contributing to higher student satisfaction and stronger employability outcomes.
              </BodyP>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ CH06 RESEARCH ════════════ */}
          <CaseSection id="research">
            <ChapterHeader number="06" title="Research" />

            <div className="space-y-6 mb-10">
              <BodyP>
                The primary users of this product are international graduate students at NYU who are in the early stages of their careers. Most require visa sponsorship, have limited U.S. work experience, and are unfamiliar with local hiring practices such as networking. Although they are highly motivated, research shows that 78% of respondents require sponsorship and 89% feel increasingly uncertain about job prospects due to immigration policy changes. Despite having access to platforms like LinkedIn, Handshake, and university career services, students do not engage with these resources in a structured way, often turning to them only during high-pressure moments rather than as part of a proactive strategy. To better represent our user research findings, we concluded two personas and a storyboard.
              </BodyP>
            </div>

            {/* Persona images */}
            <div className="space-y-6">
              <div>
                <img loading="lazy" decoding="async" src={imgPersona1} alt="Persona 1" className="w-full rounded-sm shadow-sm object-cover" />
              </div>
              <div>
                <img loading="lazy" decoding="async" src={imgPersona2} alt="Persona 2" className="w-full rounded-sm shadow-sm object-cover" />
              </div>
              {/* Storyboard */}
              <div className="overflow-hidden rounded-sm shadow-sm">
                <img loading="lazy" decoding="async" src={imgStoryboard} alt="Storyboard" className="w-full object-cover" />
              </div>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ CH07 SYNTHESIZE & IDEATION ════════════ */}
          <CaseSection id="synthesize">
            <ChapterHeader number="07" title="Synthesize & Ideation" />

            <div className="space-y-6">
              <BodyP>
                Based on the research findings, we reframed the problem from building another job platform to designing a more reliable and structured system rooted in the NYU community. Instead of competing with existing tools like LinkedIn or Handshake, we focused on creating a trusted layer that helps international students navigate the job search with more clarity, guidance, and confidence.
              </BodyP>
              <BodyP>
                The concept evolved into a centralized platform that connects NYU students, alumni, and career resources into one integrated experience. The goal is not just to provide access to opportunities, but to reduce uncertainty and support decision-making through transparent information and community-driven support. This direction was strongly informed by our research, which showed that students value connecting directly with professionals and peers, yet struggle to do so due to cultural barriers and a lack of structured support.
              </BodyP>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ CH08 HOW & DESIGN ════════════ */}
          <CaseSection id="design">
            <ChapterHeader number="08" title="How & Design" />

            <div className="space-y-6 mb-10">
              <BodyP>
                During the design process, we translated key research insights into concrete product features. One of the main insights was that students are aware of career resources but do not engage with them, not because they lack awareness, but because of information overload and lack of clear entry points. To address this, we designed an onboarding quiz as a simple and structured starting point. This feature helps filter out irrelevant information and surfaces opportunities based on users' background, goals, and visa needs, reducing initial confusion.
              </BodyP>
            </div>

            <div className="mb-8">
              <img loading="lazy" decoding="async" src={imgOnboarding} alt="Onboarding quiz screen" className="w-full rounded-sm shadow-sm object-cover" />
            </div>

            {/* Product flow */}
            <div className="space-y-6 mb-10">
              <BodyP>
                The product flow begins with onboarding, where users input their background, skills, and career goals. Based on this, the system generates a personalized dashboard that includes relevant job opportunities, suggested skill-building paths, and networking recommendations within the NYU ecosystem. Users can then navigate across four main sections: Dashboard, Jobs, Community, and Skills. The Dashboard acts as a central hub for progress tracking and next steps; the Jobs section emphasizes transparency through filters such as visa sponsorship and response rate; the Community section enables peer and alumni connections to support networking; and the Skills section helps users build and visualize their capabilities over time.
              </BodyP>
              <BodyP>
                This structure reflects a key insight from our research: students are aware of available resources but do not actively engage with them, indicating a gap in integration and usability rather than access. By grounding the platform within a familiar and trusted NYU network, the design aims to lower the barrier to engagement and make career development feel more approachable and actionable.
              </BodyP>
              <BodyP>
                During ideation, we explored multiple directions, including improving job listing transparency, building standalone networking tools, and creating skill-tracking systems. However, rather than treating these as separate solutions, we integrated them into a single system that addresses the full journey—from exploration to application to connection. A key design decision was to prioritize depth over breadth, focusing on core features that directly respond to the most critical needs: transparency, guidance, and community-driven trust.
              </BodyP>
              <BodyP>
                Throughout this process, I contributed by shaping the product direction toward a system-level solution, advocating for the role of community as a trust layer, and translating research insights into a cohesive product structure that aligns with user behavior and needs.
              </BodyP>
            </div>

            {/* Job feature screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <img loading="lazy" decoding="async" src={imgJobFeature1} alt="Jobs feature" className="w-full rounded-sm shadow-sm object-cover" />
              <img loading="lazy" decoding="async" src={imgJobFeature2} alt="Jobs feature" className="w-full rounded-sm shadow-sm object-cover" />
            </div>
            <div className="mb-10">
              <img loading="lazy" decoding="async" src={imgJobFeature3} alt="Jobs feature detail" className="w-full rounded-sm shadow-sm object-cover" />
            </div>

            {/* Verified job board */}
            <div className="space-y-6 mb-10">
              <BodyP>
                Another critical insight was the lack of transparency in job searching, including ghost job postings and unclear application status. In response, we designed a verified job board that provides more reliable listings and includes additional signals such as response rate. This allows users to better evaluate opportunities and make more informed decisions, addressing trust issues identified in research.
              </BodyP>
            </div>
            <div className="mb-10">
              <img loading="lazy" decoding="async" src={imgJobBoard} alt="Verified job board" className="w-full rounded-sm shadow-sm object-cover" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <img loading="lazy" decoding="async" src={imgCommunity1} alt="Job board detail" className="w-full rounded-sm shadow-sm object-cover" />
              <img loading="lazy" decoding="async" src={imgCommunity2} alt="Job board detail" className="w-full rounded-sm shadow-sm object-cover" />
            </div>

            {/* Community feature */}
            <div className="space-y-6 mb-10">
              <BodyP>
                Networking was also identified as both highly important and difficult to initiate. To support this, we designed a community feature within the NYU ecosystem, where users can connect with peers and alumni, share experiences, and ask questions in a lower-pressure environment. By grounding networking within a familiar and trusted community, the design lowers the barrier to participation and encourages more active engagement.
              </BodyP>
            </div>
            <div className="space-y-4 mb-10">
              <img loading="lazy" decoding="async" src={imgCommunity6} alt="Community feature" className="w-full rounded-sm shadow-sm object-cover" />
              <img loading="lazy" decoding="async" src={imgCommunity5} alt="Community feature" className="w-full rounded-sm shadow-sm object-cover" />
              <img loading="lazy" decoding="async" src={imgCommunity4} alt="Community feature" className="w-full rounded-sm shadow-sm object-cover" />
              <img loading="lazy" decoding="async" src={imgCommunity3} alt="Community feature" className="w-full rounded-sm shadow-sm object-cover" />
            </div>

            <div style={{ borderTop: '1px dashed rgba(29,26,22,0.12)', marginBottom: '32px' }} />

            {/* ── Part Two: Iteration Journey ── */}
            <div className="pt-10 mb-10" style={{ borderTop: '1px dashed rgba(29,26,22,0.12)' }}>
              <p style={{ fontFamily: Georgia, fontSize: '13px', color: '#8a837b', marginBottom: '6px' }}>part two</p>
              <h2 style={{ fontFamily: Caveat, fontSize: '48px', fontWeight: 700, color: '#1c1a16', lineHeight: 1.15, marginBottom: '16px' }}>
                Iteration Journey
              </h2>
              <BodyP>
                Three rounds of usability testing revealed patterns in how users interacted with the platform. Each iteration addresses a distinct friction point — from navigation confusion to unclear progress feedback — and documents the problem, what changed, and why.
              </BodyP>
            </div>

            {/* Iteration overview image */}
            <div className="mb-12">
              <img loading="lazy" decoding="async" src={imgIterationOverview} alt="Iteration overview" className="w-full rounded-sm shadow-sm object-cover" />
            </div>

            <div style={{ borderTop: '1px dashed rgba(29,26,22,0.12)', marginBottom: '32px' }} />

            {/* ── Iteration 01 ── */}
            <div className="mb-12">
              <SubHeading label="iteration 01" title="Home Page Tutorial" />
              <Blockquote>
                Users had no indication they should scroll — no visual cue that more content existed below the hero.
              </Blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <IterationBlock
                  problems={[
                    '0 out of 3 users found the scroll-down tutorial',
                    'No visual cue that more content existed below the hero',
                  ]}
                  changes={[
                    'Added animated scroll indicators',
                    'Improved spacing and layout flow',
                    'Added subtle motion cues to guide the user',
                  ]}
                  reasons={[
                    'Violated visibility / signifier heuristics',
                    'Users had no indication they should scroll',
                  ]}
                  sources={[
                    'Usability testing (3/3 users missed the intro page)',
                  ]}
                />
                <div>
                  <img loading="lazy" decoding="async" src={imgIteration1} alt="Home page tutorial screenshot" className="w-full rounded-sm shadow-sm object-cover" />
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px dashed rgba(29,26,22,0.12)', marginBottom: '32px' }} />

            {/* ── Iteration 02 ── */}
            <div className="mb-12">
              <SubHeading label="iteration 02" title="Locating User Profile" />
              <Blockquote>
                Users expected the top-right avatar to open Settings, not Profile — their mental model didn't match our design.
              </Blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <IterationBlock
                  problems={[
                    'Only 1 of 3 users located the profile',
                    'Users expected the top-right avatar to open Settings, not Profile',
                    'Resume and documents were difficult to find',
                  ]}
                  changes={[
                    'Moved profile to Dashboard',
                    'Added clearer labels and icons',
                    'Simplified access to resume, cover letter, and portfolio',
                  ]}
                  reasons={[
                    'Violated consistency and mapping heuristics',
                    'User mental models did not match our design',
                  ]}
                  sources={[
                    'Usability testing (users struggled to find the profile)',
                    "User's mental model",
                  ]}
                />
                <div>
                  <img loading="lazy" decoding="async" src={imgIteration2} alt="Profile locating screenshot" className="w-full rounded-sm shadow-sm object-cover" />
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px dashed rgba(29,26,22,0.12)', marginBottom: '32px' }} />

            {/* ── Iteration 03 ── */}
            <div className="mb-12">
              <SubHeading label="iteration 03" title="Active Challenges" />
              <Blockquote>
                Users couldn't interpret progress or workflow — progress indicators were unclear, and next steps were invisible.
              </Blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <IterationBlock
                  problems={[
                    'Only 2 out of 3 users understood the challenge mechanics',
                    'Progress indicators were unclear',
                    "Users didn't know what the next step was",
                  ]}
                  changes={[
                    'Clear progress visuals (states, levels, next step)',
                    'Improved hierarchy and spacing',
                    'Added stronger visual indicators for each challenge state',
                  ]}
                  reasons={[
                    'Violated feedback and clarity heuristics',
                    "Users couldn't interpret progress or workflow",
                  ]}
                  sources={[
                    'Usability testing (confusion around skills mechanics)',
                    'Visual design principles (hierarchy, contrast, signifiers)',
                  ]}
                />
                <div>
                  <img loading="lazy" decoding="async" src={imgIteration3} alt="Active challenges screenshot" className="w-full rounded-sm shadow-sm object-cover" />
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px dashed rgba(29,26,22,0.12)', marginBottom: '32px' }} />

            {/* ── Part Three: Before & After ── */}
            <div className="pt-10 mb-10" style={{ borderTop: '1px dashed rgba(29,26,22,0.12)' }}>
              <p style={{ fontFamily: Georgia, fontSize: '13px', color: '#8a837b', marginBottom: '6px' }}>part three</p>
              <h2 style={{ fontFamily: Caveat, fontSize: '48px', fontWeight: 700, color: '#1c1a16', lineHeight: 1.15, marginBottom: '16px' }}>
                Before &amp; After
              </h2>
              <BodyP>
                The following comparisons show three key screens that underwent significant redesigns based on usability testing feedback. Each comparison illustrates how research insights translated directly into design decisions.
              </BodyP>
            </div>

            <BeforeAfter
              redesignNum="04"
              title="Dashboard Before & After"
              beforeImg={imgDashBefore}
              afterImg={imgDashAfter}
            />
            <BeforeAfter
              redesignNum="05"
              title="Job Tab Before & After"
              beforeImg={imgJobTabBefore}
              afterImg={imgJobTabAfter}
            />
            <BeforeAfter
              redesignNum="06"
              title="Community Hub Before & After"
              beforeImg={imgCommunityBefore}
              afterImg={imgCommunityAfter}
            />

            <Divider />
          </CaseSection>

          {/* ════════════ CH09 REFLECTION & NEXT STEPS ════════════ */}
          <CaseSection id="reflection">
            <ChapterHeader number="09" title="Reflection & Next Steps" />

            <div className="space-y-6">
              <BodyP>
                Throughout the process, I iterated across low and high-fidelity prototypes to refine these features. Early designs lacked structure and felt cluttered, which led to improvements in information hierarchy and layout. Over time, the prototype evolved into a more organized system with clearer navigation, interactive components, and visible progress tracking. The final design integrates onboarding, job exploration, community interaction, and skill tracking into a cohesive experience that supports users from confusion to action.
              </BodyP>
              <BodyP>
                This project helped me better understand how to design for system-level problems by grounding decisions in research and creating structured user experiences. Due to time constraints, some features, such as personalization and networking, were not fully explored, and future work would include more structured user testing and the integration of real data. If redesigned, I would focus on improving networking support and making the system more adaptive to user behavior. Overall, this project reinforced the importance of designing for clarity, confidence, and decision-making in complex, high-stress experiences.
              </BodyP>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ CH10 IMPACT ════════════ */}
          <CaseSection id="impact">
            <ChapterHeader number="10" title="Impact" />

            <div className="space-y-6 mb-10">
              <BodyP>
                The design received positive feedback from professors and classmates for its clarity, structure, and transparency. Additionally, the professor and classmates highlighted that this project effectively translates research insights into a systematic and fully functional web page. This project helped me develop the ability to design system-level solutions, and the reviewers' validation further reinforced my confidence when approaching complex design problems. Future improvements will focus on personalization, networking support, and real-world data integration.
              </BodyP>
            </div>

            <Divider />
          </CaseSection>

          {/* ════════════ TEAM & CONTRIBUTION ════════════ */}
          <CaseSection id="team">
            <div className="mb-10">
              <h2 style={{ fontFamily: Caveat, fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 700, color: '#1c1a16', lineHeight: 1.15 }}>
                Team &amp; My Contribution
              </h2>
              <div style={{ height: '3px', width: '120px', backgroundColor: chapterAccent, opacity: 0.7, borderRadius: '6px', marginTop: '8px' }} />
            </div>

            <div className="space-y-6 mb-10">
              <BodyP>
                I worked in a small team with one researcher and two designers, collaborating closely from early research to final design. I worked as a lead designer, owning key parts of the product experience and defining core user flows and structure. I designed wireframes and high-fidelity interfaces, translating research insights into clear design decisions and features.
              </BodyP>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <img loading="lazy" decoding="async" src={imgImpact} alt="Impact overview" className="w-full object-cover" />
            </div>
          </CaseSection>

          </div>
      </main>
    </div>
  );
}
