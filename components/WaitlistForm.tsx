'use client';

import { FormEvent, useState } from 'react';
import Icon from './Icons';

type FormState = 'idle' | 'sending' | 'success' | 'preview' | 'error';
const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.trim() || '';

export default function WaitlistForm() {
  const [status, setStatus] = useState<FormState>('idle');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      role: String(data.get('role') || '').trim(),
      source: typeof window === 'undefined' ? 'website' : (new URLSearchParams(window.location.search).get('source') || 'website'),
      consent: data.get('consent') === 'yes',
    };
    if (!payload.name || !payload.email || !payload.role || !payload.consent) {
      setStatus('error'); setMessage('Please complete all fields and accept the consent checkbox.'); return;
    }
    setStatus('sending'); setMessage('');
    try {
      if (!endpoint) {
        // No endpoint means no data is stored or transmitted. Never simulate success.
        setStatus('preview');
        setMessage('This is a frontend preview. No details were saved or sent. The site owner must connect a form endpoint before registrations can open.');
      } else {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error('The registration service did not accept the request.');
        setStatus('success'); setMessage('You’re on the list. Thank you for being part of what comes next.');
      }
      if (endpoint) { form.reset(); setRole(''); }
    } catch {
      setStatus('error'); setMessage('We could not complete your request. Please try again.');
    }
  }

  return <form className="waitlist-form" onSubmit={submit} noValidate={false}>
    {!endpoint && <p className="form-preview-note"><Icon name="terminal" size={14}/> PREVIEW MODE: REGISTRATIONS ARE NOT BEING SENT YET</p>}
    <div className="form-grid">
      <label><span>Your name</span><input required name="name" autoComplete="name" placeholder="Enter your full name" maxLength={100}/></label>
      <label><span>Email address</span><input required name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={150}/></label>
    </div>
    <label className="select-label"><span>I'm joining as</span><select name="role" required value={role} onChange={e => setRole(e.target.value)}><option value="" disabled>Select what describes you best</option><option value="Student / learner">Student / learner</option><option value="Founder / entrepreneur">Founder / entrepreneur</option><option value="Professional / developer">Professional / developer</option><option value="University / organization">University / organization</option><option value="Other">Something else</option></select></label>
    <label className="consent-row"><input required type="checkbox" name="consent" value="yes"/><span>I agree to be contacted about NexStep updates and early access. My details will be used for this purpose only.</span></label>
    <button className="form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting…' : 'Take your next step'} <Icon name="arrow" size={19}/></button>
    {message && <p role="status" aria-live="polite" className={`form-message form-message-${status}`}>{message}</p>}
    <p className="form-footnote">No spam. Just meaningful updates from NexStep.</p>
  </form>;
}
