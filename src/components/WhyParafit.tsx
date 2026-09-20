import React from 'react';
import { Sliders, Flame, UtensilsCrossed, MapPinCheckInside, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURES } from '../data/parafitData';

export const WhyParafit: React.FC<{ onOpenPlanModal: () => void }> = ({ onOpenPlanModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#A3E635]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#A3E635]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#A3E635]" />;
      case 'MapPinCheckInside':
        return <MapPinCheckInside className="w-6 h-6 text-[#A3E635]" />;
      default:
        return <Sliders className="w-6 h-6 text-[#A3E635]" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090B] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A3E635]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-20 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
              WHY PARAFIT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
              HEALTHY EATING.
              <br />
              <span className="text-neutral-400">WITHOUT THE HASSLE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            Eliminating the time-consuming friction of grocery shopping, macro calculating, prep work, and kitchen cleanup with precision nutrition.
          </p>
        </div>

        {/* 4 Feature Cards (NO IMAGES) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-7 sm:p-8 rounded-2xl bg-[#0F1116] border border-white/5 hover:border-[#A3E635]/40 transition-all duration-300 group flex flex-col justify-between min-h-[300px] shadow-lg hover:shadow-2xl hover:shadow-[#A3E635]/5"
            >
              {/* Header row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-widest text-neutral-500 group-hover:text-[#A3E635] transition-colors">
                    {feat.number}
                  </span>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-[#A3E635]/30 group-hover:bg-[#A3E635]/10 transition-all">
                    {getIcon(feat.icon)}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black tracking-wider text-white font-display uppercase group-hover:text-white transition-colors mb-3">
                  {feat.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>

              {/* Bottom decorative interaction line */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 group-hover:text-[#A3E635] transition-colors">
                <span className="text-[11px] uppercase tracking-wider font-semibold">Standard of Excellence</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
