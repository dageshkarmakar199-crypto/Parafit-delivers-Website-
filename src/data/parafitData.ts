import { MealPlan, FoodItem, Testimonial, FAQItem, StepItem, FeatureItem } from '../types';

export const BUSINESS_INFO = {
  name: 'PARAFIT DELIVERS',
  legalName: 'Parafit Delivers Healthy Food Service',
  address: {
    line1: 'Shop No. 1, DDA Mini Market, Block E',
    locality: 'East of Kailash',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110065',
    country: 'India',
    full: 'Shop No. 1, DDA Mini Market, Block E, East of Kailash, New Delhi, Delhi 110065, India'
  },
  phone: '+91 95607 02568',
  phoneClean: '+919560702568',
  whatsappUrl: 'https://wa.me/919560702568',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Shop+No.+1,+DDA+Mini+Market,+Block+E,+East+of+Kailash,+New+Delhi,+Delhi+110065',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6062758172935!2d77.24075197549784!3d28.55154377570889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c6218d6e35%3A0x74607738222b9b8b!2sEast%20of%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110065!5e0!3m2!1sen!2sin!4v1710920000000!5m2!1sen!2sin',
  hours: '9:00 AM – 9:00 PM, Monday – Sunday',
  deliverySlots: {
    morning: '6:30 AM – 9:00 AM',
    evening: '5:30 PM – 8:30 PM'
  }
};

export const VERIFIED_STATS = [
  {
    value: '100%',
    label: 'Custom Macro Calculated',
    detail: 'Tailored precisely to your caloric and macronutrient targets'
  },
  {
    value: '2x',
    label: 'Daily Fresh Preparation',
    detail: 'Cooked fresh twice a day. Zero freezing or chemical preservatives'
  },
  {
    value: '7 Days',
    label: 'Active Doorstep Delivery',
    detail: 'Reliable breakfast, lunch & dinner dispatch across Delhi NCR'
  },
  {
    value: '3-Tier',
    label: 'Dietitian & Chef Protocol',
    detail: 'Nutritionist-formulated recipes executed by professional culinary chefs'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    number: '01',
    title: 'CUSTOMIZED FOR YOU',
    description: 'Nutrition designed around your individual preferences, dietary restrictions, and physiological goals.',
    icon: 'Sliders'
  },
  {
    number: '02',
    title: 'FRESH EVERY DAY',
    description: 'Freshly prepared meals cooked in morning and evening batches for convenient daily high-grade nutrition.',
    icon: 'Flame'
  },
  {
    number: '03',
    title: 'VARIETY THAT KEEPS YOU GOING',
    description: 'A broad selection of healthy meal options and multi-cuisine rotations so your routine never feels repetitive.',
    icon: 'UtensilsCrossed'
  },
  {
    number: '04',
    title: 'DELIVERED TO YOUR DOOR',
    description: 'Convenient insulated meal delivery straight to your home or office, timed precisely around your selected schedule.',
    icon: 'MapPinCheckInside'
  }
];

