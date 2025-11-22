export enum ServiceType {
  STANDARD = 'Standard Maintenance',
  DEEP = 'Deep Clean',
  MOVE = 'Move-In/Move-Out',
  OFFICE = 'Office Cleaning'
}

export enum HomeType {
  STUDIO = 'Studio',
  ONE_BED = '1 Bedroom',
  TWO_BED = '2 Bedroom',
  VILLA = 'Villa'
}

export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface CleaningPackage {
  title: string;
  description: string;
  detailedDescription?: string; // For the popup
  price: string;
  features: PackageFeature[];
  recommendedFor: string;
  isBestSeller?: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  location: string;
  homeType: HomeType;
  serviceType: ServiceType;
  preferredDate: string;
}

export interface Booking extends BookingFormData {
  id: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed';
}