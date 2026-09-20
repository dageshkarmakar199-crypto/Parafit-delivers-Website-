import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomeLoaderProps {
  onComplete: () => void;
}

export const WelcomeLoader: React.FC<WelcomeLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if already viewed in this session
    const hasViewed = sessionStorage.getItem('parafit_welcome_shown');
    if (hasViewed) {
      onComplete();
      return;
    }

    const duration = 1600; // ~1.6 seconds maximum
    const intervalTime = 16;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            sessionStorage.setItem('parafit_welcome_shown', 'true');
            setTimeout(onComplete, 450); // Allow exit transition
          }, 150);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="welcome-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#08090B] px-6 overflow-hidden select-none"
        >
          {/* Subtle background radial glow expanding with progress */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1.1], opacity: [0.15, 0.35, 0.25] }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#A3E635]/10 blur-[100px] pointer-events-none"
          />

          {/* Abstract subtle concentric arc */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.08, rotate: 180 }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
            className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-[#A3E635] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
            {/* PARAFIT DELIVERS wordmark reveal with subtle letter-spacing animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1 mb-8"
            >
              <motion.h1
                initial={{ letterSpacing: '0.28em', opacity: 0 }}
                animate={{ letterSpacing: '0.18em', opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display"
              >
                PARAFIT
              </motion.h1>
              <motion.h2
                initial={{ letterSpacing: '0.45em', opacity: 0 }}
                animate={{ letterSpacing: '0.35em', opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
                className="text-lg sm:text-xl md:text-2xl font-light text-[#A3E635] uppercase font-display"
              >
                DELIVERS
              </motion.h2>
            </motion.div>

            {/* Thin progress line from 0% to 100% */}
            <div className="w-48 sm:w-60 h-[1.5px] bg-white/10 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-[#A3E635] via-[#B8F53C] to-[#A3E635]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Micro-text */}
            <div className="flex items-center justify-between w-48 sm:w-60 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
              <span>NUTRITION. SIMPLIFIED.</span>
              <span className="text-[#A3E635] font-mono">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

