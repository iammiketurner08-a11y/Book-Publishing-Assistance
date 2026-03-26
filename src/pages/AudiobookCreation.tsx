import { Mic, Headphones, Music, CheckCircle2 } from 'lucide-react';

export default function AudiobookCreation() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Professional Audiobook Production</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Reach the fastest-growing segment of the book market. We provide end-to-end audiobook production, from narration to ACX-compliant mastering.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Listen to Narrator Samples
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <Mic className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Pro Narration</h3>
            <p className="text-slate-600 text-sm">Access to a diverse roster of professional voice actors across all genres and accents.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl">
            <Headphones className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Editing</h3>
            <p className="text-slate-600 text-sm">Removal of breaths, clicks, and background noise for a crystal-clear listening experience.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl">
            <Music className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">ACX Mastering</h3>
            <p className="text-slate-600 text-sm">Technical mastering to ensure your files meet the strict requirements of Audible and iTunes.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Audiobook Journey</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 className="text-lg font-bold">Auditioning</h4>
                <p className="text-slate-600">We provide custom auditions from multiple narrators so you can find the perfect voice for your characters or message.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 className="text-lg font-bold">Recording & Direction</h4>
                <p className="text-slate-600">Our directors work with the narrator to ensure correct pronunciation and the right emotional tone throughout the book.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h4 className="text-lg font-bold">Post-Production</h4>
                <p className="text-slate-600">Full editing, mastering, and quality control check to ensure every second is perfect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
