import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/parafitData';

interface HeaderProps {
  onOpenPlanModal: (planId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPlanModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'MEAL PLANS', href: '#meal-plans' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'MENU', href: '#food-options' },
    { label: 'DELIVERY', href: '#delivery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'LOCATION', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#08090B]/92 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
            aria-label="PARAFIT DELIVERS Home"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-[0.15em] text-white font-display uppercase leading-none group-hover:text-neutral-100 transition-colors">
                PARAFIT
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-[#A3E635] font-display uppercase leading-none mt-1 flex items-center gap-1">
                DELIVERS
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] inline-block animate-pulse" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-medium tracking-[0.15em] text-neutral-300 uppercase">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#A3E635] transition-colors py-1 cursor-pointer focus:outline-none focus:text-[#A3E635]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ y: -1, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              id="header-call-btn"
              className="px-3.5 py-2 text-xs font-medium tracking-wider text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer bg-white/[0.02]"
              title="Call ParaFit Delivers"
            >
              <Phone className="w-3.5 h-3.5 text-[#A3E635]" />
              <span>CALL</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -1, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.97 }}
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="px-3.5 py-2 text-xs font-medium tracking-wider text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer bg-white/[0.02]"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#A3E635]" />
              <span>WHATSAPP</span>
            </motion.a>

            <motion.button
              whileHover={{ y: -1, boxShadow: '0 8px 20px -3px rgba(163, 230, 53, 0.35)' }}
              whileTap={{ scale: 0.97 }}
              id="header-start-plan-btn"
              onClick={() => onOpenPlanModal()}
              className="px-5 py-2 text-xs font-bold tracking-widest text-[#08090B] bg-[#A3E635] hover:bg-[#b5f848] rounded-lg transition-all shadow-lg shadow-[#A3E635]/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>START YOUR PLAN</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Right Controls: Quick Call & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="p-2 text-neutral-300 hover:text-white bg-white/5 border border-white/10 rounded-lg"
              aria-label="Call ParaFit Delivers"
            >
              <Phone className="w-4 h-4 text-[#A3E635]" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-neutral-200 hover:text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Navigation Panel with smooth staggered enter & exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#08090B] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto md:hidden"
          >
            {/* Ambient visual gradient */}
            <div className="absolute top-10 right-0 w-64 h-64 bg-[#A3E635]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="text-[11px] font-semibold tracking-[0.25em] text-[#A3E635] uppercase">
                Navigation
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.035, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-2.5 text-xl font-bold font-display tracking-wider text-white hover:text-[#A3E635] border-b border-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-neutral-500 font-mono">0{idx + 1}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanModal();
                }}
                className="w-full py-3.5 text-sm font-bold tracking-widest text-[#08090B] bg-[#A3E635] hover:bg-[#b5f848] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#A3E635]/20"
              >
                <span>START YOUR PLAN</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="py-3 px-3 text-xs font-semibold tracking-wider text-white border border-white/15 bg-white/5 rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#A3E635]" />
                  <span>CALL</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 text-xs font-semibold tracking-wider text-white border border-white/15 bg-white/5 rounded-xl flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#A3E635]" />
                  <span>WHATSAPP</span>
                </a>
              </div>

              <div className="pt-3 text-center text-[11px] text-neutral-500">
                <span>Shop No. 1, DDA Mini Market, East of Kailash, New Delhi</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
