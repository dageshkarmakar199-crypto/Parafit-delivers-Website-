import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, MEAL_PLANS } from '../data/parafitData';

export const ContactSection: React.FC<{ onOpenPlanModal: () => void }> = ({ onOpenPlanModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Weight Loss & Fat Cut');
  const [diet, setDiet] = useState<'Vegetarian' | 'Non-Vegetarian' | 'Eggetarian'>('Non-Vegetarian');
  const [plan, setPlan] = useState(MEAL_PLANS[1].name);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = encodeURIComponent(
      `Hello ParaFit Delivers! I would like to start a meal plan:\n\nName: ${name}\nPhone: ${phone}\nGoal: ${goal}\nDiet: ${diet}\nPlan: ${plan}`
    );
    window.open(`https://wa.me/919560702568?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0B0F] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Quick Links */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A3E635] uppercase mb-3 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
                CONSULTATION & ONBOARDING
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]"
              >
                READY TO
                <br />
                <span className="text-[#A3E635]">EAT BETTER?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-lg"
              >
                Speak directly with our nutrition coordinators to formulate your custom caloric targets or start your delivery trial today.
              </motion.p>
            </div>

            {/* Contact details cards */}
            <div className="space-y-4">
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ y: -3 }}
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="p-5 rounded-2xl bg-[#0F1116] border border-white/5 hover:border-[#A3E635]/40 transition-all flex items-center gap-4 group cursor-pointer block"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[#A3E635] group-hover:bg-[#A3E635]/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                    Direct Phone Line
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#A3E635] transition-colors font-mono">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                whileHover={{ y: -3 }}
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0F1116] border border-white/5 hover:border-[#A3E635]/40 transition-all flex items-center gap-4 group cursor-pointer block"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[#A3E635] group-hover:bg-[#A3E635]/10 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                    Instant WhatsApp Concierge
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#A3E635] transition-colors">
                    Chat with a Nutritionist →
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="p-5 rounded-2xl bg-[#0F1116] border border-white/5 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[#A3E635]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                    Operating Hub
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {BUSINESS_INFO.address.full}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="p-5 rounded-2xl bg-[#0F1116] border border-white/5 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[#A3E635]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                    Operating Hours
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {BUSINESS_INFO.hours}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Plan Starter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-7 sm:p-10 rounded-3xl bg-[#0F1217] border border-white/10 shadow-2xl hover:border-white/20 transition-all"
          >
            <div className="border-b border-white/10 pb-4 mb-6">
              <h3 className="text-xl font-bold font-display uppercase text-white">
                START YOUR CONSULTATION
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Fill in your basic preferences for an immediate customized meal proposal via WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#A3E635]/15 text-[#A3E635] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-display uppercase text-white">
                  Consultation Request Sent
                </h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                  Your WhatsApp consultation message has been generated. Our nutrition team in East of Kailash will respond immediately.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#A3E635] underline pt-2 cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-[#A3E635] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-[#A3E635] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Dietary Preference
                    </label>
                    <select
                      value={diet}
                      onChange={(e) => setDiet(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl bg-[#111317] border border-white/10 text-white text-sm focus:outline-none focus:border-[#A3E635]"
                    >
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Eggetarian">Eggetarian</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#111317] border border-white/10 text-white text-sm focus:outline-none focus:border-[#A3E635]"
                    >
                      <option value="Weight Loss & Fat Cut">Weight Loss & Fat Cut</option>
                      <option value="Lean Muscle Building">Lean Muscle Building</option>
                      <option value="Healthy Lifestyle & Maintenance">Healthy Maintenance</option>
                      <option value="Detox & Reset">Detox & Reset</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Select Preferred Meal Plan
                  </label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#111317] border border-white/10 text-white text-sm focus:outline-none focus:border-[#A3E635]"
                  >
                    {MEAL_PLANS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.price})
                      </option>
                    ))}
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full py-4 px-6 rounded-xl bg-[#A3E635] hover:bg-[#b5f848] text-[#08090B] font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#A3E635]/25 cursor-pointer mt-2"
                >
                  <span>START YOUR PLAN ON WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
