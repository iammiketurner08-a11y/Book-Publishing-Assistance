export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
        <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AKD Publishing ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. By accessing the site or utilizing our services, you agree that you have read, understood, and agree to be bound by all of these Terms and Conditions.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Nature of Services</h2>
        <p>AKD Publishing is a <strong>service provider</strong>, not a traditional publisher. We offer paid assistance for independent authors, including but not limited to editing, formatting, cover design, and publishing platform setup guidance. We do not acquire, own, or license your intellectual property. You remain the sole publisher and copyright holder of your work.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. No Guarantees of Sales or Success</h2>
        <p><strong>CRITICAL DISCLAIMER:</strong> We make absolutely no guarantees, representations, or warranties regarding the commercial success, sales volume, bestseller status, or financial returns of your book. The publishing market is highly competitive and unpredictable. Our services are designed to prepare your manuscript professionally, but the ultimate success of the book depends on market factors, reader reception, and your own marketing efforts.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Payment Terms</h2>
        <p>All services are provided on a fee-for-service basis. Pricing is determined based on a custom quote provided after reviewing your specific project requirements. Payment schedules (e.g., upfront deposits, milestone payments) will be clearly outlined in your specific service agreement before any work commences. We do not take any percentage of your royalties or book sales.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Intellectual Property Rights</h2>
        <p>You represent and warrant that you own the copyright to the manuscript and materials you provide to us, or that you have the legal right to use them. You retain 100% of your copyright and publishing rights. Upon full payment for our services, you receive full rights to use the final deliverables (e.g., formatted files, cover design) for the purpose of publishing your book.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. User Responsibilities</h2>
        <p>You are responsible for providing accurate information, timely feedback during the service process, and ensuring your manuscript does not contain plagiarized, defamatory, illegal, or otherwise prohibited content. We reserve the right to refuse service for manuscripts that violate these principles.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">7. Limitation of Liability</h2>
        <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">8. Contact Us</h2>
        <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
        <p className="mt-2">
          AKD Publishing<br />
          Email: contact@akdpublishing.com<br />
          Phone: 1-786-904-8744
        </p>
      </div>
    </div>
  );
}
