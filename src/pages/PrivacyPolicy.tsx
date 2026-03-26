export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Introduction</h2>
        <p>AKD Publishing ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our self-publishing assistance services.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Contact Data:</strong> Name, email address, phone number, and mailing address.</li>
          <li><strong>Project Data:</strong> Information about your manuscript, book stage, genre, and service requirements.</li>
          <li><strong>Financial Data:</strong> Payment information required to process payments for our services (processed securely via third-party payment processors).</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
        <p>We use personal information collected via our website for a variety of business purposes described below:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and deliver the services you request.</li>
          <li>To send you administrative information, such as details about our services, changes to our terms, conditions, and policies.</li>
          <li>To fulfill and manage your orders and payments.</li>
          <li>To respond to your inquiries and offer support.</li>
          <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Sharing Your Information</h2>
        <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., payment processing, email delivery, hosting services).</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Data Security</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us using the details provided below.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">7. Contact Us</h2>
        <p>If you have questions or comments about this notice, you may email us at contact@akdpublishing.com or by post to:</p>
        <p className="mt-2">
          AKD Publishing<br />
          7901 4th St N St. Petersburg<br />
          Florida, 33702
        </p>
      </div>
    </div>
  );
}
