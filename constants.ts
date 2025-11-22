import { CleaningPackage, ServiceType } from './types';
import { Check, X } from 'lucide-react';

export const PACKAGES: CleaningPackage[] = [
  {
    title: "Standard Maintenance",
    description: "Perfect for keeping your home fresh week to week.",
    detailedDescription: "Our Standard Maintenance plan is designed for recurring service. We focus on high-traffic areas and general hygiene to keep your home livable and fresh. It's not a deep scrub, but a maintenance clean to save you time.",
    price: "Starting at 600 ETB",
    recommendedFor: "Weekly recurring clients",
    features: [
      { text: "Dusting & Cobweb removal", included: true },
      { text: "Vacuuming & Mopping floors", included: true },
      { text: "Bathroom sanitation", included: true },
      { text: "Kitchen counters & stovetop", included: true },
      { text: "Emptying trash bins", included: true },
      { text: "Inside oven & fridge", included: false },
      { text: "Deep scrubbing", included: false },
    ]
  },
  {
    title: "Deep Clean",
    description: "A thorough top-to-bottom clean.",
    detailedDescription: "The Deep Clean is our signature service. We touch every surface, including those hard-to-reach spots that haven't been cleaned in months. This is highly recommended for your first booking with us to establish a baseline of cleanliness.",
    price: "Starting at 1,500 ETB",
    recommendedFor: "First-time clients / Holidays",
    isBestSeller: true,
    features: [
      { text: "Everything in Standard", included: true },
      { text: "Inside fridge & oven", included: true },
      { text: "Scrubbing tile grout", included: true },
      { text: "Interior windows & frames", included: true },
      { text: "Under light furniture", included: true },
      { text: "Door handles sanitized", included: true },
    ]
  },
  {
    title: "Move-In / Move-Out",
    description: "Get your deposit back or start fresh.",
    detailedDescription: "Moving is stressful enough without having to clean. Our Move-In/Move-Out service ensures the property is completely empty of dust and dirt. We clean inside every cabinet, drawer, and closet so it's ready for the next occupant.",
    price: "Get a Quote",
    recommendedFor: "Empty Condos / Apartments",
    features: [
      { text: "Deep clean whole house", included: true },
      { text: "Inside all cabinets/drawers", included: true },
      { text: "Inside closets", included: true },
      { text: "Post-construction dust", included: true },
      { text: "Wall spot cleaning", included: true },
    ]
  }
];

export const LOCATIONS = [
  "Bole", "Kazanchis", "CMC", "Ayat", "Tafo", "Sarbet", "Piassa", "Megenagna"
];