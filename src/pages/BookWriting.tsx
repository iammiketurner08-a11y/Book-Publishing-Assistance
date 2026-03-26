import { Pen, BookOpen, Users, CheckCircle2 } from 'lucide-react';

export default function BookWriting() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Professional Book Writing & Ghostwriting</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Have a great idea but struggling to find the words? Our professional writers help you turn your concepts, memories, or research into a compelling manuscript.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Consult with a Writer
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Story, Our Craft</h2>
            <p className="text-slate-600 mb-6">
              Whether you need a full ghostwriter for your memoir or a collaborative partner for your business book, we provide the literary expertise to make your voice heard.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary-600 shrink-0" />
                <div>
                  <h4 className="font-bold">Ghostwriting</h4>
                  <p className="text-slate-600 text-sm">We do the heavy lifting. You provide the ideas and feedback; we write the entire book. You keep 100% of the credit and royalties.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Pen className="w-6 h-6 text-primary-600 shrink-0" />
                <div>
                  <h4 className="font-bold">Collaborative Writing</h4>
                  <p className="text-slate-600 text-sm">A partnership where we work alongside you to flesh out chapters, refine your prose, and keep the project moving forward.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <BookOpen className="w-6 h-6 text-primary-600 shrink-0" />
                <div>
                  <h4 className="font-bold">Book Outlining</h4>
                  <p className="text-slate-600 text-sm">Stuck at the start? We help you build a solid structural foundation and chapter-by-chapter roadmap.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-6">Our Writing Ethics</h3>
            <p className="text-slate-600 mb-6">
              We maintain the highest standards of confidentiality and integrity. Your ideas remain yours, and our role is strictly to facilitate your success as an author.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Full Confidentiality (NDA)</li>
              <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary-600" /> 100% Original Content</li>
              <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Regular Progress Updates</li>
              <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Multiple Revision Rounds</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
