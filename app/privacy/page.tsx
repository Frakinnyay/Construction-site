import PageHeader from "@/components/common/PageHeader";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        label="PRIVACY POLICY"
        title="Your Privacy Matters to Us"
        subtitle="Learn how Vision collects, uses, and protects your personal information."
        backgroundImage="/Mantle.jpg"
      />

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 space-y-10">

          {/* Intro */}
          <p>
            At <strong>Vision</strong>, we are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you visit our website or interact
            with our services.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#063B3B] mb-3">
              Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and any details you submit through our
              contact forms. We also collect non-personal data such as browser
              type and pages visited to improve our website experience.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#063B3B] mb-3">
              How We Use Your Information
            </h2>
            <p>
              The information we collect is used to respond to inquiries,
              provide services, improve our website, and communicate important
              updates. We do not sell or rent your personal data to third
              parties.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#063B3B] mb-3">
              Data Protection
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, disclosure, or
              misuse. However, no method of transmission over the internet is
              completely secure.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#063B3B] mb-3">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              We encourage you to review their privacy policies separately.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#063B3B] mb-3">
              Updates to This Policy
            </h2>
            <p>
              Vision may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated revision
              date.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#063B3B] mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact us at
              <strong> info@vision.com</strong>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
