import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/parafitData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0B0F] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#A3E635]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            EVERYTHING YOU
            <br />
            <span className="text-[#A3E635]">NEED TO KNOW.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-lg mx-auto">
            Clear, transparent answers about our meal preparation, customization, delivery coverage, and billing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0F1116] border border-white/5 overflow-hidden transition-colors hover:border-white/15"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold font-display uppercase tracking-wide transition-colors ${
                    isOpen ? 'text-[#A3E635]' : 'text-white group-hover:text-neutral-200'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isOpen ? 'bg-[#A3E635]/15 text-[#A3E635]' : 'bg-white/[0.04] text-neutral-400 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                        className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed border-t border-white/5"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
