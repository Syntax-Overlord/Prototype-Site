import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NexStep | For the Next Generation of Builders',
  description: 'An emerging ecosystem connecting technology, entrepreneurship, learning, community, and real-world opportunities. Explore NexStep and join early access.',
  applicationName: 'NexStep',
  openGraph: {
    title: 'NexStep | For the Next Generation of Builders',
    description: 'Learn together. Build what’s next. One ecosystem for technology and entrepreneurship.',
    type: 'website',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630, alt: 'NexStep: For the next generation of builders' }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#080a0e' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
