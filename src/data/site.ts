/**
 * NEXSTEP CONTENT SOURCE OF TRUTH
 * Edit content here without changing JSX or layout.
 * 'live' = currently offered/achieved; 'planned' = not yet available.
 */
export const site = {
  name: 'NexStep',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Momentum', href: '#momentum' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Community', href: '#community' },
    { label: 'What’s next', href: '#next' },
  ],
  communityCount: '1,000+',
  hero: {
    eyebrow: 'THE NEXT GENERATION OF BUILDERS',
    lineOne: 'The future belongs',
    lineTwo: 'to the builders.',
    sub: 'One connected ecosystem for technology, entrepreneurship, meaningful opportunities, and the people ready to make things happen.',
  },
  // Add more cards here at any time. The grid is data-driven and expands automatically.
  milestones: [
    {
      id: 'community',
      type: 'Community milestone',
      title: '1,000+',
      subtitle: 'Minds in the network',
      description: 'An emerging community of learners, founders, and ambitious people who believe in building together.',
      status: 'live' as const,
      symbol: 'people',
    },
    {
      id: 'mentor',
      type: 'New mentor',
      title: 'Deepak Reddy',
      subtitle: 'DevOps mentor onboarded',
      description: 'Supporting our community and mentoring the NexStep team as the global mentor network grows.',
      status: 'live' as const,
      symbol: 'mentor',
    },
    {
      id: 'leveluplabs',
      type: 'Ecosystem update',
      title: 'LevelUpLabs',
      subtitle: 'Now part of NexStep',
      description: 'Curated technical learning through hand-picked videos, assessments, and structured roadmaps.',
      status: 'live' as const,
      symbol: 'book',
    },
  ],
  today: [
    { num: '01', label: 'REAL CONVERSATIONS', title: 'General Sessions', description: 'Open discussions about emerging technology, new problem statements, startup ideas, and the people who could help bring them to life.', symbol: 'conversation' },
    { num: '02', label: 'REAL EXPERIENCE', title: 'Productive Sessions', description: 'Learn directly from people who have done the work. Honest insights, practical mentoring, and workshops from experienced voices.', symbol: 'spark' },
    { num: '03', label: 'REAL PROGRESS', title: 'Free Tech Resources', description: 'Useful, thoughtfully curated material to make learning more accessible, structured, and actionable.', symbol: 'resource' },
  ],
  tracks: {
    tech: {
      eyebrow: 'PATH 01 / FOR TECHNOLOGY',
      title: 'Learn with intent. Build with skill.',
      description: 'From your first line of code to your next opportunity, a connected journey designed around doing, not just watching.',
      features: [
        'AI roadmap generator',
        'Free resources & LevelUpLabs',
        'Competitive game-based learning',
        'Partner startup opportunities',
        'Local, national & global rankings',
        'AI mock interview practice',
      ],
    },
    founder: {
      eyebrow: 'PATH 02 / FOR ENTREPRENEURSHIP',
      title: 'Great ideas deserve a real shot.',
      description: 'Find your people, sharpen your pitch, form stronger teams, and go from an idea to something the world can use.',
      features: [
        'Pitch deck rounds',
        'Founder networking & meetups',
        'Co-founder matchmaking',
        'Incubation & acceleration support',
        'Developer & agency matchmaking',
        'AI mock pitching practice',
      ],
    },
  },
  // Only populate when approved names, descriptions and founder details have been supplied.
  communityStartups: [] as Array<{
    name: string;
    description: string;
    founder: string;
    category?: string;
    website?: string;
  }>,
  upcoming: [
    { number: '01', title: 'Hackathons', detail: 'Online and offline competitions for people who are ready to build.', tag: 'IN THE WORKS', icon: 'code' },
    { number: '02', title: 'Founder meetups', detail: 'Real rooms and real conversations for ambitious entrepreneurs.', tag: 'COMING SOON', icon: 'meetup' },
    { number: '03', title: 'Hello, California.', detail: 'Our next geographic chapter as we grow beyond India.', tag: 'UPCOMING LAUNCH', icon: 'globe' },
  ],
  audiences: [
    { no: '01', name: 'The learners', detail: 'Students & emerging technologists' },
    { no: '02', name: 'The founders', detail: 'Entrepreneurs & startup builders' },
    { no: '03', name: 'The doers', detail: 'Professionals, developers & agencies' },
    { no: '04', name: 'The enablers', detail: 'Schools, colleges & universities' },
  ],
  socials: [] as Array<{ label: string; url: string }>,
} as const;
