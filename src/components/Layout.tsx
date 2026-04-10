import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> Magic Valley, ID</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Mon-Sat: 8am - 6pm</span>
          </div>
          <a href="tel:208-595-8238" className="flex items-center hover:text-white transition-colors">
            <Phone className="w-3 h-3 mr-1" /> (208) 595-8238
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.imgur.com/jmV1X7z.png" 
                alt="Hydroshine Detailing Logo" 
                className="h-16 md:h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold tracking-tighter uppercase">Hydroshine<span class="text-neutral-500">Detailing</span></span>';
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-neutral-500 ${
                    location.pathname === link.path ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-neutral-900 text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-neutral-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed inset-0 z-40 bg-white pt-20"
          >
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-bold uppercase tracking-tight ${
                    location.pathname === link.path ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-neutral-200">
                <a href="tel:208-595-8238" className="flex items-center text-lg font-medium mb-6">
                  <Phone className="w-5 h-5 mr-3" /> (208) 595-8238
                </a>
                <Link
                  to="/contact"
                  className="block w-full bg-neutral-900 text-white text-center px-6 py-4 text-sm font-medium uppercase tracking-wider"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Link to="/" className="block mb-4">
                <img 
                  src="https://i.imgur.com/jmV1X7z.png" 
                  alt="Hydroshine Detailing Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Professional mobile auto detailing in Magic Valley. We come to you to clean, restore, and protect your vehicle.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3 text-neutral-400 text-sm">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> <a href="tel:208-595-8238" className="hover:text-white transition-colors">(208) 595-8238</a></li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Magic Valley, ID</li>
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Mon-Sat: 8am - 6pm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-3 text-neutral-400 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Services & Packages</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Book an Appointment</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Hydroshine Detailing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-neutral-200 z-30">
        <Link
          to="/contact"
          className="block w-full bg-neutral-900 text-white text-center px-6 py-4 text-sm font-bold uppercase tracking-wider shadow-lg"
        >
          Schedule Your Detail
        </Link>
      </div>
      {/* Spacer for mobile sticky CTA */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}
