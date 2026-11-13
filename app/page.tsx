'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import WaitlistForm from '@/components/WaitlistForm';
import { BrandMark } from '@/components/Brand';
import { site } from '@/src/data/site';

type Track = 'tech' | 'founder';

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`section-label ${dark ? 'section-label-dark' : ''}`}><span className="label-cross">✳</span>{children}</span>;
}

function UnderlineArrow({ children, href, inverse = false }: { children: React.ReactNode; href: string; inverse?: boolean }) {
  return <Link className={`text-link ${inverse ? 'text-link-light' : ''}`} href={href}>{children} <Icon name="external" size={16}/></Link>;
}

function AbstractOrbit() {
  return <div className="hero-orbit" aria-hidden="true">
    <div className="orbit-halo"/><div className="orbit-ring orbit-ring-1"/><div className="orbit-ring orbit-ring-2"/><div className="orbit-ring orbit-ring-3"/>
    <div className="orbit-center"><BrandMark /></div>
    <div className="orbit-star orbit-star-one">✳</div><div className="orbit-star orbit-star-two">✴</div>
  </div>;
}

function FeatureIllustration({ type }: { type: string }) {
  if (type === 'conversation') return <div className="today-graphic conversation-graphic" aria-hidden="true"><div className="chat-bubble chat-first"><span/><span/><span/></div><div className="chat-bubble chat-second"><span/><span/></div><div className="chat-cursor">↗</div></div>;
  if (type === 'spark') return <div className="today-graphic spark-graphic" aria-hidden="true"><div className="spark-ring spark-ring-one"/><div className="spark-ring spark-ring-two"/><span>✳</span><div className="spark-mini">✦</div></div>;
  return <div className="today-graphic resource-graphic" aria-hidden="true"><div className="resource-panel resource-behind"><div/><div/><div/></div><div className="resource-panel resource-front"><span className="resource-circle">↗</span><div/><div/><div/></div></div>;
}

function TrackVisual({ track }: { track: Track }) {
  if (track === 'tech') return <div className="track-visual track-visual-tech" aria-label="Illustrative preview of technology learning paths">
    <div className="preview-floating-note"><i/> CONCEPT PREVIEW</div>
    <div className="mock-topbar"><span className="mock-dots"><i/><i/><i/></span><span>YOUR NEXT ROADMAP</span><span>✳</span></div>
    <div className="roadmap-preview">
      <div className="roadmap-left"><span className="tiny-overline">TRACK / 01</span><strong>Full-stack<br/>development</strong><div className="roadmap-progress"><i/></div><span className="mini-small">A path from curious to capable.</span></div>
      <div className="roadmap-steps"><div className="roadmap-step"><span className="step-dot step-done">✓</span><span>Foundations</span><b>01</b></div><div className="roadmap-step"><span className="step-dot step-current">✳</span><span>Build projects</span><b>02</b></div><div className="roadmap-step"><span className="step-dot"/><span>Go further</span><b>03</b></div></div>
    </div>
    <div className="mock-bottom"><span><i/> PERSONALIZED LEARNING</span><span>LEARN → BUILD → GROW</span></div>
  </div>;
  return <div className="track-visual track-visual-founder" aria-label="Illustrative preview of founder networking">
    <div className="preview-floating-note"><i/> CONCEPT PREVIEW</div>
    <div className="founder-nodes"><div className="founder-node node-one"><span>F</span><small>FOUNDER</small></div><div className="founder-node node-two"><span>↗</span><small>IDEA</small></div><div className="founder-node node-three"><span>D</span><small>DEVELOPER</small></div><div className="founder-node node-four"><span>✳</span><small>MENTOR</small></div><svg viewBox="0 0 440 330" preserveAspectRatio="none" aria-hidden="true"><path d="M115 109 Q220 35 318 101 M123 135 Q165 260 300 244 M310 132 Q363 187 308 223 M155 111 Q227 188 299 243" stroke="#ffffff" strokeOpacity=".43" strokeDasharray="4 7" strokeWidth="1.5" fill="none"/></svg></div>
    <div className="founder-visual-footer"><span>STRONGER CONNECTIONS.</span><span>BETTER BUILDS. <b>↗</b></span></div>
  </div>;
}

