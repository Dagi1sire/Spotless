import React, { useState, useEffect } from 'react';
import { BookingFormData, HomeType, ServiceType, Booking } from '../types';
import { LOCATIONS } from '../constants';
import { Button } from './Button';
import { Send, CheckCircle2, AlertCircle, Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from './Calendar';

interface BookingFormProps {
  selectedPackage?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedPackage }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    location: '',
    homeType: HomeType.ONE_BED,
    serviceType: ServiceType.STANDARD,
    preferredDate: ''
  });
  
  // Sync prop change with state
  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, serviceType: selectedPackage as unknown as ServiceType }));
    }
  }, [selectedPackage]);

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    let isValid = true;

    if (!formData.name.trim() || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // Ethiopian phone validation: Starts with 09 or 07, followed by 8 digits. Or +251...
    const phoneRegex = /^(\+251|0)(9|7)\d{8}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid Ethiopian phone number (e.g., 0911...)";
      isValid = false;
    }

    if (!formData.location) {
      newErrors.location = "Please select a location";
      isValid = false;
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a date";
      isValid = false;
    } else {
        const selected = new Date(formData.preferredDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) {
            newErrors.preferredDate = "Date cannot be in the past";
            isValid = false;
        }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleDateSelect = (date: string) => {
    setFormData(prev => ({ ...prev, preferredDate: date }));
    setErrors(prev => ({ ...prev, preferredDate: undefined }));
    setShowCalendar(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    // Create booking object
    const newBooking: Booking = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    // Save to localStorage
    try {
      const existingBookings = JSON.parse(localStorage.getItem('spotless_bookings') || '[]');
      localStorage.setItem('spotless_bookings', JSON.stringify([...existingBookings, newBooking]));
      console.log("Booking saved:", newBooking);
    } catch (error) {
      console.error("Failed to save booking", error);
    }

    // Show success state
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      location: '',
      homeType: HomeType.ONE_BED,
      serviceType: ServiceType.STANDARD,
      preferredDate: ''
    });
  };

  if (isSubmitted) {
    return (
      <section id="book" className="py-16 bg-brand-900 text-white relative overflow-hidden flex items-center justify-center min-h-[600px]">
         <div className="absolute inset-0 overflow-hidden">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-700 rounded-full opacity-20 blur-3xl"></div>
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
         </div>
         
         <div className="relative z-10 bg-white text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Booking Received!</h2>
            <p className="text-gray-600 mb-8">
              Thank you, <span className="font-semibold">{formData.name}</span>. We have received your request for a <span className="font-semibold">{formData.serviceType}</span> on <span className="font-semibold">{formData.preferredDate}</span>.
            </p>
            
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-brand-800 mb-2">What happens next?</h3>
              <ul className="space-y-3 text-sm text-brand-700">
                <li className="flex gap-2">
                  <span className="font-bold">1.</span> We will call you at <span className="font-mono bg-white px-1 rounded border border-brand-200">{formData.phone}</span> within 30 minutes.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">2.</span> We will confirm your location details.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">3.</span> Payment is made after the cleaning is done.
                </li>
              </ul>
            </div>

            <Button onClick={resetForm} fullWidth>Book Another Clean</Button>
         </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-16 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Book Your Clean</h2>
          <p className="text-brand-100">Fill out the form below and we'll call you within 30 minutes to confirm.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors`}
                placeholder="Abebe Kebede"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors`}
                placeholder="0911 23 45 67"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Sub-city / Sefer</label>
              <input 
                 type="text"
                 name="location"
                 list="locations"
                 value={formData.location}
                 onChange={handleChange}
                 className={`w-full px-4 py-2 rounded-lg border ${errors.location ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors`}
                 placeholder="e.g. Bole, behind Friendship"
              />
              <datalist id="locations">
                {LOCATIONS.map(loc => <option key={loc} value={loc} />)}
              </datalist>
              {errors.location && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.location}</p>}
            </div>

            {/* Home Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Home Type</label>
              <select 
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
              >
                {Object.values(HomeType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Service Package</label>
              <select 
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
              >
                {Object.values(ServiceType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Date with Custom Calendar */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
              <div 
                className={`w-full px-4 py-2 rounded-lg border ${errors.preferredDate ? 'border-red-500 bg-red-50' : 'border-gray-300'} flex items-center justify-between cursor-pointer bg-white`}
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <span className={formData.preferredDate ? 'text-gray-900' : 'text-gray-400'}>
                  {formData.preferredDate || 'Select a date'}
                </span>
                <CalendarIcon className="w-5 h-5 text-gray-500" />
              </div>
              
              {showCalendar && (
                <div className="absolute top-full left-0 mt-2 z-50 w-full md:w-80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Calendar 
                    selectedDate={formData.preferredDate} 
                    onSelectDate={handleDateSelect} 
                  />
                </div>
              )}
              
              {/* Hidden Backdrop to close calendar when clicking outside */}
              {showCalendar && (
                <div className="fixed inset-0 z-40" onClick={() => setShowCalendar(false)}></div>
              )}

              {errors.preferredDate && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.preferredDate}</p>}
            </div>
          </div>

          <div className="mt-8">
            <Button 
              type="submit" 
              fullWidth 
              variant="primary"
            >
              Confirm Booking
              <Send className="w-4 h-4" />
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">
              By clicking confirm, you agree to receive a confirmation call. No payment required now.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};