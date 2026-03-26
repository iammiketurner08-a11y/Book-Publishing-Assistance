export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Refund Policy</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <p>At AKD Publishing, we strive to provide high-quality professional services to independent authors. Because our work involves dedicated time, labor, and custom deliverables, our refund policy is structured to be fair to both our clients and our team.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Service Cancellation Before Work Begins</h2>
        <p>If you choose to cancel your service agreement <strong>before any work has commenced</strong> on your project, you are entitled to a full refund of any deposits or upfront fees paid, less a 5% administrative processing fee to cover transaction costs.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Cancellation During the Service Process</h2>
        <p>If you decide to cancel services <strong>after work has begun but before completion</strong>, refunds will be prorated based on the amount of work already completed. For example:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>If you purchased a package and the editing phase is complete but formatting has not started, you will be billed for the editing portion, and the remainder of your fee will be refunded.</li>
          <li>Completed milestones (e.g., a finalized cover design, a completed editorial assessment) are non-refundable once delivered and approved.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Completed Services</h2>
        <p>Due to the custom nature of our services, <strong>we do not offer refunds for services that have been fully completed and delivered</strong>. This includes completed editing, finalized cover designs, and completed formatting files.</p>
        <p>We work closely with you during the process, providing opportunities for revisions and feedback (as outlined in your specific service quote) to ensure you are satisfied with the final product before it is finalized.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. No Refunds Based on Book Performance</h2>
        <p><strong>CRITICAL:</strong> We are a service provider assisting with the preparation of your book. We do not guarantee book sales, reviews, or market success. Therefore, <strong>we absolutely do not issue refunds based on poor book sales, lack of commercial success, or negative reader reviews.</strong></p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. How to Request a Refund or Cancellation</h2>
        <p>To request a cancellation and applicable refund, please contact your assigned project manager directly or email us at <strong>contact@akdpublishing.com</strong> with your project details and reason for cancellation. Refund requests are processed within 7-10 business days.</p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Revisions vs. Refunds</h2>
        <p>If you are unsatisfied with a deliverable (such as a cover design concept), please refer to the revision terms in your service agreement. We are committed to working with you through the agreed-upon revision rounds to achieve a result you are happy with, rather than issuing immediate refunds for subjective design or editorial preferences.</p>
      </div>
    </div>
  );
}
