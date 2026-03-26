import { AlignLeft, Type, Book, CheckCircle2 } from 'lucide-react';

export default function BookFormatting() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Professional Interior Formatting</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Don't let poor formatting distract your readers. We provide industry-standard interior design for eBooks, paperbacks, and hardcovers.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Get a Formatting Quote
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Interior Design Excellence</h2>
            <p className="text-slate-600 mb-6">
              A professionally formatted book ensures a seamless reading experience. We handle the technical details of margins, gutters, drop caps, and font selection so you don't have to.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlignLeft className="w-6 h-6 text-primary-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Print Formatting</h4>
                  <p className="text-slate-600 text-sm">Optimized for Amazon KDP, IngramSpark, and local printers. Includes proper bleed and gutter settings.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Type className="w-6 h-6 text-primary-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">eBook Conversion</h4>
                  <p className="text-slate-600 text-sm">Reflowable ePub files that look perfect on Kindle, iPad, and Nook.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Book className="w-6 h-6 text-primary-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Complex Layouts</h4>
                  <p className="text-slate-600 text-sm">Specialized formatting for non-fiction, poetry, and books with many images or tables.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Formatting Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Professional Typography</li>
              <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Clickable Table of Contents</li>
              <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Custom Chapter Headers</li>
              <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Proper Page Numbering</li>
              <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Drop Caps & Scene Breaks</li>
              <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Orphan & Widow Control</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
