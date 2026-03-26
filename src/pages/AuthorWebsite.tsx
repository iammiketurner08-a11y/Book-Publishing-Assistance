import { Globe, Smartphone, Search } from 'lucide-react';

export default function AuthorWebsite() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Author Website Design</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Establish your online presence with a professional author website. Showcase your books, connect with readers, and build your author brand.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Get a Website Quote
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-slate-200 p-8 rounded-xl text-center">
            <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Design</h3>
            <p className="text-slate-600">Websites tailored to your author brand and genre, featuring your books, bio, and a blog to engage your audience.</p>
          </div>
          <div className="border border-slate-200 p-8 rounded-xl text-center">
            <Smartphone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Responsive</h3>
            <p className="text-slate-600">Your website will look great and function perfectly on desktops, tablets, and smartphones.</p>
          </div>
          <div className="border border-slate-200 p-8 rounded-xl text-center">
            <Search className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">SEO Optimized</h3>
            <p className="text-slate-600">Built with best practices for search engine optimization so readers can easily find you online.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
