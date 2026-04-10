import { motion } from 'motion/react';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function About() {
  return (
    <div className="flex flex-col w-full pt-10 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <motion.div {...fadeIn} className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">About Us.</h1>
          <p className="text-2xl text-neutral-900 font-medium leading-tight mb-8">
            Hydroshine Detailing provides mobile auto detailing services across Magic Valley, focused on restoring and maintaining vehicle cleanliness with professional care.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square bg-neutral-100 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200" 
              alt="Detailing professional at work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-neutral-200/20 m-4"></div>
          </motion.div>
          
          <motion.div {...fadeIn} className="flex flex-col justify-center h-full space-y-12">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-neutral-400" />
                <h3 className="text-2xl font-bold tracking-tight">Mobile Service</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                We know you're busy. That's why we bring the detail shop to you. Whether you're at home, at the office, or anywhere in the Magic Valley area, our fully-equipped mobile unit arrives ready to work. We supply our own power and water if needed.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3 text-neutral-400" />
                <h3 className="text-2xl font-bold tracking-tight">Ultimate Convenience</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                No more waiting in line at the car wash or arranging rides to and from a detail shop. You can continue your day uninterrupted while we restore your vehicle right in your driveway.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-6 h-6 mr-3 text-neutral-400" />
                <h3 className="text-2xl font-bold tracking-tight">Professional Reliability</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                We pride ourselves on showing up on time, communicating clearly, and delivering consistent, high-quality results. We use professional-grade products and proven techniques to ensure your vehicle is treated with the utmost care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
