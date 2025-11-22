import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate, className = '' }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Initialize calendar to show the month of the selected date if it exists
  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(new Date(selectedDate));
    }
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    const today = new Date();
    // Prevent going back before current month
    if (month > today.getMonth() || year > today.getFullYear()) {
        setCurrentDate(new Date(year, month - 1, 1));
    }
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (clickedDate >= today) {
      // Format as YYYY-MM-DD
      const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      onSelectDate(formattedDate);
    }
  };

  const renderDays = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Empty slots for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateToCheck = new Date(year, month, day);
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = selectedDate === dateString;
      const isPast = dateToCheck < today;
      const isToday = dateToCheck.getTime() === today.getTime();

      days.push(
        <button
          key={day}
          type="button" // Prevent form submission
          disabled={isPast}
          onClick={() => handleDateClick(day)}
          className={`
            h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all
            ${isSelected 
              ? 'bg-brand-600 text-white font-bold shadow-md transform scale-105' 
              : isPast 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-brand-50 hover:text-brand-600'
            }
            ${isToday && !isSelected ? 'border border-brand-300 text-brand-600 font-semibold' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-4 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-full text-gray-600">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-gray-800">{monthNames[month]} {year}</span>
        <button type="button" onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-full text-gray-600">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="text-xs font-medium text-gray-400 uppercase">{d}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 justify-items-center">
        {renderDays()}
      </div>
      
      <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 justify-center">
        <div className="flex items-center gap-1">
           <div className="w-3 h-3 rounded-full border border-brand-300"></div> Today
        </div>
        <div className="flex items-center gap-1">
           <div className="w-3 h-3 rounded-full bg-brand-600"></div> Selected
        </div>
      </div>
    </div>
  );
};