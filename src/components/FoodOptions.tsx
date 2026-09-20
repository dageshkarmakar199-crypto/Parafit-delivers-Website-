import React, { useState } from 'react';
import { Sparkles, Utensils, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FOOD_MENU_ITEMS } from '../data/parafitData';
import { FoodItem } from '../types';

export const FoodOptions: React.FC<{ onOpenPlanModal: () => void }> = ({ onOpenPlanModal }) => {
  const categories: FoodItem['category'][] = [
    'INDIAN',
    'CONTINENTAL',
    'HIGH PROTEIN',
    'VEGETARIAN',
    'LOW CALORIE',
    'SNACKS',
  ];

  const [activeCategory, setActiveCategory] = useState<FoodItem['category']>('INDIAN');

  const filteredItems = FOOD_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="food-options"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0B0E] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-3 flex items-center gap-2">
              <Utensils className="w-3.5 h-3.5 text-[#A3E635]" />
              TEXT-BASED CULINARY CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
              PRECISION NUTRITION.
              <br />
              <span className="text-[#A3E635]">CHEF CRAFTED.</span>
            </h2>
          </div>
          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              Every dish is freshly prepared with macro-verified nutrients, cold-pressed oils, and premium quality lean proteins & grains.
            </p>
          </div>
        </div>

        {/* Category Filter Pills (Mobile scrollable horizontal bar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar sm:flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#A3E635] text-[#08090B] shadow-lg shadow-[#A3E635]/25 font-extrabold'
                    : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Text-Based Food Discovery Grid (NO PHOTOS!) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#0F1217] border border-white/5 hover:border-[#A3E635]/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)]"
              >
                <div>
                  {/* Top Bar: Dietary Tag & Calories */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 ${
                          item.dietary === 'veg'
                            ? 'border-emerald-500'
                            : 'border-amber-600'
                        }`}
                        title={item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.dietary === 'veg' ? 'bg-emerald-500' : 'bg-amber-600'
                          }`}
                        />
                      </span>
                      <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5 text-xs font-semibold text-neutral-200 group-hover:border-[#A3E635]/25 transition-colors">
                      <Flame className="w-3 h-3 text-[#A3E635]" />
                      <span className="font-mono text-white group-hover:text-[#A3E635] transition-colors">{item.calories}</span>
                      <span className="text-[10px] text-neutral-400">kcal</span>
                    </div>
                  </div>

                  {/* Food Name */}
                  <h3 className="text-base sm:text-lg font-bold tracking-wide text-white uppercase font-display mb-2 group-hover:text-[#A3E635] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Culinary Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Macro Profile Strip & Tags */}
                <div>
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-[#0B0D11] border border-white/5 mb-4 text-center group-hover:border-white/10 transition-colors">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                        PROTEIN
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 group-hover:text-[#A3E635] transition-colors">
                        {item.protein}
                      </div>
                    </div>
                    <div className="border-x border-white/5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                        CARBS
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 group-hover:text-white transition-colors">
                        {item.carbs}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                        HEALTHY FATS
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 group-hover:text-white transition-colors">
                        {item.fats}
                      </div>
                    </div>
                  </div>

                  {/* Tags with soft hover glow */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-wide text-neutral-400 bg-white/[0.02] border border-white/5 hover:border-[#A3E635]/40 hover:text-[#A3E635] hover:shadow-[0_0_12px_rgba(163,230,53,0.2)] px-2 py-0.5 rounded-md transition-all duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Customization Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0F1116] border border-[#A3E635]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#A3E635] uppercase mb-1">
              HAVE SPECIFIC DIETARY ALLERGIES OR TARGET MACROS?
            </div>
            <p className="text-xs sm:text-sm text-neutral-300">
              Our nutrition team customizes ingredient ratios, grain choices, and protein volumes for every individual subscriber.
            </p>
          </div>
          <button
            onClick={onOpenPlanModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#A3E635] text-white hover:text-[#08090B] border border-white/15 hover:border-[#A3E635] text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
          >
            CUSTOMIZE YOUR MENU →
          </button>
        </div>
      </div>
    </section>
  );
};
