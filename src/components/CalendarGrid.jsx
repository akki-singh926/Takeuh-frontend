import React from 'react';
import DayCell from './DayCell';
// Import the holiday data we defined
import { HOLIDAYS } from '../constants/calendarData';

const CalendarGrid = ({ range, setRange, totalDays = 31, monthIdx = 0 }) => {
  // Use totalDays prop instead of hardcoded 31
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const handleDateClick = (day) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null });
    } else {
      if (day < range.start) {
        setRange({ start: day, end: range.start });
      } else if (day === range.start) {
        setRange({ start: null, end: null });
      } else {
        setRange({ ...range, end: day });
      }
    }
  };

  return (
    <div className="p-4 md:p-8">
      {/* Weekday Labels */}
      <div className="grid grid-cols-7 mb-4">
        {weekDays.map(d => (
          <span key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {d}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {days.map(day => {
          let status = 'none';
          if (day === range.start) status = 'start';
          else if (day === range.end) status = 'end';
          else if (range.start && range.end && day > range.start && day < range.end) status = 'range';

          // Check if today is a holiday
          const holidayName = HOLIDAYS[`${monthIdx}-${day}`];

          return (
            <div key={day} className="relative group">
              <DayCell 
                day={day} 
                status={status} 
                onClick={() => handleDateClick(day)} 
              />
              
              {/* Holiday Indicator: A small red dot for visual flair */}
              {holidayName && (
                <>
                  <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-sm" />
                  
                  {/* Tooltip: Shows on hover, adding "Product Sense" polish */}
                  <div className="hidden group-hover:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow-xl z-50 whitespace-nowrap">
                    {holidayName}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;