export const MEAL_PLANS: MealPlan[] = [
  {
    id: 'trial-3-day',
    name: '3-DAY DIET + FOOD DELIVERY TRIAL',
    duration: '3 Days Experience',
    price: '₹2,490',
    priceNumeric: 2490,
    featured: false,
    tagline: 'Ideal intro to customized clean eating',
    description: 'Experience the quality, taste, and precision of ParaFit meals before committing to a longer transformation routine.',
    features: [
      'Complete 3-day customized nutrition schedule',
      'Freshly prepared daily meal delivery',
      'Calculated macros (Protein, Carbs & Fats)',
      'Veg, Non-Veg or Eggetarian options',
      'Daily doorstep delivery in thermal pack'
    ],
    ctaLabel: 'CHOOSE THIS PLAN →'
  },
  {
    id: 'customised-2-4-week',
    name: '2 / 4 WEEK CUSTOMISED DIET + FOOD DELIVERY',
    duration: '2 to 4 Weeks Continuous',
    price: 'Starting ₹4,490',
    priceNumeric: 4490,
    featured: true,
    tagline: 'Our flagship sustained transformation routine',
    description: 'A fully personalized dietary regimen aligned with your fat loss, muscle building, or lifestyle maintenance targets.',
    features: [
      'Personalized nutrition plan & macro calibration',
      'Choice of 2 or 4 week continuous subscription',
      'Chef-prepared fresh daily breakfast, lunch, and/or dinner',
      'Weekly dietician review & menu customization',
      'Flexible delivery location adjustments',
      'Pause & resume flexibility during travel'
    ],
    ctaLabel: 'CHOOSE THIS PLAN →'
  },
  {
    id: 'detox-cut-10-day',
    name: '10-DAY DETOX CUT DIET + FOOD DELIVERY',
    duration: '10 Days Intensive',
    price: '₹5,490',
    priceNumeric: 5490,
    featured: false,
    tagline: 'Targeted clean metabolic reset',
    description: 'Engineered for individuals seeking a focused dietary reset, reducing water retention and eliminating processed foods.',
    features: [
      '10-day structured clean metabolic reset meals',
      'High-micronutrient & antioxidant focus',
      'Zero refined sugar, zero trans fats, low sodium',
      'Fresh twice-daily delivery batch scheduling',
      'Specific hydration & nutrient pairing guide'
    ],
    ctaLabel: 'CHOOSE THIS PLAN →'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'CHOOSE YOUR PLAN',
    description: 'Select from our verified 3-Day Trial, 2/4 Week Sustained Custom Plan, or 10-Day Detox Cut based on your timeline and health objectives.',
    detail: 'Flexible duration options with clear upfront pricing.'
  },
  {
    number: '02',
    title: 'CUSTOMIZE YOUR NUTRITION',
    description: 'Share your fitness target, dietary preferences (Veg, Non-Veg, Eggitarian), food allergies, and daily caloric breakdown with our team.',
    detail: 'Precise macro calculations customized for your body.'
  },
  {
    number: '03',
    title: 'FRESH MEALS ARE PREPARED',
    description: 'Our culinary kitchen in East of Kailash prepares each meal fresh using premium ingredients, healthy cold-pressed oils, and exact portioning.',
    detail: 'Cooked fresh twice daily — never pre-frozen.'
  },
  {
    number: '04',
    title: 'YOUR MEALS ARE DELIVERED',
    description: 'Insulated, tamper-proof packages arrive at your doorstep during your preferred morning or evening time slot across Delhi NCR.',
    detail: 'Convenient home or office drop-offs.'
  },
  {
    number: '05',
    title: 'STAY CONSISTENT',
    description: 'Enjoy delicious, nutrient-dense gourmet meals every day without the stress of grocery shopping, measuring calories, or cooking.',
    detail: 'Sustainable health through uninterrupted consistency.'
  }
];

