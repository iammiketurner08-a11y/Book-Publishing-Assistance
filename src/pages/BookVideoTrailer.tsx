import { Video, Play, Film, CheckCircle2 } from 'lucide-react';

export default function BookVideoTrailer() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Cinematic Book Video Trailers</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Bring your story to life with a professional book trailer. Capture your audience's attention on social media and retail platforms with high-quality visual storytelling.
          </p>
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            Get a Trailer Quote
          </a>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Your Book Needs a Trailer</h2>
            <p className="text-slate-600 mb-6">
              In today's digital age, video is the most engaging form of content. A well-produced book trailer acts as a commercial for your work, creating emotional resonance and intrigue in under 60 seconds.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Social Media Impact:</strong> Perfect for Reels, TikTok, and YouTube Shorts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Amazon Author Page:</strong> Enhance your retail presence with video content.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-slate-700"><strong>Professional Branding:</strong> Show readers you are serious about your craft.</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
              <Play className="w-12 h-12 text-slate-400" />
            </div>
            <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
              <Film className="w-12 h-12 text-slate-400" />
            </div>
            <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
              <Video className="w-12 h-12 text-slate-400" />
            </div>
            <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
              <span className="text-slate-400 font-medium">Your Trailer Here</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Production Tiers</h2>
            <p className="text-slate-600">From simple motion graphics to complex cinematic montages.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-2">Teaser</h3>
              <p className="text-slate-500 text-sm mb-4">15-30 seconds. Focus on cover art and key hook.</p>
              <p className="text-2xl font-bold text-primary-600">$199</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-primary-600 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded">POPULAR</div>
              <h3 className="text-xl font-bold mb-2">Standard</h3>
              <p className="text-slate-500 text-sm mb-4">45-60 seconds. Stock footage, music, and voiceover.</p>
              <p className="text-2xl font-bold text-primary-600">$399</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-2">Cinematic</h3>
              <p className="text-slate-500 text-sm mb-4">60-90 seconds. Custom animations and premium sound design.</p>
              <p className="text-2xl font-bold text-primary-600">$699+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
