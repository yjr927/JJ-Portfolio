import { useState, useEffect } from 'react';

interface Chapter {
  id: string;
  number: string;
  title: string;
  color: string;
}

const chapters: Chapter[] = [
  { id: 'overview',   number: '01', title: 'Project Overview',           color: '#c8b898' },
  { id: 'challenge',  number: '02', title: 'Challenge',                   color: '#c4a882' },
  { id: 'analysis',   number: '04', title: 'Analysis',                    color: '#b89968' },
  { id: 'goals',      number: '05', title: 'Business Goal',               color: '#a67f5a' },
  { id: 'research',   number: '06', title: 'Research',                    color: '#946e4c' },
  { id: 'synthesize', number: '07', title: 'Synthesize',                  color: '#b87870' },
  { id: 'design',     number: '08', title: 'How & Design',                color: '#a86860' },
  { id: 'reflection', number: '09', title: 'Reflection',                  color: '#985850' },
  { id: 'impact',     number: '10', title: 'Impact',                      color: '#884840' },
];

// Slight rotations for each polaroid
const rotations = [-2.4, 1.7, -1.1, 2.2, -1.8, 1.0, -2.3, 1.6, -0.9];

interface PolaroidCardProps {
  chapter: Chapter;
  isActive: boolean;
  onClick: () => void;
  rotation: number;
}

function PolaroidCard({ chapter, isActive, onClick, rotation }: PolaroidCardProps) {
  return (
    <button
      onClick={onClick}
      title={chapter.title}
      className="relative focus:outline-none"
      style={{
        transform: isActive ? 'rotate(0deg) scale(1.08)' : `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        zIndex: isActive ? 10 : 1,
      }}
      onMouseEnter={e => {
        if (!isActive) (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) scale(1.06)';
      }}
      onMouseLeave={e => {
        if (!isActive) (e.currentTarget as HTMLElement).style.transform = `rotate(${rotation}deg)`;
      }}
    >
      {/* Polaroid frame */}
      <div
        className="bg-white"
        style={{
          width: '82px',
          padding: '4px 4px 0 4px',
          boxShadow: isActive
            ? '0 6px 20px rgba(0,0,0,0.28), 0 2px 6px rgba(0,0,0,0.15)'
            : '0 3px 10px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.1)',
        }}
      >
        {/* Photo area */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '74px',
            height: '60px',
            backgroundColor: isActive
              ? `${chapter.color}30`
              : `${chapter.color}1a`,
          }}
        >
          <span
            className="select-none"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '36px',
              fontWeight: 700,
              color: chapter.color,
              opacity: isActive ? 0.9 : 0.55,
              lineHeight: 1,
            }}
          >
            {chapter.number}
          </span>
        </div>

        {/* Caption strip — white bottom like Polaroid */}
        <div
          className="flex items-center justify-center"
          style={{ height: '30px', paddingLeft: '2px', paddingRight: '2px' }}
        >
          <p
            className="text-center leading-tight overflow-hidden"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '10.5px',
              color: isActive ? '#1c1a16' : '#6b625a',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {chapter.title}
          </p>
        </div>
      </div>

      {/* Active dot indicator */}
      {isActive && (
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: '5px', height: '5px', backgroundColor: chapter.color }}
        />
      )}
    </button>
  );
}

export function ChapterNav() {
  const [activeChapter, setActiveChapter] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = chapters.length - 1; i >= 0; i--) {
        const section = document.getElementById(chapters[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveChapter(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* Label */}
      <p
        className="mb-3 pl-1 uppercase tracking-widest"
        style={{ fontFamily: "'Caveat', cursive", fontSize: '11px', color: '#9a9088' }}
      >
        Contents
      </p>

      {/* 2-column Polaroid grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-4">
        {chapters.map((chapter, index) => (
          <PolaroidCard
            key={chapter.id}
            chapter={chapter}
            isActive={activeChapter === chapter.id}
            onClick={() => scrollToSection(chapter.id)}
            rotation={rotations[index]}
          />
        ))}
      </div>
    </nav>
  );
}
