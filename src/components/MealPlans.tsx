import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { MEAL_PLANS } from '../data/parafitData';
import { MealPlan } from '../types';

interface MealPlansProps {
  onSelectPlan: (plan: MealPlan) => void;
}

export const MealPlans: React.FC<MealPlansProps> = ({ onSelectPlan }) => {
  return (
    <section
      id="meal-plans"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0B0F] overflow-hidden"
    >
      {/* Ambient lighting effect */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#A3E635]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
            CHOOSE YOUR PLAN
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]"
          >
            YOUR GOALS.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-[#A3E635]">
              YOUR PLAN.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto"
          >
            Transparent pricing and dietitian-supervised programs crafted to give you total control over your health transformation.
          </motion.p>
        </div>

        {/* 3 Verified Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {MEAL_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.99 }}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group cursor-pointer ${
                plan.featured
                  ? 'bg-[#101318] border-2 border-[#A3E635]/60 shadow-2xl shadow-[#A3E635]/10 hover:border-[#A3E635] hover:shadow-[0_20px_50px_-10px_rgba(163,230,53,0.25)]'
                  : 'bg-[#0E1015] border border-white/10 hover:border-white/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]'
              }`}
            >
              {/* Top Section */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                    {plan.duration}
                  </span>
                  {plan.featured && (
                    <span className="text-[10px] font-bold tracking-widest text-[#A3E635] uppercase px-2.5 py-1 rounded bg-[#A3E635]/10 border border-[#A3E635]/30">
                      FLAGSHIP
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-black tracking-wider text-white uppercase font-display leading-snug mb-3 transition-transform duration-300 group-hover:translate-x-1">
                  {plan.name}
                </h3>

                <p className="text-xs text-neutral-400 font-normal mb-6 min-h-[36px]">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight group-hover:text-[#A3E635] transition-all duration-300 group-hover:translate-x-1">
                    {plan.price}
                  </div>
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mt-1">
                    All inclusive • Daily delivery
                  </span>
                </div>

                {/* Plan Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Includes:
                  </div>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <div className="p-0.5 rounded-full bg-[#A3E635]/10 text-[#A3E635] shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#A3E635]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3.5 px-5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.featured
                    ? 'bg-[#A3E635] text-[#08090B] hover:bg-[#b8f53c] shadow-lg shadow-[#A3E635]/20 group-hover:shadow-[#A3E635]/35'
                    : 'bg-white/[0.04] text-white hover:bg-white/[0.09] border border-white/15 hover:border-white/30'
                }`}
              >
                <span>{plan.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
