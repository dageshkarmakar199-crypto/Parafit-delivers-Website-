import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onOpenPlanModal: () => void;
  onExplorePlans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlanModal, onExplorePlans }) => {
  const { scrollY } = useScroll();
  // Subtle parallax for abstract decorative elements (10-25px max, never aggressive)
  const bgParallax1 = useTransform(scrollY, [0, 800], [0, -25]);
  const bgParallax2 = useTransform(scrollY, [0, 800], [0, 20]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08090B]"
    >
      {/* Abstract Architectural SVG Geometry & Ambient Radial Motion Lighting (NO IMAGES) */}
      <motion.div
        style={{ y: bgParallax1 }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0"
      >
        {/* Soft slow-floating gradient blobs */}
        <motion.div
          animate={{
            x: [0, 28, -20, 0],
            y: [0, -30, 18, 0],
            scale: [1, 1.08, 0.94, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[320px] sm:w-[580px] md:w-[780px] h-[320px] sm:h-[580px] md:h-[780px] rounded-full bg-gradient-to-tr from-[#A3E635]/10 via-[#B8F53C]/5 to-transparent blur-[140px] -top-12 sm:top-1/5"
        />

        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 25, -22, 0],
            scale: [1, 0.92, 1.06, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] rounded-full bg-[#1A2510]/30 blur-[120px] bottom-10 -right-10"
        />

        {/* Slowly rotating concentric circular rings */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 95, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[650px] sm:w-[950px] lg:w-[1250px] h-[650px] sm:h-[950px] lg:h-[1250px] text-white/[0.035]"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="500" r="480" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="380" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="260" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="500" y1="20" x2="500" y2="980" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 10" />
          <line x1="20" y1="500" x2="980" y2="500" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 10" />
        </motion.svg>

        {/* Counter-rotating subtle orbital ring with particle nodes */}
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 130, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] sm:w-[750px] lg:w-[950px] h-[500px] sm:h-[750px] lg:h-[950px] text-[#A3E635]/[0.05]"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="340" stroke="currentColor" strokeWidth="1" strokeDasharray="1 8" />
          <circle cx="400" cy="60" r="3.5" fill="#A3E635" fillOpacity="0.4" />
          <circle cx="740" cy="400" r="3" fill="#A3E635" fillOpacity="0.3" />
          <circle cx="400" cy="740" r="2.5" fill="#A3E635" fillOpacity="0.3" />
          <circle cx="60" cy="400" r="3.5" fill="#A3E635" fillOpacity="0.4" />
        </motion.svg>

        {/* Small floating geometric particles */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#A3E635]"
        />
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-[#A3E635]/40"
        />
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-white/40"
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: bgParallax2 }}
        className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center"
      >
        {/* Step 1: Eyebrow Label Fades In */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#A3E635] uppercase mb-6 sm:mb-8"
        >
          <Sparkles className="w-3 h-3 text-[#A3E635] animate-pulse" />
          <span>PREMIUM NUTRITION • FRESH MEALS • DAILY DELIVERY</span>
        </motion.div>

        {/* Step 2: Main Headline Reveals Line-by-Line with Highlight Word Subtle Glow */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white uppercase font-display leading-[0.92] mb-6 sm:mb-8 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            EAT SMART.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="block mt-1"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 20px rgba(163,230,53,0.15)',
                  '0 0 35px rgba(163,230,53,0.35)',
                  '0 0 20px rgba(163,230,53,0.15)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.2,
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B8F53C] to-[#A3E635] inline-block"
            >
              LIVE BETTER.
            </motion.span>
          </motion.span>
        </h1>

        {/* Step 4: Description Fades Upward */}
        <motion.p
          initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-8 sm:mb-10 px-2"
        >
          Customized nutrition and freshly prepared meals, designed around your goals and delivered to your doorstep.
        </motion.p>

        {/* Step 5: CTA Buttons Reveal with Premium Micro-Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 mb-10 sm:mb-12"
        >
          <motion.button
            id="hero-primary-cta"
            onClick={onOpenPlanModal}
            whileHover={{ y: -2, boxShadow: '0 12px 30px -5px rgba(163, 230, 53, 0.35)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-widest text-[#08090B] bg-[#A3E635] hover:bg-[#b5f848] rounded-xl transition-colors shadow-lg shadow-[#A3E635]/20 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>START YOUR PLAN</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            id="hero-secondary-cta"
            onClick={onExplorePlans}
            whileHover={{ y: -2, backgroundColor: 'rgba(255, 255, 255, 0.07)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-widest text-neutral-200 hover:text-white bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
          >
            <span>EXPLORE MEAL PLANS</span>
          </motion.button>
        </motion.div>

        {/* Step 6: Trust Indicators Appear */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase pt-2 border-t border-white/5 max-w-lg w-full"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A3E635]" />
            FRESHLY PREPARED
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            CUSTOMIZED
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            DELIVERED DAILY
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with smooth loop */}
      <motion.button
        onClick={onExplorePlans}
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.3, duration: 0.6 }, y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' } }}
        className="absolute bottom-5 sm:bottom-8 z-10 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