const sharedFeatures = [
  { no: '01', name: 'NexStep Network', text: 'One connected community', status: 'ACTIVE NOW' },
  { no: '02', name: 'Workshops & sessions', text: 'Open, free & premium programs', status: 'ACTIVE + EXPANDING' },
  { no: '03', name: 'Hackathons', text: 'Online & offline experiences', status: 'UPCOMING' },
  { no: '04', name: 'Global mentors', text: 'Real guidance from practitioners', status: 'GROWING' },
  { no: '05', name: 'Quizzes & rankings', text: 'Make progress feel exciting', status: 'PLANNED' },
  { no: '06', name: 'Project collaboration', text: 'Find your next collaborator', status: 'PLANNED' },
  { no: '07', name: 'Top 1% Club', text: 'A space for standout members', status: 'PLANNED' },
  { no: '08', name: 'Industry sessions & alerts', text: 'Stay curious. Stay connected.', status: 'IN THE WORKS' },
];

function SiteFooter() {
  const contact = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return <footer className="footer" id="contact">
    <div className="shell footer-top">
      <div className="footer-brand"><div className="footer-logo"><BrandMark/><strong>Nex<span>Step.</span></strong></div><p>More than a destination.<br/>A place to become who you&apos;re building toward.</p><span className="footer-tagline">BUILT FOR THE PEOPLE BUILDING WHAT&apos;S NEXT.</span></div>
      <div className="footer-links"><div><span>EXPLORE</span><Link href="#about">Our vision</Link><Link href="#momentum">Momentum</Link><Link href="#ecosystem">Ecosystem</Link><Link href="#community">Community</Link></div><div><span>GET INVOLVED</span><Link href="#join">Early access</Link><Link href="#next">What&apos;s next</Link><Link href="/coming-soon">Programs</Link><Link href="/coming-soon">Opportunities</Link></div><div><span>CONNECT</span>{contact ? <a href={`mailto:${contact}`}>{contact}</a> : <span className="footer-muted">Contact details<br/>coming soon</span>}{site.socials.map(s => <a href={s.url} target="_blank" rel="noopener noreferrer" key={s.label}>{s.label} ↗</a>)}</div></div>
    </div>
    <div className="footer-wordmark" aria-hidden="true">NEXSTEP<span>✳</span></div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} NEXSTEP. MADE FOR THE NEXT GENERATION.</span><span>TECHNOLOGY × ENTREPRENEURSHIP × COMMUNITY</span><Link href="#top">BACK TO TOP ↑</Link></div>
  </footer>;
}

