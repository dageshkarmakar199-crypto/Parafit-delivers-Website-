import React from 'react';
import { Clock, ShieldCheck, Truck, ThermometerSnowflake, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/parafitData';

export const DeliveryExperience: React.FC = () => {
  return (
    <section
      id="delivery"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-3 flex items-center justify-center gap-2">
            <Truck className="w-3.5 h-3.5 text-[#A3E635]" />
            LOGISTICS & FRESHNESS PROTOCOL
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            FRESHLY PREPARED.
            <br />
            <span className="text-[#A3E635]">DELIVERED DAILY.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto">
            From our central commercial kitchen in East of Kailash straight to your doorstep in insulated, temperature-controlled packs.
          </p>
        </div>

        {/* Animated Vector Route Illustration (NO MAP SCREENSHOT / NO IMAGES) */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-[#0F1116] border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Subtle architectural grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Hub Information */}
            <div className="w-full lg:w-1/3 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A3E635]/10 border border-[#A3E635]/30 text-xs font-bold text-[#A3E635] uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5" />
                CENTRAL DISPATCH HUB
              </div>
              <h3 className="text-2xl font-black font-display text-white uppercase">
                EAST OF KAILASH, NEW DELHI
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                All meals are prepared within 90 minutes of dispatch in certified hygienic kitchen conditions, hermetically sealed, and placed into insulated thermal transit carriers.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pt-2">
                <span>COORD: 28.5515° N, 77.2407° E</span>
              </div>
            </div>

            {/* Central Animated Route Line SVG */}
            <div className="w-full lg:w-2/3 h-52 sm:h-64 relative flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 600 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background gridlines */}
                <path d="M50 100 H550" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                <path d="M50 50 H550" stroke="rgba(255,255,255,0.03)" />
                <path d="M50 150 H550" stroke="rgba(255,255,255,0.03)" />

                {/* Branching Delivery Vectors */}
                <path
                  d="M100 100 C 180 100, 220 50, 320 50 C 400 50, 440 60, 500 60"
                  stroke="rgba(163, 230, 53, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M100 100 C 180 100, 220 150, 320 150 C 420 150, 450 140, 500 140"
                  stroke="rgba(163, 230, 53, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M100 100 L 500 100"
                  stroke="#A3E635"
                  strokeWidth="2.5"
                />

                {/* Animated traveling light pulse along main route */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="5"
                  fill="#A3E635"
                  animate={{
                    cx: [100, 500],
                    opacity: [0, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Kitchen Origin Node */}
                <g>
                  <circle cx="100" cy="100" r="16" fill="#11141A" stroke="#A3E635" strokeWidth="2" />
                  <circle cx="100" cy="100" r="6" fill="#A3E635" className="animate-ping" />
                  <circle cx="100" cy="100" r="6" fill="#A3E635" />
                  <text x="100" y="135" textAnchor="middle" fill="#A3E635" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1px">
                    KITCHEN HUB
                  </text>
                </g>

                {/* Sector 1: South Delhi */}
                <g>
                  <circle cx="300" cy="50" r="10" fill="#11141A" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <circle cx="300" cy="50" r="4" fill="#A3E635" />
                  <text x="300" y="32" textAnchor="middle" fill="#E2E8F0" fontSize="9" fontFamily="sans-serif" fontWeight="600">
                    SOUTH DELHI
                  </text>
                </g>

                {/* Sector 2: Central Delhi */}
                <g>
                  <circle cx="340" cy="100" r="10" fill="#11141A" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <circle cx="340" cy="100" r="4" fill="#A3E635" />
                  <text x="340" y="82" textAnchor="middle" fill="#E2E8F0" fontSize="9" fontFamily="sans-serif" fontWeight="600">
                    CENTRAL DELHI
                  </text>
                </g>

                {/* Sector 3: Gurugram */}
                <g>
                  <circle cx="500" cy="60" r="12" fill="#11141A" stroke="#A3E635" strokeWidth="1.5" />
                  <circle cx="500" cy="60" r="4" fill="#A3E635" />
                  <text x="500" y="40" textAnchor="middle" fill="#A3E635" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                    GURUGRAM
                  </text>
                </g>

                {/* Sector 4: Noida Belt */}
                <g>
                  <circle cx="500" cy="140" r="12" fill="#11141A" stroke="#A3E635" strokeWidth="1.5" />
                  <circle cx="500" cy="140" r="4" fill="#A3E635" />
                  <text x="500" y="165" textAnchor="middle" fill="#A3E635" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                    NOIDA NCR
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* 4 Delivery Standard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/5">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 w-fit mb-4 text-[#A3E635]">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display uppercase text-white mb-2">
              Morning Dispatch
            </h4>
            <p className="text-xs font-mono text-[#A3E635] mb-2">{BUSINESS_INFO.deliverySlots.morning}</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Ideal for fresh breakfast and packed office lunch delivered directly to your home before the workday begins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/5">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 w-fit mb-4 text-[#A3E635]">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display uppercase text-white mb-2">
              Evening Dispatch
            </h4>
            <p className="text-xs font-mono text-[#A3E635] mb-2">{BUSINESS_INFO.deliverySlots.evening}</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Freshly cooked evening dinner delivery so you arrive home to wholesome, warm, gourmet nutrition.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/5">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 w-fit mb-4 text-[#A3E635]">
              <ThermometerSnowflake className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display uppercase text-white mb-2">
              Thermal Preservation
            </h4>
            <p className="text-xs font-mono text-neutral-300 mb-2">Food-Grade Insulated</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Tamper-proof vacuum sealing and eco-friendly thermal barrier lining maintain optimal hygiene and freshness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/5">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 w-fit mb-4 text-[#A3E635]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display uppercase text-white mb-2">
              Zero Chemical Freeze
            </h4>
            <p className="text-xs font-mono text-neutral-300 mb-2">Cooked Same Day</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Unlike supermarket ready-meals, we never freeze batches or rely on artificial additives or stabilizers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
