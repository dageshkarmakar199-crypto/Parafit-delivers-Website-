import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../data/parafitData';

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-3 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
            SEAMLESS EXPERIENCE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]"
          >
            FROM PLAN
            <br />
            <span className="text-[#A3E635]">TO PLATE.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl font-normal"
          >
            Five clear, structured steps designed to make high-grade wellness an effortless daily routine.
          </motion.p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative">
          {/* Desktop Progressive Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="hidden lg:block absolute top-12 left-10 right-10 h-[1.5px] bg-gradient-to-r from-[#A3E635]/80 via-[#B8F53C]/40 to-white/10 z-0"
          />

          {/* Mobile Vertical Progressive Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="lg:hidden absolute top-8 bottom-8 left-8 w-[1.5px] bg-gradient-to-b from-[#A3E635]/80 via-[#B8F53C]/40 to-transparent z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#0F1116] border border-white/5 hover:border-[#A3E635]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_15px_35px_-10px_rgba(163,230,53,0.15)]"
              >
                <div>
                  {/* Step number badge with scale & glow effect */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      initial={{ scale: 0.85, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.12 }}
                      className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center font-display font-extrabold text-lg text-white group-hover:text-[#08090B] group-hover:bg-[#A3E635] group-hover:border-[#A3E635] transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]"
                    >
                      {step.number}
                    </motion.div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase group-hover:text-neutral-300 transition-colors">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-display mb-3 group-hover:text-[#A3E635] transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + idx * 0.12 }}
                    className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-4 group-hover:text-neutral-300 transition-colors"
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Sub-detail */}
                <div className="pt-4 border-t border-white/5 text-[11px] text-[#A3E635]/90 font-medium group-hover:text-[#A3E635] transition-colors">
                  {step.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

