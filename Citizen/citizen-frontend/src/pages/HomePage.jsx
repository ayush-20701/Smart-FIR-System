import { useState, useEffect } from 'react';
import { Moon, Sun, ChevronLeft, ChevronRight, User } from 'lucide-react';
import slides from '../components/Slides';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleFileFIR = () => {
    if (isLoggedIn) {
      // Redirect to FIR form page
      alert('Redirecting to FIR Form...');
      // window.location.href = '/fir-form'; 
    } else {
      // Redirect to login/signup page
      alert('Please login or signup to file an FIR');
      // window.location.href = '/login'; 
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleFormSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your report. We will review it shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const bgColor = darkMode ? 'bg-[#1D1E2C]' : 'bg-[#FFFFFF]';
  const textColor = darkMode ? 'text-[#D7CDCC]' : 'text-[#1D1E2C]';
  const headerBg = darkMode ? 'bg-[#1D1E2C]/95' : 'bg-[#FFFFFF]/95';
  const cardBg = darkMode ? 'bg-[#59656F]/20' : 'bg-[#D7CDCC]/30';
  const accentColor = '#9C528B';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${headerBg} backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b ${darkMode ? 'border-[#59656F]/30' : 'border-[#D7CDCC]/50'}`}>
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9C528B] to-[#59656F] flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold">Smart FIR</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleFileFIR}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#9C528B] to-[#59656F] hover:from-[#9C528B]/90 hover:to-[#59656F]/90 text-white font-semibold transition-all duration-300 shadow-lg"
            >
              File FIR
            </button>
            {isLoggedIn ? (
              <button className={`p-3 rounded-xl ${darkMode ? 'bg-[#59656F]/50 hover:bg-[#59656F]' : 'bg-[#D7CDCC]/50 hover:bg-[#D7CDCC]'} transition-all duration-300`}>
                <User size={20} />
              </button>
            ) : (
              <button className={`px-6 py-2 rounded-xl ${darkMode ? 'bg-[#59656F]/50 hover:bg-[#59656F]' : 'bg-[#D7CDCC]/50 hover:bg-[#D7CDCC]'} transition-all duration-300`}>
                Login
              </button>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl ${darkMode ? 'bg-[#59656F]/50' : 'bg-[#D7CDCC]/50'} transition-all duration-300`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Dark Mode Toggle & Profile/Login */}
          <div className="flex items-center space-x-2 md:hidden">
            {isLoggedIn && (
              <button className={`p-2 rounded-xl ${darkMode ? 'bg-[#59656F]/50 hover:bg-[#59656F]' : 'bg-[#D7CDCC]/50 hover:bg-[#D7CDCC]'} transition-all duration-300`}>
                <User size={20} />
              </button>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl ${darkMode ? 'bg-[#59656F]/50' : 'bg-[#D7CDCC]/50'} transition-all duration-300`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Carousel */}
            <div className="relative h-[500px] md:h-[600px]">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-[#D7CDCC] max-w-2xl mb-6">
                      {slide.tagline}
                    </p>
                    {/* Mobile CTA Button */}
                    <button
                      onClick={handleFileFIR}
                      className="md:hidden px-8 py-3 rounded-xl bg-gradient-to-r from-[#9C528B] to-[#59656F] hover:from-[#9C528B]/90 hover:to-[#59656F]/90 text-white font-bold text-lg shadow-2xl transition-all duration-300"
                    >
                      {isLoggedIn ? 'File New FIR' : 'Sign In'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-[#9C528B] w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className={`${cardBg} backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: accentColor }}>
              About Smart FIR System
            </h2>
            <p className={`text-lg ${darkMode ? 'text-[#D7CDCC]' : 'text-[#59656F]'} leading-relaxed`}>
              The AI-Powered Smart FIR & Crime Analytics System revolutionizes the way citizens interact with law enforcement. Our platform simplifies and digitalizes the FIR filing process, making it accessible to everyone, everywhere. By leveraging advanced artificial intelligence and machine learning algorithms, we ensure that every report is accurately categorized, prioritized, and processed efficiently. Our mission is to create a transparent, secure, and user-friendly ecosystem that bridges the gap between citizens and law enforcement agencies, ultimately contributing to a safer society.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-[#59656F]/20' : 'bg-[#D7CDCC]/30'} py-12 px-4 mt-16`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Developer Credits */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: accentColor }}>
                Development Team
              </h3>
              <p className={`${darkMode ? 'text-[#D7CDCC]' : 'text-[#59656F]'} mb-2`}>
                Lead Developer: Rahul Kumar
              </p>
              <p className={`${darkMode ? 'text-[#D7CDCC]' : 'text-[#59656F]'} mb-2`}>
                UI/UX Designer: Priya Sharma
              </p>
              <p className={`${darkMode ? 'text-[#D7CDCC]' : 'text-[#59656F]'} mb-2`}>
                AI Engineer: Amit Patel
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: accentColor }}>
                Report Issues
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl ${
                    darkMode ? 'bg-[#1D1E2C] text-[#D7CDCC]' : 'bg-white text-[#1D1E2C]'
                  } border ${darkMode ? 'border-[#59656F]' : 'border-[#D7CDCC]'} focus:outline-none focus:border-[#9C528B] transition-colors`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl ${
                    darkMode ? 'bg-[#1D1E2C] text-[#D7CDCC]' : 'bg-white text-[#1D1E2C]'
                  } border ${darkMode ? 'border-[#59656F]' : 'border-[#D7CDCC]'} focus:outline-none focus:border-[#9C528B] transition-colors`}
                />
                <textarea
                  placeholder="Describe the issue..."
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl ${
                    darkMode ? 'bg-[#1D1E2C] text-[#D7CDCC]' : 'bg-white text-[#1D1E2C]'
                  } border ${darkMode ? 'border-[#59656F]' : 'border-[#D7CDCC]'} focus:outline-none focus:border-[#9C528B] transition-colors resize-none`}
                />
                <button
                  onClick={handleFormSubmit}
                  className="w-full px-6 py-3 rounded-xl bg-[#9C528B] hover:bg-[#9C528B]/80 text-white font-semibold transition-all duration-300"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 pt-8 border-t ${darkMode ? 'border-[#59656F]/30' : 'border-[#D7CDCC]/50'}`}>
            <p className={`${darkMode ? 'text-[#D7CDCC]/70' : 'text-[#59656F]/70'}`}>
              © 2025 Smart FIR System. All rights reserved. Built with ❤️ for a safer tomorrow.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}