import React from 'react';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/parafitData';

interface MobileStickyBarProps {
  onOpenPlanModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenPlanModal }) => {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#08090B]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2.5 flex items-center gap-2 shadow-2xl safe-area-pb"
    >
      {/* Quick Phone Call */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 text-white shrink-0 active:scale-95 transition-transform"
        aria-label="Call ParaFit Delivers"
        title="Call"
      >
        <Phone className="w-4 h-4 text-[#A3E635]" />
      </a>

      {/* Quick WhatsApp */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 text-white shrink-0 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <MessageSquare className="w-4 h-4 text-[#A3E635]" />
      </a>

      {/* Start Plan Primary Conversion Button */}
      <button
        onClick={onOpenPlanModal}
        id="mobile-sticky-start-btn"
        className="flex-1 py-3 px-4 rounded-xl bg-[#A3E635] active:bg-[#b8f53c] text-[#08090B] font-extrabold text-xs tracking-widest uppercase flex items-center justify-center gap-1.5 shadow-lg shadow-[#A3E635]/20 cursor-pointer"
      >
        <span>START YOUR PLAN</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </aside>
  );
};
