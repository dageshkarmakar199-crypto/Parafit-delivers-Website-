import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { VERIFIED_STATS } from '../data/parafitData';

const CounterValue: React.FC<{ value: string; isInView: boolean }> = ({ value, isInView }) => {
  // Extract number and suffix, e.g. "100%", "2x", "7 Days", "3-Tier"
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === null) return;

    const duration = 1400; // 1.4s smooth counter
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(targetNumber * eased);
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCurrent(targetNumber);
      }
    };

    const animId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animId);
  }, [isInView, targetNumber]);

  if (targetNumber === null) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {isInView ? current : 0}
      {suffix}
    </span>
  );
};

export const StatisticsStrip: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="relative z-20 py-8 sm:py-12 border-y border-white/10 bg-[#0C0E12] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {VERIFIED_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#A3E635]/30 transition-all duration-300 group flex flex-col justify-between cursor-default"
            >
              {/* Subtle top indicator bar with width animation */}
              <motion.div
                initial={{ width: '12px' }}
                animate={isInView ? { width: '32px' } : { width: '12px' }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                className="h-0.5 bg-neutral-700 group-hover:bg-[#A3E635] transition-colors mb-3"
              />

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display group-hover:text-[#A3E635] transition-colors">
                  <CounterValue value={stat.value} isInView={isInView} />
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-wider text-neutral-200 uppercase mt-2 font-display">
                  {stat.label}
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-neutral-400 mt-2.5 font-normal leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

