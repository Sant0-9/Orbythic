import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Terms of Service - Orbythic',
  description: 'Read the terms of service for using the Orbythic Quasera platform.',
};

export default function TermsPage() {
  return (
    <div className="bg-cosmic-deep">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Legal"
          title="Terms of Service"
          subtitle="Last updated: January 15, 2025"
        />

        <div className="mt-16 space-y-12 text-starlight/80">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Acceptance of Terms</h2>
            <p>
              By accessing or using the Orbythic Quasera platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Service Description</h2>
            <p>
              Orbythic provides an adaptive learning platform designed for educational institutions, bootcamps, and corporate training programs. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Adaptive learning path creation and management</li>
              <li>Assessment and evaluation tools</li>
              <li>Analytics and reporting dashboards</li>
              <li>Integration capabilities with existing systems</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">User Responsibilities</h2>
            <p>
              As a user of our platform, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the platform in compliance with applicable laws and regulations</li>
              <li>Respect intellectual property rights</li>
              <li>Not engage in any activity that disrupts or interferes with our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Quasera platform are owned by Orbythic and protected by intellectual property laws. You retain ownership of content you create using our platform, while granting us a license to use it to provide our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Service Availability</h2>
            <p>
              We strive to maintain high availability of our services but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue services with reasonable notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Orbythic shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-nebula-purple">legal@orbythic.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
