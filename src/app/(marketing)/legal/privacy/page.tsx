import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy - Orbythic',
  description: 'Learn how Orbythic protects your privacy and handles your data with transparency and security.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="Last updated: January 15, 2025"
        />

        <div className="mt-16 space-y-12 text-starlight/80">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Introduction</h2>
            <p>
              At Orbythic, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Quasera platform and related services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account information such as name, email address, and institutional affiliation</li>
              <li>Learning activity data including progress, assessments, and engagement metrics</li>
              <li>Usage data and analytics to improve our platform</li>
              <li>Communications and support interactions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our adaptive learning services</li>
              <li>Personalize your learning experience</li>
              <li>Communicate with you about updates, support, and services</li>
              <li>Ensure platform security and prevent fraud</li>
              <li>Comply with legal obligations and accreditation requirements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Data Security</h2>
            <p>
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encryption in transit and at rest</li>
              <li>SOC 2 Type II compliance controls</li>
              <li>Regular security audits and penetration testing</li>
              <li>Role-based access controls and audit logging</li>
              <li>FERPA and GDPR compliant data handling practices</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your data only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your institution or authorized educational administrators</li>
              <li>With service providers who assist in operating our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your data subject to legal and contractual obligations</li>
              <li>Opt-out of certain data collection and marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-starlight">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-nebula-purple">privacy@orbythic.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
