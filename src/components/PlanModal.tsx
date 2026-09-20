import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MEAL_PLANS, BUSINESS_INFO } from '../data/parafitData';
import { MealPlan } from '../types';

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: MealPlan | null;
}

export const PlanModal: React.FC<PlanModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    initialPlan?.id || MEAL_PLANS[1].id
  );
  const [diet, setDiet] = useState<'Non-Vegetarian' | 'Vegetarian' | 'Eggetarian'>('Non-Vegetarian');
  const [goal, setGoal] = useState<string>('Fat Loss & Lean Physique');
  const [deliverySlot, setDeliverySlot] = useState<string>('Morning (6:30 AM – 9:00 AM)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    if (initialPlan) {
      setSelectedPlanId(initialPlan.id);
    }
  }, [initialPlan]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const currentPlan = MEAL_PLANS.find((p) => p.id === selectedPlanId) || MEAL_PLANS[1];

  const handleProceedWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello ParaFit Delivers! I want to start my meal plan:\n\n` +
      `• Plan: ${currentPlan.name} (${currentPlan.price})\n` +
      `• Dietary Choice: ${diet}\n` +
      `• Target Goal: ${goal}\n` +
      `• Preferred Dispatch: ${deliverySlot}\n` +
      `• Name: ${name || 'Prospective Client'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      `• Delivery Area: ${area || 'Delhi NCR'}\n\n` +
      `Please let me know the next steps for customization and onboarding.`
    );
    window.open(`https://wa.me/919560702568?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#0F1116] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="text-[10px] font-mono tracking-widest text-[#A3E635] uppercase font-semibold mb-1">
                CUSTOMIZED PLAN ONBOARDING
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-display">
                CONFIGURE YOUR PLAN
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Customize your nutrition parameters and connect directly with our dietician team via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleProceedWhatsApp} className="space-y-6">
              {/* Step 1: Select Plan */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 font-bold">
                  1. Choose Your Plan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {MEAL_PLANS.map((plan) => {
                    const isSelected = selectedPlanId === plan.id;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#A3E635]/10 border-[#A3E635] text-white shadow-md'
                            : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3E635]">
                            {plan.duration}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#A3E635]" />}
                        </div>
                        <div className="text-xs font-bold font-display uppercase text-white line-clamp-2 leading-tight">
                          {plan.name}
                        </div>
                        <div className="text-sm font-extrabold text-white font-mono mt-2">
                          {plan.price}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Diet Preference & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-bold">
                    2. Dietary Style
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['Non-Vegetarian', 'Vegetarian', 'Eggetarian'] as const).map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDiet(d)}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold tracking-wide border transition-all text-center cursor-pointer ${
                          diet === d
                            ? 'bg-white/15 border-white/40 text-white'
                            : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {d === 'Non-Vegetarian' ? 'Non-Veg' : d === 'Vegetarian' ? 'Veg' : 'Egg'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-bold">
                    3. Primary Target
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#111317] border border-white/10 text-white text-xs focus:outline-none focus:border-[#A3E635]"
                  >
                    <option value="Fat Loss & Lean Physique">Fat Loss & Lean Physique</option>
                    <option value="Muscle Building & High Protein">Muscle Building & High Protein</option>
                    <option value="Healthy Lifestyle Maintenance">Healthy Lifestyle Maintenance</option>
                    <option value="Metabolic Reset & Detox">Metabolic Reset & Detox</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Delivery Slot */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-bold">
                  4. Preferred Delivery Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Morning (6:30 AM – 9:00 AM)',
                    'Evening (5:30 PM – 8:30 PM)',
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setDeliverySlot(slot)}
                      className={`p-2.5 rounded-lg text-xs font-medium border text-left transition-all cursor-pointer ${
                        deliverySlot === slot
                          ? 'bg-white/10 border-white/30 text-white'
                          : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-xs focus:outline-none focus:border-[#A3E635]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Delivery Locality (Delhi NCR)
                  </label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. South Delhi, Gurugram, etc."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-xs focus:outline-none focus:border-[#A3E635]"
                  />
                </div>
              </div>

              {/* Submission Action */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  type="submit"
                  id="modal-whatsapp-proceed-btn"
                  className="w-full py-4 px-6 rounded-xl bg-[#A3E635] hover:bg-[#b5f848] text-[#08090B] font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#A3E635]/20 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CONTINUE VIA WHATSAPP CONCIERGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A3E635]" />
                    Zero obligations • Free dietician consultation
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-white hover:text-[#A3E635] flex items-center gap-1 font-mono"
                  >
                    <Phone className="w-3 h-3 text-[#A3E635]" />
                    <span>Call Hotline</span>
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
