import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors">
            <img src="/logo.png" alt="AKD Publishing" className="h-40 w-50" referrerPolicy="no-referrer" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900">How It Works</a>
            
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full mt-2 w-64 bg-white border border-slate-200 rounded-md shadow-lg py-2 z-50">
                  <Link to="/services/self-publishing" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Self-Publishing</Link>
                  <Link to="/services/editing" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Editing</Link>
                  <Link to="/services/cover-design" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Cover Design</Link>
                  <Link to="/services/book-formatting" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Book Formatting</Link>
                  <Link to="/services/book-illustrations" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Book Illustrations</Link>
                  <Link to="/services/book-video-trailer" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Book Video Trailer</Link>
                  <Link to="/services/audiobook-creation" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Audiobook Creation</Link>
                  <Link to="/services/book-writing" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Book Writing</Link>
                  <Link to="/services/author-website" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Author Website</Link>
                  <Link to="/services/marketing" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">Marketing Services</Link>
                </div>
              )}
            </div>

            <a href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pricing</a>
            <a href="/#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900">FAQ</a>
            <a href="/#contact" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
              Free Consultation
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <img src="/logo.png" alt="AKD Publishing" className="h-30 w-50 brightness-0 invert" referrerPolicy="no-referrer" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6">
              A paid service-based business offering independent publishing assistance to authors. We are not a traditional publisher and do not take royalties.
            </p>
            <div className="text-sm text-slate-400 space-y-1">
              <p>Email: contact@akdpublishing.com</p>
              <p>Phone: 1-786-904-8744</p>
              <p>Address: 7901 4th St N St. Petersburg, FL 33702, USA</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/self-publishing" className="hover:text-white transition-colors">Self-Publishing</Link></li>
              <li><Link to="/services/editing" className="hover:text-white transition-colors">Editing</Link></li>
              <li><Link to="/services/cover-design" className="hover:text-white transition-colors">Cover Design</Link></li>
              <li><Link to="/services/book-formatting" className="hover:text-white transition-colors">Book Formatting</Link></li>
              <li><Link to="/services/book-illustrations" className="hover:text-white transition-colors">Book Illustrations</Link></li>
              <li><Link to="/services/book-video-trailer" className="hover:text-white transition-colors">Book Video Trailer</Link></li>
              <li><Link to="/services/audiobook-creation" className="hover:text-white transition-colors">Audiobook Creation</Link></li>
              <li><Link to="/services/book-writing" className="hover:text-white transition-colors">Book Writing</Link></li>
              <li><Link to="/services/author-website" className="hover:text-white transition-colors">Author Website</Link></li>
              <li><Link to="/services/marketing" className="hover:text-white transition-colors">Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
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
          &copy; {new Date().getFullYear()} AKD Publishing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
