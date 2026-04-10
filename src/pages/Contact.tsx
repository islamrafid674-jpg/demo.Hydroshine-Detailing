import { motion } from 'motion/react';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full pt-10 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <motion.div {...fadeIn} className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Schedule Your Detail.</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Ready for a clean ride? Fill out the form below or give us a call/text to book your mobile detailing appointment.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <motion.div {...fadeIn} className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">Direct Contact</h3>
              <a 
                href="tel:208-595-8238" 
                className="flex items-center text-3xl font-bold tracking-tighter hover:text-neutral-600 transition-colors"
              >
                <Phone className="w-8 h-8 mr-4 text-neutral-400" />
                (208) 595-8238
              </a>
              <p className="mt-2 text-neutral-500 text-sm ml-12">Call or text us anytime.</p>
            </div>
            
            <div className="w-full h-px bg-neutral-200"></div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">Service Area</h3>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-neutral-400 shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium">Magic Valley, Idaho</p>
                  <p className="text-neutral-500 mt-1">We are a fully mobile service. We come to your home or workplace.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-neutral-200"></div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">Hours</h3>
              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 text-neutral-400 shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium">Monday - Saturday</p>
                  <p className="text-neutral-500 mt-1">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-neutral-50 p-8 md:p-12 border border-neutral-200"
          >
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                <p className="text-neutral-600">
                  Thanks for reaching out! We'll contact you shortly to confirm your appointment.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-sm font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      placeholder="(208) 555-0123"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="vehicle" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Vehicle Make & Model</label>
                  <input 
                    type="text" 
                    id="vehicle" 
                    required
                    className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                    placeholder="e.g. 2020 Ford F-150"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Service Needed</label>
                  <select 
                    id="service" 
                    required
                    className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors appearance-none"
                  >
                    <option value="" disabled selected>Select a package...</option>
                    <option value="full">Full Detail ($200+)</option>
                    <option value="interior">Interior Detail ($150+)</option>
                    <option value="exterior">Exterior Detail ($50+)</option>
                    <option value="custom">Not sure / Custom request</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Service Location (City/Zip)</label>
                  <input 
                    type="text" 
                    id="location" 
                    required
                    className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                    placeholder="e.g. Twin Falls, 83301"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Additional Details (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors resize-none"
                    placeholder="Any specific stains, pet hair, or areas of concern?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-neutral-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Request Appointment'}
                  {formStatus !== 'submitting' && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </form>
            )}
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
