import { useState } from 'react';
import { CheckCircle2, FileText, PenTool, LayoutTemplate, UploadCloud, Megaphone, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stage: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.stage) {
      newErrors.stage = 'Please select a book stage';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({ name: '', email: '', phone: '', stage: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="bg-white py-20 lg:py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            100% Rights & Royalties Retained
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto">
            Professional Self-Publishing Assistance for Independent Authors
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            We provide the professional editing, design, and technical support you need to independently publish your book. A transparent, paid service model where you stay in control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-sm">
              Get a Free Consultation
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-300 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors">
              See How It Works
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">No hidden fees. No royalty sharing. Clear, upfront pricing.</p>
        </div>
      </section>

      {/* 5. TRANSPARENCY / WHY CHOOSE US */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">You Retain All Rights</h3>
              <p className="text-slate-600">We are a service provider, not a publisher. You own 100% of your intellectual property and publishing rights forever.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Keep 100% of Royalties</h3>
              <p className="text-slate-600">Because you pay for our services upfront, we never take a percentage of your book sales. Every royalty earned is yours.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clear Expectations</h3>
              <p className="text-slate-600">We don't promise guaranteed bestsellers. We promise professional, high-quality assistance to give your book its best chance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS (STEP-BY-STEP) */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Collaborative Process</h2>
            <p className="text-lg text-slate-600">We assist you at every stage of your self-publishing journey, providing the expertise while you maintain creative control.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "1. Manuscript Review", desc: "We review your manuscript to understand your goals and recommend the appropriate level of editing." },
              { icon: PenTool, title: "2. Editing & Formatting", desc: "Professional editors refine your text, and formatters prepare the interior layout for print and digital." },
              { icon: LayoutTemplate, title: "3. Cover Design", desc: "Our designers create a custom, genre-appropriate cover based on your vision and market standards." },
              { icon: UploadCloud, title: "4. Publishing Assistance", desc: "We guide you through setting up your own accounts on major self-publishing platforms." },
              { icon: CheckCircle2, title: "5. Distribution Setup", desc: "We help you format and upload your files correctly so your book is available where readers shop." },
              { icon: Megaphone, title: "6. Marketing Guidance", desc: "We provide best practices and foundational advice to help you launch your book independently." }
            ].map((step, i) => (
              <div key={i} className="relative p-6 border border-slate-200 rounded-xl hover:border-primary-300 transition-colors">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Publishing Services</h2>
            <p className="text-lg text-slate-600">Choose individual services or comprehensive packages tailored to your manuscript's needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Editing & Proofreading</h3>
              <p className="text-slate-600 mb-4">From developmental editing to final proofreading, we help polish your manuscript to professional standards. We correct grammar, improve flow, and ensure consistency.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Cover Design</h3>
              <p className="text-slate-600 mb-4">A professional cover is essential. Our designers create high-quality eBook and full-wrap print covers that align with your genre's expectations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Interior Formatting</h3>
              <p className="text-slate-600 mb-4">We format your manuscript into clean, readable files required for print-on-demand (PDF) and digital e-readers (EPUB).</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Platform Setup Assistance</h3>
              <p className="text-slate-600 mb-4">We guide you step-by-step through creating your own author accounts on major platforms, ensuring you retain full control and direct payments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING / PACKAGES */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600">We offer clear, upfront pricing for our services. No hidden fees, and we never take a percentage of your royalties.</p>
            <div className="mt-4 inline-block bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-md text-sm">
              <strong>Disclaimer:</strong> Pricing varies based on manuscript length, complexity, and specific service requirements. The packages below are starting estimates.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="border border-slate-200 rounded-2xl p-8 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter Package</h3>
              <p className="text-slate-500 text-sm mb-6">For authors who have their own cover and editing.</p>
              <div className="text-3xl font-bold text-slate-900 mb-6">$399</div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Basic Interior Formatting (eBook)</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Publishing Account Setup Guidance</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> File Upload Assistance</li>
              </ul>
              <a href="#contact" className="w-full block text-center py-3 px-4 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">Request Quote</a>
            </div>

            {/* Professional */}
            <div className="border-2 border-primary-600 rounded-2xl p-8 flex flex-col relative shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Package</h3>
              <p className="text-slate-500 text-sm mb-6">Comprehensive assistance for a polished release.</p>
              <div className="text-3xl font-bold text-slate-900 mb-6">$799</div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Copy Editing & Proofreading</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Custom Cover Design (eBook & Print)</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Professional Formatting</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Full Publishing Assistance</li>
              </ul>
              <a href="#contact" className="w-full block text-center py-3 px-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">Request Quote</a>
            </div>

            {/* Premium */}
            <div className="border border-slate-200 rounded-2xl p-8 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Package</h3>
              <p className="text-slate-500 text-sm mb-6">Full-service support including marketing guidance.</p>
              <div className="text-3xl font-bold text-slate-900 mb-6">$1499</div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Developmental & Copy Editing</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Premium Cover Design</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Advanced Formatting</li>
                <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" /> Marketing & Launch Strategy Session</li>
              </ul>
              <a href="#contact" className="w-full block text-center py-3 px-4 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">Request Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Author Experiences</h2>
            <p className="text-lg text-slate-600">Hear from independent authors who used our services to prepare their books for publication.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <p className="text-slate-700 italic mb-6">"I had a finished manuscript but no idea how to format it or get a proper cover. The team provided exactly the technical assistance I needed without trying to take my publishing rights. A very professional service."</p>
              <div className="font-semibold text-slate-900">— Sarah M., Independent Author</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <p className="text-slate-700 italic mb-6">"The editing feedback was thorough and constructive. They were upfront about costs from day one, and helped me navigate the confusing process of uploading my files to self-publishing platforms."</p>
              <div className="font-semibold text-slate-900">— David T., First-Time Author</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Clear answers about our services and business model.</p>
          </div>
          
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary-600" /> Is this a traditional publisher?</h3>
              <p className="text-slate-600">No. We are a paid service provider assisting independent authors. We do not acquire publishing rights, we do not pay advances, and we do not act as a traditional publisher. You are the publisher of your own work.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary-600" /> Do you guarantee book sales?</h3>
              <p className="text-slate-600">No. We cannot and do not guarantee book sales, bestseller status, or specific financial returns. Book sales depend on market demand, reader preferences, and your ongoing marketing efforts. We provide professional preparation services to give your book a high-quality presentation.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary-600" /> Are there upfront costs?</h3>
              <p className="text-slate-600">Yes. Because we are a service business, we charge upfront fees for the professional services (editing, design, formatting) we provide. We will provide a clear, custom quote before any work begins.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary-600" /> Where will my book be published?</h3>
              <p className="text-slate-600">We assist you in setting up your own accounts on major self-publishing and distribution platforms (such as Amazon KDP, IngramSpark, etc.). The book is published under your name and your account.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary-600" /> Do I retain rights?</h3>
              <p className="text-slate-600">Yes, absolutely. You retain 100% of your copyright, publishing rights, and all royalties generated from the sales of your book through your own accounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT / LEAD FORM */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request a Free Consultation</h2>
            <p className="text-lg text-slate-300">Tell us about your manuscript and what services you are looking for. We'll provide a transparent assessment and custom quote.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">We've received your request and will be in touch shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-primary-600 font-medium hover:text-primary-800"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 text-slate-900 ${errors.name ? 'border-red-500' : 'border-slate-300'}`} 
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 text-slate-900 ${errors.email ? 'border-red-500' : 'border-slate-300'}`} 
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-slate-900" 
                    />
                  </div>
                  <div>
                    <label htmlFor="stage" className="block text-sm font-medium text-slate-700 mb-1">Book Stage *</label>
                    <select 
                      id="stage" 
                      value={formData.stage}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 text-slate-900 bg-white ${errors.stage ? 'border-red-500' : 'border-slate-300'}`}
                    >
                      <option value="">Select a stage...</option>
                      <option value="writing">Still writing</option>
                      <option value="finished_draft">Finished first draft</option>
                      <option value="edited">Edited and ready for design</option>
                      <option value="ready">Ready to publish</option>
                    </select>
                    {errors.stage && <p className="mt-1 text-sm text-red-600">{errors.stage}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">How can we help you? *</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-slate-900" 
                    placeholder="Please describe your book (genre, word count) and the services you are interested in..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-md hover:bg-primary-700 transition-colors">
                  Request Consultation & Custom Quote
                </button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  By submitting this form, you agree to our <a href="/privacy-policy" className="underline hover:text-slate-700">Privacy Policy</a>. We will only use your information to contact you regarding your inquiry. No hidden fees, no obligations.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
