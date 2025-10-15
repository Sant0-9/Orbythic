'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  organization: '',
  interest: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateField = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.message || 'We were unable to submit your request. Please try again shortly.');
      }

      setStatus('success');
      setFormData(initialFormState);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'We were unable to submit your request. Please try again shortly.';
      setErrorMessage(message);
      setStatus('error');
    }
  };

  const isSubmitting = status === 'loading';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="contact-form-status">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-starlight/80">Full name</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={updateField('name')}
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-starlight shadow-[0_10px_30px_rgba(10,14,39,0.45)] transition-colors duration-200 focus:border-nebula-purple/50 focus:outline-none focus:ring-2 focus:ring-nebula-purple/30"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-starlight/80">Work email</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={updateField('email')}
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-starlight shadow-[0_10px_30px_rgba(10,14,39,0.45)] transition-colors duration-200 focus:border-nebula-purple/50 focus:outline-none focus:ring-2 focus:ring-nebula-purple/30"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-starlight/80">Organization</span>
          <input
            type="text"
            name="organization"
            required
            value={formData.organization}
            onChange={updateField('organization')}
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-starlight shadow-[0_10px_30px_rgba(10,14,39,0.45)] transition-colors duration-200 focus:border-nebula-purple/50 focus:outline-none focus:ring-2 focus:ring-nebula-purple/30"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-starlight/80">Primary interest</span>
          <select
            name="interest"
            required
            value={formData.interest}
            onChange={updateField('interest')}
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-starlight shadow-[0_10px_30px_rgba(10,14,39,0.45)] transition-colors duration-200 focus:border-nebula-purple/50 focus:outline-none focus:ring-2 focus:ring-nebula-purple/30"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="higher-education">Higher education programs</option>
            <option value="bootcamp">Bootcamps and accelerators</option>
            <option value="corporate">Corporate learning and workforce</option>
            <option value="research">Research and innovation labs</option>
            <option value="partnership">Partnerships and collaborations</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-starlight/80">How can we help?</span>
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={updateField('message')}
          className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-starlight shadow-[0_10px_30px_rgba(10,14,39,0.45)] transition-colors duration-200 focus:border-nebula-purple/50 focus:outline-none focus:ring-2 focus:ring-nebula-purple/30"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-starlight/50">
          By submitting this form, you confirm you have read and agree to our <a href="/legal" className="text-starlight underline">privacy notice</a>.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </div>

      <div id="contact-form-status" className="min-h-[1.5rem]" aria-live="polite">
        {status === 'success' ? (
          <p className="text-sm text-aurora-green">Thank you—our team will reach out within one business day.</p>
        ) : null}
        {status === 'error' && errorMessage ? (
          <p className="text-sm text-red-400">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
