function UxResearch() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="UX Research">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">UX Research</p>
    </div>
  );
}

function LearningExperienceDesign() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="Learning Experience Design">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">Learning Experience Design</p>
    </div>
  );
}

function DataVisualization() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="Data Visualization">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">Data Visualization</p>
    </div>
  );
}

function InteractionDesign() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="Interaction Design">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">Interaction Design</p>
    </div>
  );
}

function Figma() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="Figma">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">Figma</p>
    </div>
  );
}

function ContentStrategy() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="Content Strategy">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">Content Strategy</p>
    </div>
  );
}

function Prototyping() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="Prototyping">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">Prototyping</p>
    </div>
  );
}

function Accessibility() {
  return (
    <div className="bg-[#ecead4] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[2px] shrink-0" data-name="Accessibility">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a443e] text-[10px] tracking-[0.5px] whitespace-nowrap">Accessibility</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-[520px]" data-name="Skills">
      <UxResearch />
      <LearningExperienceDesign />
      <DataVisualization />
      <InteractionDesign />
      <Figma />
      <ContentStrategy />
      <Prototyping />
      <Accessibility />
    </div>
  );
}

function BioText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[110px] overflow-clip top-[150px] w-[520px]" data-name="Bio Text">
      <div className="font-['Caveat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#1d1a16] text-[44px] w-[520px]">
        <p className="leading-[1.1] mb-0">I turn complexity into</p>
        <p className="leading-[1.1]">clarity.</p>
      </div>
      <div className="font-['Montserrat:Light',sans-serif] font-light leading-[0] relative shrink-0 text-[#4a443e] text-[15px] w-[520px] whitespace-pre-wrap">
        <p className="leading-[1.85] mb-0">With a background spanning UX research, learning experience design, and data storytelling, I help teams and learners navigate complex information with confidence.</p>
        <p className="leading-[1.85] mb-0">​</p>
        <p className="leading-[1.85]">{`I believe the best designs don't just solve problems — they invite people in, make them feel capable, and leave them wanting to explore more.`}</p>
      </div>
      <Skills />
    </div>
  );
}

function AboutPhotoPlaceholder() {
  return (
    <div className="absolute bg-[rgba(217,184,175,0.25)] border border-[rgba(217,184,175,0.6)] border-solid h-[420px] left-[760px] overflow-clip rounded-[2px] top-[150px] w-[320px]" data-name="About Photo Placeholder">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[103px] text-[#8a837b] text-[13px] top-[195px] whitespace-pre">{`📷  photo.png`}</p>
    </div>
  );
}

function StickyNote() {
  return (
    <div className="absolute bg-[rgba(217,184,175,0.35)] h-[130px] left-[880px] overflow-clip rounded-[2px] shadow-[2px_4px_10px_0px_rgba(28,26,23,0.12)] top-[520px] w-[200px]" data-name="Sticky Note">
      <div className="absolute font-['Caveat:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[0] left-[16px] text-[#4a443e] text-[16px] top-[20px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">Currently exploring</p>
        <p className="leading-[1.5] mb-0">AI × Learning</p>
        <p className="leading-[1.5]">Design ✦</p>
      </div>
    </div>
  );
}

export default function AboutSectionDesktop() {
  return (
    <div className="bg-[#f8f7f4] relative size-full" data-name="About Section — Desktop">
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[40px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[80px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[120px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[160px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[200px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[240px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[280px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[320px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[360px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[400px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[440px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[480px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[520px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[560px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[600px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[640px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[680px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(29,26,22,0.06)] h-px left-0 top-[720px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(192,128,119,0.22)] h-[760px] left-[80px] top-0 w-px" data-name="Rectangle" />
      <p className="absolute font-['Caveat:Bold',sans-serif] font-bold leading-[normal] left-[110px] text-[#1d1a16] text-[36px] top-[72px] whitespace-nowrap">About</p>
      <div className="absolute bg-[rgba(29,26,22,0.1)] h-px left-[110px] top-[122px] w-[200px]" data-name="Rectangle" />
      <BioText />
      <AboutPhotoPlaceholder />
      <StickyNote />
    </div>
  );
}