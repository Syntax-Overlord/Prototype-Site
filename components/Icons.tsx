import type { SVGProps } from 'react';

type IconName = 'arrow' | 'arrowDown' | 'external' | 'spark' | 'globe' | 'code' | 'people' | 'check' | 'menu' | 'close' | 'plus' | 'bolt' | 'send' | 'mail' | 'target' | 'terminal' | 'book' | 'play';

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export default function Icon({ name, size = 20, ...rest }: Props) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const, ...rest };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></>,
    arrowDown: <><path d="M12 3v18"/><path d="m5 14 7 7 7-7"/></>,
    external: <><path d="M5 19 19 5"/><path d="M8 5h11v11"/></>,
    spark: <><path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z"/><path d="M19 18v4M17 20h4"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-12-4 24"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m4 9v-2a6 6 0 0 0-4-5.7"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 8h16M4 16h16"/></>,
    close: <><path d="M5 5 19 19M19 5 5 19"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    bolt: <path d="m14 2-9 11h7l-2 9 9-12h-7l2-8Z"/>,
    send: <><path d="m22 2-7 20-4-9-9-4L22 2Z"/><path d="M22 2 11 13"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="3"/><path d="m7 9 3 3-3 3M12 16h5"/></>,
    book: <><path d="M12 6a9 9 0 0 0-9-2v15a9 9 0 0 1 9 2 9 9 0 0 1 9-2V4a9 9 0 0 0-9 2ZM12 6v15"/></>,
    play: <path d="m9 6 10 6-10 6V6Z"/>,
  };
  return <svg {...shared}>{paths[name]}</svg>;
}
