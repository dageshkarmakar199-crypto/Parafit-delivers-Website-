import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/parafitData';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-3 flex items-center justify-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5 text-[#A3E635]" />
            FLAGSHIP KITCHEN & PICKUP LOCATION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]"
          >
            FIND US IN
            <br />
            <span className="text-[#A3E635]">EAST OF KAILASH.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-lg mx-auto"
          >
            Conveniently situated in South Delhi. Visit our operational facility or connect with our nutrition specialists directly.
          </motion.p>
        </div>

        {/* Location Grid: Details on Left + Embedded Google Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-7 sm:p-10 rounded-3xl bg-[#0F1116] border border-white/10 flex flex-col justify-between shadow-2xl hover:border-white/20 transition-all"
          >
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3E635]">
                  OFFICIAL BUSINESS HUB
                </span>
                <h3 className="text-2xl font-black font-display text-white uppercase mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Address details */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-start gap-3 text-sm text-neutral-300">
                  <MapPin className="w-5 h-5 text-[#A3E635] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{BUSINESS_INFO.address.line1}</p>
                    <p>{BUSINESS_INFO.address.locality}</p>
                    <p>
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{' '}
                      {BUSINESS_INFO.address.pincode}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">{BUSINESS_INFO.address.country}</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                <Clock className="w-4 h-4 text-[#A3E635] shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase tracking-wider">Kitchen & Service Hours</div>
                  <div className="text-neutral-400 font-mono mt-0.5">{BUSINESS_INFO.hours}</div>
                </div>
              </div>

              {/* Phone info */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                <Phone className="w-4 h-4 text-[#A3E635] shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase tracking-wider">Direct Hotline</div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-[#A3E635] font-mono hover:underline font-bold text-sm"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions-btn"
                className="w-full py-3 px-4 rounded-xl bg-[#A3E635] text-[#08090B] font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#b5f848] transition-all shadow-lg shadow-[#A3E635]/20 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  id="location-call-btn"
                  className="py-3 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A3E635]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-whatsapp-btn"
                  className="py-3 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A3E635]" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Google Maps Embed with blur-to-sharp reveal and glowing border */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 25 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-[380px] sm:h-[480px] lg:h-auto rounded-3xl overflow-hidden border border-white/10 hover:border-[#A3E635]/50 transition-all duration-500 relative shadow-2xl bg-[#0F1116] group hover:shadow-[0_0_35px_rgba(163,230,53,0.15)]"
          >
            <iframe
              title="ParaFit Delivers Google Maps Location"
              src="https://maps.google.com/maps?q=Shop+No.+1,+DDA+Mini+Market,+Block+E,+East+of+Kailash,+New+Delhi,+Delhi+110065&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale invert contrast-125 opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Corner Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#08090B]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 pointer-events-none flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-ping" />
              <span className="text-[11px] font-mono text-white tracking-wider uppercase">
                EAST OF KAILASH • DISPATCH VERIFIED
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
