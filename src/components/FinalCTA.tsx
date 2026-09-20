import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const FinalCTA: React.FC<{ onOpenPlanModal: () => void }> = ({ onOpenPlanModal }) => {
  return (
    <section
      id="final-cta"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[#08090B] overflow-hidden text-center"
    >
      {/* Slowly breathing radial glow behind it */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#A3E635]/12 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Abstract geometric hairline concentric circles with gentle rotation */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] text-white/[0.025] pointer-events-none"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" />
        <circle cx="500" cy="500" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </motion.svg>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
          COMMENCE YOUR TRANSFORMATION
        </motion.div>

        {/* High-Contrast Reveal Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-display leading-[0.95] mb-8"
        >
          YOUR HEALTHY
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-[#A3E635]">
            ROUTINE STARTS HERE.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed mb-10 px-4"
        >
          Eliminate meal prep stress. Receive macro-exact, chef-prepared nutrition delivered fresh to your doorstep across Delhi NCR.
        </motion.p>

        {/* Button with Continuous Subtle Pulse & Shine Effect */}
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              '0 15px 35px -5px rgba(163, 230, 53, 0.25)',
              '0 15px 45px -5px rgba(163, 230, 53, 0.45)',
              '0 15px 35px -5px rgba(163, 230, 53, 0.25)',
            ],
          }}
          transition={{
            boxShadow: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          id="final-cta-start-btn"
          onClick={onOpenPlanModal}
          className="relative overflow-hidden px-10 py-5 text-sm sm:text-base font-bold tracking-widest text-[#08090B] bg-[#A3E635] hover:bg-[#b5f848] rounded-2xl transition-colors flex items-center justify-center gap-3 group cursor-pointer"
        >
          {/* Subtle continuous ambient shine sweep */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
          />
          <span className="relative z-10">START YOUR PLAN</span>
          <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </motion.button>
      </div>
    </section>
  );
};