export default function HomePage() {
  const [track, setTrack] = useState<Track>('tech');
  const [scrollAmount, setScrollAmount] = useState(0);
  const activeTrack = site.tracks[track];

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        const total = root.scrollHeight - window.innerHeight;
        setScrollAmount(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
      });
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${scrollAmount / 100})` }} aria-hidden="true"/>
    <Header />
    <main id="top">
      {/* HERO */}
      <section className="hero dark-section" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true"/><div className="hero-bluewash" aria-hidden="true"/>
        <div className="hero-corner hero-corner-left">EST. WITH CURIOSITY</div><div className="hero-corner hero-corner-right">TECHNOLOGY / ENTREPRENEURSHIP</div>
        <AbstractOrbit />
        <div className="shell hero-content">
          <div className="hero-kicker"><span className="kicker-line"/><span className="kicker-dot"/>{site.hero.eyebrow}<span className="kicker-line"/></div>
          <h1 id="hero-title">{site.hero.lineOne}<br/><em>{site.hero.lineTwo}</em></h1>
          <p className="hero-sub">{site.hero.sub}</p>
          <div className="hero-actions"><Link className="btn btn-primary" href="#join">Join early access <Icon name="arrow" size={18}/></Link><Link className="btn btn-ghost" href="#about">Explore our story <Icon name="arrowDown" size={17}/></Link></div>
          <div className="hero-proof"><span className="avatar-stack"><i>N</i><i>✳</i><i>↗</i></span><span><strong>{site.communityCount} people</strong> already part of the community</span></div>
        </div>
        <div className="hero-bottom shell"><span>SCROLL TO EXPLORE <Icon name="arrowDown" size={14}/></span><div className="hero-coordinates">28° N / OPEN TO THE WORLD</div><span>01 / 12</span></div>
      </section>

      <div className="marquee" aria-hidden="true"><div className="marquee-track">{Array.from({length: 4}, (_, n) => <span key={n}>LEARN <b>✳</b> BUILD <b>✳</b> BELONG <b>✳</b> GO BEYOND <b>✳</b></span>)}</div></div>

      {/* VISION */}
      <section className="section vision-section light-section" id="about">
        <div className="shell vision-grid">
          <Reveal className="vision-left"><SectionLabel>01 / THE BIGGER PICTURE</SectionLabel><h2>Ambition should<br/>never grow <em>alone.</em></h2></Reveal>
          <Reveal className="vision-right" delay={100}><p className="vision-lead">The next big idea doesn&apos;t need another disconnected platform. <strong>It needs a place where people, skills, and possibilities meet.</strong></p><p>NexStep is building that place. A unified ecosystem connecting technology learning, entrepreneurship, meaningful opportunities, and the people who make ideas real.</p><div className="vision-steps"><span><i>01</i> LEARN WHAT MATTERS</span><span><i>02</i> MEET YOUR PEOPLE</span><span><i>03</i> BUILD SOMETHING REAL</span></div><UnderlineArrow href="#ecosystem">Discover the ecosystem</UnderlineArrow></Reveal>
        </div>
        <div className="shell vision-bottom"><span>THE JOURNEY IS THE POINT.</span><span>NO LIMITS ON WHAT COMES NEXT. ↗</span></div>
      </section>

      {/* WHAT EXISTS TODAY */}
      <section className="section today-section offwhite-section" id="today">
        <div className="shell">
          <Reveal><div className="section-heading today-heading"><div><SectionLabel>02 / ALREADY IN MOTION</SectionLabel><h2>Not just an idea.<br/><em>A community in action.</em></h2></div><p>NexStep already brings curious people together to learn, share, and move forward. Here&apos;s where it starts.</p></div></Reveal>
          <div className="today-grid">{site.today.map((item, index) => <Reveal key={item.num} delay={index*75}><article className="today-card"><div className="today-card-top"><span>{item.num} / {item.label}</span><Icon name="external" size={17}/></div><FeatureIllustration type={item.symbol}/><div className="today-card-bottom"><h3>{item.title}</h3><p>{item.description}</p><span className="state-pill"><i/> HAPPENING NOW</span></div></article></Reveal>)}</div>
        </div>
      </section>

      {/* MOMENTUM */}
      <section className="section momentum-section dark-section" id="momentum">
        <div className="momentum-glow" aria-hidden="true"/>
        <div className="shell">
          <Reveal><div className="section-heading momentum-heading"><div><SectionLabel dark>03 / PROOF OF PROGRESS</SectionLabel><h2>Small beginnings.<br/><em>Real momentum.</em></h2></div><p>Not a highlight reel of things we might do. The steps we&apos;ve actually taken, with more chapters still to be written.</p></div></Reveal>
          <div className="momentum-grid">{site.milestones.map((item,index) => <Reveal delay={index * 75} key={item.id} className={index===0 ? 'milestone-large-wrap' : ''}><article className={`milestone-card ${index===0 ? 'milestone-featured' : ''}`}><div className="milestone-meta"><span><i className="tiny-blue-dot"/>{item.type}</span><span>0{index+1} ↗</span></div><div className="milestone-content"><h3>{item.title}{item.id==='community' && <span className="blue-plus">✳</span>}</h3><h4>{item.subtitle}</h4><p>{item.description}</p></div><div className="milestone-footer"><span>VERIFIED MILESTONE</span><span><Icon name={item.symbol==='people' ? 'people' : item.symbol==='book' ? 'book' : 'spark'} size={20}/></span></div></article></Reveal>)}</div>
          <Reveal><div className="momentum-bottom"><span><i className="pulse-dot"/> THIS STORY IS STILL BEING WRITTEN</span><p>As NexStep grows, so will this space. New people, projects, and milestones will join the journey.</p></div></Reveal>
        </div>
      </section>

      {/* TWO TRACKS */}
      <section className="section ecosystem-section light-section" id="ecosystem">
        <div className="shell">
          <Reveal><div className="ecosystem-header"><SectionLabel>04 / ONE ECOSYSTEM. TWO WORLDS.</SectionLabel><h2>Different paths.<br/><em>One shared ambition.</em></h2><p>Whether you&apos;re learning to build technology or building a company around an idea, your next move belongs here.</p></div></Reveal>
          <Reveal delay={60}><div className="track-switch" role="tablist" aria-label="Explore the NexStep tracks"><button role="tab" id="tab-tech" aria-controls="panel-track" aria-selected={track === 'tech'} className={track==='tech'?'track-selected':''} onClick={()=>setTrack('tech')}><Icon name="code" size={17}/> For Technology <span>01</span></button><button role="tab" id="tab-founder" aria-controls="panel-track" aria-selected={track==='founder'} className={track==='founder'?'track-selected':''} onClick={()=>setTrack('founder')}><Icon name="bolt" size={17}/> For Entrepreneurship <span>02</span></button></div></Reveal>
          <div key={track} role="tabpanel" id="panel-track" aria-labelledby={track==='tech' ? 'tab-tech' : 'tab-founder'} className={`track-panel animate-in ${track === 'founder' ? 'track-panel-founder' : ''}`}>
            <div className="track-copy"><span className="mini-overline">{activeTrack.eyebrow}</span><h3>{activeTrack.title}</h3><p>{activeTrack.description}</p><span className="planned-note"><Icon name="spark" size={15}/> THE WIDER PLATFORM IS IN DEVELOPMENT</span><div className="track-feature-list">{activeTrack.features.map((feature,index) => <div key={feature}><span>{String(index+1).padStart(2,'0')}</span>{feature}<Icon name="external" size={14}/></div>)}</div></div>
            <TrackVisual track={track}/>
          </div>
        </div>
      </section>

      {/* COMMON FEATURES */}
      <section className="section network-section offwhite-section">
        <div className="shell network-layout"><Reveal><div className="network-intro"><SectionLabel>05 / MORE THAN THE SUM OF ITS PARTS</SectionLabel><h2>Built to connect<br/><em>every next step.</em></h2><p>A community is more than a chat group. Think collaboration, mentorship, challenge, inspiration, and the opportunity to grow together.</p><span className="network-status">ECOSYSTEM ROADMAP / CURRENT + PLANNED</span></div></Reveal><div className="shared-grid">{sharedFeatures.map((feature,index) => <Reveal delay={(index%4)*45} key={feature.no}><article className="shared-card"><span className="shared-number">{feature.no} / 08</span><span className="shared-asterisk">✳</span><span className="shared-status">{feature.status}</span><h3>{feature.name}</h3><p>{feature.text}</p></article></Reveal>)}</div></div>
      </section>

      {/* LEVELUPLABS */}
      <section className="section labs-section dark-section" id="labs">
        <div className="labs-glow" aria-hidden="true"/>
        <div className="shell labs-layout"><Reveal><div className="labs-intro"><SectionLabel dark>06 / PART OF THE ECOSYSTEM</SectionLabel><div className="labs-badge"><i/> NOW PART OF NEXSTEP</div><h2>Meet <em>LevelUpLabs.</em></h2><p>Great learning starts with a clear path. LevelUpLabs brings together hand-picked YouTube videos, assessments, and structured technology roadmaps, freely accessible to learners.</p><div className="labs-points"><span><Icon name="check" size={15}/> Curated video learning</span><span><Icon name="check" size={15}/> Structured roadmaps</span><span><Icon name="check" size={15}/> Assessments that reinforce progress</span></div><span className="asset-disclaimer">VISUAL BELOW IS AN ILLUSTRATIVE CONCEPT, NOT THE ACTUAL PLATFORM UI.</span></div></Reveal>
          <Reveal delay={100}><div className="labs-mockup" aria-label="Illustrative LevelUpLabs learning roadmap concept"><div className="labs-browser"><div className="browser-dots"><i/><i/><i/></div><span>LEVELUPLABS / LEARNING PATHS</span><span className="browser-open">↗</span></div><div className="labs-screen"><div className="labs-sidebar"><div className="lab-logo">L<span>✳</span></div><span className="sidebar-active">◈ &nbsp; Explore paths</span><span>◫ &nbsp; Resources</span><span>◎ &nbsp; Assessments</span><span>◇ &nbsp; Progress</span><div className="labs-sidebar-bottom">YOUR NEXT STEP ↗</div></div><div className="labs-main"><span className="tiny-overline">YOUR LEARNING SPACE</span><h3>Make every<br/><em>step count.</em></h3><div className="course-progress"><div><span>PATH / 01</span><strong>DevOps Foundations</strong><small>Illustrative roadmap</small></div><div className="progress-ring">↗</div></div><div className="course-row"><b>01</b><span>Core concepts</span><span className="course-check">✓</span></div><div className="course-row"><b>02</b><span>Hands-on practice</span><span className="course-circle"/></div><div className="course-row"><b>03</b><span>Test your knowledge</span><span className="course-circle"/></div></div></div></div></Reveal>
        </div>
        <div className="shell mentor-spotlight"><Reveal><div className="mentor-left"><SectionLabel dark>PEOPLE WHO&apos;VE DONE THE WORK</SectionLabel><h3>Learn from the ones<br/>who <em>know the climb.</em></h3></div></Reveal><Reveal delay={70}><div className="mentor-card"><div className="mentor-monogram">DR<span>✳</span></div><div><span>FEATURED MENTOR / DEVOPS</span><strong>Deepak Reddy</strong><p>DevOps mentor for NexStep and the team. Helping bring practical experience closer to aspiring builders.</p><small>GLOBAL MENTOR NETWORK / GROWING</small></div></div></Reveal></div>
      </section>

      {/* COMMUNITY STARTUPS */}
      <section className="section community-section light-section" id="community">
        <div className="shell"><Reveal><div className="section-heading startups-heading"><div><SectionLabel>07 / MADE BY THE COMMUNITY</SectionLabel><h2>Not just conversations.<br/><em>Things worth building.</em></h2></div><p>Ideas are taking shape inside our community. We&apos;re creating space to spotlight the people turning them into something real.</p></div></Reveal>
          {site.communityStartups.length > 0 ? <div className="startup-grid">{site.communityStartups.map((startup,index) => <Reveal key={startup.name} delay={index*60}><article className="startup-card"><span>COMMUNITY-BUILT / {String(index+1).padStart(2,'0')}</span><div className="startup-art"><span>{startup.name.slice(0,1)}</span></div><h3>{startup.name}</h3><p>{startup.description}</p><div className="startup-founder">FOUNDER: {startup.founder}</div>{startup.website && <a href={startup.website} rel="noopener noreferrer" target="_blank">Visit project <Icon name="external" size={14}/></a>}</article></Reveal>)}</div> : <div className="startup-grid placeholder-startups"><Reveal><article className="startup-placeholder startup-placeholder-one"><div className="placeholder-visual"><span className="placeholder-orbit"/><span className="placeholder-star">✳</span></div><div><span className="tiny-overline">THE NEXT BIG IDEA / 001</span><h3>Made by the<br/><em>next generation.</em></h3><p>Community startups will appear here soon.</p></div></article></Reveal><Reveal delay={80}><article className="startup-placeholder startup-placeholder-two"><div className="placeholder-outline">↗</div><span className="tiny-overline">FEATURED PROJECTS / COMING SOON</span><h3>Something good<br/>is taking shape.</h3><p>Real founders. Real projects. Real stories. To be revealed when approved.</p></article></Reveal></div>}
          <Reveal><div className="startups-foot"><span><i/> COMMUNITY PROJECT SPOTLIGHT</span><p>Founder and project features will be published as details are confirmed.</p></div></Reveal>
        </div>
      </section>

      {/* GAMIFICATION */}
      <section className="section play-section offwhite-section"><div className="shell play-layout"><Reveal><div className="play-copy"><SectionLabel>08 / THE FUTURE OF LEARNING</SectionLabel><h2>Progress should<br/><em>feel like progress.</em></h2><p>Imagine competing, learning, and levelling up together. NexStep envisions fast quizzes, high-engagement challenges, and rankings that make the journey more exciting.</p><div className="concept-pill"><span>✳</span> FUTURE FEATURE / CONCEPT PREVIEW</div></div></Reveal><Reveal delay={120}><div className="leaderboard"><div className="leaderboard-head"><span>✳ &nbsp; NEXSTEP ARENA</span><span>CONCEPT / PREVIEW</span></div><div className="leaderboard-title"><div><small>LEARNING, REIMAGINED</small><strong>The leaderboard<span>.</span></strong></div><span className="leaderboard-icon">↗</span></div><div className="leaderboard-labels"><span>RANK / PLAYER</span><span>XP / POINTS</span></div>{[{name:'PLAYER 01',points:'2,480',n:'01',width:'95%'},{name:'PLAYER 02',points:'2,120',n:'02',width:'76%'},{name:'PLAYER 03',points:'1,860',n:'03',width:'59%'}].map((p,index)=><div className="leaderboard-row" key={p.n}><span className="rank-num">{p.n}</span><span className="rank-avatar">{index===0?'✳':index===1?'◇':'◉'}</span><div className="rank-person"><b>{p.name}</b><span className="rank-progress"><i style={{width:p.width}}/></span></div><strong>{p.points}</strong></div>)}<div className="leaderboard-bottom"><span>ILLUSTRATIVE DATA ONLY</span><span>YOUR NEXT CHALLENGE AWAITS ↗</span></div></div></Reveal></div></section>

      {/* FUTURE */}
      <section className="section future-section dark-section" id="next"><div className="future-shine" aria-hidden="true"/><div className="shell"><Reveal><div className="section-heading future-heading"><div><SectionLabel dark>09 / WHAT COMES NEXT</SectionLabel><h2>We&apos;re only<br/><em>getting started.</em></h2></div><p>From community experiences to new geographies, the next chapter is already being imagined.</p></div></Reveal><div className="future-grid">{site.upcoming.map((item,index)=><Reveal delay={index*70} key={item.number}><article className="future-card"><span className="future-card-num">/{item.number}</span><div className="future-icon"><Icon name={item.icon==='code' ? 'code' : item.icon==='globe' ? 'globe' : 'people'} size={30}/></div><div className="future-card-body"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.detail}</p></div><span className="future-card-arrow"><Icon name="external" size={19}/></span></article></Reveal>)}</div></div></section>

      {/* AUDIENCE / FOUNDER */}
      <section className="section audience-section light-section"><div className="shell audience-layout"><Reveal><div className="audience-heading"><SectionLabel>10 / FIND YOUR PEOPLE</SectionLabel><h2>There&apos;s room<br/>for <em>your ambition.</em></h2><p>Different starting points. Shared curiosity. NexStep brings together the people who want to move something forward.</p></div></Reveal><div className="audience-list">{site.audiences.map(item => <Reveal key={item.no}><div className="audience-row"><span>{item.no}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div><Icon name="external" size={20}/></div></Reveal>)}</div></div><div className="shell founder-strip"><Reveal><div className="founder-strip-inner"><div className="founder-graphic" aria-hidden="true"><span>✳</span></div><div className="founder-strip-copy"><span className="mini-overline">THE PEOPLE BEHIND THE VISION</span><h3>Every movement starts<br/>with <em>someone believing.</em></h3><p>The NexStep founder story will be introduced here once the approved profile and portrait are available.</p></div><div className="founder-strip-badge">FOUNDER STORY<br/>COMING SOON</div></div></Reveal></div></section>

      {/* JOIN */}
      <section className="section join-section dark-section" id="join"><div className="join-glow" aria-hidden="true"/><div className="shell join-layout"><Reveal><div className="join-copy"><SectionLabel dark>11 / THE NEXT CHAPTER</SectionLabel><h2>The future won&apos;t<br/>build <em>itself.</em></h2><p>Get closer to the people, programs, ideas, and opportunities shaping what comes next. Be there from the beginning.</p><div className="join-proof"><span className="join-asterisk">✳</span><span><strong>{site.communityCount}</strong><small>ALREADY IN THE COMMUNITY</small></span></div><div className="join-decoration" aria-hidden="true">NEXT<span>↗</span></div></div></Reveal><Reveal delay={90}><div className="join-form-card"><div className="join-card-head"><span><i/> EARLY ACCESS</span><span>NO. 001 / YOUR NEXT STEP</span></div><h3>Be part of<br/><em>what&apos;s next.</em></h3><p className="join-form-description">A little curiosity is all it takes to begin.</p><WaitlistForm/></div></Reveal></div></section>
    </main>
    <SiteFooter/>
  </>;
}