export const FOOD_MENU_ITEMS: FoodItem[] = [
  {
    id: 'ind-1',
    name: 'Smoked Paneer Tikka & Spiced Quinoa Khichdi',
    category: 'INDIAN',
    description: 'Herb-marinated cottage cheese grilled with bell peppers, served alongside slow-cooked ancient grain quinoa and roasted cumin dal.',
    calories: 420,
    protein: '28g',
    carbs: '38g',
    fats: '14g',
    tags: ['High Fiber', 'Slow Carb', 'Gluten Free'],
    dietary: 'veg'
  },
  {
    id: 'ind-2',
    name: 'Desi Herb Chicken Breast with Brown Basmati & Saag',
    category: 'INDIAN',
    description: 'Lean tender chicken breast steeped in roasted garam masala and cold-pressed mustard oil, accompanied by steamed aged brown rice and fresh spinach puree.',
    calories: 460,
    protein: '44g',
    carbs: '35g',
    fats: '12g',
    tags: ['Lean Muscle', 'Iron Rich', 'Low GI'],
    dietary: 'non-veg'
  },
  {
    id: 'ind-3',
    name: 'High-Protein Yellow Dal Tadka with Steamed Millets',
    category: 'INDIAN',
    description: 'Split pigeon pea and yellow lentil stew tempered with garlic, tomato, and organic ghee, paired with fiber-dense foxtail millet.',
    calories: 380,
    protein: '22g',
    carbs: '48g',
    fats: '9g',
    tags: ['Heart Healthy', 'Plant Powered', 'Gut Friendly'],
    dietary: 'veg'
  },
  {
    id: 'cont-1',
    name: 'Grilled Herb Chicken with Sautéed Asparagus & Mash',
    category: 'CONTINENTAL',
    description: 'Rosemary-infused chicken fillet seared to tenderness, paired with olive-oil tossed greens, broccoli florets, and cauliflower-potato purée.',
    calories: 440,
    protein: '46g',
    carbs: '22g',
    fats: '13g',
    tags: ['Chef Signature', 'Low Carb', 'Keto Friendly'],
    dietary: 'non-veg'
  },
  {
    id: 'cont-2',
    name: 'Mediterranean Grilled Tofu & Roasted Bell Pepper Skillet',
    category: 'CONTINENTAL',
    description: 'Organic firm tofu cubes glazed with balsamic reduction, grilled zucchini, cherry tomatoes, and kalamata olive herb drizzle.',
    calories: 360,
    protein: '26g',
    carbs: '18g',
    fats: '16g',
    tags: ['Vegan', 'Antioxidant', 'Low Sodium'],
    dietary: 'veg'
  },
  {
    id: 'hp-1',
    name: 'Double-Cut Lemon Pepper Chicken with Edamame Toss',
    category: 'HIGH PROTEIN',
    description: '200g portion of prime lean poultry breast seasoned with crushed black pepper and fresh citrus, served with steamed edamame pods and baby greens.',
    calories: 490,
    protein: '52g',
    carbs: '16g',
    fats: '11g',
    tags: ['Max Protein', 'Zero Sugar', 'Athlete Grade'],
    dietary: 'non-veg'
  },
  {
    id: 'hp-2',
    name: 'Five-Bean & Sprouted Moong High-Protein Power Bowl',
    category: 'HIGH PROTEIN',
    description: 'Black beans, chickpeas, kidney beans, and micro-sprouted moong tossed with chopped cucumber, mint vinaigrette, and crumbled low-fat paneer.',
    calories: 410,
    protein: '31g',
    carbs: '42g',
    fats: '10g',
    tags: ['Plant Protein', 'High Satiety', 'High Zinc'],
    dietary: 'veg'
  },
  {
    id: 'veg-1',
    name: 'Stir-Fried Broccoli, Mushroom & Almond Brown Rice',
    category: 'VEGETARIAN',
    description: 'Crisp button mushrooms and broccoli wok-tossed with ginger, garlic, and toasted California almonds over nutrient-dense brown rice.',
    calories: 350,
    protein: '16g',
    carbs: '44g',
    fats: '11g',
    tags: ['Clean Veg', 'Mineral Dense', 'Wholesome'],
    dietary: 'veg'
  },
  {
    id: 'veg-2',
    name: 'Cottage Cheese & Spinach Baked Casserole',
    category: 'VEGETARIAN',
    description: 'Fresh dairy paneer layered with blanched spinach, roasted garlic, and a hint of nutmeg, baked gently to golden perfection.',
    calories: 390,
    protein: '27g',
    carbs: '14g',
    fats: '18g',
    tags: ['Calcium Boost', 'Low Carb', 'Comfort Meal'],
    dietary: 'veg'
  },
  {
    id: 'lc-1',
    name: 'Zucchini Noodle Aglio e Olio with Grilled Chicken Strips',
    category: 'LOW CALORIE',
    description: 'Spiralized fresh zucchini ribbons gently tossed in extra virgin olive oil, chili flakes, and sliced garlic, topped with sliced chicken breast.',
    calories: 290,
    protein: '38g',
    carbs: '9g',
    fats: '10g',
    tags: ['Sub 300 Kcal', 'Keto', 'Ultra Lean'],
    dietary: 'non-veg'
  },
  {
    id: 'lc-2',
    name: 'Thai Green Papaya & Roasted Peanut Crunch Salad',
    category: 'LOW CALORIE',
    description: 'Shredded raw papaya, French beans, cherry tomatoes, and crushed peanuts tossed in lime-tamarind dressing.',
    calories: 220,
    protein: '9g',
    carbs: '22g',
    fats: '8g',
    tags: ['Metabolic Kick', 'Fresh Raw', 'Detox'],
    dietary: 'veg'
  },
  {
    id: 'snk-1',
    name: 'Roasted Makhana & Flaxseed Herb Crunch',
    category: 'SNACKS',
    description: 'Slow-roasted foxnuts dusted with pink Himalayan salt, nutritional yeast, and toasted cold-milled flaxseeds.',
    calories: 140,
    protein: '6g',
    carbs: '20g',
    fats: '3g',
    tags: ['Guilt Free', 'Crunchy', 'Mid-Meal Energy'],
    dietary: 'veg'
  },
  {
    id: 'snk-2',
    name: 'Cold-Pressed Almond & Chia Protein Energy Bites',
    category: 'SNACKS',
    description: 'Handmade raw dates, crushed almonds, raw cacao powder, and chia seeds rolled into nutrient-packed single bites.',
    calories: 180,
    protein: '8g',
    carbs: '18g',
    fats: '7g',
    tags: ['No Refined Sugar', 'Pre-Workout', 'Raw Vitality'],
    dietary: 'veg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rohan Malhotra',
    role: 'Corporate Strategy Director',
    location: 'South Extension, New Delhi',
    content: 'Between 12-hour workdays and meetings, eating healthy was impossible. ParaFit delivered exactly the calorie and protein count my nutritionist prescribed, right to my desk. The food is exceptionally fresh and never feels like hospital diet food.',
    rating: 5,
    highlight: 'Macro precision without hassle'
  },
  {
    id: 'test-2',
    name: 'Dr. Ananya Sen',
    role: 'Healthcare Professional',
    location: 'Greater Kailash, New Delhi',
    content: 'What sets ParaFit apart is their consistency and culinary quality. Clean oils, fresh ingredients, and accurate portion sizes. I have been on their 4-week customized subscription and feel significantly lighter and more energetic throughout long clinical shifts.',
    rating: 5,
    highlight: 'Clean cooking & true consistency'
  },
  {
    id: 'test-3',
    name: 'Kabir Varma',
    role: 'Fitness Enthusiast & Entrepreneur',
    location: 'East of Kailash, New Delhi',
    content: 'The 10-Day Detox Cut followed by the customized monthly plan helped me drop stubborn body fat while keeping my muscle retention high. The delivery arrives punctually every single morning at 7:30 AM without fail.',
    rating: 5,
    highlight: 'Punctual 7:30 AM daily delivery'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is ParaFit Delivers?',
    answer: 'ParaFit Delivers is a premium healthy food and customized nutrition service operating from East of Kailash, New Delhi. We prepare and deliver dietitian-designed, chef-cooked meals tailored to your specific caloric needs, fitness goals, and taste preferences.'
  },
  {
    id: 'faq-2',
    question: 'What meal plans are available?',
    answer: 'We offer three verified programs: the 3-Day Diet + Food Delivery Trial (₹2,490) to sample our service; the 2 or 4 Week Customised Diet + Food Delivery (starting ₹4,490) for long-term health and physique transformations; and the 10-Day Detox Cut Diet + Food Delivery (₹5,490) for an intensive clean reset.'
  },
  {
    id: 'faq-3',
    question: 'How does customized nutrition work?',
    answer: 'Upon selecting your plan, our nutrition team consults with you to assess your target weight, dietary restrictions (Vegetarian, Non-Vegetarian, or Eggetarian), allergies, and lifestyle. Every meal is then portioned and cooked to match your designated protein, carb, and fat targets.'
  },
  {
    id: 'faq-4',
    question: 'How does delivery work?',
    answer: 'Meals are freshly prepared in small batches and dispatched in insulated, food-grade, tamper-evident thermal boxes that preserve flavor and temperature. Our dedicated logistics team delivers straight to your home or workspace.'
  },
  {
    id: 'faq-5',
    question: 'What are the delivery timings?',
    answer: 'We provide two convenient dispatch windows: Morning delivery between 6:30 AM and 9:00 AM (ideal for breakfast and lunch schedules) and Evening delivery between 5:30 PM and 8:30 PM (ideal for fresh dinner orders).'
  },
  {
    id: 'faq-6',
    question: 'Where does ParaFit deliver?',
    answer: 'We currently deliver across New Delhi and key zones in the National Capital Region (NCR), including South Delhi, East of Kailash, Central Delhi, Gurugram, and select Noida sectors.'
  },
  {
    id: 'faq-7',
    question: 'Can I change my delivery location?',
    answer: 'Yes. If you need your morning delivery at home and your lunch or dinner delivered to your office, or if your schedule changes, simply notify our customer support team via WhatsApp 12 hours in advance.'
  },
  {
    id: 'faq-8',
    question: 'Can I pause or modify my plan?',
    answer: 'Yes! We understand travel and unexpected commitments occur. You can pause your subscription with advance notice via WhatsApp or phone call, and your remaining meal credits will be preserved for when you return.'
  },
  {
    id: 'faq-9',
    question: 'What payment methods are available?',
    answer: 'We accept all major secure payment methods, including UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit Cards, and Debit Cards.'
  }
];
