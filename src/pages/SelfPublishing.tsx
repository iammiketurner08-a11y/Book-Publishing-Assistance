import { BookOpen, CheckCircle2, UploadCloud } from 'lucide-react';

export default function SelfPublishing() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Self-Publishing Assistance</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Navigate the complexities of independent publishing with expert guidance. We help you prepare, format, and upload your book to major platforms while you keep 100% of your rights and royalties.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Get Started Today
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Publishing Support</h2>
            <p className="text-slate-600 mb-6">
              Publishing a book involves many technical steps. Our team ensures your manuscript is correctly formatted and meets all platform requirements, saving you time and frustration.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Platform Setup:</strong> Guidance on creating accounts on Amazon KDP, IngramSpark, and more.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Metadata Optimization:</strong> Help selecting the right categories and keywords for your book.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>ISBN Guidance:</strong> Advice on acquiring and assigning ISBNs correctly.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-8 rounded-2xl">
             <UploadCloud className="w-16 h-16 text-primary-600 mb-6" />
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Seamless Upload Process</h3>
             <p className="text-slate-600">
               We walk you through the entire upload process, ensuring your interior files and cover are accepted without errors. We're with you until your book is live and available for purchase.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
