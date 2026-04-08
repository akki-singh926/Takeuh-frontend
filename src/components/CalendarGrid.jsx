import React from 'react';
import DayCell from './DayCell';

const CalendarGrid = ({ range, setRange }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const handleDateClick = (day) => {
    // If no start date exists, or if a full range is already selected, start a new selection
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null });
    } else {
      // If clicking a date before the current start date, make it the new start
      if (day < range.start) {
        setRange({ start: day, end: range.start });
      } else if (day === range.start) {
        setRange({ start: null, end: null }); // Deselect if clicking the same day
      } else {
        setRange({ ...range, end: day });
      }
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-7 mb-4">
        {weekDays.map(d => (
          <span key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {days.map(day => {
          let status = 'none';
          if (day === range.start) status = 'start';
          else if (day === range.end) status = 'end';
          else if (range.start && range.end && day > range.start && day < range.end) status = 'range';

          return (
            <DayCell 
              key={day} 
              day={day} 
              status={status} 
              onClick={() => handleDateClick(day)} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;