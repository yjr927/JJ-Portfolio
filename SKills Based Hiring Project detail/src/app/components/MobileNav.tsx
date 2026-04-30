import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

const rotations = [-3, 2, -1.5, 2.5, -2, 1.2, -2.5, 1.8, -1.2];

interface MobilePolaroidProps {
  chapter: Chapter;
  isActive: boolean;
  onClick: () => void;
  rotation: number;
}

function MobilePolaroid({ chapter, isActive, onClick, rotation }: MobilePolaroidProps) {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none"
      style={{
        transform: isActive ? 'rotate(0deg) scale(1.05)' : `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease',
        zIndex: isActive ? 10 : 1,
        position: 'relative',
      }}
    >
      <div
        className="bg-white"
        style={{
          width: '90px',
          padding: '5px 5px 0 5px',
          boxShadow: isActive
            ? '0 6px 20px rgba(0,0,0,0.25)'
            : '0 3px 10px rgba(0,0,0,0.15)',
        }}
      >
        {/* Photo area */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '80px',
            height: '70px',
            backgroundColor: isActive ? `${chapter.color}35` : `${chapter.color}20`,
          }}
        >
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '42px',
              fontWeight: 700,
              color: chapter.color,
              opacity: isActive ? 0.9 : 0.6,
              lineHeight: 1,
            }}
          >
            {chapter.number}
          </span>
        </div>

        {/* Caption strip */}
        <div
          className="flex items-center justify-center"
          style={{ height: '34px', padding: '0 3px' }}
        >
          <p
            className="text-center leading-tight"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '11.5px',
              color: isActive ? '#1c1a16' : '#6b625a',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {chapter.title}
          </p>
        </div>
      </div>

      {isActive && (
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: '5px', height: '5px', backgroundColor: chapter.color }}
        />
      )}
    </button>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleChapterClick = (chapterId: string) => {
    setActiveChapter(chapterId);
    setIsOpen(false);
    const element = document.getElementById(chapterId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 lg:hidden bg-white rounded-full p-3 shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#1c1a16]" />
        ) : (
          <Menu className="w-5 h-5 text-[#1c1a16]" />
        )}
      </button>

      {/* Drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-[320px] max-w-[88vw] bg-[#ede8dc] shadow-2xl overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-7 pt-20">
              {/* Drawer title */}
              <div className="mb-7">
                <p
                  className="uppercase tracking-widest mb-1"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: '13px', color: '#9a9088' }}
                >
                  Contents
                </p>
                <div className="h-[2px] w-10 rounded-full bg-[#b87870] opacity-60" />
              </div>

              {/* Polaroid grid — 3 columns */}
              <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                {chapters.map((chapter, index) => (
                  <MobilePolaroid
                    key={chapter.id}
                    chapter={chapter}
                    isActive={activeChapter === chapter.id}
                    onClick={() => handleChapterClick(chapter.id)}
                    rotation={rotations[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
