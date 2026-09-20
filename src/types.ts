export interface MealPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  priceNumeric: number;
  featured?: boolean;
  tagline: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'INDIAN' | 'CONTINENTAL' | 'HIGH PROTEIN' | 'VEGETARIAN' | 'LOW CALORIE' | 'SNACKS';
  description: string;
  calories: number;
  protein: string;
  carbs: string;
  fats: string;
  tags: string[];
  dietary: 'veg' | 'non-veg' | 'eggetarian';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  goal: string;
  dietPreference: 'Vegetarian' | 'Non-Vegetarian' | 'Eggetarian';
  selectedPlan: string;
  deliveryArea: string;
}
