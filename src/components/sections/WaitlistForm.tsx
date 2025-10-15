'use client';

import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function WaitlistForm() {
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    role: 'student',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setPosition(data.position);
        setFormState({ email: '', name: '', role: 'student' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-aurora-green" />
        <h3 className="mt-4 text-xl font-semibold text-starlight">Welcome to the waitlist!</h3>
        <p className="mt-2 text-starlight/70">{message}</p>
        {position && (
          <p className="mt-4 text-2xl font-bold text-nebula-purple">
            Position #{position}
          </p>
        )}
        <p className="mt-4 text-sm text-starlight/50">
          We will send you updates as we approach your launch window.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-starlight/80 mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          minLength={2}
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-starlight placeholder-starlight/40 focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20 transition-all duration-300"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-starlight/80 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-starlight placeholder-starlight/40 focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20 transition-all duration-300"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-starlight/80 mb-2">
          I am a...
        </label>
        <select
          id="role"
          required
          value={formState.role}
          onChange={(e) => setFormState({ ...formState, role: e.target.value })}
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-starlight focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20 transition-all duration-300"
        >
          <option value="student">Student</option>
          <option value="educator">Educator</option>
          <option value="researcher">Researcher</option>
          <option value="institution">Institution Administrator</option>
          <option value="other">Other</option>
        </select>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-200">{message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Joining waitlist...</span>
          </>
        ) : (
          <span>Join the Waitlist</span>
        )}
      </button>

      <p className="text-xs text-center text-starlight/50">
        By joining, you agree to receive updates about Quasera. Unsubscribe anytime.
      </p>
    </form>
  );
}
