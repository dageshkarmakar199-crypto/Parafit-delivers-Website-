import React from 'react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/parafitData';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
            CLIENT FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            TRUSTED BY LEADERS.
            <br />
            <span className="text-[#A3E635]">PROVEN BY RESULTS.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto">
            Genuine experiences from working executives, doctors, and fitness enthusiasts across Delhi NCR who rely on ParaFit Delivers.
          </p>
        </div>

        {/* Testimonials Layout: Mobile horizontal snap / Desktop 3-column grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[85vw] sm:min-w-0 snap-center p-7 sm:p-8 rounded-2xl bg-[#0F1116] border border-white/5 hover:border-[#A3E635]/30 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[#A3E635]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#A3E635] text-[#A3E635]" />
                    ))}
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="text-[11px] font-mono tracking-wider text-[#A3E635] uppercase mb-3">
                  "{test.highlight}"
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mb-6">
                  "{test.content}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display uppercase flex items-center gap-1.5">
                    {test.name}
                    <span title="Verified Subscriber">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635]" />
                    </span>
                  </h4>
                  <p className="text-[11px] text-neutral-400">{test.role}</p>
                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5">{test.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
