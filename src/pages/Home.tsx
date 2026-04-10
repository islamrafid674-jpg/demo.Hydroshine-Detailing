import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Clock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://wynndetailing.com.au/wp-content/uploads/2024/07/Car-Detailing-A-Comprehensive-Guide-to-Pristine-Perfection.jpg" 
            alt="Car being detailed" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-6 border border-white/20">
              <MapPin className="w-3 h-3" />
              <span>Mobile Service in Magic Valley, ID</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
              Professional Mobile Auto Detailing.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-light mb-10 max-w-2xl leading-relaxed">
              We come to you — clean, restore, and protect your vehicle with premium mobile service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-neutral-900 px-8 py-4 text-sm font-bold uppercase tracking-wider text-center hover:bg-neutral-200 transition-colors flex items-center justify-center"
              >
                Book Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a 
                href="tel:208-595-8238" 
                className="border border-white/30 bg-transparent text-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-center hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Call or Text
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-full mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Mobile Convenience</h3>
              <p className="text-neutral-600 leading-relaxed">
                We bring our fully-equipped detailing setup directly to your home or office. No waiting rooms, no hassle.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Consistent Results</h3>
              <p className="text-neutral-600 leading-relaxed">
                Professional-grade products and proven techniques ensure your vehicle looks flawless every single time.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-full mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Reliable Service</h3>
              <p className="text-neutral-600 leading-relaxed">
                Fast response times, clear communication, and punctual arrivals. We respect your time and your vehicle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Restoration Packages.</h2>
              <p className="text-lg text-neutral-600">Comprehensive detailing solutions tailored to your vehicle's needs.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-sm font-bold uppercase tracking-wider hover:text-neutral-500 transition-colors mt-6 md:mt-0">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Interior Detail', price: '$150', desc: 'Deep clean interior, vacuum, and surface restoration.', img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800' },
              { title: 'Exterior Detail', price: '$50', desc: 'Meticulous hand wash and shine finish.', img: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800' },
              { title: 'Full Detail', price: '$200', desc: 'Complete interior and exterior refresh.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 overflow-hidden bg-neutral-100">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                  <span className="text-lg font-medium text-neutral-500">{service.price}</span>
                </div>
                <p className="text-neutral-600 mb-6">{service.desc}</p>
                <div className="w-full h-px bg-neutral-200 group-hover:bg-neutral-900 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 md:hidden">
            <Link to="/services" className="flex items-center justify-center w-full border border-neutral-200 py-4 text-sm font-bold uppercase tracking-wider">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Teaser */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">The Hydroshine Difference.</h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                We don't just wash cars; we restore them. See the transformation from daily wear-and-tear to showroom clean.
              </p>
              <ul className="space-y-4 mb-10">
                {['Stain extraction & upholstery cleaning', 'Deep crevice vacuuming', 'Paint decontamination', 'Streak-free glass & trim restoration'].map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-neutral-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/gallery" className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-neutral-300 transition-colors">
                View Gallery <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] bg-neutral-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1518984364121-65771034f40f?auto=format&fit=crop&q=80&w=1000" 
                alt="Detailed car interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-white text-neutral-900 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                After Interior Detail
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Ready for a clean ride?</h2>
            <p className="text-xl text-neutral-600 mb-10">
              Schedule your mobile detail today. We serve all of Magic Valley.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-neutral-900 text-white px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Schedule Your Detail
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
