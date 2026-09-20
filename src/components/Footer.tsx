import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/parafitData';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const policyContent: Record<string, { title: string; content: string[] }> = {
    privacy: {
      title: 'Privacy Policy',
      content: [
        'At ParaFit Delivers, we hold client confidentiality and dietary privacy to the highest standard.',
        'We collect contact information (name, telephone number, delivery address) and dietary details (caloric requirements, allergies, meal choices) solely to fulfill meal customization and prompt logistics.',
        'Your personal details and nutritional metrics are never sold, traded, or shared with unauthorized third-party commercial marketing entities.',
        'All online transaction data is secured via standard SSL and banking-grade encryption protocols through our authorized payment processors.'
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      content: [
        'All subscription orders placed with ParaFit Delivers are customized to the client’s designated health requirements and delivery specifications.',
        'Daily meal plans are dispatched in our standard morning and evening delivery windows. Clients must ensure recipient accessibility at the designated drop-off address.',
        'Address alterations or meal delivery adjustments require at least 12 hours advance notification to our customer support team via WhatsApp or telephone.',
        'ParaFit Delivers prepares meals adhering to strict sanitary culinary standards; clients are responsible for informing our dietician team of any clinical allergies before commencing.'
      ]
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      content: [
        'Because all meals are cooked fresh to order with perishable organic ingredients, daily dispatched meals cannot be refunded once culinary production begins.',
        'Subscriptions can be paused at any time with 24 hours advance notice. Unused meal credits remain banked in your account for future fulfillment.',
        'In the rare event of a service disruption or logistics delay caused by severe weather or external disruption, replacement meals or account credits will be promptly issued.',
        'Refund requests for uninitiated subscription cycles will be processed via original payment methods within 5 to 7 business days.'
      ]
    }
  };

  return (
    <>
      <motion.footer
        id="main-footer"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#060709] text-neutral-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/5">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[0.15em] text-white font-display uppercase leading-none">
                  PARAFIT
                </span>
                <span className="text-xs font-semibold tracking-[0.35em] text-[#A3E635] font-display uppercase leading-none mt-1">
                  DELIVERS
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-normal">
                Ultra-premium customized nutrition and fresh daily meal delivery service in Delhi NCR. Designed for high-performance living.
              </p>

              <div className="pt-2 text-xs text-neutral-400 font-mono space-y-1">
                <p>East of Kailash, New Delhi 110065</p>
                <p>Monday – Sunday: 9:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <div className="text-[11px] font-mono tracking-widest text-white uppercase font-bold mb-4">
                EXPLORE
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#hero" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    About & Philosophy
                  </a>
                </li>
                <li>
                  <a href="#meal-plans" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    Meal Plans & Pricing
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#food-options" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    Curated Menu
                  </a>
                </li>
                <li>
                  <a href="#delivery" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    Delivery Logistics
                  </a>
                </li>
              </ul>
            </div>

            {/* Support & Contacts */}
            <div>
              <div className="text-[11px] font-mono tracking-widest text-white uppercase font-bold mb-4">
                ASSISTANCE
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#faq" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    Find Our Kitchen Hub
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#A3E635] hover:translate-x-1 transition-all duration-200 inline-block">
                    Consult a Nutritionist
                  </a>
                </li>
                <li>
                  <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#A3E635] hover:underline font-mono inline-block">
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <div className="text-[11px] font-mono tracking-widest text-white uppercase font-bold mb-4">
                COMPLIANCE
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    onClick={() => setActivePolicy('privacy')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 text-left cursor-pointer inline-block"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('terms')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 text-left cursor-pointer inline-block"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('refund')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 text-left cursor-pointer inline-block"
                  >
                    Refund & Cancellation
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
            <p>© {new Date().getFullYear()} PARAFIT DELIVERS. All rights reserved.</p>
            <p className="font-mono text-neutral-400">
              DELHI NCR • FRESH MEAL DELIVERY SERVICE
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Policy Modal */}
      <AnimatePresence>
        {activePolicy && policyContent[activePolicy] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111317] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setActivePolicy(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold font-display uppercase text-white mb-4">
                {policyContent[activePolicy].title}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                {policyContent[activePolicy].content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActivePolicy(null)}
                  className="px-5 py-2 rounded-xl bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
