import { motion } from 'motion/react';
import { Check, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Services() {
  const packages = [
    {
      name: 'Exterior Detail',
      price: '$50',
      description: 'A meticulous hand wash and shine to restore your exterior finish.',
      features: [
        'Premium hand wash & dry',
        'Wheel & tire deep clean',
        'Tire shine application',
        'Clean exterior glass',
        'Spray wax finish'
      ],
      popular: false
    },
    {
      name: 'Full Detail',
      price: '$200',
      description: 'The complete refresh. Interior and exterior restoration in one package.',
      features: [
        'Everything in Exterior Detail',
        'Everything in Interior Detail',
        'Door jambs cleaned',
        'Trunk vacuumed',
        'Premium air freshener'
      ],
      popular: true
    },
    {
      name: 'Interior Detail',
      price: '$150',
      description: 'Deep clean and surface restoration for a fresh, like-new cabin.',
      features: [
        'Thorough vacuum (seats, mats, floor)',
        'Wipe down all hard surfaces',
        'UV protection on dash & doors',
        'Clean interior glass',
        'Leather clean & condition (if applicable)'
      ],
      popular: false
    }
  ];

  const addons = [
    { name: 'Pet Hair Removal', price: '$15+', desc: 'Extensive removal of embedded pet hair.' },
    { name: 'Headlight Restoration', price: '$70', desc: 'Restore clarity to cloudy or yellowed headlights.' },
    { name: 'Engine Bay Detail', price: '$40', desc: 'Degrease and dress engine bay components.' },
    { name: 'Odor Removal', price: '$50', desc: 'Ozone treatment to eliminate stubborn odors.' }
  ];

  return (
    <div className="flex flex-col w-full pt-10 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <motion.div {...fadeIn} className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Service Packages.</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Professional mobile detailing packages designed to restore and protect your vehicle. 
            We bring the shop to your driveway.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div 
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col border ${pkg.popular ? 'border-neutral-900 shadow-xl' : 'border-neutral-200'} bg-white p-8`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold tracking-tighter">{pkg.price}</span>
                  <span className="text-neutral-500 text-sm font-medium">starting at</span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed h-10">{pkg.description}</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-neutral-900 shrink-0" />
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to="/contact" 
                className={`w-full py-4 text-sm font-bold uppercase tracking-wider text-center transition-colors ${
                  pkg.popular 
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                    : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                Book {pkg.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-sm text-neutral-500">
          * Prices shown are starting rates for standard sedans. SUVs, Trucks, and heavily soiled vehicles may incur additional charges.
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Enhancements & Add-Ons.</h2>
            <p className="text-neutral-600">Customize your detail with these specialized services.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((addon, i) => (
              <motion.div 
                key={addon.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start p-6 bg-white border border-neutral-200"
              >
                <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center rounded-full mr-4 shrink-0">
                  <Plus className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-bold">{addon.name}</h4>
                    <span className="font-medium text-neutral-500">{addon.price}</span>
                  </div>
                  <p className="text-sm text-neutral-600">{addon.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
