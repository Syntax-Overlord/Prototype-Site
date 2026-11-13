import Link from 'next/link';
import Brand from '@/components/Brand';
import Icon from '@/components/Icons';

export default function ComingSoon() {
  return <main className="coming-page">
    <div className="coming-glow" aria-hidden="true"/>
    <header className="coming-header shell"><Brand light/><span className="pill-outline">COMING SOON</span></header>
    <div className="coming-content">
      <p className="eyebrow eyebrow-blue">A NEW CHAPTER IS LOADING</p>
      <h1>Good things take <em>building.</em></h1>
      <p>We’re creating a more connected future for technology, entrepreneurship, and the people who are ready to move forward.</p>
      <Link className="btn btn-primary" href="/">Back to NexStep <Icon name="arrow" size={18}/></Link>
    </div>
    <div className="coming-bottom">NEXSTEP / MORE THAN A NEXT STEP</div>
  </main>;
}
