import { Palette, Image as ImageIcon, Brush, CheckCircle2 } from 'lucide-react';

export default function BookIllustrations() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Professional Book Illustrations</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Visual storytelling that captivates. From children's books to technical diagrams and fantasy maps, our artists bring your vision to life.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            View Illustration Portfolio
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Palette className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Children's Books</h3>
            <p className="text-slate-600 text-sm">Whimsical and vibrant characters that engage young readers and parents alike.</p>
          </div>
          <div className="text-center p-6">
            <ImageIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Cover Art</h3>
            <p className="text-slate-600 text-sm">Custom painted or digital illustrations designed specifically for your book's genre.</p>
          </div>
          <div className="text-center p-6">
            <Brush className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Technical & Maps</h3>
            <p className="text-slate-600 text-sm">Precise diagrams or immersive fantasy maps to enhance your non-fiction or epic saga.</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Illustration Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold">Character/Concept Sketches</h4>
                    <p className="text-slate-400 text-sm">We start with rough ideas to ensure the direction matches your vision.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold">Color & Detail</h4>
                    <p className="text-slate-400 text-sm">Once sketches are approved, we move to full rendering and coloring.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold">Final Delivery</h4>
                    <p className="text-slate-400 text-sm">High-resolution files ready for both print and digital publication.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square bg-slate-800 rounded-xl"></div>
               <div className="aspect-square bg-slate-800 rounded-xl"></div>
               <div className="aspect-square bg-slate-800 rounded-xl"></div>
               <div className="aspect-square bg-slate-800 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
