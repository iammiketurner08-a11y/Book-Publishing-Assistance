import { Megaphone, Mail, TrendingUp } from 'lucide-react';

export default function MarketingServices() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Book Marketing Services</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Publishing is only the first step. We provide strategic marketing guidance and tools to help you reach your target audience and build a readership.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Discuss Marketing Strategy
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Build Your Audience</h2>
            <p className="text-slate-600 mb-6">
              Effective marketing requires a plan. We help you identify your ideal readers and develop strategies to reach them without relying on false promises or guaranteed sales gimmicks.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Email Marketing Setup:</strong> Guidance on building a mailing list and creating engaging newsletters.</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Launch Strategy:</strong> Step-by-step plans for a successful book launch.</span>
              </li>
              <li className="flex items-start gap-3">
                <Megaphone className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Ad Campaign Guidance:</strong> Basics of running ads on platforms like Amazon and Facebook.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-8 rounded-2xl">
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Realistic Expectations</h3>
             <p className="text-slate-600 mb-4">
               We believe in transparency. We do not guarantee bestseller status or specific sales numbers. Our marketing services are designed to equip you with the knowledge and tools to effectively promote your book over the long term.
             </p>
             <p className="text-slate-600 font-semibold">
               Success in self-publishing is a marathon, not a sprint.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
