import { LayoutTemplate } from 'lucide-react';

export default function CoverDesign() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Custom Cover Design</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Readers judge books by their covers. Our professional designers create eye-catching, genre-appropriate covers that capture attention and drive sales.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Start Your Design
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 p-8 rounded-2xl">
             <LayoutTemplate className="w-16 h-16 text-primary-600 mb-6" />
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Print & Digital Formats</h3>
             <p className="text-slate-600">
               We design covers for all formats. Whether you need a front cover for an eBook or a full wrap (front, spine, and back) for paperback and hardcover editions, we deliver high-resolution files ready for upload.
             </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Design Process</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Concept Consultation</h4>
                  <p className="text-slate-600">We discuss your book's themes, target audience, and your visual preferences.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Initial Drafts</h4>
                  <p className="text-slate-600">Our designers create initial concepts for your review and feedback.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Revisions & Finalization</h4>
                  <p className="text-slate-600">We refine the chosen concept until it's perfect, then deliver the final files.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
