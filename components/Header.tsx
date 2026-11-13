'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Brand from './Brand';
import Icon from './Icons';
import { site } from '@/src/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
    <div className="header-inner shell">
      <Brand light />
      <nav aria-label="Primary navigation" className={`nav-pills ${open ? 'nav-pills-open' : ''}`}>
        {site.nav.map(link => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="#join" onClick={() => setOpen(false)} className="nav-mobile-cta">Get early access <Icon name="external" size={14}/></Link>
      </nav>
      <div className="header-right"><span className="header-status"><i/> BUILDING THE FUTURE</span><Link href="#join" className="nav-cta">Get early access <Icon name="external" size={14}/></Link></div>
      <button className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={23}/></button>
    </div>
  </header>;
}
