import Link from 'next/link';

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" role="img" aria-label="NexStep symbol">
      <path d="M7 35V9h7l16 17V9h7v26h-7L14 18v17H7Z" fill="currentColor" />
      <path d="m30 9 7 0-7 7V9Z" fill="var(--blue)" />
    </svg>
  );
}

export default function Brand({ light = false }: { light?: boolean }) {
  return <Link className={`brand ${light ? 'brand-light' : ''}`} href="/" aria-label="NexStep home"><BrandMark className="brand-icon" /><span>Nex<span className="brand-accent">Step</span><span className="brand-period">.</span></span></Link>;
}
