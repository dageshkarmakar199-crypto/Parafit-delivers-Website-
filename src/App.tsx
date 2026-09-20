import React, { useState } from 'react';
import { WelcomeLoader } from './components/WelcomeLoader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatisticsStrip } from './components/StatisticsStrip';
import { WhyParafit } from './components/WhyParafit';
import { MealPlans } from './components/MealPlans';
import { HowItWorks } from './components/HowItWorks';
import { FoodOptions } from './components/FoodOptions';
import { DeliveryExperience } from './components/DeliveryExperience';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PlanModal } from './components/PlanModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { MealPlan } from './types';

export default function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<MealPlan | null>(null);

  const handleOpenPlanModal = (plan?: MealPlan) => {
    if (plan) {
      setSelectedPlanForModal(plan);
    }
    setModalOpen(true);
  };

  const handleClosePlanModal = () => {
    setModalOpen(false);
    setSelectedPlanForModal(null);
  };

  const handleExplorePlans = () => {
    const el = document.getElementById('meal-plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 flex flex-col selection:bg-[#A3E635] selection:text-[#08090B] relative pb-16 md:pb-0">
      {/* Welcome Loader */}
      {!loaderComplete && (
        <WelcomeLoader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* Floating Header */}
      <Header onOpenPlanModal={() => handleOpenPlanModal()} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero
          onOpenPlanModal={() => handleOpenPlanModal()}
          onExplorePlans={handleExplorePlans}
        />

        <StatisticsStrip />

        <WhyParafit onOpenPlanModal={() => handleOpenPlanModal()} />

        <MealPlans onSelectPlan={(plan) => handleOpenPlanModal(plan)} />

        <HowItWorks />

        <FoodOptions onOpenPlanModal={() => handleOpenPlanModal()} />

        <DeliveryExperience />

        <AboutSection />

        <Testimonials />

        <FAQSection />

        <LocationSection />

        <ContactSection onOpenPlanModal={() => handleOpenPlanModal()} />

        <FinalCTA onOpenPlanModal={() => handleOpenPlanModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Plan Modal */}
      <PlanModal
        isOpen={modalOpen}
        onClose={handleClosePlanModal}
        initialPlan={selectedPlanForModal}
      />

      {/* Mobile-Only Sticky Conversion Bar */}
      <MobileStickyBar onOpenPlanModal={() => handleOpenPlanModal()} />
    </div>
  );
}
