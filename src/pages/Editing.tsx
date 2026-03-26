import { PenTool, CheckCircle2, FileText } from 'lucide-react';

export default function Editing() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Professional Editing Services</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Polish your manuscript to perfection. Our experienced editors help refine your story, correct grammar, and ensure your book meets professional industry standards.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Request an Editing Quote
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Types of Editing We Offer</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Every manuscript is unique. We offer different levels of editing to suit your specific needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-slate-200 p-8 rounded-xl">
            <FileText className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Developmental Editing</h3>
            <p className="text-slate-600">Focuses on the big picture: plot, pacing, character development, and overall structure. Ideal for early drafts that need structural guidance.</p>
          </div>
          <div className="border border-slate-200 p-8 rounded-xl">
            <PenTool className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Copy Editing</h3>
            <p className="text-slate-600">Improves sentence structure, clarity, and flow. We correct awkward phrasing, ensure consistent tone, and fix grammatical errors.</p>
          </div>
          <div className="border border-slate-200 p-8 rounded-xl">
            <CheckCircle2 className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Proofreading</h3>
            <p className="text-slate-600">The final polish. We catch typos, spelling mistakes, punctuation errors, and formatting inconsistencies before publication.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
