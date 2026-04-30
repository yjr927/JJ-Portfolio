function Spacer() {
  return <div className="flex-[1_0_0] h-px min-w-px" data-name="spacer" />;
}

function Nav() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-center justify-center left-0 overflow-clip px-[64px] top-0" data-name="Nav">
      <p className="font-['Caveat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1d1a16] text-[28px] whitespace-nowrap">JJ</p>
      <Spacer />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8a837b] text-[11px] tracking-[2.5px] whitespace-pre">{`WORK    ·    ABOUT    ·    CONTACT`}</p>
    </div>
  );
}

function Frame() {
  return <div className="h-[28px] shrink-0 w-px" data-name="Frame" />;
}

function Frame1() {
  return <div className="h-[6px] shrink-0 w-px" data-name="Frame" />;
}

function Frame2() {
  return <div className="h-[18px] shrink-0 w-px" data-name="Frame" />;
}

function Frame3() {
  return <div className="h-[16px] shrink-0 w-px" data-name="Frame" />;
}

function Frame4() {
  return <div className="h-[22px] shrink-0 w-px" data-name="Frame" />;
}

function Frame5() {
  return <div className="h-[38px] shrink-0 w-px" data-name="Frame" />;
}

function BtnViewWork() {
  return (
    <div className="bg-[#1d1a16] content-stretch flex items-start overflow-clip px-[28px] py-[12px] relative rounded-[2px] shrink-0" data-name="Btn — View Work">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f8f7f4] text-[11px] tracking-[2px] whitespace-nowrap">VIEW WORK</p>
    </div>
  );
}

function BtnGetInTouch() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Btn — Get in Touch">
      <div className="content-stretch flex items-start overflow-clip px-[28px] py-[11px] relative rounded-[inherit] size-full">
        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1d1a16] text-[11px] tracking-[2px] whitespace-nowrap">GET IN TOUCH</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1d1a16] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function CtaRow() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0" data-name="CTA Row">
      <BtnViewWork />
      <BtnGetInTouch />
    </div>
  );
}

function HeroTextColumn() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[110px] overflow-clip top-[160px] w-[580px]" data-name="Hero Text Column">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8a837b] text-[10.5px] tracking-[3.5px] whitespace-nowrap">APRIL 2026</p>
      <Frame />
      <p className="font-['Caveat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a837b] text-[24px] whitespace-nowrap">{`Hello, I'm —`}</p>
      <Frame1 />
      <p className="font-['Caveat:Bold',sans-serif] font-bold leading-[0.95] relative shrink-0 text-[#1d1a16] text-[112px] whitespace-nowrap">JJ</p>
      <Frame2 />
      <div className="bg-[#b87870] h-[10px] opacity-70 rounded-[2px] shrink-0 w-[200px]" data-name="Rectangle" />
      <Frame3 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4a443e] text-[14.5px] tracking-[0.8px] whitespace-nowrap">{`UX & Learning Experience Designer`}</p>
      <Frame4 />
      <p className="font-['Montserrat:Light',sans-serif] font-light leading-[1.85] relative shrink-0 text-[#4a443e] text-[16px] w-[460px]">{`I design at the intersection of learning, storytelling & human-centered thinking — where curiosity meets clarity.`}</p>
      <Frame5 />
      <CtaRow />
    </div>
  );
}

function HeroPhotoColumn() {
  return (
    <div className="absolute bg-[rgba(217,184,175,0.3)] h-[460px] left-[870px] overflow-clip rounded-[2px] top-[190px] w-[340px]" data-name="Hero Photo Column">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[116px] text-[#8a837b] text-[13px] top-[210px] whitespace-pre">{`📷  photo.png`}</p>
    </div>
  );
}

export default function HeroDesktop() {
  return (
    <div className="bg-[#f8f7f4] relative size-full" data-name="Hero — Desktop 1440">
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[40px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[80px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[120px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[160px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[200px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[240px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[280px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[320px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[360px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[400px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[440px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[480px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[520px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[560px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[600px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[640px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[680px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[720px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[760px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[800px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[840px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(29,26,22,0.07)] h-px left-0 top-[880px] w-[1440px]" data-name="rule-line" />
      <div className="absolute bg-[rgba(192,128,119,0.28)] h-[900px] left-[80px] top-0 w-px" data-name="margin-line" />
      <div className="absolute left-[19px] size-[10px] top-[80px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[140px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[200px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[260px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[320px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[380px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[440px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[500px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[560px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[620px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[680px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[740px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[800px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[10px] top-[860px]" data-name="binder-hole">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D1A16)" fillOpacity="0.1" id="binder-hole" r="5" />
        </svg>
      </div>
      <Nav />
      <HeroTextColumn />
      <p className="absolute font-['Caveat:Regular',sans-serif] font-normal leading-[normal] left-[870px] text-[#8a837b] text-[14px] top-[666px] whitespace-nowrap">{`JJ — UX & Learning Experience Designer`}</p>
      <HeroPhotoColumn />
      <div className="absolute border border-[rgba(29,26,22,0.1)] border-solid h-[460px] left-[18px] top-[18px] w-[340px]" data-name="Rectangle" />
    </div>
  );
}