import { Outlet, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-indigo-700 hover:text-indigo-800 transition-colors">
            <BookOpen className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">AuthorAssist Publishing</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900">How It Works</a>
            <a href="/#services" className="text-sm font-medium text-slate-600 hover:text-slate-900">Services</a>
            <a href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pricing</a>
            <a href="/#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900">FAQ</a>
            <a href="/#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Free Consultation
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="font-bold text-xl tracking-tight">AuthorAssist Publishing</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6">
              A paid service-based business offering independent publishing assistance to authors. We are not a traditional publisher and do not take royalties.
            </p>
            <div className="text-sm text-slate-400 space-y-1">
              <p>Email: contact@authorassistpublishing.com</p>
              <p>Phone: 1-800-555-0199</p>
              <p>Address: 123 Publishing Way, Suite 400, New York, NY 10001</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          &copy; {new Date().getFullYear()} AuthorAssist Publishing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
