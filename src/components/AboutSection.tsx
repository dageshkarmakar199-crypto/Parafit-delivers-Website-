import React from 'react';
import { Target, HeartPulse, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-story"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0B0F] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Editorial Typography & Brand Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
              THE PARAFIT PHILOSOPHY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05] mb-8"
            >
              NUTRITION
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-[#A3E635]">
                BUILT FOR REAL LIFE.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed"
            >
              <p>
                Eating healthy shouldn't require compromising your schedule or eating bland, uninspiring food. ParaFit was founded in New Delhi with a singular mission: bridge the divide between clinical nutrition and gourmet culinary excellence.
              </p>
              <p>
                Most fitness journeys fail not from a lack of willpower, but because consistency is inconvenient. When long workdays strike, measuring ingredients, preparing chicken breast, and balancing complex carbohydrates is the first thing that breaks.
              </p>
              <p className="text-[#A3E635] font-medium">
                We handle the dietician calculations, ingredient sourcing, artisanal cooking, and prompt doorstep delivery — giving you back your time and energy to focus on what matters most.
              </p>
            </motion.div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-white font-bold font-display text-sm uppercase mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#A3E635]" />
                  PRECISION
                </div>
                <p className="text-xs text-neutral-400">Exact macros calculated for individual biological targets.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-white font-bold font-display text-sm uppercase mb-1 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#A3E635]" />
                  INTEGRITY
                </div>
                <p className="text-xs text-neutral-400">Zero artificial additives, trans fats, or processed fillers.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-white font-bold font-display text-sm uppercase mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#A3E635]" />
                  CONVENIENCE
                </div>
                <p className="text-xs text-neutral-400">Punctual daily drop-offs that fit seamlessly into busy routines.</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Architectural Typographic Visual with Abstract Wellness Motion Graphics */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 sm:p-10 rounded-3xl bg-[#0F1217] border border-white/10 shadow-2xl overflow-hidden group hover:border-[#A3E635]/30 transition-all duration-500"
            >
              {/* Subtle ambient geometry & glowing caloric rings */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-10 -right-10 w-64 h-64 bg-[#A3E635]/15 rounded-full blur-3xl pointer-events-none"
              />

              {/* Minimal wireframe orbit ring SVG */}
              <svg className="absolute -top-12 -right-12 w-64 h-64 text-[#A3E635]/10 pointer-events-none" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="0.75" fill="none" />
                {/* Floating nutrient molecule dot */}
                <motion.circle
                  cx="100"
                  cy="30"
                  r="3.5"
                  fill="#A3E635"
                  animate={{
                    cx: [100, 170, 100, 30, 100],
                    cy: [30, 100, 170, 100, 30],
                  }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                />
              </svg>

              <div className="space-y-6 relative z-10">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
                    DELHI NCR BASE OF OPERATIONS
                  </span>
                  <div className="text-xl font-black font-display text-white uppercase">
                    EAST OF KAILASH
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-display">
                      Customized Nutrition
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      Every subscriber receives nutrition calibrated to their height, weight, activity levels, and body goals.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-display">
                      Fresh Meals
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      Prepared twice daily in small artisanal batches to maximize nutritional vitality and taste.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-display">
                      Consistency & Convenience
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      A steady routine you never have to second-guess, week in and week out.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>CULINARY HEALTH STANDARDS</span>
                  <span className="text-[#A3E635]">100% FRESH</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
